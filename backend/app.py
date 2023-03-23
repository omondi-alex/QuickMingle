from flask import Flask, request, jsonify
import logging

app = Flask (__name__)

@app.route("/test")
def test ():
    return 'QuickMingle'

@app.route('/signup', methods=['POST'])
def signup():
    formdata = request.json
    fullname = formdata.get('fullname')
    email = formdata.get('email')
    username = formdata.get('username')
    password = formdata.get('password')
    bio = formdata.get('bio')

    # check if fields are empty
    if not email or not username or not bio or not fullname or not password:
        return jsonify({"message": "All fields should be filled"}), 401
    else:
        return jsonify({"fullname": fullname, "email": email, "username": username, "password": password, "bio": bio}), 200

if __name__ == "__main__":
    app.run(debug=True)