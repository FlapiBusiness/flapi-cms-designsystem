import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiCircularProgress from '#/components/ui/FlapiCircularProgress.vue'
import type { FlapiCircularProgressProps } from '#/components/ui/FlapiCircularProgress.vue'

type FlapiCircularProgressArgs = FlapiCircularProgressProps

export default {
  title: 'ui/FlapiCircularProgress',
  component: FlapiCircularProgress,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'Color of the background circle.',
    },
    progressColor: {
      control: 'color',
      description: 'Color of the progress circle.',
    },
    progress: {
      control: 'number',
      description: 'The percentage of progress (0-100).',
    },
    size: {
      control: 'number',
      description: 'The size of the circular progress bar (in pixels).',
    },
    textColor: {
      control: 'color',
      description: 'Color of the text inside the circle.',
    },
  },
} as Meta<typeof FlapiCircularProgress>

export const Playground: StoryFn<FlapiCircularProgressArgs> = (args: FlapiCircularProgressArgs) => ({
  components: { FlapiCircularProgress },
  setup() {
    return { args }
  },
  template: `
    <FlapiCircularProgress v-bind="args" />
  `,
})

Playground.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 50,
  size: 150,
  textColor: '#F5F4FB',
}

export const FullProgress: StoryFn<FlapiCircularProgressArgs> = (args: FlapiCircularProgressArgs) => ({
  components: { FlapiCircularProgress },
  setup() {
    return { args }
  },
  template: `
    <FlapiCircularProgress v-bind="args" />
  `,
})

FullProgress.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 100,
  size: 150,
  textColor: '#F5F4FB',
}

export const EmptyProgress: StoryFn<FlapiCircularProgressArgs> = (args: FlapiCircularProgressArgs) => ({
  components: { FlapiCircularProgress },
  setup() {
    return { args }
  },
  template: `
    <FlapiCircularProgress v-bind="args" />
  `,
})

EmptyProgress.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 0,
  size: 150,
  textColor: '#F5F4FB',
}

export const CustomSize: StoryFn<FlapiCircularProgressArgs> = (args: FlapiCircularProgressArgs) => ({
  components: { FlapiCircularProgress },
  setup() {
    return { args }
  },
  template: `
    <FlapiCircularProgress v-bind="args" />
  `,
})

CustomSize.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 75,
  size: 100,
  textColor: '#F5F4FB',
}

export const SmallProgress: StoryFn<FlapiCircularProgressArgs> = (args: FlapiCircularProgressArgs) => ({
  components: { FlapiCircularProgress },
  setup() {
    return { args }
  },
  template: `
    <FlapiCircularProgress v-bind="args" />
  `,
})

SmallProgress.args = {
  backgroundColor: '#454D5E',
  progressColor: '#8472F3',
  progress: 25,
  size: 50,
  textColor: '#F5F4FB',
}
