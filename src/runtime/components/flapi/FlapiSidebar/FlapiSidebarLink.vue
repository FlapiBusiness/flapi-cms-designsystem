<template>
  <li :class="props.large ? 'w-full' : 'w-fit'">
    <NuxtLink
      :to="props.to"
      class="font-base flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 font-medium text-light-400 transition-all"
      :class="{ 'justify-center': !props.large, 'bg-primary-400': props.active, 'hover:bg-gray-200': !props.active }"
    >
      <FlapiIcon :name="props.icon" :width="20" :height="20" mode="stroke" />
      <span v-if="props.large">
        {{ props.text }}
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import FlapiIcon from '@/components/ui/FlapiIcon.vue'

/**
 * Type definition for the SideBarLink props
 * @type {SideBarLinkProps}
 * @property {boolean} large - Whether the sidebar is expanded
 * @property {boolean} active - Whether the link is active
 * @property {string} to - The link to navigate to
 * @property {string} text - The text to display
 * @property {string} icon - The icon to display
 */
export type SideBarLinkProps = {
  large: boolean
  active: boolean
  to: string
  text: string
  icon: string
}

const props: SideBarLinkProps = defineProps({
  large: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: 'Link',
  },
})
</script>
