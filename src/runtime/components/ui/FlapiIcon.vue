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
import Account from '#/components/icons/Account.vue'
import Activity from '#/components/icons/Activity.vue'
import AlertCircle from '#/components/icons/AlertCircle.vue'
import ArrowRight from '#/components/icons/ArrowRight.vue'
import ArrowUpRight from '#/components/icons/ArrowUpRight.vue'
import BarChart from '#/components/icons/BarChart.vue'
import BriefCase from '#/components/icons/BriefCase.vue'
import CheckCircle from '#/components/icons/CheckCircle.vue'
import ChevronLeft from '#/components/icons/ChevronLeft.vue'
import ChevronRight from '#/components/icons/ChevronRight.vue'
import Clock from '#/components/icons/Clock.vue'
import Database from '#/components/icons/Database.vue'
import Edit from '#/components/icons/Edit.vue'
import Eye from '#/components/icons/Eye.vue'
import EyeOff from '#/components/icons/EyeOff.vue'
import Grid from '#/components/icons/Grid.vue'
import Headphones from '#/components/icons/Headphones.vue'
import Home from '#/components/icons/Home.vue'
import Info from '#/components/icons/Info.vue'
import Link from '#/components/icons/Link.vue'
import Lock from '#/components/icons/Lock.vue'
import List from '#/components/icons/List.vue'
import Login from '#/components/icons/Login.vue'
import Logout from '#/components/icons/Logout.vue'
import Mail from '#/components/icons/Mail.vue'
import MessageCircle from '#/components/icons/MessageCircle.vue'
import MoreHorizontal from '#/components/icons/MoreHorizontal.vue'
import PeopleGroup from '#/components/icons/PeopleGroup.vue'
import PlusCircle from '#/components/icons/PlusCircle.vue'
import Search from '#/components/icons/Search.vue'
import Settings from '#/components/icons/Settings.vue'
import Share from '#/components/icons/Share.vue'
import Shield from '#/components/icons/Shield.vue'
import ShoppingBag from '#/components/icons/ShoppingBag.vue'
import Trash2 from '#/components/icons/Trash2.vue'
import User from '#/components/icons/User.vue'
import UserPlus from '#/components/icons/UserPlus.vue'
import Users from '#/components/icons/Users.vue'
import X from '#/components/icons/X.vue'
import XCircle from '#/components/icons/XCircle.vue'

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
  Account,
  Activity,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  BriefCase,
  BarChart,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  Edit,
  Eye,
  EyeOff,
  Grid,
  Headphones,
  Home,
  Info,
  Link,
  Lock,
  List,
  Login,
  Logout,
  Mail,
  MessageCircle,
  MoreHorizontal,
  PeopleGroup,
  PlusCircle,
  Search,
  Settings,
  Share,
  Shield,
  ShoppingBag,
  Trash2,
  User,
  UserPlus,
  Users,
  X,
  XCircle,
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
