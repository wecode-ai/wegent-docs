---
sidebar_position: 3
---

# Database Migrations

Learn how to manage database migrations in Wegent.

## Overview

Wegent uses Alembic for database migrations. Migrations track changes to the database schema over time.

## Migration Commands

### Create a Migration

```bash
wegent db migrate -m "Add user table"
```

### Apply Migrations

```bash
wegent db upgrade
```

### Rollback

```bash
wegent db downgrade -1
```

### Check Status

```bash
wegent db status
```

## Writing Migrations

### Auto-generated Migration

Alembic can auto-generate migrations based on model changes:

```bash
wegent db migrate --autogenerate -m "Add email field"
```

### Manual Migration

Create a manual migration:

```python
"""Add user preferences table

Revision ID: abc123
Create Date: 2024-01-01
"""

from alembic import op
import sqlalchemy as sa

def upgrade():
    op.create_table(
        'user_preferences',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('user_id', sa.Integer, sa.ForeignKey('users.id')),
        sa.Column('theme', sa.String(50)),
        sa.Column('language', sa.String(10))
    )

def downgrade():
    op.drop_table('user_preferences')
```

## Best Practices

- Always review auto-generated migrations
- Test migrations on a copy of production data
- Keep migrations small and focused
- Include both upgrade and downgrade functions
- Never modify existing migrations after they're deployed
