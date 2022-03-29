<template>
  <nav class="header">
    <router-link class="nav" to="/">Главная</router-link> 
    |
    <router-link class="nav" to="/posts">Посты</router-link>
  </nav>
</template>

<script>
    export default {
        name: "OkHeader"
    }
</script>

<style scoped>
    .header{
        padding: 5px;
        margin: 5px;
        text-align: center;
        font-size: 2.8rem;
    }
    .nav{
      text-decoration: none;
      color: black;
    }
    .nav:hover{
      text-shadow: 1px 1px 2px black;
    }
</style>