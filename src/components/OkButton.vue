<template>
    <button class="okbutton"><slot></slot></button>
</template>

<script>
    export default {
        name: "OkButton"
    }
</script>

<style scoped>
      .okbutton{
      margin: 5px;
      padding: 5px;
      border: 2px solid gray;
      text-decoration: none;
      color: black;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 10px;
  }
</style>