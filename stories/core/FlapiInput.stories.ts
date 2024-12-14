import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiInput from '@/components/core/FlapiInput.vue'
import type { FlapiInputProps } from '@/components/core/FlapiInput.vue'
import { Form } from 'vee-validate'
import { ref } from 'vue'
import type { Ref } from 'vue'

type FlapiInputArgs = FlapiInputProps

export default {
  title: 'core/FlapiInput',
  component: FlapiInput,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/JukS6d8VqZfcuGHzUQixFg/cms-maquette-(FlapiCms)?node-id=243-294&t=VH9OIiLT8w1rSDch-4',
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'The input placeholder text.',
    },
    value: {
      control: 'text',
      description: 'The current value of the input field.',
    },
    rows: {
      control: 'number',
      description: 'The number of rows for a textarea input.',
    },
    id: {
      control: 'text',
      description: 'The unique identifier for the input field.',
    },
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'color',
        'date',
        'datetime-local',
        'month',
        'range',
        'time',
        'week',
      ],
      description:
        'The type of the input field. [HTML Input Types](https://developer.mozilla.org/fr/docs/Web/HTML/Element/input)',
    },
    rules: {
      control: 'text',
      description:
        'Validation rules for the input field, based on [vee-validate rules](https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules).',
    },
    label: {
      control: 'text',
      description: 'The label text for the input field.',
    },
    min: {
      control: 'number',
      description: 'The minimum value for a number input.',
    },
    step: {
      control: 'text',
      description: 'The step value for a number input.',
    },
  },
} as Meta<typeof FlapiInput>

export const Playground: StoryFn<FlapiInputArgs> = (args: FlapiInputArgs) => ({
  components: { FlapiInput, Form },
  setup() {
    const value: Ref<string | number, string | number> = ref(args.value)

    /**
     * Updates the value of the input field.
     * @param {string | number} newValue - The new value to set
     * @returns {void}
     */
    const handleUpdateValue: (newValue: string | number) => void = (newValue: string | number): void => {
      value.value = newValue
      args.value = newValue
    }

    return { args, value, handleUpdateValue }
  },
  template: `
    <Form>
      <FlapiInput
        v-bind="args"
        :value="value"
        @update:value="handleUpdateValue"
      />
    </Form>
  `,
})

Playground.args = {
  placeholder: 'Enter text here...',
  value: '',
  rows: null,
  id: 'field',
  type: 'text',
  rules: 'required|min:3|max:10',
  label: 'Input Label',
  min: null,
  step: null,
}

export const Password: StoryFn<FlapiInputArgs> = (args: FlapiInputArgs) => ({
  components: { FlapiInput, Form },
  setup() {
    const value: Ref<string | number, string | number> = ref(args.value)

    /**
     * Updates the value of the input field.
     * @param {string | number} newValue - The new value to set
     * @returns {void}
     */
    const handleUpdateValue: (newValue: string | number) => void = (newValue: string | number): void => {
      value.value = newValue
      args.value = newValue
    }

    return { args, value, handleUpdateValue }
  },
  template: `
    <Form>
      <FlapiInput
        v-bind="args"
        :value="value"
        @update:value="handleUpdateValue"
      />
    </Form>
  `,
})

Password.args = {
  placeholder: 'Enter password here...',
  value: '',
  rows: null,
  id: 'password',
  type: 'password',
  rules: 'required|min:6|max:20',
  label: 'Password',
  min: null,
  step: null,
}

export const Email: StoryFn<FlapiInputArgs> = (args: FlapiInputArgs) => ({
  components: { FlapiInput, Form },
  setup() {
    const value: Ref<string | number, string | number> = ref(args.value)

    /**
     * Updates the value of the input field.
     * @param {string | number} newValue - The new value to set
     * @returns {void}
     */
    const handleUpdateValue: (newValue: string | number) => void = (newValue: string | number): void => {
      value.value = newValue
      args.value = newValue
    }

    return { args, value, handleUpdateValue }
  },
  template: `
    <Form>
      <FlapiInput
        v-bind="args"
        :value="value"
        @update:value="handleUpdateValue"
      />
    </Form>
  `,
})

Email.args = {
  placeholder: 'Enter email here...',
  value: '',
  rows: null,
  id: 'email',
  type: 'email',
  rules: 'required|email',
  label: 'Email',
  min: null,
  step: null,
}

export const Number: StoryFn<FlapiInputArgs> = (args: FlapiInputArgs) => ({
  components: { FlapiInput, Form },
  setup() {
    const value: Ref<string | number, string | number> = ref(args.value)

    /**
     * Updates the value of the input field.
     * @param {string | number} newValue - The new value to set
     * @returns {void}
     */
    const handleUpdateValue: (newValue: string | number) => void = (newValue: string | number): void => {
      value.value = newValue
      args.value = newValue
    }

    return { args, value, handleUpdateValue }
  },
  template: `
    <Form>
      <FlapiInput
        v-bind="args"
        :value="value"
        @update:value="handleUpdateValue"
      />
    </Form>
  `,
})
Number.args = {
  placeholder: 'Enter number here...',
  value: '',
  rows: null,
  id: 'number',
  type: 'number',
  rules: 'required|numeric',
  label: 'Number',
  min: 0,
  step: 1,
}

export const TextArea: StoryFn<FlapiInputArgs> = (args: FlapiInputArgs) => ({
  components: { FlapiInput, Form },
  setup() {
    const value: Ref<string | number, string | number> = ref(args.value)

    /**
     * Updates the value of the input field.
     * @param {string | number} newValue - The new value to set
     * @returns {void}
     */
    const handleUpdateValue: (newValue: string | number) => void = (newValue: string | number): void => {
      value.value = newValue
      args.value = newValue
    }

    return { args, value, handleUpdateValue }
  },
  template: `
    <Form>
      <FlapiInput
        v-bind="args"
        :value="value"
        @update:value="handleUpdateValue"
      />
    </Form>
  `,
})

TextArea.args = {
  placeholder: 'Enter text here...',
  value: '',
  rows: 4,
  id: 'textarea',
  type: 'text',
  rules: null,
  label: 'Text Area',
  min: null,
  step: null,
}
