import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSearchBar from '@/components/inputs/FlapiSearchBar.vue'
import type { FlapiSearchBarProps } from '@/components/inputs/FlapiSearchBar.vue'

type FlapiSearchBarArgs = FlapiSearchBarProps

export default {
  title: 'inputs/FlapiSearchBar',
  component: FlapiSearchBar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=243-263&t=yJUqBq7YbziDMzPI-4',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the search bar for indicating the purpose of the search',
    },
    value: {
      control: 'text',
      description: 'The value of the search input',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder text for the search input',
    },
    'update:value': {
      action: 'valueUpdated',
      description: 'Event emitted when the input value changes',
    },
  },
} as Meta<typeof FlapiSearchBar>

const Template: StoryFn<FlapiSearchBarArgs> = (args: FlapiSearchBarArgs) => ({
  components: { FlapiSearchBar },
  setup() {
    return { args }
  },
  template: `
    <FlapiSearchBar v-bind="args" @update:value="args['update:value']" />
  `,
})

export const Playground = Template.bind({})
Playground.args = {
  title: 'Search',
  value: '',
  placeholder: 'Rechercher (Ctrl + E)',
}

export const WithValue = Template.bind({})
WithValue.args = {
  ...Playground.args,
  value: 'Initial Value',
}

export const CustomPlaceholder = Template.bind({})
CustomPlaceholder.args = {
  ...Playground.args,
  placeholder: 'Chercher un utilisateur...',
}
