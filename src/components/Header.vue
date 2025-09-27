<script setup>
import { provide, ref } from 'vue'

</script>

<template>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    </nav>
</template>

<style scoped>


</style>
