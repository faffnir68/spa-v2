<script setup>
import { provide, computed, ref } from 'vue'
import Header from '../Header.vue'
import { useRoute } from 'vue-router'
import useFetch from '../../composables/useFetch.js'

const props = defineProps({
    id: String
})

const route = useRoute()

const url = computed(() => `https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
const { data: post, loading, error } = useFetch(url)
</script>

<template>
    {{ post.title }}
</template>

<style scoped>


</style>
