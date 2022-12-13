from flask import Blueprint, jsonify, session, request
from app.forms.listing_add_form import AddListingForm
from app.forms.listing_delete_form import DeleteListingForm
from app.forms.listing_update_form import UpdateListingForm
from app.forms.review_add_form import AddReviewForm
from app.forms.booking_add_form import AddBookingForm
from app.forms.review_delete_form import DeleteReviewForm
from app.forms.review_update_form import UpdateReviewForm
from app.forms.image_add_form import AddImageForm
from app.models import db, User, Listing, Review, Booking, Wishlist, Image, Type, Amenity
from flask_login import current_user, login_required
from sqlalchemy import func
import datetime

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
    type = request.args.get('type')
    # location = request.args.get('location)
    # guests = request.args.get('guests')
    listings = None
    # test = Type.query.filter_by(alias=type).listings.all()
    # print('this is the outcome', test)
    if (type):
        listings = Listing.query.join(Listing.types).filter_by(alias=type).all()
    else:
        listings = Listing.query.all()
    # listings = Listing.query.join(Listing.types).filter_by(alias=type).all()
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

    revs = Review.query.filter_by(listing_id=listing_id).all()
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

    return single_listing

#################################### CREATE ####################################

######## CREATE NEW LISTING #########

@listing_routes.route('/', methods=['POST'])
@login_required
def add_listing():
    user = current_user.to_dict()
    user_id = user['id']
    form = AddListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    validation_errors = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }

    if not form.data['name']:
        validation_errors["errors"]["name"] = "Name of listing is required."
    if not form.data['address']:
        validation_errors["errors"]["address"] = "Address is required."
    if not form.data['city']:
        validation_errors["errors"]["city"] = "City is required."
    if not form.data['state']:
        validation_errors["errors"]["state"] = "State is required."
    if not form.data['description']:
        validation_errors["errors"]["description"] = "Listing description is required."
    if not form.data['price']:
        validation_errors["errors"]["price"] = "Price is required."
    if not form.data['max_guests']:
        validation_errors["errors"]["max_guests"] = "Max number of guests is required."
    if not form.data['bed']:
        validation_errors["errors"]["bed"] = "Number of beds is required."
    if not form.data['bath']:
        validation_errors["errors"]["bath"] = "Number of bathrooms is required."
    if not form.data['types']:
        validation_errors["errors"]["types"] = "Type(s) of listing is/are required."
    if len(validation_errors["errors"]) > 0:
        return jsonify(validation_errors), 400

    if form.validate_on_submit():
        type_list = []
        for alias in form.data['types']:
            ty = Type.query.filter_by(alias=alias).first()
            type_list.append(ty)

        amenity_list = []
        for alias in form.data['amenities']:
            amen = Amenity.query.filter_by(alias=alias).first()
            amenity_list.append(amen)

        listing = Listing(
            name=form.data['name'],
            owner_id=user_id,
            address=form.data['address'],
            city=form.data['city'],
            state=form.data['state'],
            description=form.data['description'],
            price=form.data['price'],
            max_guests=form.data['max_guests'],
            bed=form.data['bed'],
            bath=form.data['bath'],
            types=type_list,
            amenities=amenity_list
        )

        db.session.add(listing)
        db.session.commit()

        types_list = [type.to_dict() for type in listing.types]
        # amenities_list = [amenity.to_dict() for amenity in listing.amenities]

        list = listing.to_dict()
        list['types'] = types_list
        # list['amenities'] = amenities_list

        return jsonify(list)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


######## CREATE NEW REVIEW #########

@listing_routes.route('/<int:listing_id>/reviews', methods=['POST'])
@login_required
def add_review(listing_id):
    user = current_user.to_dict()
    user_id = user['id']
    form = AddReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

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
        review = Review(
            user_id=user_id,
            listing_id=listing_id,
            review_body=form.data['review_body'],
            rating=form.data['rating'],
            clean=form.data['clean'],
            comm=form.data['comm'],
            check=form.data['check'],
            acc=form.data['acc'],
            loc=form.data['loc'],
            val=form.data['val']
        )

        db.session.add(review)
        db.session.commit()

        rev = review.to_dict()

        user = User.query.filter_by(id=rev['user_id']).first().to_dict()
        rev['user'] = user

        return jsonify(rev)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

######## CREATE NEW BOOKING #########

@listing_routes.route('/<int:listing_id>/bookings', methods=['POST'])
@login_required
def add_booking(listing_id):
    print('WE MADE IT HERE!!')
    print('**********************************')
    print(' ')
    print(' ')
    print(' ')
    print(' ')
    print(' ')
    user = current_user.to_dict()
    user_id = user['id']
    form = AddBookingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    validation_errors = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }

    if not form.data['start_month']:
        validation_errors["errors"]["start_month"] = "Start month is required."
    if not form.data['start_day']:
        validation_errors["errors"]["start_day"] = "Start day is required."
    if not form.data['start_year']:
        validation_errors["errors"]["start_year"] = "Start year is required."
    if not form.data['end_month']:
        validation_errors["errors"]["end_month"] = "End month is required."
    if not form.data['end_day']:
        validation_errors["errors"]["end_day"] = "End day is required."
    if not form.data['end_year']:
        validation_errors["errors"]["end_year"] = "End year is required."
    if len(validation_errors["errors"]) > 0:
        return jsonify(validation_errors), 400

    if form.validate_on_submit():
        print('WE MADE IT IN THE VALIDATED SECTION')
        booking = Booking(
            user_id=user_id,
            listing_id=listing_id,
            startdate=datetime.datetime(form.data['start_year'], form.data['start_month'], form.data['start_day']),
            enddate=datetime.datetime(form.data['end_year'], form.data['end_month'], form.data['end_day'])
        )

        db.session.add(booking)
        db.session.commit()

        book = booking.to_dict()

        user = User.query.filter_by(id=user_id).first().to_dict()
        book['user'] = user

        return jsonify(book)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

######## ADD IMAGE TO LISTING ########

@listing_routes.route('/<int:listing_id>/images', methods=['POST'])
@login_required
def add_image(listing_id):
    user = current_user.to_dict()
    user_id = user['id']
    form = AddImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']


    listing = Listing.query.get(listing_id)

    if not listing:
        return {
            "message": "Listing could not be found",
            "status_code": 404
        }, 404

    owner_id = listing.to_dict()['owner_id']

    if user_id != owner_id:
        return {
            "message": "Forbidden",
            "status_code": 403
        }, 403

    if form.validate_on_submit():
        image = Image(listing_id=listing_id, url=form.data['url'])

        db.session.add(image)
        db.session.commit()

        img = image.to_dict()

        return jsonify(img)

    return jsonify({'funguy': 'This is not it'})

#################################### UPDATE ####################################

######## UPDATE A LISTING #########

@listing_routes.route('/<int:listing_id>', methods=['PUT'])
@login_required
def update_listing(listing_id):
    user = current_user.to_dict()
    user_id = user['id']
    form = UpdateListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    listing = Listing.query.get(listing_id)

    if not listing:
        return jsonify({
            "message": "Listing could not be found",
            "status_code": 404
        })

    owner_id = listing.to_dict()['owner_id']

    if user_id != owner_id:
        return {"message": "Forbidden", "status_code": 403}, 403

    validation_errors = {
        "message": "Validation error",
        "status_code": 400,
        "errors": {}
    }

    if not form.data['name']:
        validation_errors["errors"]["name"] = "Name of listing is required."
    if not form.data['address']:
        validation_errors["errors"]["address"] = "Address is required."
    if not form.data['city']:
        validation_errors["errors"]["city"] = "City is required."
    if not form.data['state']:
        validation_errors["errors"]["state"] = "State is required."
    # if not form.data['country']:
    #     validation_errors["errors"]["country"] = "Country is required."
    # if len(str(form.data['latitude'])) == 0:
    #     validation_errors["errors"]["latitude"] = "Latitude is required."
    # if len(str(form.data['longitude'])) == 0:
    #     validation_errors["errors"]["longitude"] = "Longitude is required."
    # if form.data['latitude'] < -90 or form.data['latitude'] > 90 :
    #     validation_errors["errors"]["latitude"] = "Latitude must be between -90 and 90."
    # if form.data['longitude'] < -180 or form.data['longitude'] > 180 :
    #     validation_errors["errors"]["longitude"] = "Longitude must be between -180 and 180."
    if not form.data['description']:
        validation_errors["errors"]["description"] = "Listing description is required."
    if not form.data['price']:
        validation_errors["errors"]["price"] = "Price is required."
    if not form.data['max_guests']:
        validation_errors["errors"]["max_guests"] = "Max number of guests is required."
    if not form.data['bed']:
        validation_errors["errors"]["bed"] = "Number of beds is required."
    if not form.data['bath']:
        validation_errors["errors"]["bath"] = "Number of bathrooms is required."
    # if not form.data['types']:
    #     validation_errors["errors"]["types"] = "Type(s) of listing is/are required."
    # if not form.data['amenities']:
    #     validation_errors["errors"]["amenities"] = "Listing amenities are required."
    if len(validation_errors["errors"]) > 0:
        return jsonify(validation_errors), 400

    if form.validate_on_submit():
        # type_list = []
        # for alias in form.data['types']:
        #     ty = Type.query.filter_by(alias=alias).first()
        #     type_list.append(ty)

        # amenity_list = []
        # for alias in form.data['amenities']:
        #     amen = Amenity.query.filter_by(alias=alias).first()
        #     amenity_list.append(amen)

        listing.name = form.data['name']
        listing.address = form.data['address']
        listing.city = form.data['city']
        listing.state = form.data['state']
        listing.description = form.data['description']
        listing.price = form.data['price']
        listing.max_guests = form.data['max_guests']
        listing.bed = form.data['bed']
        listing.bath = form.data['bath']
        # listing['types'] = type_list,
        # listing['amenities'] = amenity_list

        db.session.commit()

        types_list = [type.to_dict() for type in listing.types]
        # amenities_list = [amenity.to_dict() for amenity in listing.amenities]

        list = listing.to_dict()
        list['types'] = types_list
        # list['amenities'] = amenities_list

        return jsonify(list)

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



#################################### DELETE ####################################

######## DELETE A LISTING #########

@listing_routes.route('/<int:listing_id>', methods=['DELETE'])
@login_required
def delete_listing(listing_id):
    user = current_user.to_dict()
    user_id = user['id']

    form = DeleteListingForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    listing = Listing.query.get(listing_id)

    if not listing:
        return jsonify({
            "message": "Listing could not be found",
            "status_code": 404
        })

    owner_id = listing.to_dict()['owner_id']

    if user_id != owner_id:
        return {"message": "Forbidden", "status_code": 403}, 403

    if form.validate_on_submit():
        db.session.delete(listing)
        db.session.commit()

        return { "message": "Successfully deleted", "status_code": 200 }
