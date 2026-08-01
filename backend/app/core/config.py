from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "GestureSnake AI"
    DEBUG: bool = False
    ALLOWED_ORIGINS: list[str] = ["http://localhost:5173"]

    # Database
    DATABASE_URL: str = "sqlite:///./sql_app.db"

    # JWT Authentication
    SECRET_KEY: str = "your-secret-key-please-change-in-production-0123456789abcdef"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24  # 1 day

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
