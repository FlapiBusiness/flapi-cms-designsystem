<template>
  <li :class="props.large ? 'w-full' : 'w-fit'">
    <FlapiTooltip :text="props.text" position="right" class="w-full" :disabled="props.large">
      <NuxtLink
        v-if="props.to"
        :to="props.to"
        class="font-base flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-2 font-medium text-light-400 transition-all"
        :class="{ 'justify-center': !props.large, 'bg-primary-400': props.active, 'hover:bg-gray-400': !props.active }"
      >
        <FlapiIcon
          :name="props.icon"
          :width="16"
          :height="16"
          mode="stroke"
          :viewBox="props.iconViewBox || undefined"
        />
        <span v-if="props.large">
          {{ props.text }}
        </span>
      </NuxtLink>

      <button
        v-else
        class="font-base flex w-full cursor-pointer select-none items-center gap-2 rounded px-3 py-2 font-medium text-light-400 transition-all"
        :class="{ 'justify-center': !props.large, 'bg-primary-400': props.active, 'hover:bg-gray-400': !props.active }"
      >
        <FlapiIcon
          :name="props.icon"
          :width="16"
          :height="16"
          mode="stroke"
          :viewBox="props.iconViewBox || undefined"
        />
        <span v-if="props.large">
          {{ props.text }}
        </span>
      </button>
    </FlapiTooltip>
  </li>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
import type { FlapiSidebarLinkProps } from '#/core'
import FlapiTooltip from '#/components/ui/FlapiTooltip.vue'

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
    default: null,
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
