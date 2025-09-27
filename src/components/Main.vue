<script setup>
import { ref, computed } from 'vue'
import Button from './Button.vue'


</script>

<template>
    <main>
        <div class="left">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo voluptas alias non voluptatem officia unde, numquam ex quas culpa ratione laudantium totam magni consectetur soluta, voluptate accusamus eum! Harum, facere?</p>
          <Button>
            Bouton
          </Button>
        </div>
    </main>
</template>

<style>
.left {
    max-width: 500px;
    text-align: left;
    border: 1px solid #fff;
    padding: 20px;
    background: #000;
}

</style>