import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiButton from './FlapiButton.vue'
import type { FlapiButtonProps } from './FlapiButton.vue'
import { variants } from '~/utils/constants'

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
    variant: {
      control: 'select',
      options: variants,
      description: 'Button variant',
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
      control: 'text',
      description: 'Icon name',
    },
  },
} as Meta<typeof FlapiButton>

export const Primary: StoryFn<FlapiButtonArgs> = (args, { argTypes }) => ({
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

Primary.args = {
  to: '',
  variant: 'primary',
  disabled: false,
  icon: '',
  iconPosition: null,
  slotContent: 'Click me!',
}
