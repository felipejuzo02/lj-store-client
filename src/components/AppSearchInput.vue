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
        <mail-icon :size="16" color="gray"></mail-icon>
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
import { Mail as mailIcon} from 'lucide-vue-next'
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