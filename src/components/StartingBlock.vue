<template>
    <div class="welcomeTab">
        <div class="headline">
            {{ headline }} 
        </div>
        <div class="description">
            {{ description }}
        </div>
    </div>
</template>

<script>
        export default {
        name: 'StartingBlock',
        props: {
            headline: {
                type: String,
                required: true
            },
            description: {
                type: String,
            }
        }
    }
</script>

<style scoped>
    
    .welcomeTab {
      border-color: rgb(75, 62, 83);
      border-radius: 20px;
      border-width: 5px;
      border-style: solid;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 1em;
    
    }

    .headline {
        font-size: x-large;
        text-align: center;
    }

    .description {
        margin-top: 0.8em;
        font-size: medium;
    }

</style>