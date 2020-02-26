<template>
    <div>
        <el-button @click="closeViewer()">
            <i class="fa fa-arrow-left"/>
        </el-button>
        <div v-html="message.content"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"

    export default Vue.extend({
        name: "MessageViewer",
        computed: {
            message() {
                const i = this.$route.params.id
                return this.$store.state.messages[i]
            }
        },
        methods: {
            closeViewer() {
                this.$router.push({ name: "ROUTE_DASHBOARD" })
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>
