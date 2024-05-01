<template>
  <div
    @click="changePhoto"
    class="w-16 h-16 rounded-full bg-black-200 flex items-center justify-center relative app-avatar cursor-pointer"
  >
    <p
      class="text-white font-bold text-xl"
      v-if="!hasPhoto"
    >
      LJ
    </p>

    <img
      v-else
      src="../assets/headphones-icon.svg"
      class="h-16 w-16 object-cover rounded-full" 
      alt="Imagem pessoa"
    >

    <div class="bg-gray-700 absolute w-16 h-16 rounded-full flex items-center justify-center z-50 opacity-0 duration-200">
      <p class="text-white font-bold">
        IC
      </p>
      
      <p class="absolute bottom-[-34px] text-center text-white text-xs bg-black-200 px-2 py-1 rounded-md">Alterar</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'AppAvatar'
})

const hasPhoto = ref(false)

function changePhoto () {
  console.log('Teste')
}
</script>

<style>
.app-avatar:hover > div {
  opacity: 0.8;
}
</style>