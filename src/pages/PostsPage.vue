<template>
    <div class="infopage">
        Страница с постами
    </div>

    <ok-select @change="changeAuthor" :authors="authors" />

    <ok-post-list :posts="posts" />
</template>

<script>
import OkPostList from "@/components/OkPostList.vue";
import OkSelect from "@/components/OkSelect.vue";
    export default {
        components:{
            OkPostList,
            OkSelect
        },
        name: "PostsPage",
        data(){
            return {
                posts: [],
                authors: []
            }
        },
        methods: {
            async getPosts(){
                try {
                    return fetch('https://jsonplaceholder.typicode.com/posts',
                    {method: 'GET'})
                    .then(response=>response.json())
                    .then(data=>{this.posts=data})
                } catch(e) {
                    alert('Ошибка сервера')
                }
            },
            async getAuthors(){
                try {
                    return fetch('https://jsonplaceholder.typicode.com/users',
                    {method: 'GET'})
                    .then(response=>response.json())
                    .then(data=>{this.authors=data})
                } catch(e) {
                    alert('Ошибка сервера')
                }
            },
            async changeAuthor(event){
                if (event.target.value=='') {
                    try {
                        return fetch(`https://jsonplaceholder.typicode.com/posts`,
                        {method: 'GET'})
                        .then(response=>response.json())
                        .then(data=>{this.posts=data})
                    } catch(e) {
                        alert('Ошибка сервера')
                    }
                } else {
                    try {
                        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${event.target.value}`,
                        {method: 'GET'})
                        .then(response=>response.json())
                        .then(data=>{this.posts=data})
                    } catch(e) {
                        alert('Ошибка сервера')
                    }
                }
            },
            addAuthorNameToPosts(){
                this.posts.forEach(elem=>{
                    this.authors.forEach(author=>{
                        if (elem.userId==author.id) {
                            elem['authorName']=author.name
                        }
                    })
                })
            },
        },
        mounted() {
            this.getPosts();
            this.getAuthors();
        },
        updated() {
            this.addAuthorNameToPosts()
        },
    }
</script>

<style scoped>
    .infopage{
        margin: 5px;
        padding: 5px;
        font-size: 2.5rem;
        text-align: center;
    }
</style>