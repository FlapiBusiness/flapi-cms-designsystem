import type { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import type { Ref } from 'vue'
import FlapiPagination from '#/components/navigations/FlapiPagination.vue'
import type { FlapiPaginationProps } from '#/core'

export default {
  title: 'navigations/FlapiPagination',
  component: FlapiPagination,
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      defaultValue: 1,
      description: 'Page actuellement sélectionnée (commence à 1)',
    },
    totalPages: {
      control: { type: 'number' },
      defaultValue: 6,
      description: 'Nombre total de pages disponibles',
    },
    maxButtons: {
      control: { type: 'number' },
      defaultValue: 5,
      description: 'Nombre maximum de boutons de pages visibles (hors flèches)',
    },
    'update:currentPage': {
      action: 'update:currentPage',
      description: 'Événement déclenché lorsqu’un numéro de page est cliqué',
    },
    prev: {
      action: 'prev',
      description: 'Événement déclenché lorsqu’on clique sur la flèche précédente',
    },
    next: {
      action: 'next',
      description: 'Événement déclenché lorsqu’on clique sur la flèche suivante',
    },
  },
} as Meta<typeof FlapiPagination>

const Template: StoryFn<FlapiPaginationProps> = (args: FlapiPaginationProps) => ({
  components: { FlapiPagination },
  setup() {
    let currentPage: Ref<number> = ref(args.currentPage || 1)

    const onUpdatePage = (page: number) => {
      currentPage.value = page
    }

    const onPrev = () => {
      currentPage.value = currentPage.value - 1
    }

    const onNext = () => {
      currentPage.value = currentPage.value + 1
    }

    return { args, currentPage, onUpdatePage, onPrev, onNext }
  },
  template: `
    <FlapiPagination
      v-bind="args"
      :currentPage="currentPage"
      @update:currentPage="onUpdatePage"
      @prev="onPrev"
      @next="onNext"
    />
  `,
})

export const Playground: StoryFn<FlapiPaginationProps> = Template.bind({})
Playground.args = {
  currentPage: 1,
  totalPages: 6,
}

export const WithoutNumbers: StoryFn<FlapiPaginationProps> = Template.bind({})
WithoutNumbers.args = {
  currentPage: 1,
}

export const ManyPages: StoryFn<FlapiPaginationProps> = Template.bind({})
ManyPages.args = {
  currentPage: 2,
  totalPages: 20,
  maxButtons: 5,
}

export const MaxButtonsThree = Template.bind({})
MaxButtonsThree.args = {
  currentPage: 1,
  totalPages: 10,
  maxButtons: 6,
}
