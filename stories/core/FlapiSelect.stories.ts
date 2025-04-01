import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiSelect from '#/components/core/FlapiSelect.vue'
import type { FlapiSelectProps, FlapiSelectOption } from '#/core'

type FlapiSelectArgs = FlapiSelectProps

export default {
  title: 'core/FlapiSelect',
  component: FlapiSelect,
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of options to display in the select dropdown',
      table: {
        type: { summary: 'FlapiSelectOption[]' },
      },
    },
    modelValue: {
      control: 'object',
      description: 'The currently selected option',
      table: {
        type: { summary: 'FlapiSelectOption' },
      },
    },
    id: {
      control: 'text',
      description: 'The unique ID for the select input',
      table: {
        defaultValue: { summary: '"field"' },
      },
    },
    label: {
      control: 'text',
      description: 'The label text for the select input',
      table: {
        defaultValue: { summary: '"null"' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the select input is required',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<typeof FlapiSelect>

export const Playground: StoryFn<FlapiSelectArgs> = (args: FlapiSelectArgs) => ({
  components: { FlapiSelect },
  setup() {
    return { args }
  },
  template: `
    <div class="p-4 max-w-sm mx-auto">
      <FlapiSelect v-bind="args" @update:modelValue="args['update:modelValue']" />
    </div>
  `,
})

Playground.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ] as FlapiSelectOption[],
  modelValue: { label: 'Option 1', value: 'option1' },
  id: 'select-field',
  label: 'Select an Option',
  required: false,
}
