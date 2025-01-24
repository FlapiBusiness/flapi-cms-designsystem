<template>
  <span
    :class="`inline-flex w-fit items-center gap-1.5 ${padding} ${props.close ? 'pr-1' : null} rounded ${fontSize} font-semibold`"
    :style="{
      backgroundColor: props.backgroundColor,
      color: computedTextColor,
    }"
  >
    <slot />

    <button
      v-if="props.close"
      @click.prevent.stop="$emit('close')"
      class="flex items-center justify-center rounded-full p-0.5 active:opacity-80"
      :style="{
        backgroundColor: computedTextColor,
      }"
    >
      <FlapiIcon
        class="relative top-[1px]"
        name="X"
        :width="14"
        :height="14"
        :color="props.backgroundColor"
        mode="stroke"
      />
    </button>
  </span>
</template>

<script lang="ts">
export const flapiBadgeSizes: string[] = ['sm', 'md', 'lg', 'xl']
/**
 * Type definitions for the FlapiBadge component props
 * @type {FlapiBadgeSize}
 * @property {string} sm - Small size
 * @property {string} md - Medium size
 * @property {string} lg - Large size
 * @property {string} xl - Extra large size
 */
export type FlapiBadgeSize = (typeof flapiBadgeSizes)[number]

/**
 * Type definitions for the FlapiBadge component props
 * @type {FlapiBadgeProps}
 * @property {boolean} close - Whether to show the close button
 * @property {string} backgroundColor - The background color of the badge
 * @property {string | null} textColor - The text color of the badge
 * @property {FlapiBadgeSize} size - The size of the badge
 */
export type FlapiBadgeProps = {
  close: boolean
  backgroundColor: string
  textColor?: string | null
  size: FlapiBadgeSize
}
</script>

<script lang="ts" setup>
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
import { defineProps } from '@vue/runtime-core'
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import { ColorUtils } from '#/utils/ColorUtils'

const props: FlapiBadgeProps = defineProps({
  close: {
    type: Boolean,
    default: false,
  },
  backgroundColor: {
    type: String,
    default: '#D6D0FB',
  },
  textColor: {
    type: String,
    default: null,
  },
  size: {
    type: String as PropType<FlapiBadgeSize>,
    default: 'md',
  },
})

/**
 * Calculate automatically the text color based on the background color
 * @returns {ComputedRef<string>} The text color
 */
const computedTextColor: ComputedRef<string> = computed((): string => {
  return props.textColor || ColorUtils.getTextColor(props.backgroundColor, 50)
})

/**
 * Calculate the padding based on the size
 * @returns {ComputedRef<string>} The padding
 */
const padding: ComputedRef<string> = computed((): string => {
  switch (props.size) {
    case 'sm':
      return 'py-0.5 px-2'
    case 'md':
      return 'py-1 px-4'
    case 'lg':
      return 'py-2 px-6'
    case 'xl':
      return 'py-3 px-8'
    default:
      return 'py-1 px-4'
  }
})

/**
 * Calculate the font size based on the size
 * @returns {ComputedRef<string>} The font size
 */
const fontSize: ComputedRef<string> = computed((): string => {
  switch (props.size) {
    case 'sm':
      return 'text-xs'
    case 'md':
      return 'text-xs'
    case 'lg':
      return 'text-sm'
    case 'xl':
      return 'text-base'
    default:
      return 'text-xs'
  }
})
</script>
