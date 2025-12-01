---
sidebar_position: 2
---

# Installation

This guide covers different ways to install and set up Wegent.

## System Requirements

- **Operating System**: Linux, macOS, or Windows
- **Python**: 3.8 or higher
- **Memory**: Minimum 4GB RAM recommended
- **Disk Space**: At least 1GB free space

## Installation Methods

### Method 1: pip (Recommended)

The simplest way to install Wegent:

```bash
pip install wegent
```

### Method 2: From Source

For development or to get the latest features:

```bash
git clone https://github.com/wecode-ai/Wegent.git
cd Wegent
pip install -e ".[dev]"
```

### Method 3: Docker

Run Wegent in a container:

```bash
docker pull wecode-ai/wegent:latest
docker run -it wecode-ai/wegent
```

## Configuration

After installation, configure your environment:

```bash
wegent init
```

This creates a default configuration file at `~/.wegent/config.yaml`.

## Verifying Installation

Check that Wegent is installed correctly:

```bash
wegent --version
```

## Troubleshooting

If you encounter issues during installation, see our [Troubleshooting Guide](/docs/troubleshooting).
