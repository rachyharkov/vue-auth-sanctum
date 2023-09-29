<script setup>
defineProps({
    title: String,
    subtitle: String,
    footer: String,
})
</script>

<template>
    <div class="card">
        <div class="card-header" v-if="title || subtitle">
            <h5 class="card-title">{{ title }}</h5>
            <h6 class="card-subtitle">{{ subtitle }}</h6>
        </div>
        <div class="card-body">
            <slot />
        </div>
        <div class="card-footer" v-if="footer">
            <p class="card-text">{{ footer }}</p>
        </div>
    </div>
</template>