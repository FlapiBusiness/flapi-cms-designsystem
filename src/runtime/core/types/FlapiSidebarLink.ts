/**
 * Type definition for the FlapiSideBarLink props
 * @type {FlapiSidebarLinkProps}
 * @property {boolean} large - Whether the sidebar is expanded
 * @property {boolean} active - Whether the link is active
 * @property {string} to - The link to navigate to
 * @property {string} text - The text to display
 * @property {string} icon - The icon to display
 */
export type FlapiSidebarLinkProps = {
  large: boolean
  active: boolean
  to: string
  text: string
  icon: string
  iconViewBox?: string
}
