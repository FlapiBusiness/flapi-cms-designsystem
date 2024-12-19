<template>
  <div class="flex gap-2">
    <FlapiSquareButton>
      <FlapiIcon name="ChevronLeft" mode="stroke" />
    </FlapiSquareButton>
    <FlapiSquareButton>1</FlapiSquareButton>
    <FlapiSquareButton backgroundColor="#35424D" backgroundHoverColor="#454D5E" textColor="#BDB3FF"
      >2</FlapiSquareButton
    >
    <FlapiSquareButton backgroundColor="#35424D" backgroundHoverColor="#454D5E" textColor="#BDB3FF"
      >...</FlapiSquareButton
    >
    <FlapiSquareButton backgroundColor="#35424D" backgroundHoverColor="#454D5E" textColor="#BDB3FF"
      >4</FlapiSquareButton
    >
    <FlapiSquareButton>
      <FlapiIcon name="ChevronRight" mode="stroke" />
    </FlapiSquareButton>
  </div>
</template>

<script lang="ts" setup>
import FlapiSquareButton from '#/components/buttons/FlapiSquareButton.vue'
import FlapiIcon from '#/components/ui/FlapiIcon.vue'
</script>
