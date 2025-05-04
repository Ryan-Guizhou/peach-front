<template>
  <div id="app">
    <a-config-provider :locale="locale">
       Vue 3 初始化模板
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'


const locale = zhCN

</script>

<style scoped>
</style>
