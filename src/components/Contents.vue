<template>
    <div class="contentTab">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Contents',
    }
</script>

<style scoped>

    .contentTab {

      width: 50vw;
      margin: 0 auto;
    }

</style>