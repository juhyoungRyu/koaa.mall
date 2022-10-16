from pydantic import BaseModel, EmailStr

# 유저 모델

class Login_user(BaseModel):
    id:str
    pw:str

class Create_user(BaseModel):
    id : str
    pw : str
    email : EmailStr
    name : str
    join_date : str
    # call : str
    
# 아이템 모델

class Item(BaseModel):
    name:str
    price:int
    registerdDate:str