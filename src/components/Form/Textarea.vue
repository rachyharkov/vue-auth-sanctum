<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
    label: String,
    modelValue: {
        type: String,
        required: true
    },
    error: {
        type: String,
        default: null
    },
    id: {
        type: String,
        default: null
    },
    isSmall: {
        type: Boolean,
        default: true
    },
    placeholder: {
        type: String,
        default: ''
    },
    rows: {
        type: [Number, String],
        default: 3
    },
    required: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

defineEmits(['update:modelValue'])

onMounted(() => {
    if (textarea.value.hasAttribute('autofocus')) {
        textarea.value.focus()
    }
})

const textarea = ref(null)

const className = computed(() => {
    let className = 'form-control'

    className += props.isSmall ? ' form-control-sm' : ''

    className += props.error && props.modelValue.length <= 0 ? ' is-invalid' : ''

    return className
})
</script>
<template>
    <div class="form-group">
        <label :for="id">{{ label }}</label>
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :id="id" :rows="rows"
            :class="className" ref="textarea" :placeholder="placeholder != '' ? placeholder : label" :disabled="disabled"
            :required="required"></textarea>
    </div>
</template>