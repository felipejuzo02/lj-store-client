<template>
  <button class="w-full py-2 border-[1px] border-gray-600 rounded-xl">
    <div class="flex flex-row gap-2 text-slate-200 items-center justify-center">
      <img :src="iconURL" alt="Icone categoria">

      <p>{{ props.label }}</p>
    </div>
  </button>
</template>

<script setup>
defineOptions({
  name: 'AppCategoryButton'
})

const props = defineProps({
  icon: {
    type: String,
    default: '',
    validator (value) {
      return ['headphones', 'keyboard', 'headphones', 'monitor', 'mouse', 'speaker', 'square-dashed-bottom'].includes(value)
    }
  },

  label: {
    type: String,
    default: ''
  }
})

const iconURL = new URL(`/src/assets/${props.icon}-icon.svg`, import.meta.url).href
</script>