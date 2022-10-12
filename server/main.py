from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from db import database
from db import data_function
import Models

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

data['user'] = data_function.loading_data(database.user, "user_list")
data['item'] = data_function.loading_data(database.item, "item_list")

@app.get('/data')
def send_data():
    return data

@app.post('/login')
async def login_test(user:Models.Login_user):
    result = data_function.is_user(database.user, user.id, user.pw)
    print(result)
    return result

@app.get('/login')
async def login_value_test():
    return {"hello" : 'hello'}