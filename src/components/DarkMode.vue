<script setup>
import { ref, computed, provide } from 'vue'

const darkMode = ref(true)

provide('darkMode', darkMode)

</script>

<template>
    <slot></slot>
</template>

<style scoped>

</style>
