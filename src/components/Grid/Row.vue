<script setup>
defineProps({
    className : {
        type: [Number, String],
        required: false,
    }
})
</script>

<template>
    <div :class="className" class="row">
        <slot/>
    </div>
</template>