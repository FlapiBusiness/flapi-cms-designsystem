<template>
  <div class="flex items-center gap-2">
    <svg
      :width="props.size"
      :height="props.size"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flapi Logo"
    >
      <path
        d="M35.2846 7.48628C43.4115 13.2549 45.708 25.1101 40.4141 33.9656C35.1201 42.8212 24.2404 45.3236 16.1135 39.555C7.98661 33.7864 22.7678 24.9179 28.0617 16.0624C33.3557 7.20685 27.1577 1.71769 35.2846 7.48628Z"
        fill="#8472F3"
      />
      <path
        d="M26.4211 11.2294C27.287 12.097 10.125 32.0326 8.8063 32.0081C7.48764 31.9837 8.39843 22.3023 7.63937 20.0433C6.88031 17.7843 -1.77402 9.84498 0.503464 9.61936C2.78095 9.39373 25.5552 10.3618 26.4211 11.2294Z"
        fill="#EEE3FF"
      />
    </svg>
    <span
      v-if="props.large"
      class="font-medium text-light-400"
      :class="{
        'text-2xl': Number(props.size) >= 40,
        'text-lg': Number(props.size) < 40,
      }"
    >
      Flapi
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { FlapiLogoProps } from '#/core'

/**
 * Define the FlapiLogo props.
 */
const props: FlapiLogoProps = defineProps({
  size: {
    type: [Number, String],
    default: 40,
  },
  large: {
    type: Boolean,
    default: false,
  },
})
</script>
