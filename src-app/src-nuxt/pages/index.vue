<template>
  <div class="h-screen bg-[#101623]">
    <h1 class="text-sky-400">INDEX PAGE</h1>
    <FlapiButton variant="green">
      <span>Click me</span>
    </FlapiButton>

    <Form>
      <FlapiInput
        id="field65654665"
        label="Input Label"
        placeholder="Enter text here..."
        rules="required|min:3|max:10"
        type="text"
        v-model:value="value"
      />
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate'
import type { Ref } from 'vue'
// import ExempleComponent from '../../../dist/runtime/components/exemple-component.vue'
import FlapiButton from '~/components/core/FlapiButton.vue'
import FlapiInput from '~/components/core/FlapiInput.vue'

const value: Ref<string> = ref('')
</script>
