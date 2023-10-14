<script setup>
defineProps({
    color: {
        type: String,
        default: 'primary',
    },
    dismissible: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div :class="`alert alert-${color} ${dismissible ? 'alert-dismissible' : ''} fade show`" role="alert">
        <slot name="icon" />
        <slot name="message" />
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>