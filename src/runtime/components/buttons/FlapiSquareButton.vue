<template>
  <button
    class="flapi-button"
    :disabled="props.disabled"
    :class="computedClass"
    :style="{
      '--background-color': backgroundColor,
      '--background-hover-color': backgroundHoverColor,
      width: `${props.size}px`,
      height: `${props.size}px`,
    }"
  >
    <span class="flex items-center justify-center">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
/**
 * Type definitions for the flapi button component props
 * @type {FlapiSquareButtonProps}
 * @property {string} backgroundColor - The button background color
 * @property {string} backgroundHoverColor - The button background hover color
 * @property {boolean} disabled - Whether the button is disabled
 * @property {number} size - The button size
 */
export type FlapiSquareButtonProps = {
  backgroundColor: string
  backgroundHoverColor: string
  disabled: boolean
  size: number
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { defineProps } from 'vue'

const props: FlapiSquareButtonProps = defineProps({
  backgroundColor: {
    type: String,
    default: '#8472F3',
  },
  backgroundHoverColor: {
    type: String,
    default: '#6B59D9',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 40,
  },
})

const computedClass: ComputedRef<string> = computed(
  () => `
  inline-flex items-center justify-center
  font-medium text-white select-none
  border border-transparent leading-6 rounded-md
  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out
  ${props.disabled ? 'opacity-70 cursor-not-allowed' : ''}
`,
)
</script>

<style>
:root {
  --background-color: #8472f3;
  --background-hover-color: #6b59d9;
}

.flapi-button,
.flapi-button:active,
.flapi-button:hover:active {
  background-color: var(--background-color);
}

.flapi-button:hover {
  background-color: var(--background-hover-color);
}

.flapi-button:disabled,
.flapi-button:disabled:hover,
.flapi-button:disabled:active {
  background-color: var(--background-color);
}
</style>
