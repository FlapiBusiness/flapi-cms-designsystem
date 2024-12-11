import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiMyComponentB from './FlapiMyComponentB.vue'
import type { FlapiMyComponentBProps } from './FlapiMyComponentB.vue'

type FlapiMyComponentBArgs = FlapiMyComponentBProps

export default {
  title: 'core/FlapiMyComponentB',
  component: FlapiMyComponentB,
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
} as Meta<typeof FlapiMyComponentB>

export const Default: StoryFn<FlapiMyComponentBArgs> = (args, { argTypes }) => ({
  components: { FlapiMyComponentB },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
      <FlapiMyComponentB v-bind="args" :title="args.title" />
    `,
})

Default.args = {
  title: 'FlapiMyComponentB',
}
