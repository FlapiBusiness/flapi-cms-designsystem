<template>
  <svg
    class="relative"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :style="color"
    :aria-labelledby="name"
  >
    <g :fill="mode === 'fill' ? color : undefined" :stroke="mode === 'stroke' ? color : undefined">
      <component :is="iconComponent" v-if="iconComponent" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import type { IconComponent, FlapiIconMode, FlapiIconProps } from '#/core'
import type { iconsList } from '#/core'
import { computed } from 'vue'
import type { PropType, ComputedRef } from 'vue'
import ChevronLeft from '#/components/icons/ChevronLeft.vue'
import ChevronRight from '#/components/icons/ChevronRight.vue'
import Database from '#/components/icons/Database.vue'
import Edit from '#/components/icons/Edit.vue'
import Eye from '#/components/icons/Eye.vue'
import EyeOff from '#/components/icons/EyeOff.vue'
import Home from '#/components/icons/Home.vue'
import Link from '#/components/icons/Link.vue'
import Mail from '#/components/icons/Mail.vue'
import MessageCircle from '#/components/icons/MessageCircle.vue'
import Search from '#/components/icons/Search.vue'
import Settings from '#/components/icons/Settings.vue'
import Share from '#/components/icons/Share.vue'
import Users from '#/components/icons/Users.vue'
import X from '#/components/icons/X.vue'

/**
 * Props definition with strict typing.
 * @constant {FlapiIconProps}
 */
const props: FlapiIconProps = defineProps({
  name: {
    type: String as PropType<(typeof iconsList)[number]>,
    required: true,
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 24,
  },
  viewBox: {
    type: String as PropType<string>,
    default: '0 0 24 24',
  },
  mode: {
    type: String as PropType<FlapiIconMode>,
    default: 'fill',
  },
  color: {
    type: String as PropType<string>,
    default: 'currentColor',
  },
})

/**
 * Icons dictionary with all the available icons.
 * @constant {Record<string, IconComponent>}
 */
const iconsDictionary: Record<string, IconComponent> = {
  ChevronLeft,
  ChevronRight,
  Database,
  Edit,
  Eye,
  EyeOff,
  Home,
  Link,
  Mail,
  MessageCircle,
  Search,
  Settings,
  Share,
  Users,
  X,
}

/**
 * Icon component computed with the props name and the icons dictionary.
 * @constant {ComputedRef<IconComponent>}
 */
const iconComponent: ComputedRef<IconComponent> = computed(() => iconsDictionary[props.name])
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
