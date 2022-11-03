from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class AddImageForm(FlaskForm):
    url = StringField('URL', validators=[DataRequired()])

    submit = SubmitField('Submit')
