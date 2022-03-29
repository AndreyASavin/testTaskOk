<template>
    <div class="addcomm">
    <div><strong>Оставьте комментарий</strong></div>
    <form @submit.prevent class="form">
        <input type="text" placeholder="Название" v-model="commentInput.name">
        <input type="text" placeholder="Комментарий" v-model="commentInput.body">
        <input type="email" placeholder="Ваш email" v-model="commentInput.email">
        <button @click="createComment">Добавить</button>
    </form>
    </div>
</template>

<script>
    export default {
        name: 'OkAddComment',
        data() {
            return {
                    commentInput:{
                        name: '',
                        body: '',
                        email: ''
                }
            }
        },
        methods: {
            createComment(){
                this.commentInput.id = Date.now;
                this.$emit('create', this.commentInput)
                this.commentInput = {
                    name:'',
                    body:'',
                    email:''}
            }
        },
    }
</script>

<style scoped>
    .addcomm {
        padding: 10px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 30px;
        background-color: rgba(184, 184, 184, 0.507);
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
    }
    .form{
        display: flex;
        justify-content: space-between;
    }
    input{
        margin-right: 5px;
        border-radius: 5px;
        border: none;
    }
    button{
        border-radius: 5px;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
</style>