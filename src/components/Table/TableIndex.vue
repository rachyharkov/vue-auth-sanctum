<script setup>
import voidImg from '../../assets/images/void.svg'

const props = defineProps({
    total: {
        type: [Number, String],
        required: true
    },
    colspan: {
        type: Number,
        required: true
    },
    isLoading: {
        type: Boolean,
        default: false,
        required: false
    },
    width: {
        type: Array,
        required: false,
    }
})

const setTdWidth = (index) => {
    let check = props.width.filter((item) => {
        if (item?.index == index) {
            return item.width
        }
    })[0]?.width

    if (check) return check

    return 'auto'
}
</script>

<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover table-sm mt-3 table-sm">
            <thead>
                <slot name="thead" />
            </thead>
            <tbody class="table-group-divider">
                <slot name="tbody" />
                <template v-if="isLoading">
                    <tr v-for="i in 10" :key="i">
                        <td v-for="i in colspan" :key="i" :width="setTdWidth(i - 1)">
                            <p class="placeholder-glow m-0 p-0">
                                <span class="placeholder col-12 placeholder-xs"></span>
                            </p>
                        </td>
                    </tr>
                </template>
                <tr v-if="total == 0">
                    <td :colspan="colspan" class="text-center">
                        <img :src="voidImg" alt="Data not found" class="img-fluid rounded my-3" width="150">
                        <h6>Data not found</h6>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>