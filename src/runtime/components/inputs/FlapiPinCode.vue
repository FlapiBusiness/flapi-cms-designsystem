<template>
  <form
    ref="pinForm"
    class="flex w-full items-center gap-4"
    @submit.prevent="handleConfirm"
    @paste.prevent="handlePaste"
  >
    <FlapiPin
      v-for="n in length"
      :key="n"
      :value="code[n - 1]"
      @update:value="setCode($event, n - 1)"
      @keydown="deleteCode($event, n - 1)"
    />
    <input type="submit" hidden />
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineProps } from '@vue/runtime-core'
import FlapiPin from '#/components/inputs/FlapiPin.vue'
import type { FlapiPinCodeProps } from '#/core'

/**
 * Type definitions for the FlapiPinCode component props
 * @type {FlapiPinCodeProps}
 * @property {number} length - The length of the pin code
 */
const props: FlapiPinCodeProps = defineProps({
  length: { type: Number, default: 6 },
})

/* EMITS */
const emit: (evt: 'confirm', code: string) => void = defineEmits<{
  confirm: [code: string]
}>()

/* REFS */
const code: Ref<(string | null)[]> = ref([])
const pinForm: Ref<HTMLFormElement | null> = ref(null)

/**
 * Handles the paste event.
 * @param {ClipboardEvent} event - The paste event.
 * @returns {void}
 */
const handlePaste: (event: ClipboardEvent) => void = (event: ClipboardEvent): void => {
  const pastedData: string | undefined = event.clipboardData?.getData('text/plain')
  if (pastedData) {
    const pasteDataArray: string[] = pastedData.split('').slice(0, props.length)
    pasteDataArray.forEach((val: string, index: number) => {
      setCode(val, index)
    })
  }
}
/**
 * Handles the confirmation event.
 * @returns {void}
 */
const handleConfirm: () => void = (): void => {
  emit('confirm', code.value.join(''))
}

/**
 * Delete the pin code.
 * @param {KeyboardEvent} val - The keyboard event.
 * @param {number} index - The index of the pin code.
 * @returns {void}
 */
const deleteCode: (val: KeyboardEvent, index: number) => void = (val: KeyboardEvent, index: number): void => {
  if (val.key === 'Backspace' && index > 0) {
    if (code.value[index]) {
      code.value[index] = null
    } else {
      code.value[index - 1] = null
      if (pinForm.value) {
        ;(pinForm.value.children[index - 1] as HTMLInputElement).focus()
      }
    }
  }
}

/**
 * Set the pin code.
 * @param {string} val - The value of the pin code.
 * @param {number} index - The index of the pin code.
 * @returns {void}
 */
const setCode: (val: string, index: number) => void = (val: string, index: number): void => {
  code.value[index] = val
  if (index < props.length - 1) {
    if (pinForm.value) {
      ;(pinForm.value.children[index + 1] as HTMLInputElement).focus()
    }
  } else {
    handleConfirm()
  }
}
</script>
