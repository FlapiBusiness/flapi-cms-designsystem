<template>
  <nav
    class="relative h-full bg-gray-500 shadow-md"
    :class="{ 'w-full min-w-[280px]': props.expand, 'w-14': !props.expand }"
  >
    <!-- Toggle Button -->
    <FlapiSidebarToggleButton :expand="props.expand" @update:expand="emit('update:expand', $event)" />

    <!-- Sidebar Content -->
    <div class="flex h-full flex-col justify-between">
      <!-- Logo -->
      <div class="flex items-center border-b p-4" :class="props.expand ? 'justify-start' : 'justify-center'">
        <FlapiLogo :size="32" :large="props.expand" />
      </div>
      <div class="flex items-center gap-2 border-b p-2" :class="props.expand ? 'justify-start' : 'justify-center'">
        <FlapiAvatar :photo="props.avatar || undefined" :name="props.username" :size="40" backgroundColor="#35424d" />
        <span v-if="props.expand" class="text-base font-medium text-light-400">
          {{ props.username }}
        </span>
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

      <!-- Footer  logout button -->
      <div class="flex items-center justify-center p-4">
        <FlapiSidebarLink to="/signout" icon="Logout" text="Déconnexion" :large="props.expand" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedGeneric } from 'vue-router'
import FlapiLogo from '#/components/flapi/FlapiLogo.vue'
import FlapiSidebarLink from '#/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'
import FlapiAvatar from '#/components/ui/FlapiAvatar.vue'
import FlapiSidebarToggleButton from '#/components/flapi/FlapiSidebar/FlapiSidebarToggleButton.vue'
import type { FlapiSidebarItem, FlapiSidebarProps } from '#/core'

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
