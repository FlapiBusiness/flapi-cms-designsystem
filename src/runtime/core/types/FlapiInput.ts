/**
 * Type definitions for the flapi input component props
 * @type {FlapiInputProps}
 * @property {string | null} placeholder - The input placeholder
 * @property {string | number} value - The input value
 * @property {number | null} rows - The input rows
 * @property {string} id - The input id
 * @property {string} type - The input type
 * @property {string | null} rules - The input rules
 * @property {string | null} label - The input label
 * @property {number | null} min - The input min value
 * @property {string | null} step - The input step value
 */
export type FlapiInputProps = {
  placeholder: string | null
  value: string | number
  rows: number | null
  id: string
  type: string
  rules: string | null
  label: string | null
  min: number | null
  step: number | null
}
