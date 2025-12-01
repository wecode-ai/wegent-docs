---
sidebar_position: 2
---

# Core Concepts

Understanding the fundamental concepts in Wegent.

## Agents

Agents are the core building blocks of Wegent. They are AI-powered entities that can perform tasks autonomously or interactively.

### Types of Agents

1. **Ghosts** - Autonomous agents that work in the background
2. **Bots** - Interactive agents that respond to commands
3. **Teams** - Collections of agents working together

## Skills

Skills are capabilities that agents can use to perform tasks. They are:

- **Modular**: Can be mixed and matched
- **Reusable**: Shared across multiple agents
- **Extensible**: Custom skills can be created

## Tasks

Tasks represent work to be done by agents. They include:

- Task definition and requirements
- Priority and scheduling information
- Dependencies on other tasks

## Models

Models are the underlying AI/LLM configurations used by agents:

- Supports multiple model providers
- Configurable parameters (temperature, max tokens, etc.)
- Model-specific optimizations

## Shells

Shells provide the execution environment for agents:

- Command execution capabilities
- File system access
- Network operations

## Configuration

Everything in Wegent is configured through YAML files, making it easy to:

- Version control your configurations
- Share configurations across teams
- Automate setup and deployment
