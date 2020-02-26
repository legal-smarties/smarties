<template>
    <div>{{ document.name }}meow3000</div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
    name: "Document",
    props: {
        document: {
            required: true,
            type: Object as () => KnowledgeDocument
        }
    }
})
</script>

<style lang="scss" scoped>
</style>