<template>
  <div class = "contentTab">
    <div class = "welcomeTab">
        <div class = "bigHeading">Willkommen auf meiner ersten Vue-Website.</div>
    </div>
  </div>
    
</template>

<script>
import RecipeItem from '@/components/RecipeItem.vue';

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    RecipeItem
  }
}
</script>


<style>

    .contentTab {
      display: flex;
      justify-content: center;
      width: 100vh;
      height: 100vh;

    }

    .welcomeTab {
      border-color: rgb(75, 62, 83);
      border-radius: 20px;
      border-width: 5px;
      border-style: solid;
      display: flex;
      justify-content: center;
      width: 80vh;
      height: 10em;
      padding: 1.4em;
    }

</style>