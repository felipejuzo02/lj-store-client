<template>
  <section class="px-8 mt-8">
    <app-select
      label="Filtrar por:" 
      v-model="category" 
      :options="categoryList"
      class="max-w-48"
    />

    <div class="mt-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-y-8">
      <app-product-card
        v-for="_ in 12"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import AppSelect from '../../components/AppSelect.vue';
import AppProductCard from '../../components/AppProductCard.vue';

defineOptions({
  name: 'ProductsList'
})

const route = useRoute()

const category = ref({})

const categoryList = [
  {
    label: 'Todos',
    value: ''
  },
  {
    label: 'Teclados',
    value: 'keyboard'
  },
  {
    label: 'Mouses',
    value: 'mouse'
  },
  {
    label: 'Fones',
    value: 'headphones'
  },
  {
    label: 'Mousepads',
    value: 'square-dashed-bottom' // TODO: trocar
  },
  {
    label: 'Monitores',
    value: 'monitor'
  },
  {
    label: 'Speakers',
    value: 'speaker'
  },
]

const categoryQuery = route.query?.category

onMounted(() => {
  if (!categoryQuery) return

  category.value = categoryList.find(item => item.value === categoryQuery)
})
</script>