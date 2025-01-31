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
export type FlapiTableCardItem = Record<string, any>

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
  item?: FlapiTableCardItem | null
  load: boolean
}
