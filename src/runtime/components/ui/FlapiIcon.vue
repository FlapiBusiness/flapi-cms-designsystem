<template>
  <svg
    class="relative"
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
      <component :is="AsyncComp" v-if="AsyncComp" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import { icons, type FlapiIconMode, type FlapiIconProps, type iconsList } from '#/core'
import { defineAsyncComponent, computed } from 'vue'
import type { PropType, Component } from 'vue'

/**
 * Props definition with strict typing.
 * @constant {FlapiIconProps}
 */
const props: FlapiIconProps = defineProps({
  name: {
    type: String as PropType<(typeof iconsList)[number]>,
    required: true,
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  viewBox: {
    type: String as PropType<string>,
    default: '0 0 24 24',
  },
  mode: {
    type: String as PropType<FlapiIconMode>,
    default: 'fill',
  },
  color: {
    type: String as PropType<string>,
    default: 'currentColor',
  },
})

/**
 * Resolve the icon's file path dynamically.
 * @constant {string}
 */
const iconPath: string =
  computed(() => {
    return Object.keys(icons).find((path: string) => path.includes(`${props.name}.vue`))
  }).value ?? ''

/**
 * Load the component asynchronously if it exists.
 * @constant {Component | null}
 */
const AsyncComp: Component | null = computed<Component | null>(() => {
  if (!props.name) {
    console.warn('⚠️ No icon name provided.')
    return null
  }

  if (!(iconPath in icons)) {
    console.warn(`⚠️ Icon "${props.name}" not found at ${iconPath}`)
    return null
  }

  return defineAsyncComponent(() => icons[iconPath]())
}).value
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
