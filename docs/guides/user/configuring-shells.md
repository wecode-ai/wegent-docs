---
sidebar_position: 7
---

# Configuring Shells

Learn how to configure execution shells for your agents.

## Understanding Shells

Shells provide the execution environment for agents to run commands and interact with the system.

## Shell Types

| Type | Description | Use Case |
|------|-------------|----------|
| `local` | Local system shell | Development |
| `docker` | Docker container | Isolated execution |
| `ssh` | Remote SSH shell | Remote servers |
| `sandbox` | Restricted sandbox | Untrusted code |

## Configuration

### Local Shell

```yaml
shell:
  type: local
  working_dir: /path/to/project
  env:
    PATH: ${PATH}:/custom/bin
```

### Docker Shell

```yaml
shell:
  type: docker
  image: python:3.9
  volumes:
    - ./src:/app
  env:
    DEBUG: "true"
```

### SSH Shell

```yaml
shell:
  type: ssh
  host: server.example.com
  user: deploy
  key_file: ~/.ssh/id_rsa
```

## Security Settings

```yaml
shell:
  type: sandbox
  permissions:
    file_read: true
    file_write: false
    network: false
    process: false
```

## Best Practices

- Use sandboxed shells for untrusted operations
- Limit permissions to what's needed
- Set appropriate timeouts
- Monitor shell activity
