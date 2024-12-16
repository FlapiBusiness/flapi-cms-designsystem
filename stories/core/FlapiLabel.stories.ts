import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiLabel from '@/components/core/FlapiLabel.vue'
import type { FlapiLabelProps } from '@/components/core/FlapiLabel.vue'

type FlapiLabelArgs = FlapiLabelProps & { slotContent: string }

export default {
  title: 'core/FlapiLabel',
  component: FlapiLabel,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=606-4195&t=ubo73Ri6rnShXUDA-4',
    },
  },
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
