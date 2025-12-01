---
sidebar_position: 1
---

# Creating Ghosts

Learn how to create and configure Ghost agents.

## What is a Ghost?

A Ghost is an autonomous AI agent that operates independently, performing tasks without requiring constant user interaction. Ghosts are ideal for:

- Background processing
- Automated workflows
- Long-running tasks

## Creating a Ghost

### Basic Configuration

Create a YAML file for your ghost:

```yaml
name: my-ghost
type: ghost
description: A helpful autonomous agent

model:
  provider: openai
  name: gpt-4
  temperature: 0.7

skills:
  - code-review
  - documentation
```

### Using the CLI

```bash
wegent ghost create -f my-ghost.yaml
```

## Ghost Lifecycle

1. **Creation**: Ghost is created from configuration
2. **Activation**: Ghost becomes active and ready
3. **Execution**: Ghost performs assigned tasks
4. **Sleep**: Ghost enters idle state when not needed
5. **Termination**: Ghost is shut down

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| `name` | Unique identifier | Yes |
| `type` | Must be `ghost` | Yes |
| `model` | AI model configuration | Yes |
| `skills` | List of skill names | No |
| `triggers` | Events that activate the ghost | No |

## Best Practices

- Give ghosts descriptive names
- Limit skills to what's needed
- Configure appropriate triggers
- Monitor ghost activity regularly
