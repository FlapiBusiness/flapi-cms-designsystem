import type { Meta, StoryFn } from '@storybook/vue3'
import FlapiTooltip from '#/components/ui/FlapiTooltip.vue'
import FlapiButton from '#/components/core/FlapiButton.vue'
import type { FlapiTooltipProps } from '#/core'
import { tooltipPositions } from '#/core'

export default {
  title: 'ui/FlapiTooltip',
  component: FlapiTooltip,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed in the tooltip',
    },
    position: {
      control: 'select',
      options: tooltipPositions,
      description: 'The position of the tooltip',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled tooltip',
    },
  },
} as Meta<typeof FlapiTooltip>

const Template: StoryFn<FlapiTooltipProps> = (args: FlapiTooltipProps) => ({
  components: { FlapiTooltip, FlapiButton },
  setup() {
    return { args }
  },
  template: `
    <div class="flex items-center justify-center p-8">
      <FlapiTooltip v-bind="args">
          <FlapiButton size="sm">
            {{ args.text }}
          </FlapiButton>
      </FlapiTooltip>
    </div>
  `,
})

export const Default: StoryFn<FlapiTooltipProps> = Template.bind({})

Default.args = {
  text: 'Default Tooltip',
}

export const Top: StoryFn<FlapiTooltipProps> = Template.bind({})

Top.args = {
  text: 'Top Tooltip',
  position: 'top',
}

export const Bottom: StoryFn<FlapiTooltipProps> = Template.bind({})

Bottom.args = {
  text: 'Bottom Tooltip',
  position: 'bottom',
}

export const Left: StoryFn<FlapiTooltipProps> = Template.bind({})

Left.args = {
  text: 'Left Tooltip',
  position: 'left',
}

export const Right: StoryFn<FlapiTooltipProps> = Template.bind({})

Right.args = {
  text: 'Right Tooltip',
  position: 'right',
}

export const Disabled: StoryFn<FlapiTooltipProps> = Template.bind({})

Disabled.args = {
  text: 'Disabled Tooltip',
  disabled: true,
}
