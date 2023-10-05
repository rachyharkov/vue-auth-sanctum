<script setup>
defineProps({
    type: {
        type: [String],
        required: false,
        default: 'end',
    }
})
</script>

<template>
    <div :class="`d-flex justify-content-${type}`">
        <slot />
    </div>
</template>