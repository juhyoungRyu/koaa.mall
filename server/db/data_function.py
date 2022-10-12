def loading_data(collection, listname):
    listname = []
    for x in collection.find():
        x['_id'] = str(x['_id'])
        listname.append(x)

    return listname


def is_user(user_db, id, pw):
    user = user_db.find_one({"id" : id})
    if(user != None):
        if(user == user_db.find_one({"pw":pw})):
            user['_id'] = str(user['_id'])
            return user
        return "Err : password!"
    return "Err : id!"