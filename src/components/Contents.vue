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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }
    
</style>