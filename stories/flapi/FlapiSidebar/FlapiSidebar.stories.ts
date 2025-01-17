import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSidebar from '@/components/flapi/FlapiSidebar/FlapiSidebar.vue'
import items from '@/components/flapi/FlapiSidebar/items.json'
import type { FlapiSidebarProps } from '@/components/flapi/FlapiSidebar/FlapiSidebar.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

type FlapiSidebarArgs = FlapiSidebarProps

export default {
  title: 'flapi/FlapiSidebar',
  component: FlapiSidebar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=213-960&t=yJUqBq7YbziDMzPI-4',
    },
  },
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
  },
} as Meta<typeof FlapiSidebar>

const Template: StoryFn<FlapiSidebarArgs> = (args: FlapiSidebarArgs) => ({
  components: { FlapiSidebar },
  setup() {
    const expand: Ref<boolean> = ref(args.expand)

    /**
     * Updates the expanded state of the sidebar
     * @param {boolean} value - The new expanded state
     * @returns {void}
     */
    const handleUpdateExpand: (value: boolean) => void = (value: boolean): void => {
      expand.value = value
    }

    return { args, expand, handleUpdateExpand }
  },
  template: `
    <div class="h-screen">
      <FlapiSidebar v-bind="args" :expand="expand"  @update:expand="handleUpdateExpand" />
    </div>
  `,
})

// Sidebar in Expanded Mode
export const Expanded = Template.bind({})
Expanded.args = {
  username: 'John Doe',
  items,
  avatar: 'stories/assets/avatar-placeholder.png',
  expand: true,
}

// Sidebar in Collapsed Mode
export const Collapsed = Template.bind({})
Collapsed.args = {
  username: 'John Doe',
  items,
  avatar: 'stories/assets/avatar-placeholder.png',
  expand: false,
}
