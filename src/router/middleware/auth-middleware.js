import { useAuthStore } from '@/stores/auth.js'
import { useRedirectStore } from '@/stores/redirect.js'

export default (to, from, next) => {
    const auth = useAuthStore()
    const redirect = useRedirectStore()

    if(to.meta.requiresAuth && !auth.isLoggedIn) {
        redirect.setRoute(to)
        next({ name: 'login' })
    }

    if(to.meta.requiresGuest && auth.isLoggedIn) {
        next({ name: 'home' })
    }

    next()
}