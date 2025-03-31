import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiTable from '#/components/core/FlapiTable.vue'
import FlapiBadge from '#/components/ui/FlapiBadge.vue'
import FlapiAvatar from '#/components/ui/FlapiAvatar.vue'
import type { FlapiTableProps } from '#/core'
import { flapiTableSearchBarPosition } from '#/core'

type FlapiTableArgs = FlapiTableProps

export default {
  title: 'core/FlapiTable',
  component: FlapiTable,
  argTypes: {
    load: {
      control: 'boolean',
      description: 'Display the loading spinner',
    },
    searchTerms: {
      control: 'text',
      description: 'The search terms used in the search bar',
    },
    showSearchBar: {
      control: 'boolean',
      description: 'Toggle the visibility of the search bar',
    },
    searchBarPosition: {
      control: 'select',
      options: flapiTableSearchBarPosition,
      description: 'The position of the search bar (left, right, center)',
    },
    fields: {
      control: 'object',
      description: 'The fields displayed in the table',
    },
    cardFields: {
      control: 'object',
      description: 'The fields displayed in the card view',
    },
    items: {
      control: 'object',
      description: 'The items displayed in the table',
    },
    switchToCardAt: {
      control: 'number',
      description: 'Switch to card view at this screen width',
    },
    onClick: {
      action: 'rowClicked',
      description: 'Event emitted when a row is clicked',
    },
  },
} as Meta<typeof FlapiTable>

const Template: StoryFn<FlapiTableArgs> = (args: FlapiTableArgs) => ({
  components: { FlapiTable },
  setup() {
    return { args }
  },
  template: `
    <FlapiTable
      v-bind="args"
      @click="(id) => $emit('onClick', id)"
    />
  `,
})
//
// // **Playground**
export const Playground = Template.bind({})
Playground.args = {
  fields: [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
  ],
  items: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Sam Johnson', email: 'sam@example.com' },
  ],
  load: false,
  searchTerms: '',
  showSearchBar: true,
}

// **Loading State**
export const Loading = Template.bind({})
Loading.args = {
  ...Playground.args,
  load: true,
  items: [],
}

// **Empty State**
export const Empty = Template.bind({})
Empty.args = {
  ...Playground.args,
  items: [],
  load: false,
}

// **Without Search Bar**
export const WithoutSearchBar = Template.bind({})
WithoutSearchBar.args = {
  ...Playground.args,
  showSearchBar: false,
}

// **Logs**
const LogsExampleTemplate: StoryFn<FlapiTableArgs> = (args: FlapiTableArgs) => ({
  components: { FlapiTable, FlapiBadge, FlapiAvatar },
  setup() {
    return { args }
  },
  template: `
    <FlapiTable
      v-bind="args"
      @click="(id) => $emit('onClick', id)"
    >
      <template #card-header="{ item }">
        <div class="flex items-center gap-2 text-base font-medium text-light-400">
          <FlapiAvatar :name="item.user.name" photo="/assets/avatar-placeholder.png" :size="32" />
          <span class="font-semibold">{{ item.user.name }}</span>
        </div>
      </template>
      
      <template #action="{ item }">
        <div class="flex items-center gap-2">
          <FlapiBadge :backgroundColor="item.action.backgroundColor">
            {{ item.action.message }}
          </FlapiBadge>
        </div>
      </template>
      
      <template #user="{ item }">
        <div class="flex items-center gap-2">
          <FlapiAvatar
              :name="item.user.name"
              photo="/assets/avatar-placeholder.png"
              :size="32"
          />
          <span class="font-semibold">{{ item.user.name }}</span>
        </div>
      </template>
    </FlapiTable>
  `,
})

export const LogsExample = LogsExampleTemplate.bind({})

const logs: {
  action: { backgroundColor: string; message: string }
  date: string
  user: { name: string }
  message: string
}[] = [
  {
    action: {
      backgroundColor: '#FFEECC',
      message: 'Modification',
    },
    date: '25 janv 2020',
    user: {
      name: 'Dianne Russell',
    },
    message: 'A new user has been updated',
  },
  {
    action: {
      backgroundColor: '#FBD0D5',
      message: 'Suppression',
    },
    date: '25 janv 2020',
    user: {
      name: 'Dianne Russell',
    },
    message: 'User has been deleted',
  },
  {
    action: {
      backgroundColor: '#D6D0FB',
      message: 'Connexion',
    },
    date: '25 janv 2020',
    user: {
      name: 'Dianne Russell',
    },
    message: 'User has been connected',
  },
  {
    action: {
      backgroundColor: '#CCFFEB',
      message: 'Ajout',
    },
    date: '25 janv 2020',
    user: {
      name: 'Dianne Russell',
    },
    message: 'User has been added',
  },
]

LogsExample.args = {
  fields: [
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
    { key: 'user', label: 'Utilisateurs' },
    { key: 'message', label: 'Message' },
  ],
  items: logs,
  load: false,
  searchTerms: '',
  showSearchBar: false,
}

export const SearchBarPosition = LogsExampleTemplate.bind({})

SearchBarPosition.args = {
  fields: [
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
    { key: 'user', label: 'Utilisateurs' },
    { key: 'message', label: 'Message' },
  ],
  items: logs,
  load: false,
  searchTerms: '',
  showSearchBar: true,
  searchBarPosition: 'center',
}

export const ResponsiveAtCard = LogsExampleTemplate.bind({})

ResponsiveAtCard.args = {
  fields: [
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
    { key: 'user', label: 'Utilisateurs' },
    { key: 'message', label: 'Message' },
  ],
  cardFields: [
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
    { key: 'message', label: 'Message', layout: 'column' },
  ],
  items: logs,
  load: false,
  searchTerms: '',
  showSearchBar: true,
  switchToCardAt: 1600,
}
