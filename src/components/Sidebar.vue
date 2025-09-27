<script setup>
import { ref, computed, inject } from 'vue'
import Button from './Button.vue'

const darkMode = inject('darkMode')
const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
}


</script>

<template>
    <aside>
        <div class="right">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptas alias non voluptatem officia unde, numquam ex quas culpa ratione laudantium totam magni consectetur soluta, voluptate accusamus eum! Harum, facere?</p>
        <Button @click="toggleDarkMode">Bonjour</Button>
        </div>
    </aside>
</template>

<style scoped>
.right {
    max-width: 300px;
    text-align: left;
    border: 1px solid #fff;
    padding: 20px;
    background: #000;
}

</style>
