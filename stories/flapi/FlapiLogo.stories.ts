import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiLogo from '#/components/flapi/FlapiLogo.vue'
import type { FlapiLogoProps } from '#/components/flapi/FlapiLogo.vue'

/**
 * Storybook configuration for the FlapiLogo component.
 */
export default {
  title: 'flapi/FlapiLogo',
  component: FlapiLogo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=1607-6191&t=zPLqciXLXyiSr1NK-4',
    },
  },
  argTypes: {
    size: {
      control: 'number',
      description: 'The size of the logo in pixels.',
      defaultValue: 40,
    },
    large: {
      control: 'boolean',
      description: 'If true, displays the "Flapi" text next to the logo.',
      defaultValue: false,
    },
  },
} as Meta<typeof FlapiLogo>

/**
 * Template for the FlapiLogo component stories.
 */
const Template: StoryFn<FlapiLogoProps> = (args: FlapiLogoProps) => ({
  components: { FlapiLogo },
  setup() {
    return { args }
  },
  template: `<FlapiLogo v-bind="args" />`,
})

/**
 * Default story for the FlapiLogo component.
 */
export const Default = Template.bind({})
Default.args = {
  size: 40,
  large: false,
}

/**
 * Story for a large FlapiLogo with text.
 */
export const LargeWithText = Template.bind({})
LargeWithText.args = {
  size: 60,
  large: true,
}

/**
 * Story for a small FlapiLogo.
 */
export const Small = Template.bind({})
Small.args = {
  size: 20,
  large: false,
}
