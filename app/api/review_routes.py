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
