import sqlite3
from pathlib import Path
from typing import Generator
from backend.app.settings import settings

DB_PATH = Path(settings.db_path)
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

def get_db() -> Generator[sqlite3.Connection, None, None]:
    """
    Dépendance FastAPI : fournit une connexion sqlite3 par requête.
    """
    conn = sqlite3.connect(DB_PATH, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

def init_db() -> None:
    """
    Initialise le schéma minimal si besoin.
    Adapte-le à ta structure réelle.
    """
    conn = sqlite3.connect(DB_PATH)
    try:
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name  TEXT NOT NULL,
            email      TEXT NOT NULL UNIQUE,
            password   TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            role       TEXT NOT NULL DEFAULT 'user'
        );
        """)
        conn.commit()
    finally:
        conn.close()
