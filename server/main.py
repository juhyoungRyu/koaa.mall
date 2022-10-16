from subprocess import call
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

@app.post('/join')
async def join_test(join_user : Models.Create_user):
    id = join_user.data['id']
    # pw = data_function.pwd_context.hash(join_user.pw)
    # pw = join_user.pw
    # email = join_user.email
    # name = join_user.name
    # "call" = user.call,
    # join_data = join_user.join_date
    
    new_user = {
        # "id" : id,
        # "pw" : pw,
        # "email" : email,
        # "name" : name,
        # "join_date" : join_data
    }
    # print(new_user)
    # return new_user
    return id