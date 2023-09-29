<script setup>
import Card from '@/components/Card.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const login = () => {
    auth.login(form.value.username, form.value.password)
}
const form = ref({
    username: '',
    password: ''
})

</script>

<template>
    <main class="container">
        <Card class="mt-4" title="Login" subtitle="Enter your username and password">
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="username" class="form-control" id="username"  placeholder="Username" aria-describedby="usernameHelp" v-model="form.username">
                    <div id="usernameHelp" class="form-text">We'll never share your username with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                </div>
                <Button type="submit">Login</Button>
            </form>
        </Card>
    </main>
</template>