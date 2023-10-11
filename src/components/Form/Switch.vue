<script>
import { defineComponent, computed } from "vue"

export default defineComponent({
    name: "SwitchCheckbox",
    props: {
        modelValue: [Boolean, String, Number, Array],
        value: [String, Number, Array],
        trueValue: {
            type: [Boolean, String, Number],
            default: true
        },
        falseValue: {
            type: [Boolean, String, Number],
            default: false
        },
        label: String,
        error: String,
        checked: Boolean,
        id: String,
        disabled: Boolean,
    },
    emits: ["update:modelValue"],
    setup: (props, { emit }) => {
        const computedValue = computed({
            get() {
                return props.modelValue
            },
            set(value) {
                emit("update:modelValue", value)
            }
        })
        return { computedValue }
    }
})
</script>
<template>
    <div class="form-group">
        <label class="form-check-label" :for="id">{{ label }}</label>
        <div class="form-check form-switch">
            <input class="form-check-input" :id="id" v-model="computedValue" type="checkbox" :disabled="disabled"
                :true-value="trueValue" :false-value="falseValue" :value="value" :checked="checked" />
        </div>
        <span v-if="error" class="text-danger">{{ error }}</span>
    </div>
</template>