from flask_wtf import FlaskForm
from wtforms import SubmitField


class DeleteReviewForm(FlaskForm):
    submit = SubmitField('Submit')
