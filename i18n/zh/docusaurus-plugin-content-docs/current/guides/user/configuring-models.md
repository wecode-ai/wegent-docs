---
sidebar_position: 6
---

# 配置模型

学习如何为你的 Agent 配置 AI 模型。

## 支持的提供商

Wegent 支持多个 AI 模型提供商：

- OpenAI (GPT-4, GPT-3.5)
- Anthropic (Claude)
- 本地模型 (Ollama, LM Studio)
- 自定义提供商

## 模型配置

### OpenAI 示例

```yaml
model:
  provider: openai
  name: gpt-4
  temperature: 0.7
  max_tokens: 4096
  api_key: ${OPENAI_API_KEY}
```

### Anthropic 示例

```yaml
model:
  provider: anthropic
  name: claude-3-opus
  temperature: 0.5
  max_tokens: 8192
  api_key: ${ANTHROPIC_API_KEY}
```

### 本地模型示例

```yaml
model:
  provider: ollama
  name: llama2
  endpoint: http://localhost:11434
```

## 配置选项

| 选项 | 描述 | 默认值 |
|------|------|--------|
| `provider` | 模型提供商 | 必需 |
| `name` | 模型名称 | 必需 |
| `temperature` | 随机性 (0-1) | 0.7 |
| `max_tokens` | 最大响应 token 数 | 4096 |
| `top_p` | 核采样 | 1.0 |
| `api_key` | API 密钥 | 从环境变量 |

## 环境变量

通过环境变量设置 API 密钥：

```bash
export OPENAI_API_KEY="your-key"
export ANTHROPIC_API_KEY="your-key"
```

## 最佳实践

- 使用环境变量存储 API 密钥
- 根据任务调整 temperature
- 监控 token 使用量
- 测试不同的模型
