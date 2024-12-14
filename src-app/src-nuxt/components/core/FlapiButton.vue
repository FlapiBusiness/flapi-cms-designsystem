<template>
  <component
    class="flapi-button"
    :is="isLink ? 'RouterLink' : 'button'"
    role="button"
    :to="isLink ? props.to : undefined"
    :disabled="props.disabled"
    :class="computedClass"
    :style="{
      '--background-color': backgroundColor,
      '--background-hover-color': backgroundHoverColor,
    }"
  >
    <span class="flex items-center justify-center">
      <span v-if="props.icon && props.iconPosition === 'left' && !isIconOnly" class="mr-2">
        <!--        <nuxt-icon :name="props.icon" class="button-icon" filled />-->
      </span>
      <slot v-if="!isIconOnly" />
      <span v-if="props.icon && props.iconPosition === 'right' && !isIconOnly" class="ml-2">
        <!--        <nuxt-icon :name="props.icon" class="button-icon" filled />-->
      </span>
      <!--      <nuxt-icon v-if="isIconOnly && props.icon" class="button-icon" :name="props.icon" filled />-->
    </span>
  </component>
</template>

<script lang="ts">
export const flapiButtonSizes: string[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

/**
 * Type definitions for the flapi button component size
 * @type {FlapiButtonSize}
 */
type FlapiButtonSize = (typeof flapiButtonSizes)[number]

/**
 * Type definitions for the flapi button component props
 * @type {FlapiButtonProps}
 * @property {string | null} to - The route to navigate to
 * @property {string} backgroundColor - The button background color
 * @property {string} backgroundHoverColor - The button background hover color
 * @property {boolean} disabled - Whether the button is disabled
 * @property {string | null} icon - The icon to display
 * @property {'left' | 'right' | null} iconPosition - The icon position
 * @property {FlapiButtonSize} size - The button size
 */
export type FlapiButtonProps = {
  to: string | null
  backgroundColor: string
  backgroundHoverColor: string
  disabled: boolean
  icon: string | null
  iconPosition: 'left' | 'right' | null
  size: FlapiButtonSize
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import { defineProps, useSlots } from '@vue/runtime-core'

const props: FlapiButtonProps = defineProps({
  to: {
    type: String,
    default: null,
  },
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
  icon: {
    type: String,
    default: null,
  },
  iconPosition: {
    type: String as PropType<'left' | 'right' | null>,
    default: 'left',
  },
  size: {
    type: String as PropType<FlapiButtonSize>,
    default: 'md',
  },
})

const isLink: ComputedRef<boolean> = computed(() => props.to !== null && props.to !== '')

const buttonSizes: Record<FlapiButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3',
  lg: 'px-6 py-4 text-lg',
  xl: 'px-8 py-5 text-xl',
  '2xl': 'px-10 py-6 text-2xl',
}

const slots: SetupContext['slots'] = useSlots()
const isIconOnly: ComputedRef<boolean> = computed(() => props.icon !== null && !slots.default?.().length)

const computedClass: ComputedRef<string> = computed(
  () => `
  inline-flex items-center justify-center
  font-medium text-white select-none
  border border-transparent leading-6 rounded-md
  focus:outline-none focus:shadow-outline transition duration-150 ease-in-out
  ${props.disabled ? 'opacity-70 cursor-not-allowed' : ''}
  ${isIconOnly.value ? 'p-2 w-fit' : buttonSizes[props.size]}
`,
)
</script>

<style>
.button-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

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
</style>
