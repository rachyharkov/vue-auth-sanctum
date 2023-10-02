import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRedirectStore = defineStore('redirect', () => {
    const route = ref(null)

    /**
     * Sets the route value to the specified value.
     *
     * @param {type} value - The value to set the route to.
     */
    const setRoute = (value) => {
        route.value = value
    }

    /**
     * Clears the route value.
     *
     * No parameters.
     * 
     * No return value.
     */
    const clearRoute = () => {
        route.value = null
    }

    return {
        route,
        setRoute,
        clearRoute
    }
}, { persist: true })
