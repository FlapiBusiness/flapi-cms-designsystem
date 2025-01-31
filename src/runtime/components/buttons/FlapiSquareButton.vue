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
      color: textColor,
    }"
  >
    <span class="flex items-center justify-center">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import type { FlapiSquareButtonProps } from '#/core'
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
  textColor: {
    type: String,
    default: '#F5F4FB',
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
  font-semibold select-none
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
