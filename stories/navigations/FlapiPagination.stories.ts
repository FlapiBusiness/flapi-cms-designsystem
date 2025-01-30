import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiPagination from '#/components/navigations/FlapiPagination.vue'

export default {
  title: 'navigations/FlapiPagination',
  component: FlapiPagination,
  argTypes: {
    onPrevClick: {
      action: 'prevClicked',
      description: 'Event emitted when the previous button is clicked',
    },
    onNextClick: {
      action: 'nextClicked',
      description: 'Event emitted when the next button is clicked',
    },
    onPageClick: {
      action: 'pageClicked',
      description: 'Event emitted when a specific page number is clicked',
    },
  },
} as Meta<typeof FlapiPagination>

const Template: StoryFn = (args) => ({
  components: { FlapiPagination },
  setup() {
    return { args }
  },
  template: `
    <FlapiPagination
      v-bind="args"
      @prevClicked="args.onPrevClick"
      @nextClicked="args.onNextClick"
      @pageClicked="args.onPageClick"
    />
  `,
})

// **Playground**
export const Playground = Template.bind({})
Playground.args = {}

// **Custom Pagination**
export const CustomPagination = Template.bind({})
CustomPagination.args = {}
