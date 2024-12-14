import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiButton, { flapiButtonSizes } from './FlapiButton.vue'
import type { FlapiButtonProps } from './FlapiButton.vue'
import type { StrictArgTypes } from '@storybook/csf'

/**
 * Args definition for FlapiButton story.
 */
type FlapiButtonArgs = FlapiButtonProps & { slotContent: string }

export default {
  /**
   * Title for the Storybook sidebar.
   */
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
      control: 'text',
      description: 'Icon name',
    },
    size: {
      control: 'select',
      options: flapiButtonSizes,
      description: 'Size of the button',
    },
  },
} as Meta<typeof FlapiButton>

/**
 * Default story for FlapiButton.
 * @param {FlapiButtonArgs} args - The arguments for the story.
 * @param {StrictArgTypes<FlapiButtonArgs>} argTypes - The argument types for the story.
 * @returns {StoryFn} - The story.
 */
export const Default: StoryFn<FlapiButtonArgs> = (
  args: FlapiButtonArgs,
  { argTypes }: { argTypes: StrictArgTypes<FlapiButtonArgs> },
) => ({
  components: { FlapiButton },
  props: Object.keys(argTypes),
  /**
   * Setup the story.
   * @returns {FlapiButtonArgs} - The arguments for the story.
   */
  setup(): { args: FlapiButtonArgs } {
    return { args }
  },
  template: `
      <FlapiButton v-bind="args">
        {{ args.slotContent }}
      </FlapiButton>
    `,
})

Default.args = {
  to: '',
  backgroundColor: '#8472F3',
  backgroundHoverColor: '#6B59D9',
  disabled: false,
  icon: '',
  iconPosition: null,
  slotContent: 'Click me!',
  size: 'md',
}
