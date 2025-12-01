---
sidebar_position: 6
---

# 故障排除

Wegent 的常见问题和解决方案。

## 安装问题

### pip install 失败

**问题**：安装因依赖错误而失败。

**解决方案**：
```bash
# 更新 pip
pip install --upgrade pip

# 带详细输出安装
pip install -v wegent
```

### 权限被拒绝

**问题**：安装过程中出现权限错误。

**解决方案**：
```bash
# 使用 --user 标志
pip install --user wegent

# 或使用虚拟环境
python -m venv venv
source venv/bin/activate
pip install wegent
```

## 配置问题

### API 密钥未找到

**问题**：`Error: API key not configured`

**解决方案**：
```bash
# 设置环境变量
export OPENAI_API_KEY="your-key"

# 或在配置文件中
model:
  api_key: ${OPENAI_API_KEY}
```

### 无效的 YAML

**问题**：`Error: Invalid YAML syntax`

**解决方案**：
- 检查缩进（使用空格，而非制表符）
- 使用在线 YAML 验证器验证
- 确保字符串正确引用

## 运行时问题

### Agent 没有响应

**问题**：Agent 不产生输出。

**检查清单**：
1. 检查 API 密钥是否有效
2. 验证模型是否可用
3. 检查网络连接
4. 查看 Agent 日志

### 速率限制错误

**问题**：`Error: Rate limit exceeded`

**解决方案**：
```yaml
model:
  rate_limit:
    requests_per_minute: 30
    retry_delay: 60
```

### 内存问题

**问题**：内存不足错误。

**解决方案**：
- 减少模型配置中的 `max_tokens`
- 对长输出使用流式传输
- 关闭未使用的 Agent

## 获取帮助

如果这些解决方案没有帮助：

1. 查看 [GitHub Issues](https://github.com/wecode-ai/Wegent/issues)
2. 搜索 [Discussions](https://github.com/wecode-ai/Wegent/discussions)
3. 创建新 Issue，包含：
   - 错误消息
   - 配置（隐藏敏感数据）
   - 复现步骤
