<template>
  <nav class="relative h-full bg-gray-500 shadow-md" :class="{ 'w-56': props.expand, 'w-14': !props.expand }">
    <!-- Toggle Button -->
    <!--    <button-->
    <!--      class="absolute right-[-12px] top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 shadow hover:bg-gray-400"-->
    <!--      @click="toggleExpand"-->
    <!--    >-->
    <!--      <FlapiIcon :name="props.expand ? 'ChevronLeft' : 'ChevronRight'" class="text-gray-700" :size="20" />-->
    <!--    </button>-->

    <FlapiSidebarToggleButton :expand="props.expand" @update:expand="emit('update:expand', $event)" />

    <!-- Sidebar Content -->
    <div class="flex h-full flex-col justify-between">
      <!-- Logo -->
      <div class="flex items-center border-b p-4" :class="props.expand ? 'justify-start' : 'justify-center'">
        <FlapiLogo :size="32" :large="props.expand" />
      </div>

      <!-- Links -->
      <ul class="flex h-full flex-col items-center gap-4 p-2">
        <FlapiSidebarLink
          v-for="item in props.items"
          :key="item.to"
          :large="props.expand"
          :active="route?.path === item.to"
          :to="item.to"
          :text="item.text"
          :icon="item.icon"
        />
      </ul>

      <!-- Footer -->
      <div class="flex items-center gap-2 border-t p-2" :class="props.expand ? 'justify-start' : 'justify-center'">
        <FlapiAvatar :photo="props.avatar || undefined" :name="props.username" :size="40" backgroundColor="#35424D" />
        <span v-if="props.expand" class="text-base font-medium text-light-400">
          {{ props.username }}
        </span>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedGeneric } from 'vue-router'
import FlapiLogo from '@/components/flapi/FlapiLogo.vue'
import FlapiSidebarLink from '@/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'
import FlapiAvatar from '@/components/ui/FlapiAvatar.vue'
import FlapiSidebarToggleButton from '#/components/flapi/FlapiSidebar/FlapiSidebarToggleButton.vue'

/**
 * Sidebar item definition
 * @type {FlapiSidebarItem}
 * @property {string} to - The route to navigate to
 * @property {string} icon - The icon to display
 * @property {string} text - The text for the link
 */
export type FlapiSidebarItem = {
  to: string
  icon: string
  text: string
}

/**
 * Sidebar props definition
 * @type {FlapiSidebarProps}
 * @property {string} username - The username to display in the footer
 * @property {FlapiSidebarItem[]} items - The list of sidebar links
 * @property {string | null} avatar - The avatar image URL
 * @property {boolean} expand - Whether the sidebar is expanded
 */
export type FlapiSidebarProps = {
  username: string
  items: FlapiSidebarItem[]
  avatar: string | null
  expand: boolean
}

const props: FlapiSidebarProps = defineProps({
  username: {
    type: String,
    required: true,
  },
  items: {
    type: Array as PropType<FlapiSidebarItem[]>,
    required: true,
  },
  avatar: {
    type: String,
    default: null,
  },
  expand: {
    type: Boolean,
    default: false,
  },
})

const route: RouteLocationNormalizedGeneric = useRoute()

/* EMIT */
const emit: (event: 'update:expand', value: boolean) => void = defineEmits<{
  (event: 'update:expand', value: boolean): void
}>()
</script>
