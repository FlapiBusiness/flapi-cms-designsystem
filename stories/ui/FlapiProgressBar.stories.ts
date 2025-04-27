import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiProgressBar from '#/components/ui/FlapiProgressBar.vue'
import type { FlapiProgressBarProps } from '#/core'

type FlapiProgressBarArgs = FlapiProgressBarProps

export default {
  title: 'ui/FlapiProgressBar',
  component: FlapiProgressBar,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Background color of the progress bar.',
    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress filled part.',
    },
    progress: {
      control: 'number',
      description: 'The percentage of progress (0-100).',
    },
    textColor: {
      control: 'color',
      description: 'Color of the progress text.',
    },
    showLabel: {
      control: 'boolean',
      description: 'Display the progress percentage label below the bar.',
    },
  },
} as Meta<typeof FlapiProgressBar>

export const Playground: StoryFn<FlapiProgressBarArgs> = (args: FlapiProgressBarArgs) => ({
  components: { FlapiProgressBar },
  setup() {
    return { args }
  },
  template: `
    <FlapiProgressBar v-bind="args" />
  `,
})

Playground.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 50,
  textColor: '#F5F4FB',
  showLabel: true,
}

export const FullProgress: StoryFn<FlapiProgressBarArgs> = (args: FlapiProgressBarArgs) => ({
  components: { FlapiProgressBar },
  setup() {
    return { args }
  },
  template: `
    <FlapiProgressBar v-bind="args" />
  `,
})

FullProgress.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 100,
  textColor: '#F5F4FB',
  showLabel: true,
}

export const EmptyProgress: StoryFn<FlapiProgressBarArgs> = (args: FlapiProgressBarArgs) => ({
  components: { FlapiProgressBar },
  setup() {
    return { args }
  },
  template: `
    <FlapiProgressBar v-bind="args" />
  `,
})

EmptyProgress.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 0,
  textColor: '#F5F4FB',
  showLabel: true,
}

export const WithoutLabel: StoryFn<FlapiProgressBarArgs> = (args: FlapiProgressBarArgs) => ({
  components: { FlapiProgressBar },
  setup() {
    return { args }
  },
  template: `
    <FlapiProgressBar v-bind="args" />
  `,
})

WithoutLabel.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 75,
  textColor: '#F5F4FB',
  showLabel: false,
}
