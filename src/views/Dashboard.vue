<template>
    <div>
        <div class="dashboard__header is-flex">
            <div class="m-auto m-l-0 title">Smart Dashboard</div>
        </div>
        <div class="dashboard__content columns">
            <div class="column">
                <message @click="openMessage(d.id)" v-for="d in messages" :message-data="d"/>
            </div>
            <div class="column">
                <router-view/>
            </div>
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
            messages() {
                return this.$store.state.messages
            }
        },
        methods: {
            openMessage(id: number){
                this.$router.push(`/messages/${id}`)
            }
        }
    })
</script>

<style lang="scss" scoped>
    .dashboard__header {
        filter: drop-shadow(0px 0px 2px rgba(0,0,0,1));
        background: #00adff;
        height: 55px;
        border: 1px solid rgba(0, 0, 0, 0.1);

        & * {
            color: white;
        }
    }
</style>
