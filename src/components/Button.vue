<script setup>
import { ref, computed, inject, unref } from 'vue'

const props = defineProps({
    text: String,
    dark: Boolean
})

const classes = computed(() => ({
  'btn': true,
  dark: props.dark || unref(darkMode)
}))

const darkMode = inject('darkMode')
</script>

<template>
    <button :class="classes"><slot></slot></button>
</template>

<style scoped>

.btn {
  background: white;
  color: #000;
  border: 10px solid #333;
}
.btn.dark {
    background: #000;
    color: #fff;
    border: 10px solid #fff;
}

</style>
