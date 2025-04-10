/**
 * Position options for the tooltip
 */
export const tooltipPositions: string[] = ['top', 'bottom', 'left', 'right'] as const

/**
 * Type for the position prop
 */
export type FlapiTooltipPosition = (typeof tooltipPositions)[number]

/**
 * Type definitions for the FlapiTooltipProps component props
 * @type {FlapiTooltipProps}
 * @property {string} text - The text to be displayed in the tooltip
 * @property {FlapiTooltipPosition} [position] - The position of the tooltip (default: 'top')
 * @property {boolean} [show] - Disabled tooltip (default: false)
 */
export type FlapiTooltipProps = {
  text: string
  position?: FlapiTooltipPosition
  disabled?: boolean
}
