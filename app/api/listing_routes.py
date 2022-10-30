from flask import Blueprint, jsonify, session, request
from app.models import db, User, Listing, Review, Booking, Wishlist, Image, Type
from flask_login import current_user, login_required
from sqlalchemy import func

listing_routes = Blueprint('listings', __name__)

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

######## LOAD ALL LISTINGS ########
@listing_routes.route('/')
def get_all_listings():
    # type = request.args.get('type')
    # location = request.args.get('location)
    # guests = request.args.get('guests')
    # listings = None
    # if (type):
    #     listings = Listing.query.filter()
    listings = Listing.query.all()
    all_listings = [listing.to_dict() for listing in listings]

    for listing in all_listings:
        avg = db.session.query(func.avg(Review.rating)).filter_by(listing_id=listing['id']).first()
        if list(avg)[0]:
            avg_rating = float(list(avg)[0])
            listing['avg_rating'] = avg_rating
        else:
            listing['avg_rating'] = 0

        images = Image.query.filter_by(listing_id=listing['id']).all()
        listing_images = [ img.to_dict()['url'] for img in images ]
        listing['images'] = listing_images

    return jsonify({ 'Listings': all_listings})


######## LOAD USER'S LISTINGS #########
@listing_routes.route('/current')
@login_required
def user_listings():
    user = current_user.to_dict()
    listings = Listing.query.filter(Listing.owner_id == user['id']).all()
    user_listings = [listing.to_dict() for listing in listings]

    for listing in user_listings:
        avg = db.session.query(func.avg(Review.rating)).filter_by(listing_id=listing['id']).first()
        if list(avg)[0]:
            avg_rating = float(list(avg)[0])
            listing['avg_rating'] = avg_rating
        else:
            listing['avg_rating'] = 0

        images = Image.query.filter_by(listing_id=listing['id']).all()
        listing_images = [ img.to_dict()['url'] for img in images ]
        listing['images'] = listing_images

    return jsonify({ 'Listings': user_listings })



######## LOAD SINGLE LISTING'S REVIEWS ##########
@listing_routes.route('/<int:listing_id>/reviews')
def get_listing_reviews(listing_id):
    listing = Listing.query.get(listing_id)
    if not listing:
        return jsonify({ "message": "Listing couldn't be found",
                        "status_code": 404}), 404

    revs = Review.query.all()
    reviews = [rev.to_dict() for rev in revs]

    for review in reviews:
        user = User.query.filter_by(id=review['user_id']).first().to_dict()
        review['user'] = user

    return jsonify({ 'Reviews': reviews })


######## LOAD SINGLE LISTING #########
@listing_routes.route('/<int:listing_id>')
def get_one_listing(listing_id):
    listing = Listing.query.get(listing_id)
    if not listing:
        return jsonify({ "message": "Listing couldn't be found",
                        "status_code": 404}), 404

    single_listing = listing.to_dict()

### Calculating and loading the average rating
    avg = db.session.query(func.avg(Review.rating)).filter_by(listing_id=listing_id).first()
    if list(avg)[0]:
        avg_rating = float(list(avg)[0])
        single_listing['avg_rating'] = avg_rating
    else:
        single_listing['avg_rating'] = 0

### Loading listing images
    images = Image.query.filter_by(listing_id=listing_id).all()
    listing_images = [ img.to_dict()['url'] for img in images ]
    single_listing['images'] = listing_images

### Loading the owner
    owner = User.query.filter_by(id=single_listing['owner_id']).first().to_dict()
    single_listing['owner'] = owner

### Loading reviews
    revs = Review.query.filter_by(listing_id=listing_id).all()
    reviews = [ rev.to_dict() for rev in revs]
    single_listing['reviews'] = reviews

    return single_listing
