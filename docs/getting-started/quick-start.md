---
sidebar_position: 1
---

# Quick Start

Get up and running with Wegent in minutes.

## Prerequisites

- Python 3.8 or higher
- Git
- Docker (optional, for containerized deployment)

## Installation

### Using pip

```bash
pip install wegent
```

### From source

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
pip install -e .
```

## Your First Agent

Create a simple agent configuration:

```yaml
name: my-first-agent
type: ghost
model: gpt-4
skills:
  - code-review
  - documentation
```

## Next Steps

- Learn about [Core Concepts](/docs/concepts/core-concepts)
- Explore [Architecture](/docs/concepts/architecture)
- Check out the [User Guides](/docs/guides/user/creating-ghosts)
