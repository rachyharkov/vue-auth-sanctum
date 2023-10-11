<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
    label: String,
    modelValue: {
        type: [String, File],
        required: false
    },
    type: {
        type: String,
        default: 'text'
    },
    error: {
        type: String,
        default: null
    },
    id: {
        type: String,
        default: null
    },
    showLabel: {
        type: Boolean,
        default: true
    },
    isSmall: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    isLarge: {
        type: Boolean,
        default: false
    },
    isLoading: {
        type: Boolean,
        default: false
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

defineEmits(['update:modelValue', 'blur'])

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus()
    }
})

const input = ref(null)

const className = computed(() => {
    let className = 'form-control'

    className += props.isSmall ? ' form-control-sm' : ''

    className += props.isLarge ? ' form-control-lg' : ''

    className += props.error ? ' is-invalid' : ''

    return className
})

</script>

<template>
    <div class="form-group position-relative">

        <label :for="id" v-if="showLabel">
            {{ label }}
            <span v-if="required" class="text-danger">*</span>
            <div class="spinner-border text-primary" role="status" v-if="props.isLoading"
                style="width: 15px; height: 14px; margin-bottom: 3px;"></div>
        </label>

        <input :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @blur="$emit('blur')" :id="id"
            :class="className" ref="input" :placeholder="placeholder != '' ? placeholder : label" :disabled="disabled">

        <span v-if="error" class="text-danger">{{ error }}</span>
    </div>
</template>