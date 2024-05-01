<template>
  <button
    class="text-sm font-bold bg-primary text-white w-full rounded-lg py-2 hover:bg-secondary duration-200"
  >
    {{ props.label }}
  </button>
</template>

<script setup>
defineOptions({
  name: 'AppButton'
})

const props = defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>