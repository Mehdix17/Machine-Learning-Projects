from pydantic  import BaseSettings


class Settings(BaseSettings):
    db_path: str = "data/UserDB.db"
    fernet_key: str

    authjwt_secret_key: str
    authjwt_algorithm: str = "HS256"

    authjwt_denylist_enabled: bool = True
    authjwt_denylist_token_checks: set = {"access", "refresh"}

    class Config:
        env_file = ".env"


# Instance globale
settings = Settings()

