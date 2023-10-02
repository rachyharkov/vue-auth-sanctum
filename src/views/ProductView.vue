<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product'

const productStore = useProductStore()

onMounted(() => {
    productStore.product.value = {}
    productStore.getAllProducts()
})
</script>

<template>
    <div class="container">
        <h1>Product page</h1>

        <button class="btn btn-primary" @click="productStore.getAllProducts">Get product</button>

        <ul class="mt-3">
            <li v-for="product in productStore.products.products" :key="product.id">
                {{ product.name }}

                <a href="#" class="btn btn-primary" @click="productStore.getProductById(product.id)">Get Detail</a>
            </li>
        </ul>

        <h3>Detail Product</h3>
        <p>{{ productStore?.product?.name }}</p>
        <p>{{ productStore?.product?.code_mold }}</p>
    </div>
</template>