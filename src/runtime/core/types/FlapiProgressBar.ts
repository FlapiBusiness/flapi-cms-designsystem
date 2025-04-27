/**
 * Type definitions for the FlapiProgressBar component props
 * @type {FlapiProgressBarProps}
 * @property {number} progress - The percentage of progress (0-100)
 * @property {number} height - Height of the progress bar
 * @property {string} backgroundColor - Color of the background bar
 * @property {string} progressColor - Color of the progress bar
 * @property {string} textColor - The color of the text
 * @property {boolean} showLabel - Whether to show the label with the percentage
 */
export type FlapiProgressBarProps = {
  progress: number
  height: number
  backgroundColor: string
  progressColor: string
  textColor: string
  showLabel: boolean
}
