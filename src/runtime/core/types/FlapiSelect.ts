/**
 * Type definitions for the FlapiSelectOption type
 * @type {FlapiSelectOption}
 * @property {string} label - The label of the option
 * @property {number | string} value - The value of the option
 */
export type FlapiSelectOption = {
  label: string
  value: number | string
}

/**
 * Type definitions for the FlapiSelect component props
 * @type {FlapiSelectProps}
 * @property {FlapiSelectOption[]} options - The options for the select input
 * @property {FlapiSelectOption} modelValue - The selected option
 * @property {string} id - The id of the select input
 * @property {string | null} label - The label of the select input
 * @property {boolean} required - Whether the select input is required
 */
export type FlapiSelectProps = {
  options: FlapiSelectOption[]
  modelValue?: FlapiSelectOption
  id: string
  label?: string | null
  required: boolean
}
