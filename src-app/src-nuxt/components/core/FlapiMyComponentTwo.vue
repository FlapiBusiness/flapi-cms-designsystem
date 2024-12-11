<template>
  <h1>{{ props.title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'

/**
 * Type definitions for the flapi button component props
 * @type {FlapiMyComponentTwoProps}
 * @property {string} title - The title of the component
 */
export type FlapiMyComponentTwoProps = {
  title: string
}

const props: FlapiMyComponentTwoProps = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
