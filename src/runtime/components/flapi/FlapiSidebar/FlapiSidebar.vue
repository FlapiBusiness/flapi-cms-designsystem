<template>
  <nav class="flex h-full">
    <!-- Sidebar -->
    <div
      class="relative h-full bg-gray-500 shadow-md"
      :class="{ 'min-w-[280px]': props.expand, 'w-14': !props.expand }"
    >
      <div class="h-full" :class="{ 'w-full': props.expand, 'w-14': !props.expand }">
        <!-- Toggle Button -->
        <FlapiSidebarToggleButton class="z-10" :expand="props.expand" @update:expand="emit('update:expand', $event)" />

        <!-- Sidebar Content -->
        <div class="flex h-full flex-col justify-between">
          <!-- Logo -->
          <div class="flex items-center border-b p-4" :class="props.expand ? 'justify-start' : 'justify-center'">
            <FlapiLogo :size="32" :large="props.expand" />
          </div>
          <div class="flex items-center gap-2 border-b p-2" :class="props.expand ? 'justify-start' : 'justify-center'">
            <FlapiAvatar
              :photo="props.avatar || undefined"
              :name="props.username"
              :size="40"
              backgroundColor="#35424d"
            />
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
              :active="route?.path === item.to || activeItems.includes(item)"
              :to="item.to"
              :text="item.text"
              :icon="item.icon"
              :iconViewBox="item.iconViewBox"
              @click="handleItemClick(item)"
            />
          </ul>

          <!-- Footer logout button -->
          <ul class="flex flex-col items-center gap-4 px-2 py-4">
            <FlapiSidebarLink
              to="/signout"
              icon="Logout"
              text="Déconnexion"
              :large="props.expand"
              @click="handleItemClick(null)"
            />
          </ul>
        </div>
      </div>
    </div>
    <!-- Submenu (second column) -->
    <div
      v-if="activeSubItems.length > 0"
      class="relative h-full border-l border-gray-400 bg-gray-200 shadow-md"
      :class="{ 'min-w-[280px]': props.expand, 'w-14': !props.expand }"
    >
      <!-- Submenu (second column) -->
      <div class="h-full" :class="{ 'w-full': props.expand, 'w-14': !props.expand }">
        <!-- Sidebar Content -->
        <div class="flex h-full flex-col justify-between">
          <!-- Links -->
          <ul class="flex h-full flex-col items-center gap-4 p-2">
            <FlapiSidebarLink
              v-for="item in activeSubItems"
              :key="item.to"
              :large="props.expand"
              :active="route?.path === item.to || activeItems.includes(item)"
              :to="item.to"
              :text="item.text"
              :icon="item.icon"
              :iconViewBox="item.iconViewBox"
              @click="handleItemClick(item)"
            />
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import { computed, defineProps, ref } from 'vue'
import type { RouteLocationNormalizedGeneric } from 'vue-router'
import { useRoute } from 'vue-router'
import FlapiLogo from '#/components/flapi/FlapiLogo.vue'
import FlapiSidebarLink from '#/components/flapi/FlapiSidebar/FlapiSidebarLink.vue'
import FlapiAvatar from '#/components/ui/FlapiAvatar.vue'
import FlapiSidebarToggleButton from '#/components/flapi/FlapiSidebar/FlapiSidebarToggleButton.vue'
import type { FlapiSidebarItem, FlapiSidebarProps, FlapiSidebarEmit } from '#/core'

/* PROPS */
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
  subMenuExpand: {
    type: Boolean,
    default: false,
  },
})

const route: RouteLocationNormalizedGeneric = useRoute()

/* EMIT */
const emit: FlapiSidebarEmit = defineEmits<{
  (event: 'update:expand', value: boolean): void
}>()

/* REF */
const activeItems: Ref<FlapiSidebarItem[]> = ref([])
const activeItem: Ref<FlapiSidebarItem | null> = ref(null)

/* COMPUTED */
const activeSubItems: ComputedRef<FlapiSidebarItem[]> = computed(() => {
  return activeItem.value?.subItems || []
})

/* METHODS */
/**
 * Handle the click event on a sidebar item.
 * If the item has sub-items, it sets the active item to the clicked item.
 * @param {FlapiSidebarItem | null} item - The clicked sidebar item.
 * @returns {void}
 */
const handleItemClick: (item: FlapiSidebarItem | null) => void = (item: FlapiSidebarItem | null): void => {
  activeItems.value = []

  if (!item) {
    activeItem.value = null
    return
  }

  // Si c'est un subitem, on cherche son parent
  const parentItem: FlapiSidebarItem | undefined = props.items.find((parent: FlapiSidebarItem) =>
    parent.subItems?.includes(item),
  )

  if (parentItem) {
    activeItem.value = parentItem
    activeItems.value = [parentItem, item]
  } else if (item.subItems?.length) {
    // Si c'est un item avec sous-menu
    activeItem.value = item
    activeItems.value = [item]
  } else {
    // Item classique sans sous-menu
    activeItem.value = null
    activeItems.value = [item]
  }
}
</script>
