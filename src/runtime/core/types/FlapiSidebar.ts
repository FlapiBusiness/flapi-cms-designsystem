/**
 * Sidebar item definition
 * @type {FlapiSidebarItem}
 * @property {string} to - The route to navigate to
 * @property {string} icon - The icon to display
 * @property {string} text - The text for the link
 */
export type FlapiSidebarItem = {
  to?: string
  icon: string
  iconViewBox?: string
  text: string
  subItems?: FlapiSidebarItem[]
}

/**
 * Sidebar props definition
 * @type {FlapiSidebarProps}
 * @property {string} username - The username to display in the footer
 * @property {FlapiSidebarItem[]} items - The list of sidebar links
 * @property {string | null} avatar - The avatar image URL
 * @property {boolean} expand - Whether the sidebar is expanded
 */
export type FlapiSidebarProps = {
  username: string
  items: FlapiSidebarItem[]
  avatar?: string | null
  expand: boolean
  activePath?: string | null
}

/**
 * Sidebar emits definition
 * @type {FlapiSidebarEmit}
 */
export type FlapiSidebarEmit = {
  (event: 'update:expand', value: boolean): void
  (event: 'update:activePath', value: string): void
}
