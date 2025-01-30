import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSpinner from '#/components/ui/FlapiSpinner.vue'
import type { FlapiSpinnerProps } from '#/components/ui/FlapiSpinner.vue'

type FlapiSpinnerArgs = FlapiSpinnerProps

export default {
  title: 'ui/FlapiSpinner',
  component: FlapiSpinner,
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'The size of the spinner in pixels.',
    },
  },
} as Meta<typeof FlapiSpinner>

export const Playground: StoryFn<FlapiSpinnerArgs> = (args: FlapiSpinnerArgs) => ({
  components: { FlapiSpinner },
  setup() {
    return { args }
  },
  template: `<FlapiSpinner v-bind="args" />`,
})

Playground.args = {
  size: 80, // Default size in pixels
}
