<template>
  <div class="mx-8 mt-8">
    <app-product-card-small
      v-model:counter="counter"
      @remove-item="console.log('removendo o item')"
    />

    <section class="text-white">
      <div class="w-full h-[1px] bg-black-200 my-8"></div>

      <div class="flex flex-col gap-4">
        <div class="flex justify-between text-sm">
          <p>Subtotal</p>

          <p>R$12.000,00</p>
        </div>

        <div class="flex justify-between text-sm">
          <p>Entrega</p>

          <p>Grátis</p>
        </div>

        <div class="flex justify-between text-sm">
          <p>Desconto</p>

          <p>R$0,00</p>
        </div>

        <div class="flex justify-between text-sm font-bold">
          <p>Total</p>

          <p>R$ 12.000,00</p>
        </div>
      </div>

      <div class="w-full h-[1px] bg-black-200 my-8"></div>

      <app-button label="Finalizar compra"></app-button>
    </section>
  </div>
</template>

<script setup>
import AppProductCardSmall from '../../components/AppProductCardSmall.vue';
import AppButton from '../../components/AppButton.vue';

import { ref } from 'vue'

defineOptions({
  name: 'Chekckout'
})

const counter = ref(0)

const emits = defineEmits(['removeItem'])
</script>