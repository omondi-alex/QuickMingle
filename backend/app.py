from config import app, db
import logging
from flask_cors import CORS
import routes

CORS(app)

@app.route("/test")
def test ():
    return 'QuickMingle'

with app.app_context():
    db.create_all()



if __name__ == "__main__":
    app.run(debug=True)