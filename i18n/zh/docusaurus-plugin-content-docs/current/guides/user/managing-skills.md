---
sidebar_position: 3
---

# 管理技能

学习如何为你的 Agent 管理和配置技能。

## 理解技能

技能是使 Agent 能够执行特定任务的模块化能力。它们可以是：

- **内置**：由 Wegent 提供
- **自定义**：由用户创建
- **社区**：由社区共享

## 内置技能

| 技能 | 描述 |
|------|------|
| `code-review` | 审查代码的问题和改进建议 |
| `documentation` | 生成和更新文档 |
| `testing` | 创建和运行测试 |
| `refactoring` | 建议代码重构 |
| `question-answering` | 回答关于代码的问题 |

## 分配技能

### 在 YAML 配置中

```yaml
name: my-agent
skills:
  - code-review
  - documentation
  - testing
```

### 使用 CLI

```bash
wegent agent add-skill my-agent code-review
wegent agent remove-skill my-agent testing
```

## 创建自定义技能

### 技能定义

```yaml
skill:
  name: custom-analyzer
  description: 分析自定义指标

  parameters:
    - name: threshold
      type: number
      default: 0.8

  actions:
    - analyze
    - report
```

## 最佳实践

- 从最少的技能开始
- 按需添加技能
- 测试技能组合
- 记录自定义技能
