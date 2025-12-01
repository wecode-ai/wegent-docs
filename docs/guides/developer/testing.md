---
sidebar_position: 2
---

# Testing Guide

Learn how to write and run tests for Wegent.

## Test Structure

```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test fixtures
```

## Running Tests

### All Tests

```bash
pytest
```

### Unit Tests Only

```bash
pytest tests/unit/
```

### With Coverage

```bash
pytest --cov=wegent --cov-report=html
```

### Specific Test

```bash
pytest tests/unit/test_agent.py::test_create_ghost
```

## Writing Tests

### Unit Test Example

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

### Integration Test Example

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

Use fixtures for common test setup:

```python
@pytest.fixture
def sample_config():
    return {
        "name": "test-agent",
        "model": {"provider": "mock"}
    }
```

## Best Practices

- Write focused, single-purpose tests
- Use descriptive test names
- Mock external dependencies
- Keep tests fast and isolated
