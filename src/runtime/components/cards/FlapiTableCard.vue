<template>
  <div class="relative z-10 max-w-md px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
    <div class="bg-gray-500 p-4">
      <template v-if="!props.load && props.item">
        <div class="mb-4 space-y-4" v-if="hasSlot('header')">
          <slot name="header" :item="props.item" />
          <FlapiDivider />
        </div>

        <div
          v-for="field in props.fields"
          :key="`field-${field.key}`"
          class="flex gap-2 py-2"
          :class="field.layout === 'column' ? 'flex-col' : 'justify-between'"
        >
          <div class="text-base font-medium text-light-400">
            {{ field.label }}
          </div>
          <div class="text-sm font-medium text-light-400">
            <slot v-if="hasSlot(field.key)" :name="field.key" :item="props.item" />
            <template v-else>
              {{
                field.formatValue ? field.formatValue(getValue(props.item, field.key)) : getValue(props.item, field.key)
              }}
            </template>
          </div>
        </div>
      </template>

      <div v-else class="flex items-center justify-center py-8">
        <FlapiSpinner />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export const flapiTableCardFieldLayout: string[] = ['row', 'column']

/**
 * Type definition for FlapiTableCardFieldLayout
 * @type {FlapiTableCardFieldLayout}
 */
type FlapiTableCardFieldLayout = (typeof flapiTableCardFieldLayout)[number]

/**
 * Type definitions for the flapi table card item
 * @type {FlapiTableCardItem}
 * @property {Record<string, any>} item - The item object
 */
type FlapiTableCardItem = Record<string, any>

/**
 * FlapiTableCard field definition
 * @type {FlapiTableCardField}
 * @property {string} key - The key of the field
 * @property {string} label - The label of the field
 * @property {FlapiTableCardFieldLayout} layout - The layout of the field
 * @property {(value: any) => string} formatValue - The function to format the value
 */
export type FlapiTableCardField = {
  key: string
  label: string
  layout?: FlapiTableCardFieldLayout | null
  formatValue?: (value: any) => string
}

/**
 * Type definition for FlapiTableCard props
 * @type {FlapiTableCardProps}
 * @property {FlapiTableCardField[]} fields - The fields of the card
 * @property {FlapiTableCardItem | null} item - The item to display
 * @property {boolean} load - The loading state
 */
export type FlapiTableCardProps = {
  fields: FlapiTableCardField[]
  item: FlapiTableCardItem | null
  load: boolean
}
</script>

<script lang="ts" setup>
import type { PropType, SetupContext } from 'vue'
import { defineProps, useSlots } from 'vue'
import FlapiSpinner from '#/components/ui/FlapiSpinner.vue'
import FlapiDivider from '#/components/decorators/FlapiDivider.vue'

const props: FlapiTableCardProps = defineProps({
  fields: { type: Array as PropType<FlapiTableCardField[]>, required: true },
  item: { type: Object as PropType<FlapiTableCardItem>, default: null },
  load: { type: Boolean, default: false },
})

/**
 * Slots definition
 * @type {SetupContext['slots']}
 */
const slots: SetupContext['slots'] = useSlots()

/**
 * Check if a slot exists
 * @param {string} name - The name of the slot
 * @returns {boolean} True if slot exists
 */
const hasSlot: (name: string) => boolean = (name: string): boolean => !!slots[name]

/**
 * Function to get the value of an object using a path
 * @param {FlapiTableCardItem} item - The item object
 * @param {string} path - The key or path to extract value
 * @returns {any} The extracted value
 */
const getValue: (item: FlapiTableCardItem, path: string) => any = (item: FlapiTableCardItem, path: string): any => {
  return path.split('.').reduce((obj: FlapiTableCardItem, key: string) => obj[key], item)
}
</script>
