---
sidebar_position: 3
---

# Managing Skills

Learn how to manage and configure skills for your agents.

## Understanding Skills

Skills are modular capabilities that enable agents to perform specific tasks. They can be:

- **Built-in**: Provided by Wegent
- **Custom**: Created by users
- **Community**: Shared by the community

## Built-in Skills

| Skill | Description |
|-------|-------------|
| `code-review` | Review code for issues and improvements |
| `documentation` | Generate and update documentation |
| `testing` | Create and run tests |
| `refactoring` | Suggest code refactoring |
| `question-answering` | Answer questions about code |

## Assigning Skills

### In YAML Configuration

```yaml
name: my-agent
skills:
  - code-review
  - documentation
  - testing
```

### Using the CLI

```bash
wegent agent add-skill my-agent code-review
wegent agent remove-skill my-agent testing
```

## Creating Custom Skills

### Skill Definition

```yaml
skill:
  name: custom-analyzer
  description: Analyzes custom metrics

  parameters:
    - name: threshold
      type: number
      default: 0.8

  actions:
    - analyze
    - report
```

## Best Practices

- Start with minimal skills
- Add skills as needed
- Test skill combinations
- Document custom skills
