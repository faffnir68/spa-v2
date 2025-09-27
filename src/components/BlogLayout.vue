<script setup>
import { provide, ref } from 'vue'
import HomePage from './pages/HomePage.vue'
import Header from './Header.vue'
import FadeSlideTransition from './FadeSlideTransition.vue'

</script>

<template>
  <Header />
  <RouterView v-slot="{ Component, route }">
      <FadeSlideTransition>
        <div class="route-wrapper" :key="route.fullPath">
            <component :is="Component" />
        </div>
      </FadeSlideTransition>
  </RouterView>
</template>

<style scoped>


</style>
