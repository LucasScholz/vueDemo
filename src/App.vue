<template>
    <Header></Header>
  <router-view/>
</template>

<script>

import Header from '@/components/Header.vue';

  export default {
    components: {
      Header
    }
  }
</script>

<style>

    html, body, #app {
      font-family: "Roboto", sans-serif;
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: #242427;  /* sehr dunkles Grau */
      color: #e0e0e0;
    }

</style>
