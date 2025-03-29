import type { iconsList } from './FlapiIcon'

/**
 * List of available variants for the FlapiAlert component
 * @description This list is used to define the different styles and behaviors of the alert component.
 */
export const flapiAlertVariants: string[] = ['error', 'success', 'warning', 'info'] as const

/**
 * Type definitions for the FlapiAlert component variants
 * @description This type is used to restrict the variant prop to the defined variants.
 */
export type FlapiAlertVariant = (typeof flapiAlertVariants)[number]

/**
 * Type definitions for the FlapiAlert component props
 */
export type FlapiAlertProps = {
  message: string
  icon?: (typeof iconsList)[number]
  dismissible?: boolean
  variant?: FlapiAlertVariant
}
