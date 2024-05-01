<template>
  <div
    @click="$router.push({ name: 'ProductsSingle', params: { id : '2' } })"
    class="cursor-pointer"
  >
    <div class="relative rounded-xl bg-black-200 flex min-w-40 h-44 items-center justify-center">
      <app-disccount-badge value="12" class="absolute top-3 left-3" />
    
      <img class="w-2/3 max-w-48" src="../assets/keyboard.png" alt="teste">
    </div>

    <div class="text-white flex flex-col gap-1 my-3">
      <p class="text-xs">Nome do produto</p>

      <div class="flex items-center gap-1">
        <h4 class="font-bold">R$ 406,00</h4>

        <span class="text-sm line-through text-gray-600">R$ 500,00</span>
      </div>

     <app-rating :rating="4"></app-rating>
    </div>
  </div>
</template>

<script setup>
import AppDisccountBadge from './AppDisccountBadge.vue';
import AppRating from './AppRating.vue';

defineOptions({
  name: 'AppProductCard'
})

const props = defineProps({
  useDisccount: {
    type: Boolean
  }
})
</script>