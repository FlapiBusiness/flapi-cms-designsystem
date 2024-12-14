import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiIcon, { flapiIconModes, iconsList } from '@/components/ui/FlapiIcon.vue'
import type { FlapiIconProps } from '@/components/ui/FlapiIcon.vue'

type FlapiIconArgs = FlapiIconProps

export default {
  title: 'ui/FlapiIcon',
  component: FlapiIcon,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=406-9023&t=VH9OIiLT8w1rSDch-4',
    },
  },
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
  color: 'currentColor',
}
