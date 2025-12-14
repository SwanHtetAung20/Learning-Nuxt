<script setup lang="ts">
const { $sayHello } = useNuxtApp();

$sayHello("Nuxt User");
</script>

<template>
  <div>
    <Home />
    <img src="@/assets/chair.jpg" alt="Chair Image" />
    <IconBurger class="w-8 h-8" />
  </div>
</template>
