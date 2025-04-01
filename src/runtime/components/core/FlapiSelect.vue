<template>
  <div class="relative flex w-full min-w-max flex-col gap-2">
    <FlapiLabel v-if="props.label" :id="props.id">
      {{ props.label }}
      <span v-if="required" class="ml-1 text-red-400"> * </span>
    </FlapiLabel>
    <select
      :id="id"
      class="relative flex h-12 w-full items-center justify-center rounded-md border-2 bg-gray-400 pl-3 text-base text-light-400 placeholder:text-light-300 focus:border-primary-400 focus:bg-gray-500"
      :class="required && !selectedItem ? 'border-[#EC364B]' : 'border-transparent hover:border-light-300'"
      :value="selectedItem?.value"
      @change="onChange($event)"
    >
      <option v-for="option in options" :value="option.value" :key="option.value" class="hover:bg-primary-400">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, ComputedRef } from 'vue'
import { computed } from 'vue'
import { defineProps } from '@vue/runtime-core'
import FlapiLabel from '#/components/core/FlapiLabel.vue'
import type { FlapiSelectProps, FlapiSelectOption } from '#/core'

/* PROPS */
const props: FlapiSelectProps = defineProps({
  options: {
    type: Array as PropType<FlapiSelectOption[]>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<FlapiSelectOption>,
    default: null,
  },
  id: { type: String, default: 'field' },
  label: { type: String, default: null },
  required: { type: Boolean, default: false },
})

/* Computed */
const selectedItem: ComputedRef<FlapiSelectOption> = computed({
  /**
   * Get the selected item
   * @returns {FlapiSelectOption} - The selected item
   */
  get: (): FlapiSelectOption => props.modelValue || props.options[0],
  /**
   * Set the selected item
   * @param {FlapiSelectOption} newValue - The newly selected item
   * @returns {void}
   */
  set: (newValue: FlapiSelectOption): void => {
    emit('update:modelValue', newValue)
  },
})

/* EMIT */
const emit: (event: 'update:modelValue', value: FlapiSelectOption) => void = defineEmits<{
  (event: 'update:modelValue', value: FlapiSelectOption): void
}>()

/* METHODS */
/**
 * Method to handle the change event of the select input
 * @param {Event} event - The change event
 * @returns {void}
 */
const onChange: (event: Event) => void = (event: Event): void => {
  const selectElement: HTMLSelectElement = event.target as HTMLSelectElement
  const selectedOptionValue: string = selectElement.value

  // Find the selected option from the option array
  const selectedOption: FlapiSelectOption | undefined = props.options.find(
    (option: FlapiSelectOption) => option.value.toString() === selectedOptionValue,
  )

  if (selectedOption) {
    emit('update:modelValue', selectedOption)
  }
}
</script>
