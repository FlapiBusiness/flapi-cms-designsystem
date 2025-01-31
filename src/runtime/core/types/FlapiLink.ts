/**
 * Type definitions for the FlapiLink component props
 * @type {FlapiLinkProps}
 * @property {boolean} externalLink - Whether the link is external or internal
 * @property {string} link - The link to navigate to
 */
export type FlapiLinkProps = {
  readonly externalLink: boolean
  readonly link: string
}
