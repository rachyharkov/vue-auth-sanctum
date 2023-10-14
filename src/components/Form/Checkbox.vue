<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :value="inputValue" :disabled="isDisabled" v-model="model" :id="id">
        <label class="form-check-label" :for="id">
            {{ capitalizeEachWord(inputValue) }}
        </label>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        inputValue: {
            type: String,
            required: false,
            default: '',
        },

        id: {
            type: [String, Number],
            required: true,
            default: '',
        },

        modelValue: {
            type: [Object, Boolean, String, Number],
            required: false,
            default: (() => ({})) || false,
        },

        isDisabled: {
            type: Boolean,
            required: false,
            default: false,
        },

        checkboxClass: {
            type: String,
            required: false,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    methods: {
        capitalizeEachWord(str) {
            return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
        },
    },

    computed: {
        model: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
})
</script>