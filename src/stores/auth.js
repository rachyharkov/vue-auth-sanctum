import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '../api/useAPI'
import { useRouter } from 'vue-router'
import { useToast } from "vue-toastification"

export const useAuthStore = defineStore('auth', () => {
    const api = useApi()
    const router = useRouter()
    const toast = useToast()

    const token = ref(null)
    const isLoggedIn = ref(false)
    const user = ref(null)
    const validationErrors = ref(null)

    const login = async (username, password) => {
        await api.post('/auth/login', { username, password })
            .then(({ data }) => {
                token.value = data.token
                isLoggedIn.value = true
                user.value = data.user
                validationErrors.value = null
                toast.success(data.message)
                router.push({ name: 'home' })
            })
            .catch(({ response }) => {
                validationErrors.value = response.data.errors
                toast.error(response.data.message)
            })
    }

    const logout = async () => {
        await api.post('/auth/logout', '', {
            headers: {
                Authorization: `Bearer ${token.value}`
            },
        }).then(({data}) => {
            token.value = null
            isLoggedIn.value = false
            user.value = null
            toast.success(data.message)
            validationErrors.value = null
            router.push({ name: 'login' })
        }).catch(({ response }) => {
            validationErrors.value = response.data.errors
            toast.error(response.data.message)
        })
    }

    return {
        login,
        logout,
        isLoggedIn,
        user,
        token,
        validationErrors
    }
}, { persist: true })
