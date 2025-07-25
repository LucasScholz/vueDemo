<template>
    <div class = "recipeItemContainer">
        <img class="recipeImage" :src= "image"/>
        
        <div class="right-side">
            <div>
                {{ label }}
            </div>
            <div class="bottom-row">
                {{ attributes }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RecipeItem',
        data() {
            return {
                image: '@/assets/logo.png',
                label: 'Sushi-Rolls',
                attributes: 'Vegan, Fettarm',
            }
        }
    }
</script>

<style scoped>

.recipeItemContainer {
    border: 1px solid rgba(0,0,0,0.2);
    padding: 16px;
    border-radius: 8px;
    margin: 8px;
    display: flex;
    gap: 8px;
    cursor: pointer;
}

.recipeItemContainer:hover {
    background-color: rgb(233, 233, 233);
}

.recipeImage {
    height: 20px;
    width: 20px;
}

.right-side {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.bottom-row {
    color: rgba(0,0,0,0.6)
}

</style>