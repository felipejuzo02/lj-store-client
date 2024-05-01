<template>
  <div class="flex items-center gap-4">
    <button 
      class="border border-gray-700 h-8 w-8 rounded-md flex items-center justify-center hover:bg-black-200 duration-200"
      @click="decrementModel"
    >
      <img src="../assets/left-icon.svg" alt="Icone seta esquerda">
    </button>
    
    <p class="w-5 text-center">{{ model }}</p>
    
    <button 
      class="border border-gray-700 h-8 w-8 rounded-md flex items-center justify-center hover:bg-black-200 duration-200"
      @click="incrementModel"
    >
      <img src="../assets/right.svg" alt="Icone seta direita">
    </button>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AppCounter'
})

const model = defineModel()

function incrementModel () {
  model.value = model.value + 1
}

function decrementModel () {
  if (model.value === 1) return

  model.value = model.value - 1
}
</script>