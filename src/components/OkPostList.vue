<template>
    <div class="postlist">
        <ok-post :post="post" v-for="post in posts" :key="post.id"/>
    </div>
</template>

<script>
    import OkPost from "@/components/OkPost.vue";
    export default {
        components: {
            OkPost
        },
        name: "OkPostList",
        props:{
            posts:{
                type: Array
            }
        }
    }
</script>

<style scoped>
    .postlist{
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }
</style>