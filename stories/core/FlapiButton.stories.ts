import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiButton, { flapiButtonSizes } from '@/components/core/FlapiButton.vue'
import { iconsList } from '@/components/ui/FlapiIcon.vue'
import type { FlapiButtonProps } from '@/components/core/FlapiButton.vue'
import type { StrictArgTypes } from '@storybook/csf'

type FlapiButtonArgs = FlapiButtonProps & { slotContent: string }

export default {
  title: 'core/FlapiButton',
  component: FlapiButton,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=134-33&t=4OSbDsauIIR7lH4x-4',
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      control: {
        type: 'function',
      },
      description: 'Function called when the button is clicked',
    },
    slotContent: {
      control: 'text',
      description: 'Content of the default slot',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the button',
    },
    backgroundHoverColor: {
      control: 'color',
      description: 'Background color of the button on hover',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', null],
      description: 'Position of the icon',
    },
    to: {
      control: 'text',
      description: 'Route to navigate to',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    icon: {
      control: 'select',
      options: iconsList,
      description: 'Icon name',
    },
    size: {
      control: 'select',
      options: flapiButtonSizes,
      description: 'Size of the button',
    },
  },
} as Meta<typeof FlapiButton>

export const Playground: StoryFn<FlapiButtonArgs> = (
  args: FlapiButtonArgs,
  { argTypes }: { argTypes: StrictArgTypes<FlapiButtonArgs> },
) => ({
  components: { FlapiButton },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
      <FlapiButton v-bind="args">
        {{ args.slotContent }}
      </FlapiButton>
    `,
})

Playground.args = {
  to: '',
  backgroundColor: '#8472F3',
  backgroundHoverColor: '#6B59D9',
  disabled: false,
  icon: '',
  iconPosition: null,
  slotContent: 'Click me!',
  size: 'md',
}
