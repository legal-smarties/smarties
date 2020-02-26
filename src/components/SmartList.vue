<template>
    <div>{{ conversation.tags }}</div>
</template>

<script lang="ts">
import Vue from "vue"
import { Conversation } from "@/model/Conversation"

export default Vue.extend({
    name: "SmartList",
    props: {
        conversation: {
            required: true,
            type: Object as () => Conversation
        }
    }
})
</script>

<style lang="scss" scoped>
</style>
