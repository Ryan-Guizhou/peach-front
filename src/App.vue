<template>
  <div id="app">
    <a-config-provider :locale="locale">


    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
// import {getUserListUsingGet} from "@/axios/auth/userController.ts";
// import {onMounted, reactive, ref} from "vue";


const locale = zhCN

// const user = ref<API.PeachUserDO>();
//
// const param = reactive<API.PeachUserQO>({
//
// })
//
// const a = async () =>{
//   let axiosResponse = await getUserListUsingGet(param);
//   console.log(axiosResponse.data);
//   if(axiosResponse.data.code === "200" && axiosResponse.data.data){
//     user.value = axiosResponse.data.data[0]
//     console.log(axiosResponse.data.data.result)
//   }
// }
// onMounted(() => {
//   a()
// })

</script>

<style scoped>
</style>
