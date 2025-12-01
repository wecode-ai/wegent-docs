---
sidebar_position: 1
---

# YAML 规范

Wegent YAML 配置文件完整参考。

## Agent 配置

### Ghost Agent

```yaml
# ghost.yaml
name: string              # 必需：唯一标识符
type: ghost               # 必需：Agent 类型
description: string       # 可选：Agent 描述

model:                    # 必需：模型配置
  provider: string        # openai, anthropic, ollama 等
  name: string           # 模型名称 (gpt-4, claude-3 等)
  temperature: number    # 0.0 - 1.0，默认：0.7
  max_tokens: number     # 最大响应 token 数
  api_key: string        # API 密钥（使用环境变量）

skills:                   # 可选：技能列表
  - skill-name

triggers:                 # 可选：激活触发器
  - type: schedule
    cron: "0 * * * *"
  - type: event
    event: pull_request

shell:                    # 可选：Shell 配置
  type: local|docker|ssh
  working_dir: string
```

### Bot Agent

```yaml
# bot.yaml
name: string
type: bot
description: string

model:
  provider: string
  name: string

skills:
  - skill-name

persona:                  # 可选：Bot 个性
  tone: friendly|professional|casual
  verbosity: concise|normal|verbose
```

## 团队配置

```yaml
# team.yaml
team:
  name: string            # 必需：团队名称
  description: string     # 可选：团队描述

  collaboration: string   # sequential|parallel|hierarchical|peer

  members:               # 必需：团队成员
    - name: string
      type: ghost|bot
      role: string

  policies:              # 可选：团队策略
    max_retries: number
    timeout: number
```

## 任务配置

```yaml
# task.yaml
task:
  name: string           # 必需：任务名称
  description: string    # 可选：任务描述

  agent: string          # 必需：分配的 Agent
  priority: low|normal|high|critical

  inputs:                # 可选：任务输入
    key: value

  depends_on:            # 可选：依赖
    - task-name

  timeout: number        # 可选：超时时间（秒）
```

## 技能配置

```yaml
# skill.yaml
skill:
  name: string           # 必需：技能名称
  description: string    # 可选：技能描述

  parameters:            # 可选：技能参数
    - name: string
      type: string|number|boolean
      required: boolean
      default: any

  actions:               # 必需：可用操作
    - action-name
```

## 环境变量

在配置中使用环境变量：

```yaml
model:
  api_key: ${OPENAI_API_KEY}
  endpoint: ${CUSTOM_ENDPOINT:-https://api.openai.com}
```
