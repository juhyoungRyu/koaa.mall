from pymongo import MongoClient
from . import setting
from . import data_function

client = MongoClient(setting.Mongo_URI, setting.port)

koaa = client[setting.db_name]

user = koaa['user']
item = koaa['item']

id = 'test5'
pw = 'test_pw'
email = 'test3@test.com'
name = 'juhyoung'
call = '010-8988-8555'

new_user = data_function.create_user(id, pw, email, name, call)

if(data_function.check_unique(user, new_user) != True):
    user.insert_one(new_user)
    print('success')
else:
    print('error')