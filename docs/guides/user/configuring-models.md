---
sidebar_position: 6
---

# Configuring Models

Learn how to configure AI models for your agents.

## Supported Providers

Wegent supports multiple AI model providers:

- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude)
- Local models (Ollama, LM Studio)
- Custom providers

## Model Configuration

### OpenAI Example

```yaml
model:
  provider: openai
  name: gpt-4
  temperature: 0.7
  max_tokens: 4096
  api_key: ${OPENAI_API_KEY}
```

### Anthropic Example

```yaml
model:
  provider: anthropic
  name: claude-3-opus
  temperature: 0.5
  max_tokens: 8192
  api_key: ${ANTHROPIC_API_KEY}
```

### Local Model Example

```yaml
model:
  provider: ollama
  name: llama2
  endpoint: http://localhost:11434
```

## Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| `provider` | Model provider | Required |
| `name` | Model name | Required |
| `temperature` | Randomness (0-1) | 0.7 |
| `max_tokens` | Max response tokens | 4096 |
| `top_p` | Nucleus sampling | 1.0 |
| `api_key` | API key | From env |

## Environment Variables

Set API keys via environment:

```bash
export OPENAI_API_KEY="your-key"
export ANTHROPIC_API_KEY="your-key"
```

## Best Practices

- Use environment variables for API keys
- Adjust temperature based on task
- Monitor token usage
- Test with different models
