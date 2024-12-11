import type { Meta, StoryFn } from '@storybook/vue3'
import MyComponent from './MyComponent.vue'
import type { MyComponentProps } from './MyComponent.vue'

type MyComponentArgs = MyComponentProps

export default {
  title: 'core/MyComponent',
  component: MyComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the component',
    },
  },
} as Meta<typeof MyComponent>

export const Default: StoryFn<MyComponentArgs> = (args, { argTypes }) => ({
  components: { MyComponent },
  props: Object.keys(argTypes),
  setup() {
    return { args }
  },
  template: `
      <MyComponent v-bind="args" :title="args.title">
        {{ args.slotContent }}
      </MyComponent>
    `,
})

Default.args = {
  title: 'MyComponent',
}
