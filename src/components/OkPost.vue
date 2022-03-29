<template>
    <div class="post">
        <div><strong>Название:</strong> {{post.title}}</div>
        <div><strong>Автор:</strong> {{post.authorName}}</div>
        <div><strong>Текст:</strong> {{post.body}}</div>
        <ok-button 
        @click="$router.push({
            name: 'Post',
            params:{
                id: post.id,
                userId: post.userId
            }
        })">
        Читать
        </ok-button>
    </div>
</template>

<script>
    import OkButton from '@/components/OkButton.vue';
    export default {
        name: "OkPost",
        props:{
            post:{
                type: Object
            }
        },
        components: {
            OkButton     
        }
    }
</script>

<style scoped>
      .post{
    width: 80%;
    height: 100%;
    margin: 5px;
    padding: 15px;
    border: 2px solid gray;
    border-radius: 15px;
    background: linear-gradient(to left, rgba(128, 128, 128, 0.589), rgba(0, 0, 0, 0.13));
  }
</style>