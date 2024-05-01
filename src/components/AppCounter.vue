<template>
  <div class="flex items-center gap-4">
    <app-icon-button icon="ChevronLeft" @click="decrementModel" />

    <p class="w-5 text-center">{{ model }}</p>

    <app-icon-button icon="ChevronRight" @click="incrementModel" />
  </div>
</template>

<script setup>
import AppIconButton from './AppIconButton.vue';
import { toast } from 'vue3-toastify';

defineOptions({
  name: 'AppCounter'
})

const model = defineModel()

function incrementModel () {
  model.value = model.value + 1

  toast.success('Wow so easy!');
}

function decrementModel () {
  if (model.value === 1) return

  model.value = model.value - 1
}
</script>