<template>
    <div @click="$emit('click')" class="message-card columns m-none">
        <div class="column is-1 is-flex profile">
            <i class="fa fa-user m-auto is-size-3"/>
        </div>
        <div class="column">
            <div>{{messageData.origin}}</div>
            <div>{{messageData.subject}}</div>
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
    i {
        padding: 0.5rem;
        background: lightgray;
        border-radius: 50%;
        color: white;
    }
}
    .message-card {
        border: 1px solid rgba(0,0,0,0.05);
        &:hover {
            background: rgba(0,0,0,0.05);
            cursor: pointer;
        }
    }
</style>
