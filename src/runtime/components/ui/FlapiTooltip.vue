<template>
  <div class="group relative inline-flex overflow-visible">
    <slot />

    <div
      v-if="!props.disabled"
      :class="[
        'pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-gray-400 px-3 py-1 text-sm font-semibold text-white opacity-0 transition-opacity delay-150 duration-200',
        positionClass,
        'group-hover:opacity-100',
      ]"
      role="tooltip"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import type { FlapiTooltipProps, FlapiTooltipPosition } from '#/core'

/**
 * Props for the FlapiTooltip component
 * @property {string} text - Tooltip content
 * @property {FlapiTooltipPosition} position - Tooltip position relative to the child
 * @property {boolean} disabled - Disable the tooltip (default: false)
 */
const props: FlapiTooltipProps = defineProps({
  text: {
    type: String,
    required: true,
  },
  position: {
    type: String as PropType<FlapiTooltipPosition>,
    default: 'top',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

/**
 * Tooltip position class computed from the prop
 */
const positionClass: ComputedRef<string> = computed(() => {
  switch (props.position) {
    case 'top':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-1'
    case 'bottom':
      return 'top-full left-1/2 -translate-x-1/2 mt-1'
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-1'
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-1'
    default:
      return 'top-full left-1/2 -translate-x-1/2 mt-1'
  }
})
</script>
