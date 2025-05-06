<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goRegist = () => {
  router.push({
    path: '/about',
  })
}

const goHome = () => {
  router.push({
    path: '/',
  })
}
</script>
<template>
  <div class="aspire-header">
    <div class="header-logo">
      <img src="../assets/logo.jpg" style="height: 100%" alt="" />
    </div>
    <div class="header-menu-list">
      <div class="menu-item" @click="goHome">Home</div>
      <div class="menu-item">Programme</div>
      <div class="menu-item">Speakers</div>
      <div class="menu-item" @click="goRegist">Registration</div>
    </div>
  </div>
</template>
<style scoped>
.aspire-header {
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  height: 90px;
  line-height: 90px;
}

.aspire-header .header-menu-list {
  display: flex;
  justify-content: space-around;
}

.header-menu-list .menu-item {
  margin-left: 20px;
}

.menu-item:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
