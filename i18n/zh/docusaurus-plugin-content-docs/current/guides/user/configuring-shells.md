---
sidebar_position: 7
---

# 配置 Shell

学习如何为你的 Agent 配置执行 Shell。

## 理解 Shell

Shell 为 Agent 提供执行命令和与系统交互的执行环境。

## Shell 类型

| 类型 | 描述 | 用途 |
|------|------|------|
| `local` | 本地系统 Shell | 开发环境 |
| `docker` | Docker 容器 | 隔离执行 |
| `ssh` | 远程 SSH Shell | 远程服务器 |
| `sandbox` | 受限沙箱 | 不可信代码 |

## 配置

### 本地 Shell

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

## 安全设置

```yaml
shell:
  type: sandbox
  permissions:
    file_read: true
    file_write: false
    network: false
    process: false
```

## 最佳实践

- 对不可信操作使用沙箱 Shell
- 仅授予所需的权限
- 设置适当的超时时间
- 监控 Shell 活动
