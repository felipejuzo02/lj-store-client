<template>
  <div class="bg-black-200 px-4 py-4 rounded-lg text-white relative">
    <section>
      <h4 class="font-bold mb-2">Nome</h4>

      <p>
        Rua,
        <span>Número</span>
      </p>

      <p>Bairro</p>

      <p>Cidade</p>
    </section>

    <div class="w-full bg-gray-700 h-[0.5px] my-4"></div>

    <section class="flex justify-end">
      <div class="flex gap-4">
        <app-button variant="tertiary" label="Deletar"></app-button>

        <app-button variant="tertiary" label="Editar"></app-button>

        <app-button label="Tornar padrão"></app-button>
      </div>
    </section>

    <span
      v-if="props.isDefault"
      class="absolute top-4 right-0 bg-primary px-2 py-1 text-xs rounded-l-xl"
    >
      Padrão
    </span>
  </div>
</template>

<script setup>
import AppButton from './AppButton.vue';

defineOptions({ name: 'AppAddressCard' })

const props = defineProps({
  address: {
    type: Object,
    default: () => ({})
  },

  isDefault: {
    type: Boolean,
    default: true
  }
})
</script>