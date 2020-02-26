<template>
    <div>
        <el-button @click="closeViewer()">
            <i class="fa fa-arrow-left"/>
        </el-button>
        <div class="conversation__message" v-for="message in conversation.messages" v-html="message.content"/>
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
    .conversation__message {
        width: 90%;
    }
.conversation__message:nth-child(even) {
    background: rgba(0,0,0,0.1);
}
.conversation__message:nth-child(odd) {
    background: rgb(0, 208, 255);
}
</style>
