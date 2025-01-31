<template>
  <div class="relative inline-block" :style="{ width: `${props.size}px`, height: `${props.size}px` }">
    <div
      class="absolute -ml-[100%] -mt-[100%] h-[300%] w-[300%] animate-pulse-ring rounded-full"
      :style="{ backgroundColor: props.color }"
    />
    <div
      class="absolute left-0 top-0 h-full w-full animate-pulse-dot rounded-full"
      :style="{ backgroundColor: props.color }"
    />
  </div>
</template>

<script lang="ts" setup>
import type { FlapiPulsatingCircleProps } from '#/core'
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the FlapiPulsatingCircle component props
 * @type {FlapiPulsatingCircleProps}
 * @property {string} color - The color of the pulsating circle
 * @property {number} size - The size of the pulsating circle
 */
const props: FlapiPulsatingCircleProps = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 10,
  },
})
</script>
