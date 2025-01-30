import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiGoogleButton from '#/components/buttons/FlapiGoogleButton.vue'
import type { FlapiGoogleButtonProps } from '#/components/buttons/FlapiGoogleButton.vue'

type FlapiGoogleButtonArgs = FlapiGoogleButtonProps

export default {
  title: 'buttons/FlapiGoogleButton',
  component: FlapiGoogleButton,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
} as Meta<typeof FlapiGoogleButton>

export const Playground: StoryFn<FlapiGoogleButtonArgs> = (
  args: FlapiGoogleButtonArgs,
  { argTypes }: { argTypes: Record<string, unknown> },
) => ({
  components: { FlapiGoogleButton },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
    <FlapiGoogleButton v-bind="args" />
  `,
})

Playground.args = {
  disabled: false,
}
