---
sidebar_position: 3
---

# Collaboration Models

Learn about different collaboration patterns in Wegent.

## Overview

Wegent supports various collaboration models for multi-agent systems. Choose the right model based on your task complexity and requirements.

## Collaboration Patterns

### Sequential

Agents work one after another, passing results along:

```
Agent A → Agent B → Agent C → Result
```

**Best for**: Linear workflows, pipeline processing

### Parallel

Multiple agents work simultaneously:

```
        ↗ Agent A ↘
Input →   Agent B  → Merge → Result
        ↘ Agent C ↗
```

**Best for**: Independent subtasks, performance-critical operations

### Hierarchical

A supervisor agent coordinates worker agents:

```
         Supervisor
        /    |    \
    Worker Worker Worker
```

**Best for**: Complex tasks requiring coordination

### Peer-to-Peer

Agents communicate directly with each other:

```
Agent A ←→ Agent B
   ↕           ↕
Agent C ←→ Agent D
```

**Best for**: Collaborative problem-solving

## Choosing a Model

Consider these factors:

| Factor | Sequential | Parallel | Hierarchical | Peer-to-Peer |
|--------|-----------|----------|--------------|--------------|
| Complexity | Low | Medium | High | High |
| Latency | High | Low | Medium | Variable |
| Coordination | Simple | None | Centralized | Distributed |

## Configuration

Specify collaboration model in your team configuration:

```yaml
team:
  name: my-team
  collaboration: hierarchical
  supervisor: lead-agent
  workers:
    - worker-a
    - worker-b
```
