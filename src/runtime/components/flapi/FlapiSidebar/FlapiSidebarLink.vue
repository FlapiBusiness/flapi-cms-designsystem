<template>
  <li class="sidebar-link w-full">
    <NuxtLink
      :to="props.item.to"
      :class="[
        'flex items-center gap-2 rounded p-2 transition-all',
        { 'justify-center': !props.large, 'hover:bg-gray-200': true, 'active:bg-primary-500': props.item.active },
      ]"
    >
      <FlapiIcon :name="props.icon" :size="20" class="text-gray-700" />
      <span v-if="props.large" class="text-sm font-medium text-gray-800">
        {{ props.item.text }}
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import FlapiIcon from '@/components/ui/FlapiIcon.vue'

/**
 * Type definition for the SideBarLink item
 * @type {SideBarLinkItem}
 * @property {string} to - The route to navigate to
 * @property {string} text - The text to display in the link
 * @property {boolean} [active] - Whether the link is active
 */
export type SideBarLinkItem = {
  to: string
  text: string
  active?: boolean
}

/**
 * Type definition for the SideBarLink props
 * @type {SideBarLinkProps}
 * @property {boolean} large - Whether the sidebar is expanded
 * @property {SideBarLinkItem} item - The item to display
 * @property {string} icon - The icon to display
 */
export type SideBarLinkProps = {
  large: boolean
  item: SideBarLinkItem
  icon: string
}

const props: SideBarLinkProps = defineProps({
  large: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object as PropType<SideBarLinkItem>,
    required: true,
  },
  icon: {
    type: String,
    default: 'Link',
  },
})
</script>
