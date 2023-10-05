<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    label: {
        type: [String, Number],
        required: false
    },
    isRequired: {
        type: Boolean,
        required: false
    },
    isSmall: {
        type: Boolean,
        default: false,
        required: false
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    },
    id: {
        type: [String, Number],
        required: true
    },
    isLarge: {
        type: Boolean,
        default: false,
    },
    showEmptyOption: {
        type: Boolean,
        default: true        
    }
})
</script>

<template>
    <label :for="id" v-if="label">{{ label }}</label>
    <select class="form-select" :class="{ 'form-select-sm': isSmall, 'form-select-lg': isLarge }" :id="id"
        :value="modelValue" :disabled="disabled" :required="isRequired"
        @change="$emit('update:modelValue', $event.target.value)">
        <option value="" v-if="showEmptyOption">Select {{ label }}</option>
        <option v-for="(option, i) in options" :key="i" :value="option.value">
            {{ option.label }}
        </option>
    </select>
</template>