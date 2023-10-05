<script setup>
import { onMounted, ref, watch } from 'vue'
import { useProductStore } from '../stores/product'
// import { Bootstrap5Pagination } from 'laravel-vue-pagination'
import helper from '../utils/helper'
import Button from '../components/Button.vue'
import { useToast } from 'vue-toastification'
import Select from '../components/Form/Select.vue'
import Row from '../components/Grid/Row.vue'
import Col from '../components/Grid/Col.vue'

const productStore = useProductStore()
const toast = useToast()

onMounted(() => {
    getProducts(productStore.page)
})

const getProducts = (page = 1) => {
    productStore.page = page
    productStore.getAllProducts()
    setTimeout(() => {
    }, 250)
}

const reload = () => {
    getProducts()
    toast.success('Reloaded')
}
const options = [
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
    { label: 100, value: 100 }
]

const perPage = ref(productStore.perPage)

watch(perPage, () => {
    productStore.perPage = perPage.value
    getProducts()
})

</script>

<template>
    <div class="container">
        <h1>Product page</h1>

        <Row class="justify-content-end">
            <Col md="1">
                <Button @click="reload" :disabled="productStore.isLoading" :is-small="true" class="mt-3">
                    <i class="bi bi-arrow-repeat"></i>
                    Reload
                </Button>
            </Col>

            <Col md="1">
                <Select :options="options" id="per-page" v-model="perPage" label="Per page" :show-empty-option="false" :is-small="true" :disabled="productStore.isLoading"/>
            </Col>
        </Row>

        <table class="table table-striped table-hover table-sm mt-3">
            <thead>
                <tr>
                    <th @click="productStore.setOrderBy('name')" style="cursor: pointer">
                        Name
                        <i :class="`bi bi-arrow-${productStore.orderByAsc ? 'up' : 'down'}`"></i>
                    </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="productStore.isLoading">
                    <tr v-for="i in 10" :key="i">
                        <td>
                            <p class="placeholder-glow m-0 p-0">
                                <span class="placeholder col-12 placeholder-xs"></span>
                            </p>
                        </td>
                        <td width="30">
                            <p class="placeholder-glow m-0 p-0">
                                <span class="placeholder col-12 placeholder-xs"></span>
                            </p>
                        </td>
                    </tr>
                </template>
                <template v-if="!productStore.isLoading">
                    <tr v-for="product in productStore.products.products" :key="product.id">
                        <td>{{ product.name }}
                            <span v-if="product.code_mold"> - {{ product.code_mold }}</span>
                            <span v-if="product?.product_size"> - {{ product.product_size?.name }}</span>
                        </td>
                        <td width="20">
                            <router-link :to="{ name: 'productsDetail', params: { id: product.id } }">
                                <i class="bi bi-eye"></i>
                            </router-link>
                        </td>
                    </tr>
                </template>
                <template v-if="!productStore.products?.products?.length">
                    <tr>
                        <td colspan="4" class="text-center">
                            No data
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>

        <!-- <Bootstrap5Pagination :data="productStore.products" @pagination-change-page="getProducts" align="right"
            :show-disabled="true" size="small" v-if="!productStore.isLoading"  /> -->

        <div class="row" v-if="productStore.isLoading">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <p class="placeholder-glow m-0 p-0">
                    <span class="placeholder col-12"></span>
                </p>
            </div>
        </div>

        <nav aria-label="Page navigation" v-if="!productStore.isLoading">
            <ul class="pagination pagination-sm justify-content-end">
                <li class="page-item" v-for="(link, i) in productStore?.products?.meta?.links" :key="i"
                    :class="{ 'disabled': !link.url }">
                    <a class="page-link" v-html="link.label" @click="getProducts(helper.getPaginationPageFrom(link.url))"
                        style="cursor: pointer;" v-if="!link.active"></a>
                    <span class="page-link active" style="cursor: disabled;" v-else>{{ link.label }}</span>
                </li>
            </ul>
        </nav>
    </div>
</template>