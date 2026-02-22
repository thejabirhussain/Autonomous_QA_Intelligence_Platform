"""Initial migration

Revision ID: 1a2b3c4d5e6f
Revises: 
Create Date: 2026-03-09 10:30:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '1a2b3c4d5e6f'
down_revision = None
branch_labels = None
depends_on = None

def upgrade() -> None:
    # We rely on sqlalchemy.ext.declarative for schema. 
    # Just creating the initial structure or using autogenerate later.
    pass

def downgrade() -> None:
    pass
