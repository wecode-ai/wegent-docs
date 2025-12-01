---
sidebar_position: 6
---

# Troubleshooting

Common issues and solutions for Wegent.

## Installation Issues

### pip install fails

**Problem**: Installation fails with dependency errors.

**Solution**:
```bash
# Update pip
pip install --upgrade pip

# Install with verbose output
pip install -v wegent
```

### Permission denied

**Problem**: Permission errors during installation.

**Solution**:
```bash
# Use --user flag
pip install --user wegent

# Or use virtual environment
python -m venv venv
source venv/bin/activate
pip install wegent
```

## Configuration Issues

### API key not found

**Problem**: `Error: API key not configured`

**Solution**:
```bash
# Set environment variable
export OPENAI_API_KEY="your-key"

# Or in config file
model:
  api_key: ${OPENAI_API_KEY}
```

### Invalid YAML

**Problem**: `Error: Invalid YAML syntax`

**Solution**:
- Check indentation (use spaces, not tabs)
- Validate with online YAML validator
- Ensure proper quoting of strings

## Runtime Issues

### Agent not responding

**Problem**: Agent doesn't produce output.

**Checklist**:
1. Check API key is valid
2. Verify model is available
3. Check network connectivity
4. Review agent logs

### Rate limit errors

**Problem**: `Error: Rate limit exceeded`

**Solution**:
```yaml
model:
  rate_limit:
    requests_per_minute: 30
    retry_delay: 60
```

### Memory issues

**Problem**: Out of memory errors.

**Solution**:
- Reduce `max_tokens` in model config
- Use streaming for long outputs
- Close unused agents

## Getting Help

If these solutions don't help:

1. Check [GitHub Issues](https://github.com/wecode-ai/Wegent/issues)
2. Search [Discussions](https://github.com/wecode-ai/Wegent/discussions)
3. Create a new issue with:
   - Error message
   - Configuration (redact sensitive data)
   - Steps to reproduce
