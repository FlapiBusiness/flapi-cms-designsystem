<template>
  <h1>{{ props.title }}</h1>
</template>

<script lang="ts">
/**
 * Type definitions for the FlapiSidebar component props
 * @type {FlapiSidebarProps}
 * @property {string} title - The title of the component
 */
export type FlapiSidebarProps = {
  title: string
}
</script>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the FlapiSidebar component props
 * @type {FlapiSidebarProps}
 * @property {string} title - The title of the component
 */
const props: FlapiSidebarProps = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
