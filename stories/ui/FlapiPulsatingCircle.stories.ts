import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiPulsatingCircle from '#/components/ui/FlapiPulsatingCircle.vue'
import type { FlapiPulsatingCircleProps } from '#/components/ui/FlapiPulsatingCircle.vue'

type FlapiPulsatingCircleArgs = FlapiPulsatingCircleProps

export default {
  title: 'ui/FlapiPulsatingCircle',
  component: FlapiPulsatingCircle,
  argTypes: {
    color: {
      control: 'color',
      description: 'The color of the pulsating circle',
      table: {
        defaultValue: { summary: '#00F593' },
      },
    },
    size: {
      control: 'number',
      description: 'The size of the pulsating circle (in pixels)',
      table: {
        defaultValue: { summary: '10' },
      },
    },
  },
} as Meta<typeof FlapiPulsatingCircle>

export const Active: StoryFn<FlapiPulsatingCircleArgs> = (args) => ({
  components: { FlapiPulsatingCircle },
  setup() {
    return { args }
  },
  template: `<FlapiPulsatingCircle v-bind="args" />`,
})

Active.args = {
  color: '#00F593',
  size: 10,
}

export const Inactive: StoryFn<FlapiPulsatingCircleArgs> = (args) => ({
  components: { FlapiPulsatingCircle },
  setup() {
    return { args }
  },
  template: `<FlapiPulsatingCircle v-bind="args" />`,
})

Inactive.args = {
  color: '#EC364B',
  size: 15,
}
