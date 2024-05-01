<template>
  <div>
    <section class="md:grid md:grid-cols-2 gap-4">
      <app-gallery/>
      
      <section class="px-4">
        <div class="mt-6 text-white">
          <div class="flex flex-col gap-1">
            <span class="text-xs text-gray-400">Novo | 100 vendidos</span>
      
            <h3>Logitech Teclado 2s</h3>
      
            <span class="text-xs text-primary">Disponivel em estoque</span>
      
            <app-rating :rating="3" />
          </div>
    
          <div class="mt-4">
            <div class="flex gap-2 items-center">
              <h4 class="text-lg">R$ 467,93</h4>
      
              <app-disccount-badge value="2"></app-disccount-badge>
            </div>
    
            <span class="text-sm line-through text-gray-600">De R$322,00</span>
          </div>
  
          <app-counter class="mt-2" v-model="quantity" />
        </div>
    
        <div class="mt-6 text-white">
          <h5 class="font-bold mb-2">Descrição</h5>
    
          <p class="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus. Lorem ipsum dolor sit amet consectetur.
    
            Lorem ipsum dolor sit amet consectetur. Lacinia venenatis nunc nulla enim nulla vel pulvinar metus.
          </p>
        </div>
    
        <app-button
          label="ADICIONAR AO CARRINHO"
          class="mt-4"
        />
  
        <div class="flex justify-between items-center py-4 px-6 text-sm bg-black-200 rounded-xl mt-6">
          <div class="flex gap-4 items-center">
            <img src="../../assets/menu-icon.svg" alt="">
    
            <div class="flex flex-col gap-1">
              <p class="text-white">Entrega via <span class="font-bold">Juzo's</span></p>
    
              <p class="text-primary">Envio para <span class="font-bold">todo Brasil</span></p>
            </div>
          </div>
  
          <p class="text-white font-bold">Frete Grátis</p>
        </div>
      </section>
    </section>
    
    <div class="w-full bg-gray-700 h-[0.5px] my-12"></div>

    <section class="px-4">
      <h4 class="text-white text-2xl text-bold mb-4">
        Informações ténicas
      </h4>
    </section>

    <section class="px-4">
      <div class="hidden md:flex items-center justify-between mb-4">
        <h4 class="text-white text-2xl text-bold">
          Avaliações dos usuários
        </h4>

        <app-filter-button 
          label="Classificar por" 
          v-model="filter" 
          :options="filtersList"
        />
      </div>

      <div class="flex flex-col md:flex-row md:items-start text-white gap-4">
        <app-rating-details />

        <div class="w-full flex flex-col gap-2">
          <app-comment
            v-for="_ in 4"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AppGallery from '../../components/AppGallery.vue';
import AppRating from '../../components/AppRating.vue';
import AppRatingDetails from '../../components/AppRatingDetails.vue';
import AppDisccountBadge from '../../components/AppDisccountBadge.vue';
import AppButton from '../../components/AppButton.vue';
import AppCounter from '../../components/AppCounter.vue';
import AppComment from '../../components/AppComment.vue';
import AppFilterButton from '../../components/AppFilterButton.vue';

import { ref } from 'vue'

defineOptions({
  name: 'ProductsSingle'
})

const quantity = ref(1)
const filter = ref('')

const filtersList = [
  {
    label: 'Por data mais recente',
    value: 1
  },
  {
    label: 'Por data mais antiga',
    value: 2
  },
  {
    label: 'Por avaliações',
    value: 3
  }
]
</script>