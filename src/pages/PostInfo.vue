<template>
    <div>
        <div class="post">
            <div><strong>Номер поста:</strong> {{id}}</div>
            <div><strong>Тема поста:</strong> {{postinfo.title}}</div>
            <div><strong>Текст поста:</strong> {{postinfo.body}}</div>
        </div>

    <div class="author">
        <div class="name">
            <div><strong>Имя автора:</strong> {{authorinfo.name}}</div>
            <div><strong>Юзернэйм:</strong> {{authorinfo.username}}</div>
        </div>
        <div>
            <div><strong>Емэйл:</strong> {{authorinfo.email}}</div>
            <div><strong>Телефон:</strong> {{authorinfo.phone}}</div>
        </div>
    </div>
        
        <ok-add-comment @create='createComment'/>
        <ok-push-notif :messages="messages" @myclick='messages'/>
        <ok-comment-list :comments="comments"/>


    </div>
</template>

<script>
import OkAddComment from '@/components/OkAddComment.vue';
import OkCommentList from '@/components/OkCommentList.vue';
import OkPushNotif from '@/components/OkPushNotif.vue';
    export default {
        components: {
            OkAddComment, OkCommentList, OkPushNotif
        },
        name: "PostInfo",
        props: ['id','userId'],
        data() {
            return {
                postinfo:{},
                authorinfo:{},
                comments:[],
                messages:[]
            }
        },
        methods: {
            createComment(commentInput){
                try {
                    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`,{
                        method: 'POST',
                        body: JSON.stringify({
                            postId: this.id,
                            id: commentInput.id,
                            name: commentInput.name,
                            body: commentInput.body,
                            email: commentInput.email
                        }),
                        headers: {'Content-type': 'application/json; charset=UTF-8'}
                    }).then(response=>response.json()).then(data=>this.comments.push(data))
                } catch(e) {
                    alert('Ошибка сервера')
                }
                commentInput = {
                    name:'',
                    body:'',
                    email:''
                }
                let message = {
                    text: "Добавлен комментарий",
                    id: Date.now()
                }
                this.messages.push(message);
                this.hideNotif();
            },
            async getPostinfo(){
                try {
                    return fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`,
                    {method: 'GET'})
                    .then(response=>response.json())
                    .then(data=>this.postinfo=data)
                } catch(e) {
                    alert('Ошибка сервера')
                }
            },
            async getAuthorInfo(){
                try {
                    return fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`,
                        {method: 'GET'})
                        .then(response=>response.json())
                        .then(data=>{
                            this.authorinfo=data
                            })
                } catch(e) {
                    alert('Ошибка сервера')
                }
            },
            async getComments(){
                try {
                    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`,
                        {method: 'GET'})
                        .then(response=>response.json())
                        .then(data=>this.comments=data)
                } catch(e) {
                    alert('Ошибка сервера')
                }
            },
            hideNotif(){
                let vm = this;
                if (this.messages.length) {
                    setTimeout(()=>{
                        vm.messages.splice(vm.messages.length-1, 1)
                    }, 3000)
                }
            },
        },
        mounted() {
            this.getPostinfo();
            this.getAuthorInfo();
            this.getComments();
        },
    }
</script>

<style scoped>
    .post{
    margin: 5px;
    padding: 15px;
    border-radius: 15px;
    background: linear-gradient(to left, rgba(128, 128, 128, 0.589), rgba(0, 0, 0, 0.13));
    }
    .author{
        margin: 5px;
        padding: 15px;
        display: flex;
    }
    .name{
        margin-right: 20px;
    }
</style>