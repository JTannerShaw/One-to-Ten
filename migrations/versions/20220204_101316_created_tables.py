"""created tables

Revision ID: 08583a609139
Revises: ffdc0a98111c
Create Date: 2022-02-04 10:13:16.432558

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '08583a609139'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.create_table('surveys',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('name', sa.String(), nullable=False),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('name')
    # )
    # op.create_table('users',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('email', sa.String(length=255), nullable=False),
    # sa.Column('first_name', sa.String(length=40), nullable=False),
    # sa.Column('last_name', sa.String(), nullable=False),
    # sa.Column('hashed_password', sa.String(length=255), nullable=False),
    # sa.Column('gender', sa.String(), nullable=False),
    # sa.Column('dob', sa.Date(), nullable=False),
    # sa.Column('city', sa.String(), nullable=False),
    # sa.Column('state_abbreviation', sa.String(), nullable=False),
    # sa.Column('biography', sa.String(), nullable=False),
    # sa.Column('facebook', sa.String(), nullable=True),
    # sa.Column('instagram', sa.String(), nullable=True),
    # sa.Column('snapchat', sa.String(), nullable=True),
    # sa.Column('tiktok', sa.String(), nullable=True),
    # sa.Column('twitter', sa.String(), nullable=True),
    # sa.Column('github', sa.String(), nullable=True),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('email'),
    # sa.UniqueConstraint('first_name')
    # )
    # op.create_table('questions',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('weight', sa.Numeric(), nullable=False),
    # sa.Column('text', sa.String(), nullable=False),
    # sa.Column('one_label', sa.String(), nullable=False),
    # sa.Column('ten_label', sa.String(), nullable=False),
    # sa.Column('survey_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['survey_id'], ['surveys.id'], ),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('text')
    # )
    # op.create_table('survey_responses',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('user_id', sa.Integer(), nullable=False),
    # sa.Column('survey_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['survey_id'], ['surveys.id'], ),
    # sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('user_id')
    # )
    # op.create_table('question_responses',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('response', sa.Numeric(), nullable=False),
    # sa.Column('user_id', sa.Integer(), nullable=False),
    # sa.Column('question_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['question_id'], ['questions.id'], ),
    # sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id'),
    # sa.UniqueConstraint('user_id')
    # )
    # op.create_table('question_stats',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('response_count', sa.Integer(), nullable=False),
    # sa.Column('average', sa.Numeric(), nullable=False),
    # sa.Column('question_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['question_id'], ['questions.id'], ),
    # sa.PrimaryKeyConstraint('id')
    # )
    # op.create_table('matches',
    # sa.Column('id', sa.Integer(), nullable=False),
    # sa.Column('compatibility_score', sa.Integer(), nullable=False),
    # sa.Column('user_1_id', sa.Integer(), nullable=False),
    # sa.Column('user_2_id', sa.Integer(), nullable=False),
    # sa.ForeignKeyConstraint(['user_1_id'], ['users.id'], ),
    # sa.ForeignKeyConstraint(['user_2_id'], ['users.id'], ),
    # sa.PrimaryKeyConstraint('id'),
    # )
    pass
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.drop_table('question_stats')
    # op.drop_table('question_responses')
    # op.drop_table('survey_responses')
    # op.drop_table('questions')
    # op.drop_table('users')
    # op.drop_table('surveys')
    # op.drop_table('matches')
    pass
    # ### end Alembic commands ###
