<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../../stores/product'
import { useRoute } from 'vue-router'

const productStore = useProductStore()
const route = useRoute()

onMounted(() => {
    productStore.getProductById(route.params.id)
})
</script>

<template>
    <div class="container">
        <h1>Detail Product</h1>

        <p>{{ productStore?.product?.name }}</p>
        <p>{{ productStore?.product?.code_mold }}</p>

        <router-link :to="{name: 'products'}">Back</router-link>
    </div>
</template>