import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiAlert from '#/components/feedback/FlapiAlert.vue'
import { flapiAlertVariants, iconsList } from '#/core'
import type { FlapiAlertProps } from '#/core'

type FlapiAlertArgs = FlapiAlertProps

export default {
  title: 'feedback/FlapiAlert',
  component: FlapiAlert,
  argTypes: {
    onHide: {
      action: 'hide',
      description: 'Function called when the alert is dismissed',
    },
    message: {
      control: 'text',
      description: 'The message displayed in the alert',
    },
    icon: {
      control: 'select',
      options: iconsList,
      description: 'The icon displayed in the alert (string name)',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    variant: {
      control: 'select',
      options: flapiAlertVariants,
      description: 'The style variant of the alert',
    },
  },
} as Meta<typeof FlapiAlert>

/* 🔴 VARIANT ERROR */
export const Error: StoryFn<FlapiAlertArgs> = (args) => ({
  components: { FlapiAlert },
  setup() {
    return { args }
  },
  template: `<FlapiAlert v-bind="args" @hide="args.onHide" />`,
})
Error.args = {
  message: 'This is an error alert!',
  icon: 'AlertCircle',
  dismissible: true,
  variant: 'error',
}

/* ✅ VARIANT SUCCESS */
export const Success: StoryFn<FlapiAlertArgs> = (args) => ({
  components: { FlapiAlert },
  setup() {
    return { args }
  },
  template: `<FlapiAlert v-bind="args" @hide="args.onHide" />`,
})
Success.args = {
  message: 'This is a success alert!',
  icon: 'CheckCircle',
  dismissible: true,
  variant: 'success',
}

/* ⚠️ VARIANT WARNING */
export const Warning: StoryFn<FlapiAlertArgs> = (args) => ({
  components: { FlapiAlert },
  setup() {
    return { args }
  },
  template: `<FlapiAlert v-bind="args" @hide="args.onHide" />`,
})
Warning.args = {
  message: 'This is a warning alert!',
  icon: 'XCircle',
  dismissible: true,
  variant: 'warning',
}

/* ℹ️ VARIANT INFO */
export const Info: StoryFn<FlapiAlertArgs> = (args) => ({
  components: { FlapiAlert },
  setup() {
    return { args }
  },
  template: `<FlapiAlert v-bind="args" @hide="args.onHide" />`,
})
Info.args = {
  message: 'This is an info alert!',
  icon: 'Info',
  dismissible: true,
  variant: 'info',
}

/* 🎨 CUSTOM VARIANT */
export const Custom: StoryFn<FlapiAlertArgs> = (args) => ({
  components: { FlapiAlert },
  setup() {
    return { args }
  },
  template: `<FlapiAlert v-bind="args" @hide="args.onHide" />`,
})
Custom.args = {
  message: 'This is a custom alert!',
  icon: 'Star', // Custom icon
  dismissible: true,
  variant: 'info', // Still using 'info', but icon is changed
}
