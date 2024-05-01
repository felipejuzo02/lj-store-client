<template>
  <header>
    <div class="flex justify-between items-center pb-8">
      <app-icon-button icon="Menu" @click="toggleDrawer" class="md:hidden" />
      
      <h1 class="text-white cursor-pointer" @click="$router.push({ name: 'Home'})" >
        LOGO
      </h1>
      
      <div class="flex gap-4 md:w-96 items-center">
        <app-search-input class="hidden md:block" v-model="search"></app-search-input>
        
        <!-- TODO: adicionar minha conta aqui -->

        <app-icon-button icon="ShoppingCart"  @click="router.push({ name: 'MyCart' })" />
      </div>
  
      <div class="fixed h-screen bg-black-200 bottom-0 py-8 duration-300 right-0 z-50" :class="drawerClasses">
        <app-icon-button icon="X"  @click="toggleDrawer" />
  
        <div class="flex flex-col items-center text-white" :class="navClasses">
          <nav class="flex flex-col items-center gap-6 mt-8">
            <router-link :to="{ name: 'Home'}">Home</router-link>
  
            <router-link :to="{ name: 'ProductsList'}">Catálogo</router-link>
  
            <router-link :to="{ name: 'MyAccount'}">Minha conta</router-link>
          </nav>
  
          <div class="text-center mt-8">
            <h1>LOGO</h1>
  
            <span class="text-gray-500 text-xs">Feito por Luis Juzo</span>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center mb-8 md:hidden">
      <app-search-input v-model="search"></app-search-input>
    </div>
  </header>
</template>

<script setup>
import AppSearchInput from './AppSearchInput.vue';
import AppIconButton from './AppIconButton.vue';

import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

defineOptions({
  name: 'AppHeader'
})

const oppenedDrawer = ref(false)
const search = ref('')

const route = useRoute()
const router = useRouter()

watch (route, () => oppenedDrawer.value && toggleDrawer())

// Computeds
const navClasses = computed(() => !oppenedDrawer.value && 'hidden')

const drawerClasses = computed(() => oppenedDrawer.value ? 'w-full px-8' : 'w-[0]')

function toggleDrawer () {
  oppenedDrawer.value = !oppenedDrawer.value
}
</script>