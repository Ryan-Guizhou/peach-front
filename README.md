# Peach Front

基于 Vue 3 + TypeScript + Vite 的智能协同云图库项目

## 项目简介

Peach Front 是一个基于 Vue 3 的智能协同云图库项目，采用 TypeScript 进行开发，使用 Vite 作为构建工具。项目采用模块化的开发方式，支持国际化，适合开发企业级应用。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - JavaScript 的超集，提供类型系统
- Vite - 现代前端构建工具
- Pinia - Vue 官方状态管理库
- Vue Router - Vue 官方路由管理器
- i18n - 国际化支持

```
src/
├── api/          # API接口定义和请求封装
├── assets/       # 静态资源文件(CSS、图片等)
├── components/   # 可复用组件
├── filters/      # Vue过滤器
├── i18n/         # 国际化相关配置
├── router/       # 路由配置
├── stores/       # Pinia状态管理
├── util/         # 工具函数
├── views/        # 页面级组件
├── App.vue       # 应用根组件
└── main.ts       # 应用入口文件
```


## 功能特性

- 🚀 基于 Vue 3、TypeScript 和 Vite 搭建
- 📦 集成 Pinia，高效管理全局状态
- 🌍 内置 国际化（i18n） 支持
- 🎨 模块化项目结构，清晰可扩展
- 🔧 配备完善的 开发工具链，提升开发体验
- 📱 支持 响应式布局，适配多端设备
- ✨ 内置 Cursor 配置，可根据项目风格和 AI 编程流程，智能生成符合规范的代码

## 开发环境要求

- Node.js >= 20.18.2
- npm >= 10.8.2

## 快速开始

1. 克隆项目
```bash
git clone [https://github.com/Ryan-Guizhou/peach-picture-front.git]
cd peach-picture-front
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 开发指南

### 目录说明

- `api/`: 存放所有API接口定义、TypeScript的类型定义等
- `assets/`: 存放静态资源文件(css等静态资源，svg图片、字体等)
- `components/`: 存放可复用组件
- `filters/`: 存放Vue过滤器
- `i18n/`: 存放国际化配置文件
- `router/`: 存放路由配置
- `stores/`: 存放Pinia状态管理
- `util/`: 存放工具函数
- `views/`: 存放页面级组件
- `common/`: 存储常量、枚举值等

### 开发规范

1. **组件开发**
    - 使用 TypeScript 编写组件
    - 遵循 Vue 3 组合式 API 风格
    - 组件文件使用 PascalCase 命名
    - 优先使用Ant Desgin Vue 作为全局UI风格

2. **状态管理**
    - 使用 Pinia 进行状态管理
    - 按模块划分 store
    - 使用 TypeScript 类型定义

3. **路由管理**
    - 使用 Vue Router 进行路由管理
    - 路由配置集中管理
    - 支持路由懒加载

4. **国际化**
    - 使用 i18n 进行国际化
    - 支持多语言切换
    - 按模块划分语言包

## 部署

1. 构建项目
```bash
npm run build
```

2. 部署 dist 目录到服务器

## 测试

```bash
# 运行单元测试
npm run test:unit

# 运行端到端测试
npm run test:e2e
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 版本控制

项目使用 [Git](https://git-scm.com/) 进行版本控制。

## 作者

[Ryan_Guizhou](https://github.com/Ryan-Guizhou)

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- [Vue 3](https://v3.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design Vue](https://www.antdv.com/)