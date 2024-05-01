<template>
  <div>
    <app-banner class="mx-8 my-8" />
  
    <div class="px-8 grid grid-cols-2 gap-3">
      <app-category-button
        v-for="(item, index) in categories"
        :key="index"
        :icon="item.value"
        :label="item.label"
        @click="$router.push({ name: 'ProductsList', query: { category: item.value } })"
      />
    </div>
  
    <section class="mt-8">
      <h3 class="font-bold text-white px-8">OFERTAS</h3>
  
      <div class="flex gap-4 overflow-x-auto scroll-style mt-3">
        <app-product-card class="first:ml-8 last:mr-8" v-for="_ in 4" />
      </div>
    </section>
  
    <section class="mt-8">
      <h3 class="font-bold text-white px-8">MAIS VENDIDOS</h3>
  
      <div class="flex gap-4 overflow-x-auto scroll-style mt-3">
        <app-product-card class="first:ml-8 last:mr-8" v-for="_ in 4" />
      </div>
    </section>
  </div>
</template>

<script setup>
import AppBanner from '../components/AppBanner.vue';
import AppCategoryButton from '../components/AppCategoryButton.vue';
import AppProductCard from '../components/AppProductCard.vue';

import { ref } from 'vue'

defineOptions({
  name: 'Home'
})

const search = ref('')

const categories = [
  { label: 'Teclados', value: 'keyboard' },
  { label: 'Mouses', value: 'mouse' },
  { label: 'Fones', value: 'headphones' },
  { label: 'Mousepads', value: 'square-dashed-bottom' },
  { label: 'Monitores', value: 'monitor' },
  { label: 'Speakers', value: 'speaker' }
]
</script>

<style>
.scroll-style {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scroll-style::-webkit-scrollbar {
  display: none;
}
</style>