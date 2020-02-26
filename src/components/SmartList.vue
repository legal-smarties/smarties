<template>
    <div class="vue-smart-list">
        <el-select class="tag-select" v-model="selectedTags" multiple placeholder="Select">
            <el-option
                v-for="tag in conversationTags"
                :key="tag.name"
                :label="tag.name"
                :value="tag.name">
            </el-option>
        </el-select>
        <vue-document v-for="document in documents" :document="document" />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Conversation } from "@/model/Conversation"
import { KnowledgeDocument, Tag } from "@/model/model"
import * as _ from "lodash";
import Document2 from "@/components/Document2.vue"

export default Vue.extend({
    name: "SmartList",
    components: {
        'vue-document': Document2
    },
    props: {
        conversation: {
            required: true,
            type: Object as () => Conversation
        },
        documents: {
            required: true,
            type: Array as () => KnowledgeDocument[]
        },
        selectedTags: {
            required: true,
            type: Array as () => Tag[]
        }
    },
    computed: {
        conversationTags() {
            const tagLists = this.conversation.messages.map(message => message.tags)
            return _.uniqBy(_.spread(_.union)(tagLists), e => e.name)
        }
    }
})
</script>

<style lang="scss" scoped>
.vue-smart-list {
    padding: 5px;
    border-left: 1px solid rgba(0,0,0,0.05);

    .tag-select {
        width: 100%;
    }
}    
</style>
