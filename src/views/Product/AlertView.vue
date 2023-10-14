<script setup>
import Alert from '@/components/Alert.vue'
import { useProductStore } from '@/stores/product'

const store = useProductStore()
</script>
<template>
    <Alert v-if="store.validationErrors" :dismissible="true" color="danger" class="mt-4">
        <template #message>
            <ul class="mb-0">
                <li v-for="error in store?.validationErrors" :key="error" class="pb-0 mb-0">
                    {{ Array.isArray(error) ? error[0] : '' }}
                </li>
            </ul>
        </template>
    </Alert>
</template>