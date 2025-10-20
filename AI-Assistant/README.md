# 🤖 AI-Assistant

## 🛠️ Setup (First Time)

### Backend
cd AI-assistant/backend \
Download uv : uv venv --python 3.11 venv \
Download python 3.11 (if you don't already have) : uv python install 3.11 \
Create the virtual environment : uv venv --python 3.11 venv \
Activate the venv : source venv/Scripts/activate \
Check python version : uv run python --version \
Install requirements : uv pip install -r requirements.txt

On the terminal run these commands : \
python \
import secrets \
from cryptography.fernet import Fernet \
print(secrets.token_hex(32)) \
print(Fernet.generate_key().decode()) \

stop the interpreter : exit()

save the printed token and key on a .env file : \
FERNET_KEY=your_fernet_key \
AUTHJWT_SECRET_KEY=your_authJWT_secret_key \
AUTHJWT_ALGORITHM=HS256 \
DB_PATH=data/UserDB.db

### Frontend
npm install

## 🚀 Run The App

### Backend
Run this command on the root directory (AI-Assistant/) : \
uvicorn backend.main:app --host 127.0.0.1 --port 8000 --workers 1 --access-log

### Frontend
Run this command inside the frontend directory : \
npm run dev
