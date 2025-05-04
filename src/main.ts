import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import { ConfigProvider } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'


const app = createApp(App)
const pinia = createPinia()

// 注冊pinia 状态管理组件
app.use(pinia)
// 注册路由
app.use(router)
// 注册Ant-design-vue
app.use(Antd)
app.mount('#app')

// 统一设置组件支持为中文
app.component('AConfigProvider', ConfigProvider)
