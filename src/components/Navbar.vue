<script setup>
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about' }" class="nav-link active">About</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link active" v-if="!auth.isLoggedIn">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <a @click="auth.logout" class="nav-link active"  v-if="auth.isLoggedIn" href="#">Logout</a>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'profile' }" class="nav-link active">
                            <img src="https://picsum.photos/200" alt="Photo" class="rounded-circle"
                                style="width: 25px; object-fit: cover;">
                            Profile
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>