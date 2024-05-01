<template>    
  <button class="border border-gray-700 p-2 rounded-md flex items-center justify-center hover:bg-black-200 duration-200">
    <component
      :is="icon"
      :size="16"
      color="white"
    />
  </button>
</template>


<script setup>
import * as icons from "lucide-vue-next";
import { computed } from 'vue';

defineOptions({ name: 'AppIconButton' })

const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

const icon = computed(() => icons[props.icon]);
</script>
