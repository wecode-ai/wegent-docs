---
sidebar_position: 5
---

# 管理任务

学习如何为你的 Agent 创建和管理任务。

## 理解任务

任务是分配给 Agent 的工作单元。它们包括：

- 任务定义和描述
- 优先级和截止时间
- 与其他任务的依赖关系
- 分配的 Agent

## 创建任务

### 基础任务

```yaml
task:
  name: review-pr-123
  description: 审查 Pull Request #123

  agent: code-reviewer
  priority: high

  inputs:
    pr_number: 123
    repo: my-repo
```

### 使用 CLI

```bash
wegent task create -f review-task.yaml
```

## 任务生命周期

```
创建 → 等待中 → 运行中 → 已完成
                   ↓
                失败 → 重试中
```

## 任务管理命令

```bash
# 列出所有任务
wegent task list

# 检查任务状态
wegent task status review-pr-123

# 取消任务
wegent task cancel review-pr-123

# 重试失败的任务
wegent task retry review-pr-123
```

## 任务依赖

定义任务依赖关系：

```yaml
task:
  name: deploy-app
  depends_on:
    - run-tests
    - build-app
```

## 最佳实践

- 使用描述性的任务名称
- 设置适当的优先级
- 定义明确的成功标准
- 优雅地处理失败
