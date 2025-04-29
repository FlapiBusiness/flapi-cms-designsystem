<template>
  <nav class="flex h-full text-sm">
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
            <FlapiLogo :size="28" :large="props.expand" />
          </div>
          <div class="flex items-center gap-2 border-b p-2" :class="props.expand ? 'justify-start' : 'justify-center'">
            <FlapiAvatar
              :photo="props.avatar || undefined"
              :name="props.username"
              :size="32"
              backgroundColor="#35424d"
            />
            <span v-if="props.expand" class="font-medium text-light-400">
              {{ props.username }}
            </span>
          </div>

          <!-- Links -->
          <ul class="flex h-full flex-col items-center gap-4 p-2">
            <FlapiSidebarLink
              v-for="item in props.items"
              :key="item.to"
              :large="props.expand"
              :active="itemIsActive(item)"
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
      v-if="showSubmenu"
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
              :active="itemIsActive(item)"
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
import { computed, defineProps, ref, onMounted } from 'vue'
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
  activePath: {
    type: String,
    default: null,
  },
})

/* EMIT */
const emit: FlapiSidebarEmit = defineEmits<{
  (event: 'update:expand', value: boolean): void
  (event: 'update:activePath', value: string): void
}>()

/* REF */
const activeItem: Ref<FlapiSidebarItem | null> = ref(null)

/* COMPUTED */
const activeParentItem: ComputedRef<FlapiSidebarItem | null> = computed(() => {
  return activeItem.value ? findParentItem(activeItem.value) : null
})

const activeSubItems: ComputedRef<FlapiSidebarItem[]> = computed(() => {
  return activeItem.value?.subItems || activeParentItem.value?.subItems || []
})

const showSubmenu: ComputedRef<boolean> = computed(() => {
  return (activeItem.value?.subItems || []).length > 0 || activeParentItem.value !== null
})

// join items and items subitems
const allItems: ComputedRef<FlapiSidebarItem[]> = computed(() => {
  return props.items.reduce((acc: FlapiSidebarItem[], item: FlapiSidebarItem) => {
    acc.push(item)
    if (item.subItems) {
      acc.push(...item.subItems)
    }
    return acc
  }, [])
})

/* METHODS */
/**
 * Find the parent item of a given sidebar item.
 * @param {FlapiSidebarItem} item - The sidebar item to find the parent for.
 * @returns {FlapiSidebarItem | null} - The parent item or null if not found.
 */
const findParentItem: (item: FlapiSidebarItem) => FlapiSidebarItem | null = (
  item: FlapiSidebarItem,
): FlapiSidebarItem | null => {
  return (
    props.items.find((parent: FlapiSidebarItem) =>
      parent.subItems?.some((subItem: FlapiSidebarItem) => subItem.to === item.to),
    ) || null
  )
}

/**
 * Handle the click event on a sidebar item.
 * If the item has subitems, it sets the active item to the clicked item.
 * @param {FlapiSidebarItem | null} item - The clicked sidebar item.
 * @returns {void}
 */
const handleItemClick: (item: FlapiSidebarItem | null) => void = (item: FlapiSidebarItem | null): void => {
  if (!item) {
    activeItem.value = null
    return
  }

  activeItem.value = item
  if (item.to) {
    emit('update:activePath', item.to)
  }
}

/**
 * Check if the given item is active.
 * @param {FlapiSidebarItem} item - The sidebar item to check.
 * @returns {boolean} - True if the item is active, false otherwise.
 */
const itemIsActive: (item: FlapiSidebarItem) => boolean = (item: FlapiSidebarItem): boolean => {
  return props.activePath === item.to || activeParentItem.value === item
}

// LIFECYCLE
onMounted(() => {
  // set activeItem with active props.activePath if null
  if (!activeItem.value) {
    const activeItemFound: FlapiSidebarItem | undefined = allItems.value.find((item: FlapiSidebarItem) => {
      return item.to === props.activePath
    })

    if (activeItemFound) {
      activeItem.value = activeItemFound
    }
  }
})
</script>
