<template>
  <div>
    <section class="grid grid-cols-3 gap-2">
      <button 
        class="text-white py-2 rounded-lg"
        v-for="(item, index) in props.sections"
        :class="buttonClasses(item)"
        :key="index"
        @click="updateActive(item)"
      >
        {{ item.label }}
      </button>
    </section>

    <section class="text-white mt-6">
      <div
        v-for="(item, index) in props.sections"
        :key="index"
      >
        <slot
          v-if="isActive(item.id)" 
          :name="`tab-${item.id}`"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'AppTabs'
})

const props = defineProps({
  sections: {
    type: Array,
    default: () => []
  }
})

onMounted (() => {
  active.value = props.sections[2].id
})

const active = ref()

function buttonClasses ({ id }) {
  return active.value === id ? 'bg-primary' : 'hover:bg-black-200 duration-200'
}

function updateActive ({ id }) {
  active.value = id
}

function isActive (id) {
  return active.value === id
}
</script>
