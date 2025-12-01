---
sidebar_position: 1
---

# Development Setup

Set up your development environment for contributing to Wegent.

## Prerequisites

- Python 3.8+
- Git
- Node.js 18+ (for documentation)
- Docker (optional)

## Clone the Repository

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
```

## Set Up Virtual Environment

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

## Install Dependencies

```bash
# Install development dependencies
pip install -e ".[dev]"

# Install pre-commit hooks
pre-commit install
```

## Configuration

Create a local configuration file:

```bash
cp config.example.yaml config.local.yaml
```

Edit `config.local.yaml` with your settings.

## Verify Setup

Run the test suite:

```bash
pytest
```

## IDE Setup

### VS Code

Recommended extensions:
- Python
- Pylance
- YAML

### PyCharm

Import the project and configure the Python interpreter to use the virtual environment.

## Next Steps

- Read the [Testing Guide](/docs/guides/developer/testing)
- Learn about [Database Migrations](/docs/guides/developer/database-migrations)
