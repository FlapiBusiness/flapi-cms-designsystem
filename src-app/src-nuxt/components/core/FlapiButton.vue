<template>
  <component
    :is="isLink ? 'RouterLink' : 'button'"
    role="button"
    :to="isLink ? props.to : undefined"
    :disabled="props.disabled"
    :class="computedClass"
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

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { SetupContext } from '@vue/runtime-core'
import { defineProps, useSlots } from '@vue/runtime-core'
import type { variants } from '~/utils/constants'

/**
 * Type definitions for the flapi button component variants
 * @type {FlapiButtonVariants}
 */
type FlapiButtonVariants = (typeof variants)[number]

/**
 * Type definitions for the flapi button component props
 * @type {FlapiButtonProps}
 * @property {string | null} to - The route to navigate to
 * @property {FlapiButtonVariants} variant - The button variant
 * @property {boolean} disabled - Whether the button is disabled
 * @property {string | null} icon - The icon to display
 * @property {'left' | 'right' | null} iconPosition - The icon position
 * @property {string} size - The button size
 */
export type FlapiButtonProps = {
  to: string | null
  variant: FlapiButtonVariants
  disabled: boolean
  icon: string | null
  iconPosition: 'left' | 'right' | null
  size: string
}

const props: FlapiButtonProps = defineProps({
  to: {
    type: String,
    default: null,
  },
  variant: {
    type: String as PropType<FlapiButtonVariants>,
    default: 'primary',
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
    type: String,
    default: 'md',
  },
})

const isLink: ComputedRef<boolean> = computed(() => props.to !== null)

const buttonVariants: Record<string, string> = {
  primary: 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600',
  red: 'bg-red-600 hover:bg-red-500',
  yellow: 'bg-yellow-600 hover:bg-yellow-500',
  green: 'bg-green-600 hover:bg-green-500',
}

const buttonSizes: Record<string, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3',
  lg: 'px-6 py-4 text-lg',
}

const slots: SetupContext['slots'] = useSlots()
const isIconOnly: ComputedRef<boolean> = computed(() => props.icon !== null && !slots.default?.().length)

const computedClass: ComputedRef<string> = computed(
  () => `
  inline-flex items-center justify-center
  font-medium text-white ${buttonVariants[props.variant]}
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
</style>
