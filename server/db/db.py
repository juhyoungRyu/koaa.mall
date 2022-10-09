from pymongo import MongoClient
from . import setting

client = MongoClient(setting.Mongo_URI, setting.port)

koaa = client[setting.db_name]
