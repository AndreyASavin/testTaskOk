<template>
    <div class="sortauthor">
        <label for="sort">Сортировка по автору</label>
        <select class="sort">
            <option value="" selected>Все</option>
            <option v-for="author in authors" :value="author.id" :key="author.id">
                {{author.name}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "OkSelect",
        props: {
            authors: {
                type: Array,
            }
        }
    }
</script>

<style scoped>
    .sortauthor{
        margin-left: 10%;
        margin-bottom: 10px;
    }
    label{
        margin-right: 5px;
    }
    .sort{
        border: 2px solid gray;
        border-radius: 10px;
        background-color: rgba(202, 199, 199, 0.637);
    }
</style>