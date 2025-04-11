import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSidebar from '#/components/flapi/FlapiSidebar/FlapiSidebar.vue'
import items from '#/components/flapi/FlapiSidebar/items.json'
import subItems from '#/components/flapi/FlapiSidebar/sub-items.json'
import type { FlapiSidebarProps } from '#/core'
import { ref } from 'vue'
import type { Ref } from 'vue'

type FlapiSidebarArgs = FlapiSidebarProps

export default {
  title: 'flapi/FlapiSidebar',
  component: FlapiSidebar,
  argTypes: {
    username: {
      control: 'text',
      description: 'The username displayed in the footer',
    },
    items: {
      control: 'object',
      description: 'The list of items displayed in the sidebar',
    },
    avatar: {
      control: 'text',
      description: 'The URL of the avatar photo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    expand: {
      control: 'boolean',
      description: 'The sidebar expand state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    activePath: {
      control: 'text',
      description: 'The active path for the sidebar item',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
} as Meta<typeof FlapiSidebar>

const Template: StoryFn<FlapiSidebarArgs> = (args: FlapiSidebarArgs) => ({
  components: { FlapiSidebar },
  setup() {
    const expand: Ref<boolean> = ref(args.expand)
    const activePath: Ref<string | null> = ref(args.activePath || null)

    /**
     * Updates the expanded state of the sidebar
     * @param {boolean} value - The new expanded state
     * @returns {void}
     */
    const handleUpdateExpand: (value: boolean) => void = (value: boolean): void => {
      expand.value = value
    }

    /**
     * Updates the active path of the sidebar
     * @param {string} value - The new active path
     * @returns {void}
     */
    const handleUpdateActivePath: (value: string) => void = (value: string): void => {
      activePath.value = value
    }

    return { args, expand, activePath, handleUpdateActivePath, handleUpdateExpand }
  },
  template: `
    <div class="h-screen">
      <FlapiSidebar 
        v-bind="args" 
        :expand="expand"  
        :activePath="activePath"
        @update:expand="handleUpdateExpand" 
        @update:activePath="handleUpdateActivePath"
      />
    </div>
  `,
})

// Sidebar in Expanded Mode
export const Expanded = Template.bind({})
Expanded.args = {
  username: 'John Doe',
  items,
  avatar: '/assets/avatar-placeholder.png',
  expand: true,
  activePath: '/',
}

// Sidebar in Collapsed Mode
export const Collapsed = Template.bind({})
Collapsed.args = {
  username: 'John Doe',
  items,
  avatar: '/assets/avatar-placeholder.png',
  expand: false,
  activePath: '/',
}

// Sidebar with no Avatar
export const NoAvatar = Template.bind({})
NoAvatar.args = {
  username: 'John Doe',
  items,
  avatar: null,
  expand: true,
  activePath: '/',
}

// Sidebar with subItems
export const WithSubItems = Template.bind({})
WithSubItems.args = {
  username: 'John Doe',
  items: subItems,
  avatar: '/assets/avatar-placeholder.png',
  expand: false,
  activePath: '/users',
}
