import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '../api/useAPI'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
    const api = useApi()
    const router = useRouter()

    const token = ref(null)
    const isLoggedIn = ref(false)
    const user = ref(null)

    const login = async (username, password) => {
        await api.post('/auth/login', { username, password })
            .then(({ data }) => {
                token.value = data.token
                isLoggedIn.value = true
                user.value = data.user
                router.push({ name: 'home' })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const logout = async () => {
        await api.post('/auth/logout', '', {
            headers: {
                Authorization: `Bearer ${token.value}`
            },
        }).then(() => {
            token.value = null
            isLoggedIn.value = false
            user.value = null

            router.push({ name: 'login' })

        }).catch(err => {
            console.log(err)
        })
    }

    return {
        login,
        logout,
        isLoggedIn,
        user,
        token
    }
}, { persist: true })
