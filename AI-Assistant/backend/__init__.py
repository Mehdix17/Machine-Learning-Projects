from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi_jwt_auth import AuthJWT
from backend.app.settings import Settings
from backend.app.resource import router as users_router
from database.database_connection import init_db
from backend.app.token_blocklist import BLOCKLIST

@AuthJWT.load_config
def get_config():
    return Settings()

@AuthJWT.token_in_denylist_loader
def check_if_token_revoked(decrypted_token):
    jti = decrypted_token["jti"]
    return jti in BLOCKLIST

def create_app() -> FastAPI:
    init_db()
    app = FastAPI(title="AI-Assistant API")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(users_router)

    @app.get("/")
    def main():
        return "AI-Assistant 🚀"

    return app
