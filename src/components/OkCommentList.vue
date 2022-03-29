<template>
    <div class='commentlist'>
    <ok-comment :comment="comment" v-for="comment in comments" :key="comment.id" />
    </div>
</template>

<script>
import OkComment from './OkComment.vue'
    export default {
        components: { OkComment },
        name: 'OkCommentList',
        props: {
            comments: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    .commentlist {
        padding: 5px;
        margin: 10px;
    }
</style>