<template>
  <img
    v-if="props.photo"
    :src="props.photo"
    class="inline-flex flex-shrink-0 items-center justify-center text-light-400"
    :style="{
      borderRadius,
      fontSize: `${props.size / fontSizeRatio / 4}px`,
      width: `${props.size}px`,
      height: `${props.size}px`,
      backgroundColor: props.backgroundColor,
    }"
    :width="props.size"
    :height="props.size"
    :alt="name"
  />
  <span
    v-else
    class="inline-flex flex-shrink-0 items-center justify-center"
    :style="{
      width: `${props.size}px`,
      height: `${props.size}px`,
      borderRadius,
      backgroundColor: props.backgroundColor,
    }"
  >
    <span class="font-medium leading-none text-light-400" :style="{ fontSize: `${props.size / fontSizeRatio}px` }">
      {{ initials }}
    </span>
  </span>
</template>

<script lang="ts">
/**
 * Type definitions for the FlapiAvatar component props
 * @type {FlapiAvatarProps}
 * @property {string} name - The name of the content
 * @property {string} photo - The photo of the content
 * @property {number} size - The size of the avatar
 * @property {string} backgroundColor - The background color of the avatar
 */
export type FlapiAvatarProps = {
  name: string
  photo: string
  size: number
  backgroundColor: string
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the FlapiAvatar component props
 * @type {FlapiAvatarProps}
 * @property {string} name - The name of the content
 * @property {string} photo - The photo of the content
 * @property {number} size - The size of the avatar
 * @property {string} backgroundColor - The background color of the avatar
 */
const props: FlapiAvatarProps = defineProps({
  name: {
    type: String,
    default: '',
  },
  photo: {
    type: String,
    default: '',
  },
  size: {
    type: Number,
    default: 40,
  },
  backgroundColor: {
    type: String,
    default: '#1B232D',
  },
})

const fontSizeRatio: number = 2
const borderRadiusRatio: number = 7.5
const borderRadiusMin: number = 4

/* COMPUTED */
/**
 * The initials of the name
 * @type {ComputedRef<string>}
 * @returns {string} The initials of the name
 */
const initials: ComputedRef<string> = computed(() => {
  if (props.name) {
    const nameParts: string[] = props.name.split(' ')
    const initials: string =
      nameParts.length >= 2 ? nameParts[0].charAt(0) + nameParts[1].charAt(0) : nameParts[0].charAt(0)
    return initials.toUpperCase()
  }
  return ''
})

/**
 * The border radius of the avatar
 * @type {ComputedRef<string>}
 * @returns {string} The border radius of the avatar
 */
const borderRadius: ComputedRef<string> = computed(() => {
  const borderRadiusResult: number = props.size / borderRadiusRatio
  return `${borderRadiusResult >= borderRadiusMin ? borderRadiusResult : borderRadiusMin}px`
})
</script>
