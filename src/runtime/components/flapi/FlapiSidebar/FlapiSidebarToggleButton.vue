<template>
  <button
    class="absolute right-[-14px] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary-400 active:bg-primary-500"
    @click="emit('update:expand', !props.expand)"
  >
    <FlapiIcon v-show="props.expand" name="ChevronLeft" mode="stroke" color="#F5F4FB" />
    <FlapiIcon v-show="!props.expand" name="ChevronRight" mode="stroke" color="#F5F4FB" />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
/**
 * Sidebar toggle button props definition
 * @type {SidebarToggleButtonProps}
 * @property {boolean} expand - The sidebar expansion state
 */
export type SidebarToggleButtonProps = {
  expand: boolean
}

const props: SidebarToggleButtonProps = defineProps({
  expand: {
    type: Boolean,
    required: true,
  },
})

/* EMIT */
const emit: (event: 'update:expand', value: boolean) => void = defineEmits<{
  (event: 'update:expand', value: boolean): void
}>()
</script>
