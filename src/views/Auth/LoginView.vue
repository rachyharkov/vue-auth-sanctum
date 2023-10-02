<script setup>
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import { ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const login = () => {
    auth.login(username.value, password.value)
}
const username = ref('')
const password = ref('')

watch(username, () => {
    auth.resetValidationErrors()
})

watch(password, () => {
    auth.resetValidationErrors()
})
</script>

<template>
    <main class="container">
        <Card class="mt-4" title="Login" subtitle="Enter your username and password">
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="username" class="form-control" :class="{ 'is-invalid': auth?.validationErrors?.username }"
                        id="username" placeholder="Username" aria-describedby="usernameHelp" v-model="username">
                    <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
                    <small class="text-danger" v-if="auth?.validationErrors?.username">{{
                        auth?.validationErrors?.username[0] }}</small>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" :class="{ 'is-invalid': auth?.validationErrors?.password }"
                        id="password" placeholder="Password" v-model="password">
                    <small class="text-danger" v-if="auth?.validationErrors?.password">{{
                        auth?.validationErrors?.password[0] }}</small>
                </div>
                <Button type="submit">Login</Button>
            </form>
        </Card>
    </main>
</template>