from pydantic import BaseModel, EmailStr
from typing import Literal

Role = Literal["user", "admin"]

class UserRegister(BaseModel):
    name: str
    surname: str
    email: EmailStr
    password: str
    role: Role = "user"

class TokenOut(BaseModel):
    token: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserDelete(BaseModel):
    email: EmailStr

