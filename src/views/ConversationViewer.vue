<template>
    <div>
        <el-button @click="closeViewer()">
            <i class="fa fa-arrow-left"/>
        </el-button>
        <div class="columns">
            <div class="column">
                <div :key=index v-for="(message, _, index) in conversation.messages">
                    <div class="conversation__message__date">{{message.date}}</div>
                    <div :class="{ 'is-mine': message.origin === 'Ich'}" class="conversation__message" v-clean-html="getTaggedMessage(message.content)"></div>
                </div>
            </div>
            <smart-list class="column" :conversation="conversation" :documents="documents" :selectedTags="selectedTags" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import SmartList from "@/components/SmartList.vue"
    import { testRatedDocuments } from "@/artificalIntelligenceLayer/index"
    export default Vue.extend({
        name: "ConversationViewer",
        components: {
            "smart-list": SmartList
        },
        data() {
            return {
                documents: testRatedDocuments
            }
        },
        computed: {
            conversation() {
                return this.$store.state.conversations[this.$route.params.id]
            }
        },
        methods: {
            closeViewer() {
                this.$router.push({ name: "ROUTE_DASHBOARD" })
            },
            getTaggedMessage(text: string){
                const tags = ["Mindestlohn"]
                let taggedTextAr = text.split(" ").map(word => {
                    if(word.indexOf("Mindestlohn") > -1) {
                            return`<b>${word}</b>`
                        } else return word
                })
                return taggedTextAr.join(" ")
            }
        }
    },
    computed: {
        conversation() {
            return this.$store.state.conversations[this.$route.params.id]
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
.conversation__message__date {
    text-align: center !important;
    font-size: smaller;
}
    .conversation__message {
        width: fit-content;
        background: rgba(0,0,0,0.1);
        padding: 0.5rem;
        margin: 0.25rem;
        border-radius: 5px;
        position: relative;
        
        &:not(.is-mine) {
            background: rgba(0,0,0,0.1);
            &:after {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                width: 0;
                height: 0;
                border: 14px solid transparent;
                border-right-color: rgba(0,0,0,0.1);
                border-left: 0;
                border-bottom: 0;
                margin-top: -7px;
                margin-left: -14px;
            }
        }
        &.is-mine {
            margin-left: auto;
            text-align: right;
            background: lighten(#00adff, 40%);
            &:after {
                content: '';
                position: absolute;
                right: 0;
                top: 50%;
                width: 0;
                height: 0;
                border: 14px solid transparent;
                border-left-color: lighten(#00adff, 40%);
                border-right: 0;
                border-bottom: 0;
                margin-top: -7px;
                margin-right: -14px;
            }
        }
    }
</style>
