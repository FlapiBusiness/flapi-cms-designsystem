<template>
  <div :class="['relative', 'inline-block']" :style="{ height: props.size + 'px', width: props.size + 'px' }">
    <svg
      class="h-full w-full"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        class="stroke-current"
        :style="{ color: props.backgroundColor }"
        stroke-width="2"
      ></circle>
      <g class="origin-center -rotate-90 transform">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          class="stroke-current"
          :style="{ color: props.progressColor }"
          stroke-width="2"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - (circumference * props.progress) / 100"
        ></circle>
      </g>
    </svg>

    <div
      class="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
      :style="{ color: props.textColor, fontSize: textSize }"
    >
      <span class="text-center font-semibold">{{ props.progress }}%</span>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * Type definitions for the FlapiCircularProgress component props
 * @type {FlapiCircularProgressProps}
 * @property {string} backgroundColor - Color of the background circle
 * @property {string} progressColor - Color of the progress circle
 * @property {number} progress - The percentage of progress (0-100)
 * @property {number} size - The size of the circular progress bar
 * @property {string} textColor - The color of the text
 */
export type FlapiCircularProgressProps = {
  backgroundColor: string
  progressColor: string
  progress: number
  size: number
  textColor: string
}
</script>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'

const props: FlapiCircularProgressProps = defineProps({
  backgroundColor: {
    type: String,
    default: '#ffff00',
  },
  progressColor: {
    type: String,
    default: '#f00',
  },
  progress: {
    type: Number,
    default: 50,
  },
  size: {
    type: Number,
    default: 36,
  },
  textColor: {
    type: String,
    default: '#fff',
  },
})

const circumference: number = 2 * Math.PI * 16 // Circumference of the circle with r=16

// // Calculation of textSize based on circle size (25% of circle size)
const textSize: ComputedRef<string> = computed(() => {
  return `${props.size * 0.25}px`
})
</script>
