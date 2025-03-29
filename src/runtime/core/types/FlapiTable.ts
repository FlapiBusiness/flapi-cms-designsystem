/**
 * Type definitions for the flapi table component
 * @type {FlapiTableItem}
 * @property {Record<string, any>} item - The item object
 */
export type FlapiTableItem = Record<string, any>

/**
 * Table field definition
 * @type {FlapiTableField}
 * @property {string} key - The key of the field
 * @property {string} label - The label to display in the header
 * @property {string} [cellsClasses] - Additional CSS classes for cells
 * @property {(value: any) => string} [formatValue] - Function to format the displayed value
 * @property {(item: FlapiTableItem) => string} [setTdStyle] - Function to set dynamic styles for the cell
 */
export type FlapiTableField = {
  key: string
  label: string
  cellsClasses?: string
  formatValue?: (value: any) => string
  setTdStyle?: (item: FlapiTableItem) => string
}

/**
 * Type definitions for the flapi button component props
 * @type {FlapiTableProps}
 * @property {FlapiTableField[]} fields - The fields to display
 * @property {FlapiTableItem[]} items - The items to display
 * @property {boolean} load - If the table is loading
 * @property {string} searchTerms - The search terms
 * @property {boolean} showSearchBar - If the search bar should be displayed
 */
export type FlapiTableProps = {
  fields: FlapiTableField[]
  items: FlapiTableItem[]
  load: boolean
  searchTerms: string
  showSearchBar: boolean
}
