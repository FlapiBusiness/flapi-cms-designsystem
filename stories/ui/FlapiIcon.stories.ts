import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
import { flapiIconModes, iconsList } from '#/core'
import type { FlapiIconProps } from '#/core'

type FlapiIconArgs = FlapiIconProps

export default {
  title: 'ui/FlapiIcon',
  component: FlapiIcon,
  argTypes: {
    name: {
      control: 'select',
      options: iconsList,
      description: 'The name of the icon (must match a file in `components/icons`)',
    },
    width: {
      control: 'number',
      description: 'The width of the icon',
    },
    height: {
      control: 'number',
      description: 'The height of the icon',
    },
    viewBox: {
      control: 'text',
      description: 'The viewBox of the icon',
    },
    mode: {
      control: 'select',
      options: flapiIconModes,
      description: 'The rendering mode of the icon (fill or stroke)',
    },
    color: {
      control: 'color',
      description: 'The color of the icon',
    },
  },
} as Meta<typeof FlapiIcon>

export const Playground: StoryFn<FlapiIconArgs> = (args: FlapiIconArgs) => ({
  components: { FlapiIcon },
  setup() {
    return { args }
  },
  template: `
    <FlapiIcon v-bind="args" />
  `,
})

Playground.args = {
  name: 'Eye',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  mode: 'stroke',
  color: '#fff',
}
