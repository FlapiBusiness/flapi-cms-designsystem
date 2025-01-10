import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSidebar from '@/components/flapi/FlapiSidebar/FlapiSidebar.vue'
import type { FlapiSidebarProps } from '@/components/flapi/FlapiSidebar/FlapiSidebar.vue'

type FlapiSidebarArgs = FlapiSidebarProps

export default {
  title: 'flapi/FlapiSidebar/FlapiSidebar',
  component: FlapiSidebar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the component',
    },
  },
} as Meta<typeof FlapiSidebar>

export const Default: StoryFn<FlapiSidebarArgs> = (args) => ({
  components: { FlapiSidebar },
  setup() {
    return { args }
  },
  template: `
    <FlapiSidebar v-bind="args" :title="args.title" />
  `,
})

Default.args = {
  title: 'FlapiSidebar',
}
