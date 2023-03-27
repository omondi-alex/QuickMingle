from flask import request, jsonify
from config import app,db
from model import User
from sqlalchemy import or_

# CREATE USER
@app.route('/api/signup', methods=['POST'])
def signup():
    formdata = request.json
    fullname = formdata.get('fullName')
    email = formdata.get('email')
    username = formdata.get('username')
    password = formdata.get('password')
    bio = formdata.get('bio')

    # check if fields are empty
    if not email or not username or not bio or not fullname or not password:
        return jsonify({"message": "All fields should be filled"}), 401
    else:
        newUser = User(fullname=fullname, email=email, username=username, password=password, bio=bio)
        if(newUser):
            db.session.add(newUser)
            db.session.commit()
            return jsonify({"message": "User created successfully"}), 200
        else:
            return jsonify({"message": "Failed to create new User"}), 400
        

# LOGIN USER
@app.route('/api/login', methods=['POST'])
def login():
    formData = request.json
    username_email = formData.get('username_email')
    password = formData.get('password')

    if not username_email or not password:
        return jsonify({"message": "Fields cannot be empty"}), 401
    else:
        print(username_email)
        user = User.query.filter(or_(User.username == username_email, User.email == username_email)).first()
        print(user)

        if(not user):
            return jsonify({"message": "User not found"}), 401
        else:
            # Check password match
            if(password == user.password):
                return jsonify({"message": "User validated Successfully"}), 200
            else:
                return jsonify({"message": "Wrong Password"}), 401