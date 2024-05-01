<template>
  <div class="w-full relative">
    <div class="relative">
      <input
        placeholder="Pesquisar produto.."
        v-model="model"
        @input="onUpdateModelValue"
        class="mt-1 block w-full px-3 py-2 bg-black-200 border border-gray-600 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
      >

      <div class="absolute inset-y-0 end-4 flex items-center ps-3.5 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
      </div>
    </div>



    <ul class="bg-white text-sm rounded-md mt-0.5 py-2 max-w-full flex-col gap-2 absolute w-full shadow-md" :class="optionsClasses">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="router.push({ name: 'ProductsSingle', params: { id: item.id } })"
        class="px-2 py-2 hover:bg-slate-200 duration-200 cursor-pointer text-ellipsis overflow-hidden text-nowrap"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({ name: 'AppSearchInput' })

const model = defineModel({ type: String, default: ''})
const router = useRouter()

const options = ref([])

const optionsClasses = computed(() => options.value.length && model.value ? 'flex' : 'hidden')

function onUpdateModelValue () {
  options.value = [
    { label: 'Teste de produto', id: 23 }
  ]
}
</script>