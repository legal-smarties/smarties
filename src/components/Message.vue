<template>
    <div @click="$emit('click')" class="message-card columns m-none">
        <div class="column is-narrow is-flex profile">
            <i class="fa fa-user m-auto is-size-4"/>
        </div>
        <div class="column">
            <div>{{messageData.origin}}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue"

    export default Vue.extend({
        name: "Message",
        props: {
            messageData: {
                required: true,
                type: () => Object
            }
        }
    })
</script>

<style lang="scss" scoped>
.profile {
    width: 100px !important;
    i {
        padding: 0.5rem;
        background: lightgray;
        border-radius: 50%;
        color: white;
        filter:drop-shadow(1px 2px 1px rgba(0,0,0,0.3));
    }
}
    .message-card {
        border: 1px solid rgba(0,0,0,0.05);
        &:hover {
            background: rgba(0,0,0,0.05);
            cursor: pointer;
        }
        & > * {
            padding: 0.25rem;
        }
    }
    .message-card.selected {
        background: rgba(0,0,0,0.05);
    }
</style>
