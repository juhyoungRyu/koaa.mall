from pymongo import MongoClient
from . import setting
from . import data_function

client = MongoClient(setting.Mongo_URI, setting.port)

koaa = client[setting.db_name]

user = koaa['user']
item = koaa['item']


# if(data_function.check_unique(user, new_user) != True):
#     user.insert_one(new_user)
#     print('success')
# else:
#     print('error')
