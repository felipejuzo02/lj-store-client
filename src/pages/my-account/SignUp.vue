<template>
  <div class="mx-8 mt-8">
    <p class="text-xl font-bold text-white">
      Crie sua
      <span class="text-primary">conta</span>
    </p>

    <form class="mt-6 w-full rounded-lg shadow-sm" @submit.prevent="submit">
      <app-input
        v-for="(item, index) in inputsProps"
        :key="index"
        :input-props="item"
        v-model="user[item.id]"
      />

      <app-button class="mt-4" label="Criar conta" type="submit"></app-button>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';

defineOptions({
  name: 'SignUp'
})

const user = ref({
  fullName: '',
  email: '',
  password: '',
  repeatPassword: ''
})

const inputsProps = computed(() => {
  return [
    {
      type: 'text',
      id: 'fullName',
      label: 'Nome completo',
      placeholder: 'Antonio Carlos Gabriel',
      required: true
    },
    {
      type: 'text',
      id: 'email',
      label: 'Seu e-mail',
      placeholder: 'email@email.com.br',
      required: true
    },
    {
      type: 'password',
      id: 'password',
      label: 'Senha',
      placeholder: '***********',
      required: true
    },
    {
      type: 'password',
      id: 'repeatPassword',
      label: 'Repita sua senha',
      placeholder: '***********',
      required: true
    }
  ]
})

function submit () {
  console.log('a')
}
</script>