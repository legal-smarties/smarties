<template>
    <div class="document">
        <div class="columns">
            <div class="column is-9 document__name">{{ document.name }}</div>
            <div class="column is-3">
                <el-progress class="document__progress" :percentage="document.similarity * 100" :show-text="false" />
            </div>
        </div>
        <div class="document__text">{{ document.text }}</div>
    </div>
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
.document {
    padding: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
}

.document__name {
    font-weight: bold;
}

.document__progress {
    padding-top: 8px;
}
</style>