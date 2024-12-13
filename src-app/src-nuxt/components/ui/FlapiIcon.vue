<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="color"
    :aria-labelledby="name"
  >
    <g :fill="mode === 'fill' ? color : undefined" :stroke="mode === 'stroke' ? color : undefined">
      <AsyncComp />
    </g>
  </svg>
</template>

<script lang="ts">
export const flapiIconModes: string[] = ['fill', 'stroke']
/**
 * Type definitions for the flapi icon component mode
 * @type {FlapiIconMode}
 */
type FlapiIconMode = (typeof flapiIconModes)[number]

/**
 * Type definitions for the flapi icon component props
 * @type {FlapiIconProps}
 * @property {string} name - The icon name
 * @property {number | string} width - The icon width
 * @property {number | string} height - The icon height
 * @property {string} viewBox - The icon viewBox
 * @property {FlapiIconMode} mode - The icon mode
 * @property {string} color - The icon color
 */
export type FlapiIconProps = {
  name: string
  width: number | string
  height: number | string
  viewBox: string
  mode: FlapiIconMode
  color: string
}
</script>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const props: FlapiIconProps = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
  mode: {
    type: String,
    default: 'fill',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
const AsyncComp: any = defineAsyncComponent(() => import(`@/components/icons/${props.name}.vue`))
</script>
<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
