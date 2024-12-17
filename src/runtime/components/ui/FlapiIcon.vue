<template>
  <svg
    class="relative top-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="color"
    :aria-labelledby="name"
  >
    <g :fill="mode === 'fill' ? color : undefined" :stroke="mode === 'stroke' ? color : undefined">
      <AsyncComp />
    </g>
  </svg>
</template>

<script lang="ts">
// Dynamically import all icons using import.meta.glob
const icons: Record<string, () => Promise<unknown>> = import.meta.glob('@/components/icons/*.vue', { eager: false })
export const iconsList: string[] = Object.keys(icons).map(
  (filePath: string) => filePath.split('/').pop()?.replace('.vue', '') || '',
)
export const flapiIconModes: string[] = ['fill', 'stroke']
/**
 * Type definitions for the flapi icon component mode
 * @type {FlapiIconMode}
 */
type FlapiIconMode = (typeof flapiIconModes)[number]

/**
 * Type definitions for the flapi icon component name
 * @type {FlapiIconProps}
 */
type FlapiIconName = (typeof iconsList)[number]

/**
 * Type definitions for the flapi icon component props
 * @type {FlapiIconProps}
 * @property {FlapiIconName} name - The icon name
 * @property {number | string} width - The icon width
 * @property {number | string} height - The icon height
 * @property {string} viewBox - The icon viewBox
 * @property {FlapiIconMode} mode - The icon mode
 * @property {string} color - The icon color
 */
export type FlapiIconProps = {
  name: FlapiIconName
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
    type: String as PropType<FlapiIconName>,
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
    type: String as PropType<FlapiIconMode>,
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
