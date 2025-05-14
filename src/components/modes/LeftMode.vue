<script lang="ts" setup>
import Sidebar from '../Sidebar/index.vue'
</script>

<template>
  <Sidebar class="sidebar-container" />
  <div></div>
</template>

<style scoped lang="scss">
$transition-time: 0.35s;

.sidebar-container {
  transition: width $transition-time;
  width: 220px;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  border-right: 1px solid #ddd;
}
</style>
