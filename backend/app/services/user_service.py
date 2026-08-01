from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import Optional

from app.models.user import User
from app.schemas.user import UserCreate
from app.auth.security import get_password_hash, verify_password


class UserService:
    @staticmethod
    def get_user_by_id(db: Session, user_id: int) -> Optional[User]:
        return db.get(User, user_id)

    @staticmethod
    def get_user_by_email(db: Session, email: str) -> Optional[User]:
        return db.scalars(select(User).where(User.email == email)).first()

    @staticmethod
    def get_user_by_username(db: Session, username: str) -> Optional[User]:
        return db.scalars(select(User).where(User.username == username)).first()

    @staticmethod
    def get_user_by_email_or_username(db: Session, identifier: str) -> Optional[User]:
        return db.scalars(
            select(User).where((User.email == identifier) | (User.username == identifier))
        ).first()

    @classmethod
    def create_user(cls, db: Session, user_in: UserCreate) -> User:
        hashed_password = get_password_hash(user_in.password)
        db_user = User(
            email=user_in.email,
            username=user_in.username,
            hashed_password=hashed_password,
        )
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user

    @classmethod
    def authenticate_user(cls, db: Session, identifier: str, password: str) -> Optional[User]:
        user = cls.get_user_by_email_or_username(db, identifier)
        if not user or not verify_password(password, user.hashed_password):
            return None
        return user


user_service = UserService()
