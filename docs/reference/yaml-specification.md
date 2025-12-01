---
sidebar_position: 1
---

# YAML Specification

Complete reference for Wegent YAML configuration files.

## Agent Configuration

### Ghost Agent

```yaml
# ghost.yaml
name: string              # Required: Unique identifier
type: ghost               # Required: Agent type
description: string       # Optional: Agent description

model:                    # Required: Model configuration
  provider: string        # openai, anthropic, ollama, etc.
  name: string           # Model name (gpt-4, claude-3, etc.)
  temperature: number    # 0.0 - 1.0, default: 0.7
  max_tokens: number     # Maximum response tokens
  api_key: string        # API key (use env vars)

skills:                   # Optional: List of skills
  - skill-name

triggers:                 # Optional: Activation triggers
  - type: schedule
    cron: "0 * * * *"
  - type: event
    event: pull_request

shell:                    # Optional: Shell configuration
  type: local|docker|ssh
  working_dir: string
```

### Bot Agent

```yaml
# bot.yaml
name: string
type: bot
description: string

model:
  provider: string
  name: string

skills:
  - skill-name

persona:                  # Optional: Bot personality
  tone: friendly|professional|casual
  verbosity: concise|normal|verbose
```

## Team Configuration

```yaml
# team.yaml
team:
  name: string            # Required: Team name
  description: string     # Optional: Team description

  collaboration: string   # sequential|parallel|hierarchical|peer

  members:               # Required: Team members
    - name: string
      type: ghost|bot
      role: string

  policies:              # Optional: Team policies
    max_retries: number
    timeout: number
```

## Task Configuration

```yaml
# task.yaml
task:
  name: string           # Required: Task name
  description: string    # Optional: Task description

  agent: string          # Required: Assigned agent
  priority: low|normal|high|critical

  inputs:                # Optional: Task inputs
    key: value

  depends_on:            # Optional: Dependencies
    - task-name

  timeout: number        # Optional: Timeout in seconds
```

## Skill Configuration

```yaml
# skill.yaml
skill:
  name: string           # Required: Skill name
  description: string    # Optional: Skill description

  parameters:            # Optional: Skill parameters
    - name: string
      type: string|number|boolean
      required: boolean
      default: any

  actions:               # Required: Available actions
    - action-name
```

## Environment Variables

Use environment variables in configurations:

```yaml
model:
  api_key: ${OPENAI_API_KEY}
  endpoint: ${CUSTOM_ENDPOINT:-https://api.openai.com}
```
