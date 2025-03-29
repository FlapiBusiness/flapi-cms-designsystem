<template>
  <div class="relative z-10 py-10 text-light-400 lg:py-14">
    <!-- Card -->
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="inline-block min-w-full p-1.5 align-middle">
          <div class="overflow-hidden rounded-lg bg-gray-500 shadow-sm">
            <!-- Header -->
            <div
              v-if="props.searchTerms && props.showSearchBar"
              class="grid gap-3 border-b border-gray-500 bg-gray-500 px-6 py-4 md:flex md:items-center md:justify-between"
            >
              <!-- Input -->
              <div class="w-full">
                <FlapiSearchBar :value="props.searchTerms" @update:value="$emit('update:searchTerms', $event)" />
              </div>
            </div>
            <!-- End Header -->

            <!-- Table -->
            <table class="min-w-full divide-y divide-light-300">
              <thead class="bg-gray-500">
                <tr class="divide-x divide-light-300 border border-b-light-300">
                  <th
                    v-for="(field, i) in props.fields"
                    :key="`head-${i}-${field.key}`"
                    scope="col"
                    class="cursor-pointer px-6 py-3 text-left hover:opacity-95"
                    :class="field.cellsClasses"
                  >
                    <span class="text-xs font-semibold uppercase tracking-wide text-light-400">
                      {{ field.label }}
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody v-if="props.items.length && !props.load" class="divide-y divide-light-300">
                <tr
                  v-for="(item, i) in props.items"
                  :key="`row-${i}-${item.id}`"
                  @click="$emit('click', item.id)"
                  class="cursor-pointer divide-x divide-light-300 hover:bg-gray-200"
                >
                  <template v-for="field in props.fields" :key="`cell-${i}-${field.key}`">
                    <td
                      class="h-px w-px whitespace-nowrap px-6 py-3 text-sm text-light-400"
                      :class="field.cellsClasses"
                      :style="field.setTdStyle ? field.setTdStyle(item) : undefined"
                    >
                      <template v-if="hasSlot(field.key)">
                        <slot :name="field.key" :item="item" />
                      </template>
                      <template v-else>
                        {{
                          field.formatValue ? field.formatValue(getValue(item, field.key)) : getValue(item, field.key)
                        }}
                      </template>
                    </td>
                  </template>
                </tr>
              </tbody>

              <tbody v-else>
                <tr class="text-center">
                  <td v-if="props.load" colspan="5" class="py-8">
                    <FlapiSpinner class="relative left-1/2 top-1/2" />
                  </td>
                  <td v-else colspan="5" class="py-8">Aucun résultat</td>
                </tr>
              </tbody>
            </table>
            <!-- End Table -->

            <!-- Footer -->
            <div class="grid gap-3 border-t border-light-300 px-6 py-4 md:flex md:items-center md:justify-between">
              <div class="w-full max-w-[80px] space-y-3">
                <FlapiSelect
                  :options="[
                    { label: '10', value: 10 },
                    { label: '25', value: 25 },
                    { label: '50', value: 50 },
                    { label: '100', value: 100 },
                    { label: '150', value: 150 },
                    { label: '200', value: 200 },
                  ]"
                  :modelValue="{ label: '10', value: 10 }"
                  id="itemsPerPage"
                />
              </div>
            </div>
            <!-- End Footer -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, SetupContext } from 'vue'
import { defineProps, useSlots, defineEmits } from 'vue'
import FlapiSearchBar from '#/components/inputs/FlapiSearchBar.vue'
import FlapiSpinner from '#/components/ui/FlapiSpinner.vue'
import FlapiSelect from '#/components/core/FlapiSelect.vue'
import type { FlapiTableProps, FlapiTableField, FlapiTableItem } from '#/core'

/**
 * Props definition for the table component
 */
const props: FlapiTableProps = defineProps({
  fields: { type: Array as PropType<FlapiTableField[]>, required: true },
  items: { type: Array as PropType<FlapiTableItem[]>, required: true },
  load: { type: Boolean, default: false },
  searchTerms: { type: String, default: '' },
  showSearchBar: { type: Boolean, default: true },
})

/**
 * Emit definitions
 */
defineEmits<{
  (event: 'update:searchTerms', value: string): void
  (event: 'click', id: string): void
}>()

/**
 * Slots definition
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
 * @param {FlapiTableItem} item - The item object
 * @param {string} path - The key or path to extract value
 * @returns {FlapiTableItem} The extracted value
 */
const getValue: (item: FlapiTableItem, path: string) => FlapiTableItem = (
  item: FlapiTableItem,
  path: string,
): FlapiTableItem => {
  return path.split('.').reduce((obj: FlapiTableItem, key: string) => obj[key], item)
}
</script>
