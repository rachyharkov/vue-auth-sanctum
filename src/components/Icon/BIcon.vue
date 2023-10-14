<script setup>
defineProps({
    name: {
        type: [Number, String],
        required: true,
    }
})
</script>
<template>
    <i :class="'bi bi-' + name"></i>
</template>