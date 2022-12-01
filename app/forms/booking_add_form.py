from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


class AddBookingForm(FlaskForm):
    start_month = StringField('Start month', validators=[DataRequired()])
    start_day = StringField('Start day', validators=[DataRequired()])
    start_year = StringField('Start year', validators=[DataRequired()])
    end_month = StringField('End month', validators=[DataRequired()])
    end_day = StringField('End day', validators=[DataRequired()])
    end_year = StringField('End year', validators=[DataRequired()])

    submit = SubmitField('Submit')
