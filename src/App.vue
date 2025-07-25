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

    body {
      font-family: "Roboto", sans-serif;
      margin: 0;
      padding: 0;
      height: 100%;
    }

    input {
      border: 0;
      border-radius: 1em;
      width: 100%;
      height: 2.5em;
    }

</style>
