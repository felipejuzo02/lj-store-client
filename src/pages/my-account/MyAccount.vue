<template>
  <div class="mx-8 mt-8">
    <section v-if="isSignIn">
      <div class="flex items-center gap-2">
        <app-avatar></app-avatar>

        <div class="text-gray-500">
          <span class="text-xs">Olá,</span>

          <p class="text-white ">Nome do usuário</p>
        </div>
      </div>
      
      <app-tabs class="mt-12" :sections="sections">
        <template #tab-account>
          Teste
        </template>

        <template #tab-history>
          <app-details></app-details>
        </template>
      </app-tabs>
    </section>

    <section v-else>
      <p class="text-xl font-bold text-white">
        Realizar
        <span class="text-primary">Login</span>
      </p>

      <form class="mt-6 w-full rounded-lg shadow-sm" @submit.prevent="submit">
        <app-input v-model="login.email" :input-props="emailInputProps" />
        <app-input v-model="login.password" :input-props="passwordInputProps" />

        <app-button label="Entrar" type="submit"></app-button>
      </form>

      <div class="text-white text-center text-sm mt-6">
        <p class="text-gray-400">
          Ainda não tem conta?
          <span class="text-gray-400 hover:text-primary duration-200 cursor-pointer" @click="$router.push({ name: 'SignUp' })">Registrar-se</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import AppAvatar from '../../components/AppAvatar.vue';
import AppTabs from '../../components/AppTabs.vue';
import AppDetails from '../../components/AppDetails.vue';

defineOptions({
  name: 'MyAccount'
})

const login = ref({
  email: '',
  password: ''
})
const isSignIn = false

const emailInputProps = computed(() => {
  return {
    label: 'E-mail',
    placeholder: 'email@email.com.br',
    id: 'email'
  }
})

const passwordInputProps = computed(() => {
  return {
    label: 'Senha',
    placeholder: '***********',
    id: 'password',
    type: 'password'
  }
})

const sections = computed(() => {
  return [
    {
      label: 'Conta',
      id: 'account',
    },
    {
      label: 'Endereço',
      id: 'address',
    },
    {
      label: 'Pedidos',
      id: 'history',
    }
  ]
})

function submit () {
  console.log('A')
}
</script>