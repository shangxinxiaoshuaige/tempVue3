<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
</script>
<template>
  <header>
    <Header></Header>
  </header>
  <RouterView />
  <footer>
    <Footer></Footer>
  </footer>
</template>
<style scoped></style>
