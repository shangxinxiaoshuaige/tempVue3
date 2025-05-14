<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
//
const isCollapse = ref(false)
const activeMenu = computed(() => {
  return route.path
})
interface RouteItem {
  id: number

  /*新增时间 */
  addtime: string

  /*添加人 */
  addperson: string

  /*修改时间 */
  moditime: string

  /*是否删除 */
  is_del: number

  /*权限编码 */
  auth_code: string

  /*权限名称 */
  auth_name: string

  /*描述 */
  auth_dec: string

  /*权限类型 */
  auth_type: string

  /*父级编码 */
  auth_pcode: string

  /*排序 */
  auth_sort: string

  /*层级 */
  auth_level: string

  /*页面url */
  auth_url: string

  /*按钮图标 */
  auth_icon: string

  /*扩展 */
  auth_ext: string

  /*授权 */
  auth_title: string

  children: RouteItem[]
}

const routes = ref<RouteItem[]>([
  {
    id: 1,
    addtime: '',
    addperson: '',
    moditime: '',
    is_del: 0,
    auth_code: '',
    auth_name: '123',
    auth_dec: '',
    auth_type: '',
    auth_pcode: '',
    auth_sort: '',
    auth_level: '',
    auth_url: '',
    auth_icon: 'User',
    auth_ext: '',
    auth_title: '',
    children: [],
  },
])
</script>

<template>
  <div class="">
    <!-- logo 可以添加router-link 跳转到首页，又或者 判断 -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :mode="'vertical'"
      >
        <Item
          v-for="noHiddenRoute in routes"
          :key="noHiddenRoute.auth_code"
          :item="noHiddenRoute"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped></style>
