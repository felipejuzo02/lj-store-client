<template>
  <div class="md:mt-8 md:pl-4">
    <div class="bg-black-200 aspect-square flex items-center justify-center lg:w-full">
      <img class="w-2/3" src="../assets/keyboard.png" alt="">
    </div>

    <div class="grid grid-cols-4 gap-3 mt-6 px-4 md:px-0">
      <button
        v-for="index in 4"
        class="bg-black-200 aspect-square flex items-center justify-center rounded-xl" 
        :class="activeClasses(index)"
        @click="changeImage(index)"
      >
        <img class="w-2/3" src="../assets/keyboard.png" alt="Imagem do produto">
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'AppGallery'
})

const model = ref(1)

function activeClasses (index) {
  return {
    'border-2 border-primary': model.value === index
  }
}

function changeImage (index) {
  model.value = index
}

</script>