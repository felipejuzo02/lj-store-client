<template>
  <span class="bg-primary text-white rounded-2xl flex items-center px-2 py-1 gap-[2px]">
    <img src="../assets/move-down-icon.svg" alt="Icone seta para baixo">

    <p class="text-xs font-bold">{{ disccountLabel }}</p>
  </span>
</template>

<script setup>
defineOptions({
  name: 'AppDisccountBadge'
})

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const disccountLabel = `${props.value}%`
</script>