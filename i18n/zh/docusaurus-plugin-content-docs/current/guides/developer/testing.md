---
sidebar_position: 2
---

# 测试指南

学习如何为 Wegent 编写和运行测试。

## 测试结构

```
tests/
├── unit/           # 单元测试
├── integration/    # 集成测试
├── e2e/           # 端到端测试
└── fixtures/      # 测试 fixtures
```

## 运行测试

### 所有测试

```bash
pytest
```

### 仅单元测试

```bash
pytest tests/unit/
```

### 带覆盖率

```bash
pytest --cov=wegent --cov-report=html
```

### 特定测试

```bash
pytest tests/unit/test_agent.py::test_create_ghost
```

## 编写测试

### 单元测试示例

```python
import pytest
from wegent.agents import Ghost

def test_ghost_creation():
    ghost = Ghost(name="test-ghost")
    assert ghost.name == "test-ghost"
    assert ghost.status == "inactive"

def test_ghost_activation():
    ghost = Ghost(name="test-ghost")
    ghost.activate()
    assert ghost.status == "active"
```

### 集成测试示例

```python
import pytest
from wegent import Wegent

@pytest.fixture
def wegent_app():
    app = Wegent()
    yield app
    app.cleanup()

def test_full_workflow(wegent_app):
    agent = wegent_app.create_agent("test-agent")
    task = wegent_app.create_task("test-task", agent=agent)
    result = task.run()
    assert result.success
```

## Fixtures

使用 fixtures 进行通用测试设置：

```python
@pytest.fixture
def sample_config():
    return {
        "name": "test-agent",
        "model": {"provider": "mock"}
    }
```

## 最佳实践

- 编写专注的单一目的测试
- 使用描述性的测试名称
- Mock 外部依赖
- 保持测试快速和隔离
