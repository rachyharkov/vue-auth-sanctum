<script setup>
import { computed } from 'vue';

const props = defineProps({
    md: {
        type: [Number, String],
        default: 12,
    },
    sm: {
        type: [Number, String],
        default: 12,
    },
    xs: {
        type: [Number, String],
        default: 12,
    },
    lg: {
        type: [Number, String],
        required: false,
    },
})

const className = computed(() => {
    let className = 'col';
    if (props.md) {
        className += ` col-md-${props.md}`;
    }
    if (props.sm) {
        className += ` col-sm-${props.sm}`;
    }
    if (props.xs) {
        className += ` col-xs-${props.xs}`;
    }
    if (props.lg) {
        className += ` col-lg-${props.lg}`;
    }
    return className;
})
</script>

<template>
    <div :class="className">
        <slot/>
    </div>
</template>