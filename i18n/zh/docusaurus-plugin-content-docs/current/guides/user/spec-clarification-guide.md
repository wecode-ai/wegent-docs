---
sidebar_position: 8
---

# 规格说明指南

学习如何为你的 Agent 编写清晰有效的规格说明。

## 为什么规格说明很重要

清晰的规格说明帮助 Agent 准确理解你的需求，从而：

- 获得更好的结果
- 减少迭代次数
- 降低错误率

## 编写有效的规格说明

### 要具体

❌ 不好："审查代码"

✅ 好："审查 `src/auth.py` 中的 Python 代码是否存在安全漏洞，重点关注输入验证和 SQL 注入风险"

### 包含上下文

```yaml
task:
  name: code-review
  spec:
    context: |
      这是一个 Web 应用程序的认证模块。
      它处理用户登录、注册和密码重置。
    focus:
      - 安全漏洞
      - 错误处理
      - 代码风格
```

### 定义预期输出

```yaml
task:
  spec:
    output_format: markdown
    sections:
      - summary
      - issues_found
      - recommendations
```

## 规格结构

结构良好的规格应包括：

1. **上下文**：背景信息
2. **目标**：需要完成的工作
3. **约束**：限制和要求
4. **输出**：预期交付物

## 常见模式

### 代码审查规格

```yaml
spec:
  task: code-review
  files:
    - src/**/*.py
  criteria:
    - security
    - performance
    - maintainability
```

### 文档规格

```yaml
spec:
  task: documentation
  style: docstring
  format: google
  coverage: public-api
```

## 最佳实践

- 从目标开始
- 提供相关上下文
- 指定约束条件
- 定义成功标准
