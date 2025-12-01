---
sidebar_position: 5
---

# Managing Tasks

Learn how to create and manage tasks for your agents.

## Understanding Tasks

Tasks are units of work assigned to agents. They include:

- Task definition and description
- Priority and deadlines
- Dependencies on other tasks
- Assigned agents

## Creating Tasks

### Basic Task

```yaml
task:
  name: review-pr-123
  description: Review pull request #123

  agent: code-reviewer
  priority: high

  inputs:
    pr_number: 123
    repo: my-repo
```

### Using the CLI

```bash
wegent task create -f review-task.yaml
```

## Task Lifecycle

```
Created → Pending → Running → Completed
                      ↓
                   Failed → Retrying
```

## Task Management Commands

```bash
# List all tasks
wegent task list

# Check task status
wegent task status review-pr-123

# Cancel a task
wegent task cancel review-pr-123

# Retry a failed task
wegent task retry review-pr-123
```

## Task Dependencies

Define task dependencies:

```yaml
task:
  name: deploy-app
  depends_on:
    - run-tests
    - build-app
```

## Best Practices

- Use descriptive task names
- Set appropriate priorities
- Define clear success criteria
- Handle failures gracefully
