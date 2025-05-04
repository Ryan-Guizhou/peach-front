import fs from 'fs';
import path from 'path';

function cleanEslintDisableComments(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      cleanEslintDisableComments(filePath); // 递归处理子目录
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      // 移除单行的 // @ts-ignore
      content = content.replace(/^\s*\/\/\s*@ts-ignore.*$/gm, '');
      // 移除单行或多行的 /* eslint-disable */
      content = content.replace(/\/\*\s*eslint-disable\s*\*\//g, '');
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
}

// openapi.config.js 中这样写
import { generateService } from '@umijs/openapi';

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: import.meta.VITE_API_DOC_URL,
  serversPath: './src',
  projectName: 'axios'
}).then(() => {
  console.log('生成完成，开始清理特定注释...');
  cleanEslintDisableComments('./src/axios');
  console.log('清理完成！');
});
