---
sidebar_position: 3
---

# 数据库迁移

学习如何在 Wegent 中管理数据库迁移。

## 概述

Wegent 使用 Alembic 进行数据库迁移。迁移会跟踪数据库模式随时间的变化。

## 迁移命令

### 创建迁移

```bash
wegent db migrate -m "Add user table"
```

### 应用迁移

```bash
wegent db upgrade
```

### 回滚

```bash
wegent db downgrade -1
```

### 检查状态

```bash
wegent db status
```

## 编写迁移

### 自动生成迁移

Alembic 可以根据模型更改自动生成迁移：

```bash
wegent db migrate --autogenerate -m "Add email field"
```

### 手动迁移

创建手动迁移：

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

## 最佳实践

- 始终审查自动生成的迁移
- 在生产数据副本上测试迁移
- 保持迁移小而专注
- 同时包含 upgrade 和 downgrade 函数
- 迁移部署后切勿修改已有迁移
