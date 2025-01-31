import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiButton from '#/components/core/FlapiButton.vue'
import type { StrictArgTypes } from '@storybook/csf'
import { flapiButtonSizes, iconsList } from '#/core'
import type { FlapiButtonProps } from '#/core'

type FlapiButtonArgs = FlapiButtonProps & { slotContent: string }

export default {
  title: 'core/FlapiButton',
  component: FlapiButton,
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
      description: 'Content of the default slot (slot vuejs)',
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
