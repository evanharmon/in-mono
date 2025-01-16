import logging
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from os import environ

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DB_URL")
db = SQLAlchemy(app)

logging.basicConfig(level=logging.ERROR)


class User(db.Model):
    """User Model"""

    __tablename__ = "hitc_users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)

    def json(self):
        """return as json"""

        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "age": self.age,
        }


with app.app_context():
    db.create_all()


# Test route
@app.route("/", methods=["GET"])
def test():
    """test route"""
    return make_response(jsonify({"message": "success"}), 200)


# Create user
@app.route("/users", methods=["POST"])
def create_user():
    """create user route"""
    try:
        data = request.get_json()
        new_user = User(username=data["username"], email=data["email"], age=data["age"])
        db.session.add(new_user)
        db.session.commit()
        return make_response(jsonify({"message": "user created."}), 201)
    except Exception as e:
        logging.error("Error creating user: %s", str(e))
        return make_response(jsonify({"message": "error creating user."}), 500)


# Get all users
@app.route("/users", methods=["GET"])
def get_users():
    """get users route
    this is a playground app so a route like this is allowed to exist for development.
    """
    try:
        users = User.query.all()
        return make_response(
            jsonify(
                {
                    "message": "all users fetched successfully",
                    "users": [user.json() for user in users],
                }
            ),
            200,
        )
    except Exception as e:
        logging.error("Error getting all users: %s", str(e))
        return make_response(jsonify({"message": "error fetching all users."}), 500)


# Get user by id
# improvement: don't use built-in `id`, specify `user_id`
@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    """get user by id route"""
    try:
        user = User.query.filter_by(id=user_id).first()
        if user:
            return make_response(
                jsonify({"message": "user fetched successfully.", "user": user.json()}),
                200,
            )
        return make_response(jsonify({"message": "user not found."}), 404)
    except Exception as e:
        logging.error("Error getting user by id: %s", str(e))
        return make_response(jsonify({"message": "error fetching user."}), 500)


# Update user by id
# improvement: don't use built-in `id`, specify `user_id`
@app.route("/users/<int:user_id>", methods=["PUT"])
def update_user(user_id):
    """update user by id route"""
    try:
        user = User.query.filter_by(id=user_id).first()
        if user:
            data = request.get_json()
            user.username = data["username"]
            user.email = data["email"]
            user.age = data["age"]
            db.session.commit()
            return make_response(
                jsonify({"message": "user successfully updated."}), 200
            )
        return make_response(jsonify({"message": "user not found."}), 404)
    except Exception as e:
        logging.error("Error updating user by id: %s", str(e))
        return make_response(jsonify({"message": "failed to update user."}), 500)


# Delete user by id
# improvement: don't use built-in `id`, specify `user_id`
@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    """delete user by id route"""
    try:
        user = User.query.filter_by(id=user_id).first()
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response(
                jsonify({"message": "user successfully deleted."}), 200
            )
        return make_response(jsonify({"message": "user not found."}), 404)
    except Exception as e:
        logging.error("Error deleting user by id: %s", str(e))
        return make_response(jsonify({"message": "failed to delete user."}), 500)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
