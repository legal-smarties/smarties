<template>
    <div class="dashboard">
        <div class="dashboard__header is-flex">
            <div class="m-auto m-l-0 title">Lawbacca</div>
        </div>
        <div class="dashboard__content columns m-none">
            <div class="column left-column">
                <message :class="{'selected': isConversationSelected(d.id)}" @click="openConversation(d.id)" v-for="d in conversations" :message-data="d"/>
            </div>
            <router-view class="column is-two-thirds"/>
        </div>
        <div class="dashboard__footer">
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"
    import Message from "@/components/Message.vue";

    export default Vue.extend({
        name: "Dashboard",
        components: {
            Message,
        },
        computed: {
            conversations() {
                return this.$store.state.conversations
            }
        },
        methods: {
            openConversation(id: number){
                this.$router.push(`/conversation/${id}`)
            },
            isConversationSelected(id: number) {
                return this.$route.params.id && parseInt(this.$route.params.id, 10) === id
            }
        }
    })
</script>

<style lang="scss" scoped>
    .dashboard {
        height: 100%;
        &__content {
            height: 100%;
        }
    }

    .dashboard__header {
        filter: drop-shadow(0px 0px 2px rgba(0,0,0,1));
        background: #00adff;
        height: 55px;
        border: 1px solid rgba(0, 0, 0, 0.1);

        & * {
            color: white;
        }
    }

    .left-column {
        padding: 0;
        border-right: 1px solid rgba(0,0,0,0.05);
    }
</style>
