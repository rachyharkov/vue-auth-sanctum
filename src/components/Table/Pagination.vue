<script setup>
import helper from '../../utils/helper'

defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
    links: {
        type: Array,
        required: true,
    }
})

const emit = defineEmits(['getData'])

/**
 * A function that handles pagination change.
 *
 * @param {number} page - The page number to fetch data for.
 * @return {void} No return value.
 */
const paginationChange = (page) => {
    emit('getData', page)
}
</script>

<template>
    <div class="row" v-if="isLoading">
        <div class="col-md-10"></div>
        <div class="col-md-2">
            <p class="placeholder-glow m-0 p-0">
                <span class="placeholder col-12"></span>
            </p>
        </div>
    </div>

    <nav aria-label="Page navigation" v-if="!isLoading">
        <ul class="pagination pagination-sm justify-content-end">
            <li class="page-item" v-for="(link, i) in links" :key="i" :class="{ 'disabled': !link.url }">
                <a class="page-link" v-html="link.label" @click="paginationChange(helper.getPaginationPageFrom(link.url))"
                    style="cursor: pointer;" v-if="!link.active"></a>
                <span class="page-link active" style="cursor: disabled;" v-else>{{ link.label }}</span>
            </li>
        </ul>
    </nav>
</template>