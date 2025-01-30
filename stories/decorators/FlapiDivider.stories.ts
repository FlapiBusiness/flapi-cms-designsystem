import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiDivider from '#/components/decorators/FlapiDivider.vue'
import type { FlapiDividerProps } from '#/components/decorators/FlapiDivider.vue'

type FlapiDividerArgs = FlapiDividerProps

export default {
  title: 'decorators/FlapiDivider',
  component: FlapiDivider,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display in the divider.',
    },
  },
} as Meta<typeof FlapiDivider>

export const Playground: StoryFn<FlapiDividerArgs> = (args: FlapiDividerArgs) => ({
  components: { FlapiDivider },
  setup() {
    return { args }
  },
  template: `<FlapiDivider v-bind="args" />`,
})

Playground.args = {
  text: 'Or',
}

export const WithoutText: StoryFn<FlapiDividerArgs> = (args: FlapiDividerArgs) => ({
  components: { FlapiDivider },
  setup() {
    return { args }
  },
  template: `<FlapiDivider v-bind="args" />`,
})

WithoutText.args = {
  text: null,
}
