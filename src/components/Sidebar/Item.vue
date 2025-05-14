<script lang="ts" setup>
import Link from './Link.vue'
interface RouteItem {
  id: number

  /*新增时间 */
  addtime: Record<string, unknown>

  /*添加人 */
  addperson: string

  /*修改时间 */
  moditime: Record<string, unknown>

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
  auth_sort: Record<string, unknown>

  /*层级 */
  auth_level: Record<string, unknown>

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

interface Props {
  item: RouteItem
}
const props = defineProps<Props>()
</script>
<template>
  <template v-if="props.item.children.length == 0">
    <Link :to="props.item.auth_url">
      <el-menu-item :index="props.item.auth_url">
        <template #title>
          <el-icon>
            <component :is="props.item.auth_icon" />
          </el-icon>
          <span>{{ props.item.auth_name }}</span>
        </template>
      </el-menu-item>
    </Link>
  </template>
  <el-sub-menu v-else :index="props.item.auth_url" teleported>
    <template #title>
      <el-icon>
        <component :is="props.item.auth_icon" />
      </el-icon>
      <span>{{ props.item.auth_name }}</span>
    </template>
    <template v-if="props.item.children.length > 0">
      <Item v-for="child in props.item.children" :key="child.auth_url" :item="child"> </Item>
    </template>
  </el-sub-menu>
</template>
