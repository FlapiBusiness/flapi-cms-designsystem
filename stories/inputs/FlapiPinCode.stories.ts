import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiPinCode from '#/components/inputs/FlapiPinCode.vue'
import type { FlapiPinCodeProps } from '#/components/inputs/FlapiPinCode.vue'

type FlapiPinCodeArgs = FlapiPinCodeProps & {
  onConfirm?: (code: string) => void
}

export default {
  title: 'inputs/FlapiPinCode',
  component: FlapiPinCode,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=456-3255&t=vY5X9uhmiQklBaE2-4',
    },
  },
  argTypes: {
    length: {
      control: { type: 'number', min: 4, max: 12 },
      description: 'The number of input fields for the pin code',
      table: {
        defaultValue: { summary: '6' },
      },
    },
    onConfirm: {
      action: 'confirm',
      description: 'Triggered when the full pin code is entered',
    },
  },
} as Meta<typeof FlapiPinCode>

export const Playground: StoryFn<FlapiPinCodeArgs> = (args: FlapiPinCodeArgs) => ({
  components: { FlapiPinCode },
  setup() {
    /**
     * Handles the confirmation event.
     * @param {string} code - The confirmed pin code
     */
    const handleConfirm: (code: string) => void = (code: string): void => {
      console.log('Pin Code Entered:', code)
      args.onConfirm?.(code)
    }

    return { args, handleConfirm }
  },
  template: `
    <FlapiPinCode v-bind="args" @confirm="handleConfirm" />
  `,
})

Playground.args = {
  length: 6,
}
