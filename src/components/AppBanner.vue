<template>
  <div class="flex items-center justify-center h-36 bg-red-100 bg-gradient-to-tr from-primary to-secondary rounded-2xl">
    <div class="flex items-center justify-center gap-8">
      <div class="text-white">
        <p >
          até
          <span class="font-bold text-3xl">55%</span>
        </p>

        <p class="font-bold text-3xl">Desconto</p>
        <p>só esse mês</p>
      </div>

      <img src="../assets/disccount-banner.png" alt="Imagem de desconto">
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AppBanner'
})
</script>