import { iconsList } from './FlapiIcon'

export const flapiAlertVariants: string[] = ['error', 'success', 'warning', 'info'] as const

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
