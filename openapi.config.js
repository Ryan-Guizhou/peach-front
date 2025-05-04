import { generateService } from '@umijs/openapi';
import fs from 'fs';
import path from 'path';

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function cleanEslintDisableComments(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      cleanEslintDisableComments(filePath);
    } else if (file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf-8');
      content = content.replace(/^\s*\/\/\s*@ts-ignore.*$/gm, '');
      content = content.replace(/\/\*\s*eslint-disable\s*\*\//g, '');
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  }
}

const groups = [
  { name: 'auth', groupName: 'AUTH_API' },
  { name: 'file', groupName: 'FILE_API' },
  { name: 'common', groupName: 'COMMON_API' },
  { name: 'scheduler', groupName: 'SCHEDULER_API' },
  { name: 'picture', groupName: 'PICTURE_API' },
];

async function processGroup(group) {
  const encodedGroup = encodeURIComponent(group.groupName);
  const url = `http://127.0.0.1:8877/api/v2/api-docs?group=${encodedGroup}`;

  console.log(`🚀 开始处理分组: ${group.name} (${group.groupName})`);

  try {
    const res = await fetch(url);
    const text = await res.text();

    try {
      JSON.parse(text); // 确保是合法 JSON
    } catch (err) {
      throw new Error('返回的不是合法 JSON，内容为: ' + text.slice(0, 100));
    }

    await generateService({
      requestLibPath: "import request from '@/request'",
      schemaPath: url,
      serversPath: `./src/axios`,
      projectName: group.name,
    });

    console.log(`✅ 分组 ${group.name} 接口生成完成`);
    cleanEslintDisableComments(`./src/axios/${group.name}`);
    console.log(`🧹 分组 ${group.name} 注释清理完成`);
  } catch (err) {
    console.error(`❌ 分组 ${group.name} 生成失败: ${err.message}`);
  }
}

(async () => {
  for (const group of groups) {
    await wait(1000); // 等待 1 秒，避免服务器响应不过来
    await processGroup(group);
  }
})();
