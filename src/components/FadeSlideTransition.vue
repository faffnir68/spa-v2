<script setup>
import { ref } from 'vue'

</script>

<template>
    <Transition name="fade-slide" mode="out-in">
        <slot/>
    </Transition>
</template>

<style>

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity .25s ease, transform .25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px); 
}

</style>
