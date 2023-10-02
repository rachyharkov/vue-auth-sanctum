import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '../api/useAPI'
import { useToast } from "vue-toastification"
import { useAuthStore } from './auth'

export const useProductStore = defineStore('product', () => {
    const api = useApi()
    const toast = useToast()
    const auth = useAuthStore()
    const products = ref([])
    const product = ref({})

    /**
     * Retrieves all products from the API.
     *
     * @return {Promise<void>} - A promise that resolves when the products are retrieved successfully, or rejects with an error.
     */
    const getAllProducts = async () => {
        await api.get('/products', {
            headers: auth.getTokenHeader()
        })
            .then(({ data }) => {
                // toast.success(data.message)
                products.value = data
            })
            .catch(({ response }) => {
                console.log(response)
                toast.error(response.data.message)
            })
    }

    /**
     * Retrieves a product by its ID from the API.
     *
     * @param {number} id - The ID of the product to retrieve.
     * @return {Promise} - A promise that resolves to the retrieved product.
     */
    const getProductById = async (id) => {
        await api.get(`/products/${id}`, {
            headers: auth.getTokenHeader()
        })
            .then(({ data }) => {
                product.value = data.products
            })
            .catch(({ response }) => {
                console.log(response)
                toast.error(response.data.message)
            })
    }

    return {
        products,
        product,
        getAllProducts,
        getProductById
    }
})
