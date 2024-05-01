<template>
  <label
    :for="attributes.id" 
    class="block mb-2 text-sm text-white"
  >
    {{ attributes.label }}
  </label>

  <div class="relative mb-6">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <!-- DEIXAR DINAMICO O ICON -->
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>

    <input 
      v-bind="attributes"
      v-model="model"
      class="mt-1 block w-full ps-10 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
      >
  </div>
</template>

<script setup>
import { computed } from 'vue';

defineOptions({
  name: 'AppInput'
})

const props = defineProps({
  inputProps: {
    type: Object,
    default: () => ({})
  }
})

const attributes = computed(() => {
  return {
    type: 'text',
    ...props.inputProps
  }
})

const model = defineModel({ default: ''})
</script>