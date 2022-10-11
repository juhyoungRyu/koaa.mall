from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from db import db
from pydantic import BaseModel

app = FastAPI()

origins= [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = {'user' : [], 'item' : []}

user_list = []
item_list = []

def loading_data(collection, list):
    for x in collection.find():
        x['_id'] = str(x['_id'])
        list.append(x)
        

user = db.koaa['user']
item = db.koaa['item']

loading_data(user, user_list)
loading_data(item, item_list)

data['user'] = user_list
data['item'] = item_list

class Test(BaseModel):
    id:str
    pw:str

@app.get('/data')
def send_data():
    return data

@app.post('/login')
async def login_test(test:Test):
    print(test.id, test.pw)
    return test