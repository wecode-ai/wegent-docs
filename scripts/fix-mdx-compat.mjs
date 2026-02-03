#!/usr/bin/env node

/**
 * MDX 兼容性预处理脚本
 * 
 * 在文档同步后运行，修复 MDX 不兼容的语法：
 * 1. 将 <br> 转换为 <br/>
 * 2. 转义 < 后面跟数字的情况（如 <50 -> &lt;50）
 * 3. 转义花括号中的变量引用（如 {model} -> \{model\}）
 * 
 * 用法: node scripts/fix-mdx-compat.mjs [目录]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// 默认处理 docs 和 i18n 目录
const targetDirs = process.argv[2]
  ? [process.argv[2]]
  : [
      path.join(rootDir, 'docs'),
      path.join(rootDir, 'i18n')
    ];

/**
 * 递归获取所有 .md 文件
 */
function getMdFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getMdFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * 检查位置是否在代码块内
 */
function isInCodeBlock(content, position) {
  // 查找位置之前的所有 ``` 标记
  const beforeContent = content.substring(0, position);
  const codeBlockMarkers = beforeContent.match(/```/g);
  // 如果 ``` 出现奇数次，说明在代码块内
  return codeBlockMarkers && codeBlockMarkers.length % 2 === 1;
}

/**
 * 修复 MDX 兼容性问题
 */
function fixMdxCompat(content) {
  let fixed = content;
  
  // 1. 将 <br> 转换为 <br/> (不区分大小写)
  fixed = fixed.replace(/<br\s*>/gi, '<br/>');
  
  // 2. 转义表格中 < 后面跟数字的情况
  // 匹配模式: (<数字) 但不匹配已经转义的 &lt;
  fixed = fixed.replace(/(?<!&lt;|&)(<)(\d)/g, '&lt;$2');
  
  // 3. 转义花括号中的变量引用（在非代码块中）
  // 匹配 {word} 模式，包括中文字符
  // 排除代码块内的内容
  fixed = fixed.replace(
    /\{([a-zA-Z_\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]*)\}/g,
    (match, varName, offset) => {
      // 检查是否在代码块内
      if (isInCodeBlock(fixed, offset)) {
        return match;
      }
      // 检查是否在行内代码中（被反引号包裹）
      const lineStart = fixed.lastIndexOf('\n', offset) + 1;
      const lineEnd = fixed.indexOf('\n', offset);
      const line = fixed.substring(lineStart, lineEnd === -1 ? fixed.length : lineEnd);
      const posInLine = offset - lineStart;
      
      // 简单检查：计算该位置之前的反引号数量
      const beforeInLine = line.substring(0, posInLine);
      const backtickCount = (beforeInLine.match(/`/g) || []).length;
      if (backtickCount % 2 === 1) {
        // 在行内代码中，不处理
        return match;
      }
      
      return `\\{${varName}\\}`;
    }
  );
  
  // 4. 将裸露的 URL 用反引号包裹（避免 MDX 解析错误）
  // 匹配 http:// 或 https:// 开头的 URL
  // URL 字符集：只匹配 ASCII 字符，遇到中文字符停止
  // 排除已经在反引号、链接语法 []() 中的 URL
  fixed = fixed.replace(
    /(?<!`|]\()(https?:\/\/[a-zA-Z0-9\-._~:/?#\[\]@!$&'()*+,;=%]+)(?!`|\))/g,
    (match, url, offset) => {
      // 检查是否在代码块内
      if (isInCodeBlock(fixed, offset)) {
        return match;
      }
      return `\`${url}\``;
    }
  );
  
  return fixed;
}

/**
 * 处理单个文件
 */
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fixed = fixMdxCompat(content);
  
  if (content !== fixed) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
    return true;
  }
  
  return false;
}

/**
 * 主函数
 */
function main() {
  console.log(`🔧 MDX Compatibility Fixer`);
  console.log(`📁 Target directories: ${targetDirs.join(', ')}\n`);
  
  let totalFiles = 0;
  let fixedCount = 0;
  
  for (const targetDir of targetDirs) {
    if (!fs.existsSync(targetDir)) {
      console.warn(`⚠️ Directory not found: ${targetDir}`);
      continue;
    }
    
    console.log(`📂 Processing: ${targetDir}`);
    const mdFiles = getMdFiles(targetDir);
    totalFiles += mdFiles.length;
    console.log(`   Found ${mdFiles.length} markdown files`);
    
    for (const file of mdFiles) {
      if (processFile(file)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n✨ Done! Processed ${totalFiles} files, fixed ${fixedCount} file(s).`);
}

main();
