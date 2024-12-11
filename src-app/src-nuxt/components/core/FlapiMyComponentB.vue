<template>
  <h1>{{ props.title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the flapi button component props
 * @type {FlapiMyComponentBProps}
 * @property {string} title - The title of the component
 */
export type FlapiMyComponentBProps = {
  title: string
}

const props: FlapiMyComponentBProps = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
