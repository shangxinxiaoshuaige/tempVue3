<script lang="ts" setup>
interface Props {
  to: string
}
const props = defineProps<Props>()

const isExternal = (path: string) => {
  const reg = /^(https?:|mailto:|tel:)/
  console.log(reg.test(path))
  return reg.test(path)
}
</script>

<template>
  <a v-if="isExternal(props.to)" :href="props.to" target="_blank" rel="noopener">
    <slot />
  </a>
  <router-link v-else :to="props.to">
    <slot />
  </router-link>
</template>
