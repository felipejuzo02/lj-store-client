<template>
<div class="flex items-center justify-between text-white w-full">
  <div class="flex items-center gap-4">
    <div class="bg-black-200 w-24 h-24 rounded-xl flex justify-center items-center">
      <img class="w-2/3" src="../assets/keyboard.png" alt="">
    </div>

    <slot name="content">
      <div class="flex flex-col gap-2">
        <div>
          <p class="text-sm">Teclado 1</p>
  
          <div class="flex gap-1 items-center">
            <h4 class="font-bold">R$ 123,00</h4>
  
            <span class="text-sm line-through text-gray-600">R$ 500,00</span>
          </div>
        </div>
  
        <app-counter v-model="modelValue"></app-counter>
      </div>
    </slot>
  </div>

  <div v-if="!hasContentSlot">
    <button 
      class="border border-gray-700 h-8 w-8 rounded-md flex items-center justify-center hover:bg-black-200 duration-200"
      @click="emits('removeItem')"
    >
      <img src="../assets/delete.svg" alt="Icone seta direita">
    </button>
  </div>
</div>
</template>

<script setup>
import { useSlots } from 'vue'

import AppCounter from '../components/AppCounter.vue';

defineOptions({
  name: 'AppProdcutCardSmall'
})

const slots = useSlots()

const modelValue = defineModel('counter', { default: 1 })

const emits = defineEmits(['removeItem'])

const hasContentSlot = !!slots.content

</script>