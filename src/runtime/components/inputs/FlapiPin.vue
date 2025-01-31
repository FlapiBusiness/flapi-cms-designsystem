<template>
  <input
    class="h-30 relative flex w-20 items-center justify-center rounded-md border-2 border-transparent bg-gray-400 px-2 py-4 text-center text-5xl text-white outline-none placeholder:text-zinc-600 hover:border-light-300 focus:border-primary-400 focus:bg-gray-500 sm:h-28"
    maxlength="1"
    type="text"
    v-model="pinValue"
    @input="updateValue"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'

/* REFS */
const pinValue: Ref<string> = ref('')

/* EMITS */
const emit: (evt: 'update:value', pinValue: string) => void = defineEmits<{
  'update:value': [pinValue: string]
}>()

/* METHODS */
/**
 * Updates the value of the pin code.
 * @returns {void}
 */
const updateValue: () => void = (): void => {
  emit('update:value', pinValue.value)
}
</script>
