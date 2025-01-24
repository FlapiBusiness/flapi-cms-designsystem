import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSpinner from '#/components/ui/FlapiSpinner.vue'
import type { FlapiSpinnerProps } from '#/components/ui/FlapiSpinner.vue'

type FlapiSpinnerArgs = FlapiSpinnerProps

export default {
  title: 'ui/FlapiSpinner',
  component: FlapiSpinner,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=191-104&t=vY5X9uhmiQklBaE2-4',
    },
  },
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
