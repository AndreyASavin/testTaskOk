<template>
    <div class="info">
        <div class="infopage" v-for='text in texts' :key='text.id'>
            {{text.text}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainPage",
        data(){
            return{
                texts:[
                    {id: 1, text: 'Добро пожаловать на стартовую страницу тестового задания по Vue от компании Окенит!'},
                    {id: 2, text: 'Для перехода к странице с постами нажмите "Посты"'},
                ]
            }
        }
    }
</script>

<style scoped>
    .info{
        border: 4px solid gray;
        border-radius: 20px;
        margin: 10px;
        padding: 10px;
    }
    .infopage{
        margin: 5px;
        padding: 0;
        font-size: 2.3rem;
    }
</style>