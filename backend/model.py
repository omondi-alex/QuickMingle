from config import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)
    bio = db.Column(db.String)

    def to_dict(self):
        return {'id': self.id, "fullname": self.fullname, "email": self.email, "username": self.username, "bio": self.bio}