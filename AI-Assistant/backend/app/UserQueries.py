
def insert_user() -> str:
    return """
    INSERT INTO users (first_name, last_name, email, password,role)
    VALUES (:first_name, :last_name, :email, :password,:role)
    """

def select_user_by_email() -> str:
    return "SELECT * FROM users WHERE email = :email LIMIT 1"
