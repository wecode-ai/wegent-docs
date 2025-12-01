---
sidebar_position: 8
---

# Spec Clarification Guide

Learn how to write clear and effective specifications for your agents.

## Why Specifications Matter

Clear specifications help agents understand exactly what you need, leading to:

- Better results
- Fewer iterations
- Reduced errors

## Writing Effective Specs

### Be Specific

❌ Bad: "Review the code"

✅ Good: "Review the Python code in `src/auth.py` for security vulnerabilities, focusing on input validation and SQL injection risks"

### Include Context

```yaml
task:
  name: code-review
  spec:
    context: |
      This is an authentication module for a web application.
      It handles user login, registration, and password reset.
    focus:
      - Security vulnerabilities
      - Error handling
      - Code style
```

### Define Expected Output

```yaml
task:
  spec:
    output_format: markdown
    sections:
      - summary
      - issues_found
      - recommendations
```

## Spec Structure

A well-structured spec includes:

1. **Context**: Background information
2. **Objective**: What needs to be done
3. **Constraints**: Limitations and requirements
4. **Output**: Expected deliverables

## Common Patterns

### Code Review Spec

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

### Documentation Spec

```yaml
spec:
  task: documentation
  style: docstring
  format: google
  coverage: public-api
```

## Best Practices

- Start with the goal
- Provide relevant context
- Specify constraints
- Define success criteria
