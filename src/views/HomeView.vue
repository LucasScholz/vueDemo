<template>
  <RecipeItem/>
  <RecipeItem/>
  <RecipeItem/>
  <RecipeItem/>
  <RecipeItem/>
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
