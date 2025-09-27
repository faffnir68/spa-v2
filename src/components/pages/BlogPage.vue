<script setup>
import { provide, ref, onMounted, computed } from 'vue'
import Header from '../Header.vue'
import useFetch from '../../composables/useFetch.js'
import { useRoute } from 'vue-router'


const { data: posts, loading, error } = useFetch(computed(() => 'https://jsonplaceholder.typicode.com/posts/'))
</script>

<template>
    <template v-if="loading === 'done'">
        <RouterLink v-for="post in posts" :to="{ name: 'single', params: { id: Number(post.id) } }" :id="post.id" :key="post.id">{{ post.title }}</RouterLink>
    </template>
</template>

<style scoped>


</style>
