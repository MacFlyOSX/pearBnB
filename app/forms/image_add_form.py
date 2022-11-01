from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class AddImageForm(FlaskForm):
    listing_id = IntegerField('Listing ID', validators=[DataRequired()])
    url = StringField('URL', validators=[DataRequired()])

    submit = SubmitField('Submit')
