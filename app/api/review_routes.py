from flask import Blueprint, jsonify, session, request
from app.forms.review_delete_form import DeleteReviewForm
from app.forms.review_update_form import UpdateReviewForm
from app.models import db, User, Listing, Review, Booking, Wishlist, Image, Type
from flask_login import current_user, login_required
from sqlalchemy import func

review_routes = Blueprint('reviews', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = {}
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages[field] = error
    return errorMessages

###################################### READ ####################################

######## LOAD USER REVIEWS ########
@review_routes.route('/current')
@login_required
def user_reviews():
    user = current_user.to_dict()
    reviews = Review.query.filter(Review.user_id == user['id']).all()
    user_reviews = [review.to_dict() for review in reviews]

    for rev in user_reviews:
        listing = Listing.query.filter(Listing.id == rev['listing_id']).first()
        list = listing.to_dict()
        rev['listing'] = list

    return jsonify({ 'Reviews': user_reviews })


######## LOAD SINGLE REVIEW ########
@review_routes.route('/<int:review_id>')
def get_one_review(review_id):
    rev = Review.query.get(review_id)

    if not rev:
        return {
            "message": "Review could not be found",
            "status_code": 404
        }, 404

    review = rev.to_dict()

    listing = Listing.query.filter(Listing.id == review['listing_id']).first()
    list = listing.to_dict()
    review['listing'] = list

    return jsonify(review)

######## UPDATE A REVIEW #########

@review_routes.route('/<int:review_id>', methods=['PUT'])
@login_required
def update_review(review_id):
    user = current_user.to_dict()
    user_id = user['id']
    form = UpdateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    rev = Review.query.get(review_id)

    if not rev:
        return {
            "message": "Review could not be found",
            "status_code": 404
        }, 404

    rev_user_id = rev.to_dict()['user_id']

    if user_id != rev_user_id:
        return {
            "message": "Forbidden",
            "status_code": 403
        }, 403

    validation_errors = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }

    if not form.data['review_body']:
        validation_errors["errors"]["review_body"] = "Review body is required."
    if not form.data['rating']:
        validation_errors["errors"]["rating"] = "Rating is required."
    if not form.data['clean']:
        validation_errors["errors"]["clean"] = "Cleanliness is required."
    if not form.data['comm']:
        validation_errors["errors"]["comm"] = "Communication is required."
    if not form.data['check']:
        validation_errors["errors"]["check"] = "Check-in is required."
    if not form.data['acc']:
        validation_errors["errors"]["acc"] = "Accuracy is required."
    if not form.data['loc']:
        validation_errors["errors"]["loc"] = "Location is required."
    if not form.data['val']:
        validation_errors["errors"]["val"] = "Value is required."
    if len(validation_errors["errors"]) > 0:
        return jsonify(validation_errors), 400

    if form.validate_on_submit():
        rev.review_body = form.data['review_body']
        rev.rating = form.data['rating']
        rev.clean = form.data['clean']
        rev.comm = form.data['comm']
        rev.check = form.data['check']
        rev.acc = form.data['acc']
        rev.loc = form.data['loc']
        rev.val = form.data['val']

        db.session.commit()

        review = rev.to_dict()
        listing = Listing.query.filter(Listing.id == review['listing_id']).first()
        list = listing.to_dict()
        review['listing'] = list

        return jsonify(review)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401




######### DELETE A REVIEW ##########
@review_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):
    user = current_user.to_dict()
    user_id = user['id']
    form = DeleteReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    rev = Review.query.get(review_id)

    if not rev:
        return {
            "message": "Review could not be found",
            "status_code": 404
        }, 404

    rev_user_id = rev.to_dict()['user_id']

    if user_id != rev_user_id:
        return {
            "message": "Forbidden",
            "status_code": 403
        }, 403

    if form.validate_on_submit():
        db.session.delete(rev)
        db.session.commit()

        return { "message": "Successfully deleted", "status_code": 200 }
