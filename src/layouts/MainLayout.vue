<template>
  <div class="bg-black pt-8 min-h-screen">
    <app-header class="px-8" />

    <div class="w-full bg-gray-700 h-[0.5px]"></div>

    <div class="bg-black pb-8 md:max-w-7xl mx-auto">
      <router-view v-slot="{ Component }">
        <component class="animate-reveal" :is="Component"></component>
      </router-view>
    </div>
    
    <div class="w-full bg-gray-700 h-[0.5px] mt-4 hidden md:block"></div>

    <footer class="text-gray-400 text-center text-sm p-8 hidden md:block">
      Desenvolvido por Luis Juzo :)
    </footer>
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';

defineOptions({
  name: 'MainLayout'
})
</script>
