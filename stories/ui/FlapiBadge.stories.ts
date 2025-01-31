import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiBadge from '#/components/ui/FlapiBadge.vue'
import { flapiBadgeSizes } from '#/core'
import type { FlapiBadgeProps } from '#/core'

type FlapiBadgeArgs = FlapiBadgeProps

export default {
  title: 'ui/FlapiBadge',
  component: FlapiBadge,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: flapiBadgeSizes,
      description: 'The size of the badge',
    },
    backgroundColor: {
      control: 'color',
      description: 'The background color of the badge',
    },
    textColor: {
      control: 'color',
      description: 'The text color of the badge',
    },
    close: {
      control: 'boolean',
      description: 'Show a close button on the badge',
    },
  },
} as Meta<typeof FlapiBadge>

export const Primary: StoryFn<FlapiBadgeArgs> = (args: FlapiBadgeArgs) => ({
  components: { FlapiBadge },
  setup() {
    return { args }
  },
  template: `
    <FlapiBadge v-bind="args">
      Sample Badge
    </FlapiBadge>
  `,
})

Primary.args = {
  size: 'md',
  backgroundColor: '#D6D0FB',
  textColor: '#2711BB',
  close: false,
}

export const Warning: StoryFn<FlapiBadgeArgs> = (args: FlapiBadgeArgs) => ({
  components: { FlapiBadge },
  setup() {
    return { args }
  },
  template: `
    <FlapiBadge v-bind="args">
      Sample Badge
    </FlapiBadge>
  `,
})

Warning.args = {
  size: 'md',
  backgroundColor: '#FFEECC',
  textColor: '#CC8900',
  close: true,
}

export const Red: StoryFn<FlapiBadgeArgs> = (args: FlapiBadgeArgs) => ({
  components: { FlapiBadge },
  setup() {
    return { args }
  },
  template: `
    <FlapiBadge v-bind="args">
      Sample Badge
    </FlapiBadge>
  `,
})

Red.args = {
  size: 'sm',
  backgroundColor: '#FBD0D5',
  close: false,
}

export const Success: StoryFn<FlapiBadgeArgs> = (args: FlapiBadgeArgs) => ({
  components: { FlapiBadge },
  setup() {
    return { args }
  },
  template: `
    <FlapiBadge v-bind="args">
      Sample Badge
    </FlapiBadge>
  `,
})

Success.args = {
  size: 'lg',
  backgroundColor: '#CCFFEB',
  textColor: '#00CC7A',
  close: false,
}
