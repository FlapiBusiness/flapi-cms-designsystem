<template>
  <div class="relative z-10 py-10 text-light-400 lg:py-14">
    <div class="grid gap-12" v-if="showTableCard">
      <!-- Search Bar -->
      <div
        v-if="props.showSearchBar"
        class="flex w-full"
        :class="{
          'justify-center': !props.searchBarPosition || props.searchBarPosition === 'center',
          'justify-start': props.searchBarPosition === 'left',
          'justify-end': props.searchBarPosition === 'right',
        }"
      >
        <FlapiSearchBar :value="props.searchTerms" @update:value="$emit('update:searchTerms', $event)" />
      </div>

      <!-- Pagination -->
      <div class="flex w-full items-center justify-center gap-2">
        <FlapiSelect
          v-if="showItemsPerPageSelect"
          :options="itemsPerPagesOptions"
          :modelValue="itemsPerPage"
          @update:modelValue="handleSelectChange"
          id="itemsPerPage"
        />
        <FlapiPagination
          v-if="totalPages > 1"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :maxButtons="4"
          @update:currentPage="goToPage"
          @prev="goToPrev"
          @next="goToNext"
        />
      </div>

      <!-- Cards -->
      <div v-if="paginatedItems.length > 0" class="flex w-full flex-wrap items-center gap-6">
        <FlapiTableCard
          v-for="(item, index) in paginatedItems"
          :fields="props.cardFields || props.fields"
          :item="item"
          :load="props.load"
          :key="`card-${index}-${item.id}`"
        >
          <!--  SLOT card-header  -->
          <template v-if="hasSlot('card-header')" #header="slotProps">
            <slot name="card-header" v-bind="slotProps" />
          </template>

          <template v-for="(field, i) in fieldsWithSlot" #[field.key]="slotProps" :key="`slot-${i}-${field.key}`">
            <slot :name="field.key" v-bind="slotProps" />
          </template>
        </FlapiTableCard>
      </div>
      <p v-else class="flex w-full items-center justify-center gap-2 text-center text-light-400">
        <span class="text-sm font-semibold">Aucun résultat</span>
      </p>
    </div>

    <!-- Card -->
    <div v-else class="flex flex-col">
      <div class="w-full overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden rounded-lg bg-gray-500 shadow-sm">
            <!-- Header -->
            <div
              v-if="props.showSearchBar"
              class="grid gap-3 border-b border-gray-500 bg-gray-500 px-6 py-4 md:flex md:items-center md:justify-between"
            >
              <!-- Input -->
              <div
                class="flex w-full"
                :class="{
                  'justify-center': !searchBarPosition || searchBarPosition === 'center',
                  'justify-start': searchBarPosition === 'left',
                  'justify-end': searchBarPosition === 'right',
                }"
              >
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
                    class="px-6 py-3 text-left hover:opacity-95"
                    :class="[field.cellsClasses, { 'cursor-pointer': props.clickable }]"
                  >
                    <span class="text-xs font-semibold uppercase tracking-wide text-light-400">
                      {{ field.label }}
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody v-if="paginatedItems.length && !props.load" class="divide-y divide-light-300">
                <tr
                  v-for="(item, i) in paginatedItems"
                  :key="`row-${i}-${item.id}`"
                  @click="$emit('click', item.id)"
                  class="divide-x divide-light-300 hover:bg-gray-200"
                  :class="{ 'cursor-pointer': props.clickable }"
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
            <div
              v-if="showItemsPerPageSelect || totalPages > 1"
              class="grid gap-3 border-t border-light-300 px-6 py-4 md:flex md:items-center md:justify-between"
            >
              <div v-if="showItemsPerPageSelect" class="w-full max-w-[80px] space-y-3">
                <FlapiSelect
                  :options="itemsPerPagesOptions"
                  :modelValue="itemsPerPage"
                  @update:modelValue="handleSelectChange"
                  id="itemsPerPage"
                />
              </div>

              <div v-if="totalPages > 1" class="flex w-full justify-center md:justify-end">
                <FlapiPagination
                  :currentPage="currentPage"
                  :totalPages="totalPages"
                  :maxButtons="4"
                  @update:currentPage="goToPage"
                  @prev="goToPrev"
                  @next="goToNext"
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
import type { PropType, SetupContext, Ref, ComputedRef } from 'vue'
import { defineProps, useSlots, defineEmits, ref, onMounted, onUnmounted, computed } from 'vue'
import FlapiSearchBar from '#/components/inputs/FlapiSearchBar.vue'
import FlapiSpinner from '#/components/ui/FlapiSpinner.vue'
import FlapiSelect from '#/components/core/FlapiSelect.vue'
import type {
  FlapiTableProps,
  FlapiTableField,
  FlapiTableItem,
  FlapiTableSearchBarPosition,
  FlapiTableCardField,
  FlapiTableItemPerPage,
  FlapiSelectOption,
} from '#/core'
import FlapiTableCard from '#/components/cards/FlapiTableCard.vue'
import FlapiPagination from '#/components/navigations/FlapiPagination.vue'

// PROPS
/**
 * Props definition for the table component
 */
const props: FlapiTableProps = defineProps({
  fields: { type: Array as PropType<FlapiTableField[]>, required: true },
  cardFields: { type: Array as PropType<FlapiTableCardField[]>, default: null },
  items: { type: Array as PropType<FlapiTableItem[]>, required: true },
  load: { type: Boolean, default: false },
  searchTerms: { type: String, default: '' },
  showSearchBar: { type: Boolean, default: true },
  searchBarPosition: { type: String as PropType<FlapiTableSearchBarPosition>, default: 'right' },
  clickable: { type: Boolean, default: false },
  switchToCardAt: { type: Number, default: null },
  itemsPerPage: { type: Number, default: 10 },
})

// EMIT
/**
 * Emit definitions
 */
defineEmits<{
  (event: 'update:searchTerms', value: string): void
  (event: 'click', id: string): void
}>()

// COMPUTED
/**
 * Computed property to determine if the table should be displayed as a card
 */
const showTableCard: ComputedRef<boolean> = computed((): boolean => {
  return typeof props.switchToCardAt === 'number' ? screenWidth.value <= props.switchToCardAt : false
})

const fieldsWithSlot: ComputedRef<FlapiTableField[]> = computed((): FlapiTableField[] => {
  return (props.cardFields || props.fields).filter((field: FlapiTableField) => {
    return hasSlot(field.key)
  })
})

/**
 * Computed property to get the total number of pages
 * @returns {FlapiTableItem[]} The paginated items
 */
const paginatedItems: ComputedRef<FlapiTableItem[]> = computed(() => {
  const start: number = (currentPage.value - 1) * itemsPerPage.value.value
  const end: number = start + itemsPerPage.value.value
  return props.items.slice(start, end)
})

/**
 * Function to go to a specific page
 * @returns {number} The total number of pages
 */
const totalPages: ComputedRef<number> = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage.value.value)
})

/**
 * Computed property to get the items per page options
 * @returns {FlapiTableItemPerPage[]} The items per page options
 */
const itemsPerPagesOptions: ComputedRef<FlapiTableItemPerPage[]> = computed(() => {
  const res: FlapiTableItemPerPage[] = [
    { label: '10', value: 10 },
    { label: '20', value: 20 },
    { label: '50', value: 50 },
    { label: '75', value: 75 },
    { label: '100', value: 100 },
  ]

  // add in res with props itemsPerPage if not already in res
  if (!res.some((item: FlapiTableItemPerPage) => item.value === props.itemsPerPage)) {
    res.push({ label: String(props.itemsPerPage), value: props.itemsPerPage })
  }

  return res
})

/**
 * Computed property to get the minimum items per page
 * @returns {number} The minimum items per page
 */
const minItemsPerPage: ComputedRef<number> = computed(() => {
  return Math.min(...itemsPerPagesOptions.value.map((item: FlapiTableItemPerPage) => item.value))
})

const showItemsPerPageSelect: ComputedRef<boolean> = computed(() => {
  return props.items.length > minItemsPerPage.value && !props.load
})

// REF
/**
 * Ref for screen width
 */
const screenWidth: Ref<number> = ref(window.innerWidth)
/**
 * Ref for pagination, to track the current page
 */
const currentPage: Ref<number> = ref(1)

/**
 * Ref for pagination, used to display the x items per page
 */
const itemsPerPage: Ref<FlapiTableItemPerPage> = ref(
  itemsPerPagesOptions.value.find((item: FlapiTableItemPerPage) => item.value === props.itemsPerPage) ||
    itemsPerPagesOptions.value[0],
)

// SLOTS
/**
 * Slots definition
 */
const slots: SetupContext['slots'] = useSlots()

// METHODS
/**
 * Function to update the screen width
 */
const updateScreenWidth: () => void = (): void => {
  screenWidth.value = window.innerWidth
}

/**
 * Check if a slot exists
 * @param {string} name - The name of the slot
 * @returns {boolean} True if slot exists
 */
const hasSlot: (name: string) => boolean = (name: string): boolean => !!slots[name]

/**
 * Function to get the value of an object using a path
 * @param {FlapiTableItem | null} item - The item object
 * @param {string} path - The key or path to extract value
 * @returns {FlapiTableItem | null} The extracted value
 */
const getValue: (item: FlapiTableItem | null, path: string) => FlapiTableItem | null = (
  item: FlapiTableItem | null,
  path: string,
): FlapiTableItem | null => {
  return path.split('.').reduce((obj: FlapiTableItem | null, key: string) => {
    if (obj) {
      return obj[key]
    }
    return null
  }, item)
}

/**
 * Function to handle the change of items per page
 * @param {FlapiSelectOption} value - The selected value
 * @returns {void}
 */
const handleSelectChange: (value: FlapiSelectOption) => void = (value: FlapiSelectOption): void => {
  itemsPerPage.value = {
    label: value.label,
    value: Number(value.value),
  }
  currentPage.value = 1
}

/**
 * Function to go to a specific page
 * @param {number} page - The page number
 * @returns {void}
 */
const goToPage: (page: number) => void = (page: number): void => {
  currentPage.value = page
}

/**
 * Function to go to the previous page
 * @returns {void}
 */
const goToPrev: () => void = (): void => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

/**
 * Function to go to the next page
 * @returns {void}
 */
const goToNext: () => void = (): void => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// LIFECYCLE
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>
