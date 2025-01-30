import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSquareButton from '#/components/buttons/FlapiSquareButton.vue'
import type { FlapiSquareButtonProps } from '#/components/buttons/FlapiSquareButton.vue'

type FlapiSquareButtonArgs = FlapiSquareButtonProps

export default {
  title: 'buttons/FlapiSquareButton',
  component: FlapiSquareButton,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'The background color of the button',
    },
    backgroundHoverColor: {
      control: 'color',
      description: 'The background hover color of the button',
    },
    textColor: {
      control: 'color',
      description: 'The text color of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    size: {
      control: { type: 'number', min: 20, max: 100, step: 1 },
      description: 'The size of the button (width and height)',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
} as Meta<typeof FlapiSquareButton>

export const Playground: StoryFn<FlapiSquareButtonArgs> = (args: FlapiSquareButtonArgs) => ({
  components: { FlapiSquareButton },
  setup() {
    return { args }
  },
  template: `
      <FlapiSquareButton v-bind="args">
        <span>1</span>
      </FlapiSquareButton>
    `,
})

Playground.args = {
  backgroundColor: '#8472F3',
  backgroundHoverColor: '#6B59D9',
  disabled: false,
  size: 40,
  textColor: '#F5F4FB',
}

export const Disabled: StoryFn<FlapiSquareButtonArgs> = (args: FlapiSquareButtonArgs) => ({
  components: { FlapiSquareButton },
  setup() {
    return { args }
  },
  template: `
      <FlapiSquareButton v-bind="args">
        <span>2</span>
      </FlapiSquareButton>
    `,
})

Disabled.args = {
  ...Playground.args,
  disabled: true,
}

export const CustomSize: StoryFn<FlapiSquareButtonArgs> = (args: FlapiSquareButtonArgs) => ({
  components: { FlapiSquareButton },
  setup() {
    return { args }
  },
  template: `
      <FlapiSquareButton v-bind="args">
        <span>3</span>
      </FlapiSquareButton>
    `,
})

CustomSize.args = {
  ...Playground.args,
  size: 60,
}

export const CustomColors: StoryFn<FlapiSquareButtonArgs> = (args: FlapiSquareButtonArgs) => ({
  components: { FlapiSquareButton },
  setup() {
    return { args }
  },
  template: `
      <FlapiSquareButton v-bind="args">
        <span>4</span>
      </FlapiSquareButton>
    `,
})

CustomColors.args = {
  ...Playground.args,
  backgroundColor: '#FF5733',
  backgroundHoverColor: '#C70039',
  textColor: '#ff0',
}
