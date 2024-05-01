<template>
  <div class="relative w-full max-w-56">
    <div class="relative box">
      <input type="checkbox" class="checkbox">
  
      <div class="select-button flex items-center justify-between border-[1px] bg-black-200 px-4 rounded-lg py-2 outline-[1px] border-gray-600 cursor-pointer">
        <div class="text-gray-400 font-light text-sm">
          {{ selectedValue.label }}
        </div>
  
        <div class="flex">
          <chevron-down-icon
            class="chevron-down-icon"
            color="white" 
            :size="16"
          />

          <chevron-up-icon
            color="white"
            :size="16"
            class="hidden chevron-up-icon"
          />
        </div>
      </div>
    </div>

    <ul class="options hidden absolute w-full z-20 shadow-xl rounded-lg py-2 mt-1 bg-black-200 border-[1px] border-gray-600">
      <li
        class="option relative py-2 px-4 hover:bg-gray-800 duration-200 text-white text-sm font-thin cursor-pointer"
        v-for="(item, index) in props.options"
        :key="index"
        @click="onSelectValue(item)"
      >
        <input
          type="radio"
          name="category"
          :value="item.value"
        >
        
        <div class="flex items-center justify-between w-full">
          <span>{{ item.label }}</span>
          
          <check-icon
            color="white" 
            :size="16"
            class="check-icon hidden"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// TODO: posso colocar pra fechar ao clicar na tecla escape

import { ref } from 'vue'

import { 
  Check as checkIcon,
  ChevronDown as chevronDownIcon,
  ChevronUp as chevronUpIcon
} from 'lucide-vue-next';

defineOptions({ name: 'AppFilterButton' })

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    type: String,
    default: 'Selecionar item'
  },

  options: {
    type: Array,
    default: () => []
  }
})

const selectedValue = ref({ label: props.label })

function onSelectValue (item) {
  selectedValue.value = item

  const checkbox = document.querySelector('.checkbox')

  emits('update:modelValue', selectedValue.value)

  checkbox.click()
}
</script>

<style>
/* TODO: aplicar oq der com tailwind */
.checkbox:checked + .select-button,
.checkbox:focus + .select-button {
  border-color: #5033C3;
}

.checkbox:checked + .select-button .chevron-down-icon {
  display: none;
}

.checkbox:checked + .select-button .chevron-up-icon {
  display: block;
}

.checkbox {
  /* TIRA AS PROPRIEDADES CSS */
  all: unset; 

  /* SERVE PARA O TAMANHO SER DO TAMANHO DO SEU PAI QUE É RELATIVE */
  position: absolute;
  inset: 0;

  cursor: pointer;
}

.option:has(input:checked),
.option:hover {
  background-color: #433e56;
}

.option:has(input:focus){
  outline: 1px solid #5033C3;
}

.option:has(input:checked) .check-icon {
  display: block;
}

.option input {
  all: unset;

  position: absolute;
  inset: 0;
}

.box:has(.checkbox:checked) + .options {
  display: block;
}
</style>