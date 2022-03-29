<template>
    <div class='comment'>
    <div><strong>Название:</strong> {{comment.name}}</div>
    <div><strong>Коммент:</strong> {{comment.body}}</div>
    <div><strong>Автор:</strong> {{comment.email}}</div>
    </div>
    <br/>
</template>

<script>
    export default {
        name: 'OkComment',
        props: {
            comment: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .comment {
        border: 2px solid gray;
        border-radius: 10px;
        padding: 5px;
    }
</style>