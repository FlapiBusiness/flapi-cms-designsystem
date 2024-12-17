import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiAvatar from '#/components/ui/FlapiAvatar.vue'
import type { FlapiAvatarProps } from '#/components/ui/FlapiAvatar.vue'

// Placeholder image path
const placeholderImage = 'stories/assets/avatar-placeholder.png'

type FlapiAvatarArgs = FlapiAvatarProps

export default {
  title: 'ui/FlapiAvatar',
  component: FlapiAvatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=192-151&t=ubo73Ri6rnShXUDA-4',
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the content for generating initials',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    photo: {
      control: 'text',
      description: 'The URL of the avatar photo',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: { type: 'number', min: '20', max: '200' },
      description: 'The size of the avatar in pixels',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40' },
      },
    },
  },
} as Meta<typeof FlapiAvatar>

export const WithImage: StoryFn<FlapiAvatarArgs> = (
  args: FlapiAvatarArgs,
  { argTypes }: { argTypes: Record<string, unknown> },
) => ({
  components: { FlapiAvatar },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
    <FlapiAvatar v-bind="args" />
  `,
})

WithImage.args = {
  name: 'John Doe',
  photo: placeholderImage,
  size: 80,
}

export const WithoutImage: StoryFn<FlapiAvatarArgs> = (
  args: FlapiAvatarArgs,
  { argTypes }: { argTypes: Record<string, unknown> },
) => ({
  components: { FlapiAvatar },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
    <FlapiAvatar v-bind="args" />
  `,
})

WithoutImage.args = {
  name: 'NoPic',
  photo: '',
  size: 120,
}
