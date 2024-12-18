<template>
  <div
    class="relative flex w-full items-center before:flex-1 before:border-t-2 before:border-light-300 before:content-[''] after:flex-1 after:border-t-2 after:border-light-300 after:content-['']"
    :class="{ 'before:mr-4 after:ml-4': props.text, 'justify-center': !props.text }"
    aria-label="divider"
  >
    <span v-if="props.text" class="mx-4 font-semibold text-light-400">
      {{ props.text }}
    </span>
  </div>
</template>

<script lang="ts">
/**
 * Type definitions for the FlapiDivider component props
 * @type {FlapiDividerProps}
 * @property {string | null} text - The text to display in the divider
 */
export type FlapiDividerProps = {
  readonly text?: string | null
}
</script>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the FlapiDivider component props
 * @type {FlapiDividerProps}
 * @property {string | null} text - The text to display in the divider
 */
const props: FlapiDividerProps = defineProps({
  text: {
    type: String,
    default: null,
  },
})
</script>
