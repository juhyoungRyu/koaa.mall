from subprocess import call
from fastapi import FastAPI, HTTPException
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

@app.post('/join')
async def join_test(join_user : Models.Create_user):
    is_unique = data_function.check_unique(database.user, join_user)
    if is_unique is False:
        return {"error" : "This account already exists"}
    new_user = data_function.create_user(join_user.id, join_user.pw, join_user.email, join_user.name)
    
    try:
        database.user.insert_one(new_user)
        return {'success' : 'Success to create user'}
    except:
        return {'error' : 'Failed to create user'}