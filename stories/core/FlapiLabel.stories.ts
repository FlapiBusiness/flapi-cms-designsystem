import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiLabel from '#/components/core/FlapiLabel.vue'
import type { FlapiLabelProps } from '#/core'

type FlapiLabelArgs = FlapiLabelProps & { slotContent: string }

export default {
  title: 'core/FlapiLabel',
  component: FlapiLabel,
  argTypes: {
    id: {
      control: 'text',
      description: 'The unique ID of the label',
    },
    slotContent: {
      control: 'text',
      description: 'Content of the default slot (slot vuejs)',
    },
  },
} as Meta<typeof FlapiLabel>

export const Playground: StoryFn<FlapiLabelArgs> = (
  args: FlapiLabelArgs,
  { argTypes }: { argTypes: Record<string, unknown> },
) => ({
  components: { FlapiLabel },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
    <FlapiLabel v-bind="args">
      {{ args.slotContent }}
    </FlapiLabel>
  `,
})

Playground.args = {
  id: 'example-label',
  slotContent: 'Example label',
}
