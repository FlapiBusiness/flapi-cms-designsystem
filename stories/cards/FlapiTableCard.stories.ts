import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiTableCard from '#/components/cards/FlapiTableCard.vue'
import FlapiBadge from '#/components/ui/FlapiBadge.vue'
import FlapiAvatar from '#/components/ui/FlapiAvatar.vue'
import type { FlapiTableCardProps } from '#/core'

type FlapiTableCardArgs = FlapiTableCardProps

export default {
  title: 'cards/FlapiTableCard',
  component: FlapiTableCard,
  argTypes: {
    load: {
      control: 'boolean',
      description: 'Display the loading spinner',
    },
    fields: {
      control: 'object',
      description: 'The fields displayed in the table',
    },
    item: {
      control: 'object',
      description: 'The item displayed in the table',
    },
  },
} as Meta<typeof FlapiTableCard>

const Template: StoryFn<FlapiTableCardArgs> = (args: FlapiTableCardArgs) => ({
  components: { FlapiTableCard, FlapiBadge, FlapiAvatar },
  setup() {
    return { args }
  },
  template: `
    <FlapiTableCard v-bind="args">
      <template #header="{ item }">
        <div class="flex items-center gap-2 text-base font-medium text-light-400">
          <FlapiAvatar :name="item.user.name" photo="/assets/avatar-placeholder.png" :size="32" />
          <span class="font-semibold">{{ item.user.name }}</span>
        </div>
      </template>
      
      <template #action="{ item }">
        <FlapiBadge :backgroundColor="item.action.backgroundColor">
          {{ item.action.message }}
        </FlapiBadge>
      </template>
    </FlapiTableCard>
  `,
})

export const Default = Template.bind({})
Default.args = {
  fields: [
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
    { key: 'message', label: 'Message', layout: 'column' },
  ],
  item: {
    action: { backgroundColor: '#FFEECC', message: 'Modification' },
    date: '25 janv 2020',
    user: { name: 'Dianne Russell' },
    message: 'Un utilisateur a été modifié',
  },
  load: false,
}

export const Loading = Template.bind({})
Loading.args = {
  fields: Default.args?.fields,
  item: null,
  load: true,
}
