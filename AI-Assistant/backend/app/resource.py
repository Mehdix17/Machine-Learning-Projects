from fastapi import APIRouter, Depends, HTTPException, status
from fastapi_jwt_auth import AuthJWT
import sqlite3
from database.database_connection import get_db
from .service import Service
from .schemas import UserRegister, TokenOut, UserLogin,UserDelete
from backend.app.token_blocklist import BLOCKLIST

router = APIRouter()

@router.post("/users/register", status_code=status.HTTP_201_CREATED)
def register_user(
    payload: UserRegister,
    Authorize: AuthJWT = Depends(),
    db: sqlite3.Connection = Depends(get_db),
):
    service = Service(db)
    try:
        user = service.register(
            payload.name, payload.surname, payload.email, payload.password,payload.role)
    except Exception as err:
        raise HTTPException(status_code=400, detail=str(err))

    token = Authorize.create_access_token(subject=str(payload.email))
    return {"token": token, "user": user}

@router.post("/users/login", status_code=status.HTTP_200_OK)
def login_user(payload: UserLogin, Authorize: AuthJWT = Depends(), db: sqlite3.Connection = Depends(get_db)):
    service = Service(db)
    try:
        user = service.login(payload.email, payload.password)
    except ValueError as err:
        raise HTTPException(status_code=401, detail=str(err))
    except Exception as err:
        import traceback; traceback.print_exc()
        raise HTTPException(status_code=500, detail="Server error")

    token = Authorize.create_access_token(subject=payload.email,user_claims={"role": user["role"]})
    return {"token": token}

@router.delete("/users/delete", response_model=TokenOut, status_code=status.HTTP_200_OK)
def delete_user(payload: UserDelete, Authorize: AuthJWT = Depends(),db: sqlite3.Connection = Depends(get_db)):
    service=Service(db)
    try:
        service.delete(payload.email)
    except ValueError as err:
        raise HTTPException(status_code=401, detail=str(err))

    token = Authorize.create_access_token(subject=payload.email)
    return {"token": token}

@router.post("/users/logout", status_code=status.HTTP_200_OK, tags=["auth"])
def logout(Authorize: AuthJWT = Depends()):
    try:
        Authorize.jwt_required()
        jti = Authorize.get_raw_jwt()["jti"]
        BLOCKLIST.add(jti)
        return {"message": "Logged out"}
    except Exception:
        raise HTTPException(status_code=401, detail="Missing or invalid token")
