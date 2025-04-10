import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSidebarLink from '#/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'
import type { FlapiSidebarLinkProps } from '#/core'

type FlapiSidebarLinkArgs = FlapiSidebarLinkProps

export default {
  title: 'flapi/FlapiSidebarLink',
  component: FlapiSidebarLink,
  argTypes: {
    large: {
      control: 'boolean',
      description: 'Whether the sidebar is expanded (large view)',
    },
    active: {
      control: 'boolean',
      description: 'Whether the sidebar link is active',
    },
    to: {
      control: 'text',
      description: 'The route to navigate to when the link is clicked',
    },
    text: {
      control: 'text',
      description: 'The text to display',
    },
    icon: {
      control: 'text',
      description: 'The name of the icon to display',
    },
    iconViewBox: {
      control: 'text',
      description: 'The viewBox attribute for the icon SVG',
    },
  },
} as Meta<typeof FlapiSidebarLink>

const Template: StoryFn<FlapiSidebarLinkArgs> = (args: FlapiSidebarLinkArgs) => ({
  components: { FlapiSidebarLink },
  setup() {
    return { args }
  },
  template: `
    <ul>
      <FlapiSidebarLink v-bind="args" />
    </ul>
  `,
})

export const Playground = Template.bind({})
Playground.args = {
  large: true,
  active: true,
  to: '/dashboard',
  text: 'Dashboard',
  icon: 'Home',
}

export const Collapsed = Template.bind({})
Collapsed.args = {
  large: false,
  active: false,
  to: '/settings',
  text: 'Settings',
  icon: 'Settings',
}

export const ActiveLink = Template.bind({})
ActiveLink.args = {
  large: true,
  active: true,
  to: '/users',
  text: 'users',
  icon: 'Users',
}

export const InactiveLink = Template.bind({})
InactiveLink.args = {
  large: true,
  active: false,
  to: '/automating',
  text: 'automating',
  icon: 'Share',
}
