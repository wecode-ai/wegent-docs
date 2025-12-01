---
sidebar_position: 2
---

# Creating Bots

Learn how to create and configure Bot agents.

## What is a Bot?

A Bot is an interactive AI agent that responds to user commands and queries. Bots are ideal for:

- Chat interfaces
- Command-line assistants
- Interactive workflows

## Creating a Bot

### Basic Configuration

Create a YAML file for your bot:

```yaml
name: helper-bot
type: bot
description: An interactive assistant

model:
  provider: openai
  name: gpt-4
  temperature: 0.5

skills:
  - question-answering
  - task-execution
```

### Using the CLI

```bash
wegent bot create -f helper-bot.yaml
```

## Interacting with Bots

### Starting a Chat Session

```bash
wegent bot chat helper-bot
```

### Sending Commands

```bash
wegent bot run helper-bot "Review this code"
```

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| `name` | Unique identifier | Yes |
| `type` | Must be `bot` | Yes |
| `model` | AI model configuration | Yes |
| `skills` | List of skill names | No |
| `persona` | Bot personality settings | No |

## Best Practices

- Design clear interaction patterns
- Set appropriate response lengths
- Handle errors gracefully
- Provide helpful feedback
