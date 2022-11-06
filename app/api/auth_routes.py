from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
import random

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']

    # Body validation error handlers:
    login_val_error = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }
    if not form.data['email']:
        login_val_error["errors"]["credential"] = "Email is required"
    if not form.data['password']:
        login_val_error["errors"]["password"] = "Password is required"
    if len(login_val_error["errors"]) > 0:
        return jsonify(login_val_error), 400

    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}

profile_pictures = ['https://i.imgur.com/WhWHh0n.png', 'https://i.imgur.com/fLHOV60.png',
                    'https://i.imgur.com/NXuXQXr.png', 'https://i.imgur.com/n22XD2U.png',
                    'https://i.imgur.com/oORAZBS.png', 'https://i.imgur.com/3ygq2Zk.png',
                    'https://i.imgur.com/BE1bV8K.png', 'https://i.imgur.com/zIACz8c.png',
                    'https://i.imgur.com/rgjDNRB.png', 'https://i.imgur.com/xrTfdN1.png']

@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    user = User.query.filter(User.email == form.data['email']).first()

    # Body validation error handlers:
    login_val_error = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }
    if "@" not in form.data['email'] or "." not in form.data['email']:
        login_val_error["errors"]["email"] = "Invalid email"
    if not form.data['first_name']:
        login_val_error["errors"]["first_name"] = "First name is required"
    if not form.data['last_name']:
        login_val_error["errors"]["last_name"] = "Last name is required"
    if user:
        login_val_error['errors']['user'] = "User already exists"
    if len(login_val_error["errors"]) > 0:
        return jsonify(login_val_error), 400

    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'].title(),
            last_name=form.data['last_name'].title(),
            profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
            email=form.data['email'].lower(),
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
