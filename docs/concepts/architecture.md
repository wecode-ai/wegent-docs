---
sidebar_position: 1
---

# Architecture

Learn about Wegent's architecture and how its components work together.

## Overview

Wegent is built on a modular architecture that enables flexible AI agent collaboration. The system consists of several key components that work together to provide a powerful multi-agent platform.

## Core Components

### Agent Layer

The agent layer contains the different types of AI agents:

- **Ghosts**: Autonomous agents that perform tasks independently
- **Bots**: Interactive agents that respond to user commands
- **Teams**: Groups of agents working together on complex tasks

### Skill Layer

Skills are modular capabilities that can be attached to agents:

- Built-in skills for common tasks
- Custom skills for domain-specific functionality
- Skill composition for complex operations

### Orchestration Layer

The orchestration layer manages:

- Task distribution and scheduling
- Inter-agent communication
- Resource allocation

## Data Flow

```
User Input → Task Parser → Orchestrator → Agents → Output
                              ↓
                          Skills Pool
```

## Configuration

All components can be configured via YAML files. See the [YAML Specification](/docs/reference/yaml-specification) for details.
