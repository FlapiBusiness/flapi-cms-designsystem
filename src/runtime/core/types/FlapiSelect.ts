/**
 * Type definitions for the SelectOption type
 * @type {SelectOption}
 * @property {string} label - The label of the option
 * @property {number | string} value - The value of the option
 */
export type SelectOption = {
  label: string
  value: number | string
}

/**
 * Type definitions for the FlapiSelect component props
 * @type {FlapiSelectProps}
 * @property {SelectOption[]} options - The options for the select input
 * @property {SelectOption} modelValue - The selected option
 * @property {string} id - The id of the select input
 * @property {string | null} label - The label of the select input
 * @property {boolean} required - Whether the select input is required
 */
export type FlapiSelectProps = {
  options: SelectOption[]
  modelValue?: SelectOption
  id: string
  label?: string | null
  required: boolean
}
