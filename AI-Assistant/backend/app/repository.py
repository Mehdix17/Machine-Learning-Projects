import sqlite3
from backend.app.UserQueries import insert_user, select_user_by_email
from backend.app.security import encrypt_data, hash_email, hash_password, verify_password


class Repository:

    def __init__(self, db: sqlite3.Connection):
        self.db = db

    def exists(self, email: str):
        email_hashed = hash_email(email)
        cur = self.db.cursor()
        try:
            cur.execute("SELECT * FROM users WHERE email = ?", (email_hashed,))
            user = cur.fetchone()
            return user
        finally:
            cur.close()

    def get_user_by_email(self, email: str):
        cur = self.db.cursor()
        try:
            cur.execute("""
                        SELECT id, first_name, last_name, email, password
                        FROM users
                        WHERE email = ?
                        """, (hash_email(email.strip().lower()),))
            return cur.fetchone()
        finally:
            cur.close()

    def register(self, name: str, surname: str, email: str, password: str,role:str) -> None:
        encrypted_name = encrypt_data(name)
        encrypted_surname = encrypt_data(surname)
        hashed_email = hash_email(email)
        hashed_password = hash_password(password)

        cur = self.db.cursor()
        try:
            cur.execute(
                insert_user(),
                {
                    "first_name": encrypted_name,
                    "last_name": encrypted_surname,
                    "email": hashed_email,
                    "password": hashed_password,
                    "role": role,
                },
            )
            self.db.commit()
        finally:
            cur.close()

    def login(self, email: str, password: str) :
            user = self.exists(email)
            if not user:
                raise ValueError("Email doesn't exist")
            stored_password_hash = user["password"]
            if not verify_password(password, stored_password_hash):
                raise ValueError("Wrong password")
            return user


    def delete_user(self, email: str):
        if not self.exists(email):
            raise ValueError("Email doesn't exist")
        email_hashed = hash_email(email)
        cur = self.db.cursor()
        try:
            cur.execute("DELETE FROM users WHERE email = ?", (email_hashed,))
            print("User deleted successfully")
            self.db.commit()
        finally:
            cur.close()


