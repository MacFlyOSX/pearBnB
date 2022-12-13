from .db import db
from datetime import datetime

listing_types = db.Table(
    'listing_types',
    db.Model.metadata,
    db.Column('listing_id', db.Integer, db.ForeignKey(
        'listings.id'), primary_key=True),
    db.Column('type_id', db.Integer, db.ForeignKey(
        'types.id'), primary_key=True)
)

listing_amenities = db.Table(
    'listing_amenities',
    db.Model.metadata,
    db.Column('listing_id', db.Integer, db.ForeignKey(
        'listings.id'), primary_key=True),
    db.Column('amenity_id', db.Integer, db.ForeignKey(
        'amenities.id'), primary_key=True)
)

wishlist_listings = db.Table(
    'wishlist_listings',
    db.Model.metadata,
    db.Column('wishlist_id', db.Integer, db.ForeignKey(
        'wishlists.id'), primary_key=True),
    db.Column('listing_id', db.Integer, db.ForeignKey(
        'listings.id'), primary_key=True),
)

class Listing(db.Model):
    __tablename__ = "listings"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(225), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    address = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    max_guests = db.Column(db.Integer, nullable=False)
    bed = db.Column(db.Integer, nullable=False)
    bath = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.String(225), default=datetime.now)

    owner = db.relationship('User', back_populates='listing')
    review = db.relationship('Review', back_populates='listing')
    images = db.relationship('Image', back_populates='listing')
    booking = db.relationship('Booking', back_populates='listing')

    types = db.relationship('Type', secondary=listing_types, back_populates="listings")
    amenities = db.relationship('Amenity', secondary=listing_amenities, back_populates="listings")

    wishlists = db.relationship('Wishlist', secondary=wishlist_listings, back_populates="listings")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "owner_id": self.owner_id,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "description": self.description,
            "price": self.price,
            "max_guests": self.max_guests,
            "bed": self.bed,
            "bath": self.bath,
            "amenities": [amenity.to_dict() for amenity in self.amenities],
            "created_at": self.created_at
        }

    def to_wish(self):
        return {
            "id": self.id,
            "name": self.name,
            "city": self.city,
            "state": self.state,
            "price": self.price,
            "max_guests": self.max_guests,
            "bed": self.bed,
            "bath": self.bath,
            "images": [img.to_dict()['url'] for img in self.images]
        }

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    review_body = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    clean = db.Column(db.Integer, nullable=False)
    comm = db.Column(db.Integer, nullable=False)
    check = db.Column(db.Integer, nullable=False)
    acc = db.Column(db.Integer, nullable=False)
    loc = db.Column(db.Integer, nullable=False)
    val = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.String(225), default=datetime.now)

    user = db.relationship('User', back_populates='review')
    listing = db.relationship('Listing', back_populates='review')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "review_body": self.review_body,
            "rating": self.rating,
            "clean": self.clean,
            "comm": self.comm,
            "check": self.check,
            "acc": self.acc,
            "loc": self.loc,
            "val": self.val,
            "created_at": self.created_at
        }

class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    startdate = db.Column(db.Date, nullable=False)
    enddate = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.String(225), default=datetime.now)

    user = db.relationship('User', back_populates='booking')
    listing = db.relationship('Listing', back_populates='booking')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_id": self.listing_id,
            "startdate": self.startdate,
            "enddate": self.enddate,
            "created_at": self.created_at
        }

class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    url = db.Column(db.String(500))

    listing = db.relationship('Listing', back_populates='images')

    def to_dict(self):
        return {
            "id": self.id,
            "listing_id": self.listing_id,
            "url": self.url
        }

class Type(db.Model):
    __tablename__ = "types"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100))
    alias = db.Column(db.String(100))

    listings = db.relationship('Listing', secondary=listing_types, back_populates='types')

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "alias": self.alias
        }

class Amenity(db.Model):
    __tablename__ = "amenities"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    alias = db.Column(db.String(100))

    listings = db.relationship('Listing', secondary=listing_amenities, back_populates='amenities')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "alias": self.alias
        }

class Wishlist(db.Model):
    __tablename__ = "wishlists"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String(100))

    listings = db.relationship('Listing', secondary=wishlist_listings, back_populates='wishlists')

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "listings": [listing.to_wish() for listing in self.listings]
        }
