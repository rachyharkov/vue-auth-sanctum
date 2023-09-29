import { useAuthStore } from '@/stores/auth.js'

export default (to, from, next) => {
    const auth = useAuthStore()

    if(to.meta.requiresAuth && !auth.isLoggedIn) {
        next({ name: 'login' })
    }

    if(to.meta.requiresGuest && auth.isLoggedIn) {
        next({ name: 'home' })
    }

    next()
}