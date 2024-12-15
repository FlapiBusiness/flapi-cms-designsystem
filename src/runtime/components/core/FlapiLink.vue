<template>
  <a
    v-if="props.externalLink"
    class="inline-flex cursor-pointer items-center gap-x-1.5 font-medium text-primary-300 decoration-2 underline-offset-4 hover:underline"
    :href="href"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :to="props.link"
    class="inline-flex cursor-pointer items-center gap-x-1.5 font-medium text-primary-300 decoration-2 underline-offset-4 hover:underline"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
/**
 * Type definitions for the FlapiLink component props
 * @type {FlapiLinkProps}
 * @property {boolean} externalLink - Whether the link is external or internal
 * @property {string} link - The link to navigate to
 */
export type FlapiLinkProps = {
  readonly externalLink: boolean
  readonly link: string
}
</script>

<script lang="ts" setup>
import { defineProps } from '@vue/runtime-core'
import { computed, type ComputedRef } from 'vue'

/**
 * Type definitions for the FlapiLink component props
 * @type {FlapiLinkProps}
 * @property {boolean} externalLink - Whether the link is external or internal
 * @property {string} link - The link to navigate to
 */
const props: FlapiLinkProps = defineProps({
  externalLink: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    required: true,
  },
})

const href: ComputedRef<string | undefined> = computed(() => {
  if (props.externalLink) {
    return String(props.link)
  }
  return undefined
})
</script>
