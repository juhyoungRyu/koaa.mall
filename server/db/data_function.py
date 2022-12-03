# from ~ import ~
from fastapi.exceptions import HTTPException
from typing import Union, Any
from datetime import datetime, timedelta
from cairo import Status
from jose import jwt
from . import setting
from jwt.exceptions import InvalidTokenError, ExpiredSignatureError

# 해시화 관련 라이브러리 import
from passlib.context import CryptContext

# init

# 해시화 관련 라이브러리 init
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# data loading


# collection과 listname을 넣으면,
# 해당 listname을 이름으로 가지고 collection의 모든 데이터를 가진 list를 반환
def loading_data(collection, listname):
    listname = []
    for x in collection.find():
        x["_id"] = str(x["_id"])
        listname.append(x)

    return listname


# Login


# 일반 텍스트와 해시된 텍스트를 비교, 같으면 True를 반환
def verify_password(plane_text, hashed_text):
    return pwd_context.verify(plane_text, hashed_text)


# 해당 id와 pw가 db에 존재하는지 확인, pw는 hash 후 hash된 텍스트와 비교
def is_user(user_db, id, pw):
    user = user_db.find_one({"id": id})
    if user != None:
        if verify_password(pw, user["pw"]):
            user["_id"] = str(user["_id"])
            result = {"id": user["id"],  "name": user["name"]}
            return result
        return "Err : password!"
    return "Err : id!"


# Sign Up


# 비밀번호 해시화
def get_password_hash(password):
    return pwd_context.hash(password)


# db에서 해당 id와 email이 unique한가 확인
# True는 유일, False는 중복
def check_unique(db, target):
    if (
        db.find_one({"id": target.id}) == None
        and db.find_one({"email": target.email}) == None
    ):
        return True
    return False


# 받아온 데이터를 dict로 가공, pw는 해시화
def create_user(id, pw, email, name):
    pw = get_password_hash(pw)
    return {"id": id, "pw": pw, "email": email, "name": name}


def create_access_token(
    email: Union[str, Any],
    id: Union[str, Any],
    name: Union[str, Any],
    expires_delta: int,
) -> str:  # type: ignore
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta  # type: ignore
    else:
        expires_delta = datetime.utcnow() + timedelta(minutes=1)  # type: ignore

    to_encode = {
        "exp": expires_delta,
        "email": str(email),
        "id": str(id),
        "name": str(name),
    }
    encoded_jwt = jwt.encode(
        to_encode, setting.JWT_SECRET_KEY, setting.ALGORITHM)

    return encoded_jwt


def create_refresh_token(
    email: Union[str, Any],
    id: Union[str, Any],
    name: Union[str, Any],
    expires_delta: int,
) -> str:  # type: ignore
    if expires_delta is not None:
        expires_delta = datetime.utcnow() + expires_delta  # type: ignore
    else:
        expires_delta = datetime.utcnow() + timedelta(
            minutes=setting.REFRESH_TOKEN_EXPIRE_MINUTES
        )  # type: ignore

    to_encode = {
        "exp": expires_delta,
        "email": str(email),
        "id": str(id),
        "name": str(name),
    }
    encoded_jwt = jwt.encode(
        to_encode, setting.JWT_REFRESH_SECRET_KEY, setting.ALGORITHM
    )

    return encoded_jwt


def decode_token(name, token):
    if name == "access_token":
        try:
            encode = jwt.decode(
                token, setting.JWT_SECRET_KEY, setting.ALGORITHM)
            return encode["name"]
        except ExpiredSignatureError:
            raise HTTPException(status_code=401, detail="Token expired")
        except InvalidTokenError:
            raise HTTPException(status_code=401, detail="Invalid token error")
    else:
        try:
            encode = jwt.decode(
                token, setting.JWT_REFRESH_SECRET_KEY, setting.ALGORITHM
            )
            return encode["name"]
        except ExpiredSignatureError:
            raise HTTPException(status_code=401, detail="Token expired")
        except InvalidTokenError:
            raise HTTPException(status_code=401, detail="Invalid token error")
