<template>
  <div class="w-full">
    <div class="relative h-3 w-full overflow-hidden rounded-full" :style="{ backgroundColor: props.backgroundColor }">
      <div
        class="absolute left-0 top-0 h-full rounded-full transition-all duration-500 ease-out"
        :style="{
          width: props.progress + '%',
          backgroundColor: props.progressColor,
        }"
      ></div>
    </div>
    <div v-if="showLabel" class="mt-2 text-center text-sm font-semibold" :style="{ color: props.textColor }">
      {{ props.progress }}%
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FlapiProgressBarProps } from '#/core'
import { defineProps } from 'vue'

const props: FlapiProgressBarProps = defineProps({
  progress: {
    type: Number,
    default: 0,
  },
  backgroundColor: {
    type: String,
    default: '#454D5E',
  },
  progressColor: {
    type: String,
    default: '#8472F3',
  },
  textColor: {
    type: String,
    default: '#F5F4FB',
  },
  showLabel: {
    type: Boolean,
    default: false,
  },
})
</script>
