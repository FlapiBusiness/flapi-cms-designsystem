import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiLink from '#/components/core/FlapiLink.vue'
import type { FlapiLinkProps } from '#/core'

type FlapiLinkArgs = FlapiLinkProps & { slotContent: string }

export default {
  title: 'core/FlapiLink',
  component: FlapiLink,
  argTypes: {
    externalLink: {
      control: 'boolean',
      description: 'Whether the link is external or internal.',
    },
    link: {
      control: 'text',
      description: 'The link to navigate to.',
    },
    slotContent: {
      control: 'text',
      description: 'Content inside the link component.',
    },
  },
} as Meta<typeof FlapiLink>

export const Playground: StoryFn<FlapiLinkArgs> = (args: FlapiLinkArgs) => ({
  components: { FlapiLink },
  props: Object.keys(args),
  setup() {
    return { args }
  },
  template: `
    <FlapiLink v-bind="args">
      {{ args.slotContent }}
    </FlapiLink>
  `,
})

Playground.args = {
  externalLink: false,
  link: '/dashboard',
  slotContent: 'Go to Dashboard',
}

export const ExternalLink: StoryFn<FlapiLinkArgs> = (args: FlapiLinkArgs) => ({
  components: { FlapiLink },
  props: Object.keys(args),
  setup() {
    return { args }
  },
  template: `
    <FlapiLink v-bind="args">
      {{ args.slotContent }}
    </FlapiLink>
  `,
})

ExternalLink.args = {
  externalLink: true,
  link: 'https://www.google.com',
  slotContent: 'Visit Google',
}

export const InternalLink: StoryFn<FlapiLinkArgs> = (args: FlapiLinkArgs) => ({
  components: { FlapiLink },
  props: Object.keys(args),
  setup() {
    return { args }
  },
  template: `
    <FlapiLink v-bind="args">
      {{ args.slotContent }}
    </FlapiLink>
  `,
})

InternalLink.args = {
  externalLink: false,
  link: '/profile',
  slotContent: 'View Profile',
}
