<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包

</script>
<template>
  <!-- <header>
    <Header></Header>
  </header> -->
  <el-config-provider :locale="zhCn">
    <RouterView />
  </el-config-provider>
  <!-- <footer>
    <Footer></Footer>
  </footer> -->
</template>
<style scoped></style>
