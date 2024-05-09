<template>
  <div class="mx-8 mt-8">
    <section v-if="isSignIn">
      <div class="flex items-center gap-2">
        <app-avatar />

        <div class="text-gray-500">
          <span class="text-xs">Olá,</span>

          <p class="text-white">Nome do usuário</p>
        </div>
      </div>
      
      <app-tabs class="mt-12" :sections="sections">
        <template #tab-account>
          <form class="mt-6 w-full rounded-lg shadow-sm" @submit.prevent="changePersonalData">
            <div class="flex gap-2">
              <contact-icon color="white" size="22"/>

              <p class="mb-3 text-white">Informações pessoais</p>
            </div>
            
            <app-input
              v-for="(input, index) in personalDataInputPropsList"
              :key="index"
              v-model="personalData[input.id]"
              :input-props="input"
            />

            <app-button label="Alterar" disabled type="submit"></app-button>
          </form>
        </template>

        <template #tab-address>
          <app-address-card />
        </template>

        <template #tab-history>
          <app-order-history-card />
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
import { ref } from 'vue'

import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import AppAvatar from '../../components/AppAvatar.vue';
import AppTabs from '../../components/AppTabs.vue';
import AppOrderHistoryCard from '../../components/AppOrderHistoryCard.vue';
import AppAddressCard from '../../components/AppAddressCard.vue';

import { Contact as contactIcon } from 'lucide-vue-next';

defineOptions({
  name: 'MyAccount'
})

const personalData = ref({
  email: 'teste@teste.com.br',
  dateOfBirth: '10/10/2010',
  phone: '(31) 1231231231',
  document: '333.333.333-22'
})

const login = ref({
  email: '',
  password: ''
})

const isSignIn = true

const personalDataInputPropsList = [
  {
    label: 'E-mail',
    placeholder: 'email@email.com.br',
    id: 'email'
  },
  {
    label: 'Data de nascimento',
    placeholder: '00/00/0000',
    id: 'dateOfBirth'
  },
  {
    label: 'Telefone',
    placeholder: 'DDD + Número',
    id: 'phone'
  },
  {
    label: 'CPF',
    placeholder: '000.000.000-00 (Digite somente números)',
    id: 'document',
    disabled: true
  }
]

const emailInputProps = {
  label: 'E-mail',
  placeholder: 'email@email.com.br',
  id: 'email'
}

const passwordInputProps = {
  label: 'Senha',
  placeholder: '***********',
  id: 'password',
  type: 'password'
}

const sections = [
  {
    label: 'Conta',
    id: 'account',
  },
  {
    label: 'Endereços',
    id: 'address',
  },
  {
    label: 'Pedidos',
    id: 'history',
  }
]

function submit () {
  console.log('A')
}

function changePersonalData () {
  console.log('Trocando os dados pessoais')
}
</script>