from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired


class UpdateReviewForm(FlaskForm):
    review_body = StringField('Review body', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
    clean = IntegerField('Cleanliness', validators=[DataRequired()])
    comm = IntegerField('Communication', validators=[DataRequired()])
    check = IntegerField('Check-in', validators=[DataRequired()])
    acc = IntegerField('Accuracy', validators=[DataRequired()])
    loc = IntegerField('Location', validators=[DataRequired()])
    val = IntegerField('Value', validators=[DataRequired()])

    submit = SubmitField('Submit')
