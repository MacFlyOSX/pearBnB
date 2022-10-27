from flask_wtf import FlaskForm
from wtforms import SubmitField


class DeleteListingForm(FlaskForm):
    submit = SubmitField('Submit')
