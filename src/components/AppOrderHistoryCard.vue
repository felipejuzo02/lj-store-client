<template>
  <details class="app-details border border-black-200 rounded-lg text-white">
    <summary class="flex p-4 justify-between items-center cursor-pointer hover:bg-black-200">
      <div>
        <p class="font-bold">Número do pedido</p>

        <span class="text-gray-400 text-sm">#002</span>
      </div>

      <img src="../assets/chevron-bottom.svg" alt="">
    </summary>

    <div class="p-4">
      <section class="flex justify-between text-sm">
        <div>
          <p class="font-bold">STATUS</p>

          <span class="text-primary">Pago</span>
        </div>

        <div>
          <p class="font-bold">DATA</p>

          <span class="text-gray-400">11/03/2023</span>
        </div>

        <div>
          <p class="font-bold">PAGAMENTO</p>

          <span class="text-gray-400">Pix</span>
        </div>
      </section>

      <div class="w-full h-[1px] bg-black-200 my-6"></div>

      <section>
        <div class="flex gap-2 items-center">
          <app-product-card-small 
            class="cursor-pointer"
            @click="$router.push({ name: 'ProductsSingle', params: { id: 12} })"
          >
            <template #content>
              <div class="flex flex-col gap-2">
                <p class="text-sm">Teclado 1</p>
        
                <div class="flex gap-1 items-center">
                  <h4 class="font-bold">R$ 123,00</h4>
        
                  <span class="text-sm line-through text-gray-600">R$ 500,00</span>
                </div>

                <p class="text-sm text-gray-600">Quantidade: 2</p>
              </div>
            </template>
          </app-product-card-small>
        </div>
      </section>

      <section>
        <div class="w-full h-[1px] bg-black-200 my-4"></div>

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

      </section>
    </div>
  </details>
</template>

<script setup>
import AppProductCardSmall from './AppProductCardSmall.vue';

defineOptions({
  name: 'AppDetails'
})
</script>

<style>
</style>