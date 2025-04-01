<template>
  <div class="flex gap-2">
    <FlapiSquareButton :disabled="!canGoPrev" @click="emit('prev')">
      <FlapiIcon name="ChevronLeft" mode="stroke" />
    </FlapiSquareButton>
    <FlapiSquareButton
      v-for="(page, index) in displayedPages"
      :key="`page-${index}`"
      :disabled="page === '...'"
      :backgroundColor="page !== currentPage ? '#35424D' : undefined"
      :backgroundHoverColor="page !== currentPage ? '#454D5E' : undefined"
      :textColor="page !== currentPage ? '#BDB3FF' : undefined"
      @click="handlePageClick(page)"
    >
      <template v-if="page === '...'">
        <FlapiIcon name="MoreHorizontal" mode="stroke" />
      </template>
      <template v-else>{{ page }}</template>
    </FlapiSquareButton>

    <FlapiSquareButton :disabled="!canGoNext" @click="emit('next')">
      <FlapiIcon name="ChevronRight" mode="stroke" />
    </FlapiSquareButton>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import FlapiSquareButton from '#/components/buttons/FlapiSquareButton.vue'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
import type { FlapiPaginationProps, FlapiPaginationPageItem } from '#/core'

// TYPES
/**
 * Type representing emitted events
 */
type FlapiPaginationEmit = {
  (event: 'update:currentPage', value: number): void
  (event: 'prev'): void
  (event: 'next'): void
}

/**
 * Props definition for FlapiPagination
 */
const props: FlapiPaginationProps = defineProps({
  /** Current active page */
  currentPage: { type: Number, default: 0 },
  /** Total number of pages */
  totalPages: { type: Number, default: 0 },
  /** Maximum number of page buttons to display (excluding prev/next) */
  maxButtons: { type: Number, default: 0 },
})

/**
 * Emits events for the pagination component
 */
const emit: FlapiPaginationEmit = defineEmits<{
  (event: 'update:currentPage', value: number): void
  (event: 'prev'): void
  (event: 'next'): void
}>()

// COMPUTED

/**
 * Whether the user can go to the previous page
 * @returns {boolean} True if the user can go to the previous page, false otherwise
 */
const canGoPrev: ComputedRef<boolean> = computed(() => props.currentPage > 1 || props.totalPages === 0)

/**
 * Whether the user can go to the next page
 * @returns {boolean} True if the user can go to the next page, false otherwise
 */
const canGoNext: ComputedRef<boolean> = computed(() => props.currentPage < props.totalPages || props.totalPages === 0)

// METHODS

/**
 * Computed list of page numbers and ellipsis to display
 * @returns {Array<FlapiPaginationPageItem>} Array of page numbers and ellipsis
 */
const displayedPages: ComputedRef<FlapiPaginationPageItem[]> = computed((): FlapiPaginationPageItem[] => {
  if (props.maxButtons <= 0 || props.totalPages <= props.maxButtons + 1) {
    return Array.from({ length: props.totalPages }, (_: number, i: number) => i + 1)
  }

  const maxButtons: number = props.maxButtons
  const lastPage: number = props.totalPages
  const current: number = props.currentPage
  const reservedEnd: number = Math.floor((maxButtons + 1) / 2)
  const totalButtons: number = maxButtons + 1
  let pages: FlapiPaginationPageItem[] = []

  if (current < maxButtons - reservedEnd) {
    const end: number = maxButtons - reservedEnd
    for (let i: number = 1; i <= end; i++) {
      pages.push(i)
    }
    pages.push('...')
    for (let i: number = lastPage - reservedEnd + 1; i <= lastPage; i++) {
      pages.push(i)
    }
  } else if (current >= lastPage - reservedEnd) {
    const start: number = lastPage - totalButtons + 1
    for (let i: number = start; i <= lastPage; i++) {
      pages.push(i)
    }
  } else {
    const blockLength: number = maxButtons - reservedEnd
    const start: number = current - Math.floor(blockLength / 2)
    const end: number = start + blockLength - 1
    for (let i: number = start; i <= end; i++) {
      pages.push(i)
    }
    pages.push('...')
    for (let i: number = lastPage - reservedEnd + 1; i <= lastPage; i++) {
      pages.push(i)
    }
  }

  return pages
})

/**
 * Handles page click, including ellipsis behavior.
 * @param {FlapiPaginationPageItem} page - The clicked page item
 */
const handlePageClick: (page: FlapiPaginationPageItem) => void = (page: FlapiPaginationPageItem): void => {
  if (page !== '...') {
    emit('update:currentPage', page)
  }
}
</script>
