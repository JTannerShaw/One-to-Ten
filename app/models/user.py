from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, current_user

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String, nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)
    gender = db.Column(db.String)
    dob = db.Column(db.Date)
    biography = db.Column(db.String)
    facebook = db.Column(db.String)
    instagram = db.Column(db.String)
    snapchat = db.Column(db.String)
    tiktok = db.Column(db.String)
    twitter = db.Column(db.String)
    github = db.Column(db.String)
    active = db.Column(db.Boolean, default=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self, *args):
        if args:
            current_user_id = args[0].id

        if args and self.id == current_user_id:
            return {
                'id': self.id,
                'first_name': self.first_name,
                'last_name': self.last_name,
                'email': self.email,
                'gender': self.gender,
                'dob': self.dob,
                'biography': self.biography,
                'facebook': self.facebook,
                'instagram': self.instagram,
                'snapchat': self.snapchat,
                'tiktok': self.tiktok,
                'twitter': self.twitter,
                'github': self.github,
                'active': self.active
            }
        else:
            return {
                'id': self.id,
                'first_name': self.first_name,
                'last_name': self.last_name,
                'gender': self.gender,
                'biography': self.biography,
                'facebook': self.facebook,
                'instagram': self.instagram,
                'snapchat': self.snapchat,
                'tiktok': self.tiktok,
                'twitter': self.twitter,
                'github': self.github,
                'active': self.active
            }


    # user_locations = db.relationship('UserLocations', back_populates='locations', uselist=False, cascade='all, delete-orphan')
    # user_profile = db.relationship('Profiles', back_populates='profile', uselist=False, cascade='all, delete-orphan')
    # user_preferences = db.relationship('Preferences', back_populates='preferences', uselist=False, cascade='all, delete-orphan')
    # user_1_matches = db.relationship('Matches', back_populates='user1', cascade='all, delete-orphan')
    # user_2_matches = db.relationship('Matches', back_populates='user2', cascade='all, delete-orphan')
    user_question_responses = db.relationship('QuestionResponses', back_populates='u_q_responses', cascade='all, delete-orphan')
    user_survey_responses = db.relationship('SurveyResponses', back_populates='u_s_responses', cascade='all, delete-orphan')
