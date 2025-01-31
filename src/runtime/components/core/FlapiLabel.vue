<template>
  <label :for="props.id" class="text-base font-medium text-light-400">
    <slot />
  </label>
</template>

<script lang="ts" setup>
import type { FlapiLabelProps } from '#/core'
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the FlapiLabel component props
 * @type {FlapiLabelProps}
 * @property {string} id - The id of the label
 */
const props: FlapiLabelProps = defineProps({
  id: {
    type: String,
    required: true,
  },
})
</script>
