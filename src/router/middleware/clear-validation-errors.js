import { useAuthStore } from "../../stores/auth"

export default (to, from, next) => {
    const auth = useAuthStore()

    auth.resetValidationErrors()
    next()
}