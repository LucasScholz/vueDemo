<template>
    <header>
        <input placeholder="Suche...">
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>

  header {
    background-color: cadetblue;
    height: 8em;
    padding: 2em;
    display: flex;
    align-items: flex-end;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
  }

</style>