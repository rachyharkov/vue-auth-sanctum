<script setup>
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>

<template>
    <div>
        <h4>Profile</h4>
        <p>Name: {{ auth?.user?.name }}</p>
        <p>Username: {{ auth?.user?.username }}</p>
        <p>Email: {{ auth?.user?.email }}</p>
        <img :src="auth?.user?.avatar ?? 'https://picsum.photos/200'" class="rounded-circle" alt="Avatar">
    </div>
</template>