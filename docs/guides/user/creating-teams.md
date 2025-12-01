---
sidebar_position: 4
---

# Creating Teams

Learn how to create teams of agents for complex tasks.

## What is a Team?

A Team is a group of agents working together to accomplish complex tasks. Teams enable:

- Division of labor
- Specialized roles
- Collaborative problem-solving

## Creating a Team

### Basic Configuration

```yaml
team:
  name: dev-team
  description: Development assistance team

  members:
    - name: code-reviewer
      type: ghost
      role: reviewer

    - name: doc-writer
      type: ghost
      role: documenter

    - name: lead-bot
      type: bot
      role: coordinator
```

### Using the CLI

```bash
wegent team create -f dev-team.yaml
```

## Team Roles

| Role | Description |
|------|-------------|
| `coordinator` | Manages team activities |
| `worker` | Performs assigned tasks |
| `reviewer` | Reviews work from others |
| `specialist` | Handles domain-specific tasks |

## Team Communication

Teams can communicate through:

- **Message passing**: Direct messages between agents
- **Shared context**: Common knowledge base
- **Task queues**: Ordered task distribution

## Configuration Options

| Option | Description |
|--------|-------------|
| `name` | Team identifier |
| `members` | List of team members |
| `collaboration` | Collaboration model |
| `policies` | Team-wide policies |

## Best Practices

- Define clear roles
- Limit team size
- Establish communication patterns
- Monitor team performance
