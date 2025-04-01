/**
 * Type definitions for the flapi pagination component.
 * This component is used to display pagination controls for navigating through a list of items.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages available.
 * @param {number} maxButtons - The maximum number of pagination buttons to display.
 */
export type FlapiPaginationProps = {
  currentPage: number
  totalPages: number
  maxButtons: number
}

/**
 * Represents a page item in the pagination (number or ellipsis).
 */
export type FlapiPaginationPageItem = number | '...'
