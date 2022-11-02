from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SelectMultipleField, SubmitField, IntegerField
from wtforms.validators import DataRequired

_TYPES = [
    ( 'omg', 'OMG!' ),
    ( 'luxe', 'Luxe' ),
    ( 'beach', 'Beachfront' ),
    ( 'mansions', 'Mansions' ),
    ( 'cabins', 'Cabins' ),
    ( 'ryokans', 'Ryokans' ),
    ( 'desert', 'Desert' ),
    ( 'lakefront', 'Lakefront' ),
    ( 'tinyhomes', 'Tiny homes' ),
    ( 'castles', 'Castles' ),
    ( 'containers', 'Containers' ),
    ( 'camping', 'Camping' )
]

_AMENITIES = [
    ( 'ac', 'Air conditioning' ),
    ( 'bbq', 'BBQ grill' ),
    ( 'coffee', 'Coffee maker' ),
    ( 'firepit', 'Fire pit' ),
    ( 'fireplace', 'Indoor fireplace' ),
    ( 'heat', 'Heating' ),
    ( 'hottub', 'Private hot tub' ),
    ( 'kitchen', 'Kitchen' ),
    ( 'outdoor', 'Outdoor furniture' ),
    ( 'pets', 'Pets welcome' ),
    ( 'pool', 'Private pool' ),
    ( 'tv', 'TV' ),
    ( 'wifi', 'Wifi' ),
    ( 'workspace', 'Dedicated workspace' )
]

class UpdateListingForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    address = StringField('Address', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    price = IntegerField('Price', validators=[DataRequired()])
    max_guests = IntegerField('Max Guests', validators=[DataRequired()])
    bed = IntegerField('Number of beds', validators=[DataRequired()])
    bath = IntegerField('Number of bathrooms', validators=[DataRequired()])
    # types = SelectMultipleField('Listing Type', choices=_TYPES)
    # amenities = SelectMultipleField('Customer Transaction Options', choices=_AMENITIES)

    submit = SubmitField('Submit')
