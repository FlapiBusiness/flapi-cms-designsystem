import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiMyComponentTwo from './FlapiMyComponentTwo.vue'
import type { FlapiMyComponentTwoProps } from './FlapiMyComponentTwo.vue'

type FlapiMyComponentTwoArgs = FlapiMyComponentTwoProps

export default {
  title: 'core/FlapiMyComponentTwo',
  component: FlapiMyComponentTwo,
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
} as Meta<typeof FlapiMyComponentTwo>

export const Default: StoryFn<FlapiMyComponentTwoArgs> = (args, { argTypes }) => ({
  components: { FlapiMyComponentTwo },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
      <FlapiMyComponentTwo v-bind="args" :title="args.title" />
    `,
})

Default.args = {
  title: 'FlapiMyComponentTwo',
}
