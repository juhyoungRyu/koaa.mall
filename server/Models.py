from pydantic import BaseModel

# 유저 모델

class Login_user(BaseModel):
    id:str
    pw:str

class Create_user(BaseModel):
    # id : str
    # pw : str
    # email : str
    # name : str
    # call : str
    # josin_date : str
    data : object
# 아이템 모델

class Item(BaseModel):
    name:str
    price:int
    registerdDate:str