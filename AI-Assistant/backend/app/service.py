from backend.app.repository import Repository
import sqlite3


class Service:
    def __init__(self, db: sqlite3.Connection):
        self.repository = Repository(db)

    def register(self, name: str, surname: str, email: str, password: str,role: str = "user") -> None:
        if self.repository.exists(email):
            raise ValueError("Email already exists")
        if role not in ("user", "admin"):
            raise ValueError("Invalid role")
        user_id = self.repository.register(name,surname,email, password,role)
        return {
            "id": user_id,
            "name": name,
            "surname": surname,
            "email": email,
            "role": role
        }

    def login(self,email:str,password:str):
        try:
            return self.repository.login(email,password)
        except Exception as e:
            raise e
    def delete(self, email:str):
        try:
            return self.repository.delete_user(email)
        except Exception as e:
            raise e
