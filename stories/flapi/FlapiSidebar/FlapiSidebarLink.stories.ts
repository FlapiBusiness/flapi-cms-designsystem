import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSidebarLink from '@/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'
import type { SideBarLinkProps } from '@/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'

type FlapiSidebarLinkArgs = SideBarLinkProps

export default {
  title: 'flapi/FlapiSidebarLink',
  component: FlapiSidebarLink,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=202-282&t=V0nEv0XPtBh1SH8d-4',
    },
  },
  argTypes: {
    large: {
      control: 'boolean',
      description: 'Whether the sidebar is expanded (large view)',
    },
    item: {
      control: 'object',
      description: 'The sidebar link item containing route and text',
    },
    icon: {
      control: 'text',
      description: 'The name of the icon to display',
    },
  },
} as Meta<typeof FlapiSidebarLink>

const Template: StoryFn<FlapiSidebarLinkArgs> = (args: FlapiSidebarLinkArgs) => ({
  components: { FlapiSidebarLink },
  setup() {
    return { args }
  },
  template: `
    <ul class="bg-gray-100 p-4 rounded">
      <FlapiSidebarLink v-bind="args" />
    </ul>
  `,
})

export const Playground = Template.bind({})
Playground.args = {
  large: true,
  item: {
    to: '/dashboard',
    text: 'Dashboard',
    active: true,
  },
  icon: 'Dashboard',
}

export const Collapsed = Template.bind({})
Collapsed.args = {
  large: false,
  item: {
    to: '/settings',
    text: 'Settings',
    active: false,
  },
  icon: 'Settings',
}

export const ActiveLink = Template.bind({})
ActiveLink.args = {
  large: true,
  item: {
    to: '/profile',
    text: 'Profile',
    active: true,
  },
  icon: 'User',
}

export const InactiveLink = Template.bind({})
InactiveLink.args = {
  large: true,
  item: {
    to: '/logout',
    text: 'Logout',
    active: false,
  },
  icon: 'Logout',
}
