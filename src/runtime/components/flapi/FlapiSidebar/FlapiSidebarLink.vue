<template>
  <li :class="props.large ? 'w-full' : 'w-fit'">
    <NuxtLink
      :to="props.to"
      class="font-base flex cursor-pointer select-none items-center gap-2 rounded px-3 py-2 font-medium text-light-400 transition-all"
      :class="{ 'justify-center': !props.large, 'bg-primary-400': props.active, 'hover:bg-gray-200': !props.active }"
    >
      <FlapiIcon
        :name="props.icon"
        :width="20"
        :height="20"
        mode="stroke"
        class="mb-[3px]"
        :viewBox="props.iconViewBox || undefined"
      />
      <span v-if="props.large">
        {{ props.text }}
      </span>
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
import type { FlapiSidebarLinkProps } from '#/core'

const props: FlapiSidebarLinkProps = defineProps({
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
  iconViewBox: {
    type: String,
    default: null,
  },
})
</script>
