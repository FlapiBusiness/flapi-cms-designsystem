export const flapiBadgeSizes: string[] = ['sm', 'md', 'lg', 'xl']
/**
 * Type definitions for the FlapiBadge component props
 * @type {FlapiBadgeSize}
 * @property {string} sm - Small size
 * @property {string} md - Medium size
 * @property {string} lg - Large size
 * @property {string} xl - Extra large size
 */
export type FlapiBadgeSize = (typeof flapiBadgeSizes)[number]

/**
 * Type definitions for the FlapiBadge component props
 * @type {FlapiBadgeProps}
 * @property {boolean} close - Whether to show the close button
 * @property {string} backgroundColor - The background color of the badge
 * @property {string | null} textColor - The text color of the badge
 * @property {FlapiBadgeSize} size - The size of the badge
 */
export type FlapiBadgeProps = {
  close: boolean
  backgroundColor: string
  textColor?: string | null
  size: FlapiBadgeSize
}
