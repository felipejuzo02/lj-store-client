<template>
  <div class="bg-black-200 p-8 rounded-lg items-start justify-between">
    <div>
      <div class="flex items-center gap-3">
        <div class="bg-gray-400 w-8 h-8 rounded-full flex items-center justify-center">
          L
        </div>
  
        <p class="text-sm">Nome do cliente</p>
      </div>
  
      <div>
        <div class="flex text-sm text-gray-500 gap-3 mt-3 mb-6">
          <app-rating :rating="4"></app-rating>
  
          <span>|</span>
  
          <p>Avaliado em 12 de janeiro de 2024</p>
        </div>
        
        <p class="font-bold">Titulo do comentario</p>
  
        <p class="text-sm">Produto de qualidade. Resiste, conforme esperado, melhor até.</p>
      </div>
    </div>

    <div class="w-full bg-gray-700 h-[0.5px] my-4"></div>

    <div class="items-center flex gap-4 text-sm">
      <p>Classifique essa avaliação:</p>

      <div class="flex gap-2">
        <app-icon-button icon="ThumbsUp" @click="markPositiveReview" />

        <app-icon-button icon="ThumbsDown" @click="markNegativeReview" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AppRating from './AppRating.vue';
import AppIconButton from './AppIconButton.vue';

defineOptions({ name: 'AppComment' })

function markPositiveReview () {
  console.log('Positivo')
}

function markNegativeReview () {
  console.log('Positivo')
}
</script>