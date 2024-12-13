<template>
  <div>
    <h1>FlapiButton Playground</h1>
    <FlapiButton :to="'/new-page'" :backgroundColor="'#8472F3'" :backgroundHoverColor="'#6B59D9'" :disabled="false">
      Click me!
    </FlapiButton>

    <FlapiButton :backgroundColor="'#FF6347'" :backgroundHoverColor="'#FF4500'" :disabled="true">
      Disabled Button
    </FlapiButton>
  </div>
</template>

<script setup>
import FlapiButton from '@/components/core/FlapiButton.vue'
</script>
