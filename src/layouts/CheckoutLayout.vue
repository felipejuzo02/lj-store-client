<template>
  <div class="bg-black pt-8 min-h-screen">
    <div class="px-8 flex justify-between items-center">
      <p class="text-xl font-bold text-white">
        {{ pageTitle.title }}
        <span class="text-primary">{{ pageTitle.span }}</span>
      </p>

      <button @click="$router.go(-1)" class="border-[1px] border-gray-600 cursor-pointer rounded-md p-2 flex items-center">
        <img src="../assets/close.svg" alt="Icone de fechar">
      </button>
    </div>

    <div class="bg-black pb-8">
      <router-view v-slot="{ Component }">
        <component :is="Component" class="animate-reveal" />
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'MainLayout'
})

const route = useRoute()

const currentPage = computed(() => route.name)

const pageTitle = computed(() => {
  const titles = {
    MyCart: 'Meu carrinho'
  }

  const words = titles[currentPage.value].split(' ')

  const hasOneWord = words.length === 1

  const span = hasOneWord ? '' : words[words.length - 1]

  const title = hasOneWord ? words[0] : getFirstTitle(words)

  return {
    title,
    span
  }
})

function getFirstTitle (list = []) {
  const listTitle = list.slice(0, -1)

  return listTitle.length === 1 ? listTitle[0] : listTitle.join(" ")
}
</script>
