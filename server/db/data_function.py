from passlib.context import CryptContext

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

pwd_context =  CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)    

def verify_password(plane_text, hashed_text):
    return pwd_context.verify(plane_text, hashed_text)

def create_user(id, pw, email, name, call):
    pw = get_password_hash(pw)
    return {"id" : id, 'pw' : pw, 'email' : email, 'name' : name, 'call': call}

def check_unique(db, target):
    if(db.find_one({"id" : target['id']}) == None or db.find_one({"email" : target['email']}) == None):
        return False
    return True