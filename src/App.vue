<template>
  <div class="app">
    <ok-header/>
    <router-view/>
  </div>
</template>

<script>
import OkHeader from "@/components/OkHeader.vue";
export default {
  components: {
    OkHeader
  },
  methods: {
  }
}
</script>

<style>
    *{
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
 .app {
    margin: 0;
    padding: 5px;
  }
</style>
