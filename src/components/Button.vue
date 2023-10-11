<script setup>
import { computed } from 'vue'

const props = defineProps({
    className: {
        type: String,
        default: 'primary'
    },
    outline: {
        type: Boolean,
        default: false
    },
    isSmall: {
        type: Boolean,
        default: false
    },
    isLarge: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'button'
    },
    to: {
        type: [String, Object],
        default: null
    }
})

const setButtonClassName = computed(() => {
    let className = ''

    if(props.outline) {
        className += ' btn-outline-' + props.className    
    }

    if(props.className && !props.outline) {
        className += ' btn-' + props.className
    }

    if(props.isSmall) {
        className += ' btn-sm'
    }

    return className
})
</script>

<template>
    <button class="btn" :class="setButtonClassName" :type="type" v-if="type != 'link'">
        <slot />
    </button>

    <router-link v-else :to="to" class="btn" :class="setButtonClassName" >
        <slot />
    </router-link>
</template>