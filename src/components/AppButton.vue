<template>
  <button
    class="text-sm font-bold w-full rounded-lg py-2 px-2 duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
    :class="buttonClasses"
  > 
    <p class="w-full whitespace-nowrap">
      {{ props.label }}
    </p>
  </button>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({ name: 'AppButton' })

const props = defineProps({
  label: {
    type: String,
    default: ''
  },

  variant: {
    type: String,
    default: 'primary',
    validator (value) {
      return ['primary', 'secondary', 'tertiary'].includes(value)
    }
  }
})

const classesByType = {
  primary: 'bg-primary hover:bg-secondary text-white',
  secondary: 'border-[1px] border-primary text-primary hover:border-white hover:text-white',
  tertiary: 'text-white hover:text-primary'
}

const buttonClasses = computed(() => {
  return classesByType[props.variant]
})
</script>