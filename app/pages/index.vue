<script setup lang="ts">
const { $sayHello } = useNuxtApp();
const { data: users, pending } = await useLazyFetch("/api/users");

$sayHello("Nuxt User");
</script>

<template>
  <div>
    <Home />
    <img src="@/assets/chair.jpg" alt="Chair Image" />
    <IconBurger class="w-8 h-8" />
  </div>
  {{ pending ? "Loading..." : users }}
</template>
