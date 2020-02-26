<template>
    <div>
        <el-button @click="closeViewer()">
            <i class="fa fa-arrow-left"/>
        </el-button>
        <div v-for="message in conversation.messages" v-html="message.content"/>
        <smart-list />
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import SmartList from "@/components/SmartList.vue"

    export default Vue.extend({
        name: "MessageViewer",
        components: {
            "smart-list": SmartList
        },
        computed: {
            conversation() {
                return this.$store.state.conversations[this.$route.params.id]
            },
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
