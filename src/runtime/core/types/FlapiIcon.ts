import type { Component } from 'vue'

/**
 * Type definition for the dynamic import of icons.
 */
type IconImportMap = Record<string, () => Promise<{ default: Component }>>

/**
 * Dynamically import all icon components.
 * @constant {IconImportMap}
 */
export const icons: IconImportMap = import.meta.glob('../../components/icons/*.vue') as IconImportMap

/**
 * Available icon names extracted from the imported files.
 * @constant {string[]}
 */
export const iconsList: string[] = Object.keys(icons).map(
  (filePath: string): string => filePath.split('/').pop()?.replace('.vue', '') ?? '',
)

export const flapiIconModes: string[] = ['fill', 'stroke']

/**
 * Enum-like definition for available icon display modes.
 */
export type FlapiIconMode = (typeof flapiIconModes)[number]

/**
 * Type definition for the component props.
 */
export type FlapiIconProps = {
  name: (typeof iconsList)[number]
  width: number | string
  height: number | string
  viewBox: string
  mode: FlapiIconMode
  color: string
}
