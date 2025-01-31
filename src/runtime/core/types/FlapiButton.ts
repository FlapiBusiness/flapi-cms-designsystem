export const flapiButtonSizes: string[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

/**
 * Type definitions for the flapi button component size
 * @type {FlapiButtonSize}
 */
export type FlapiButtonSize = (typeof flapiButtonSizes)[number]

/**
 * Type definitions for the flapi button component props
 * @type {FlapiButtonProps}
 * @property {string | null} to - The route to navigate to
 * @property {string} backgroundColor - The button background color
 * @property {string} backgroundHoverColor - The button background hover color
 * @property {boolean} disabled - Whether the button is disabled
 * @property {string | null} icon - The icon to display
 * @property {'left' | 'right' | null} iconPosition - The icon position
 * @property {FlapiButtonSize} size - The button size
 */
export type FlapiButtonProps = {
  to?: string | null
  backgroundColor: string
  backgroundHoverColor: string
  disabled: boolean
  icon?: string | null
  iconPosition?: 'left' | 'right' | null
  size: FlapiButtonSize
}
