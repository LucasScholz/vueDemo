<template>
        <router-link v-if="dest" :to="dest" class="link-box">
        <img class = "icon" :src="imgSrc" alt="Bild" />
            <div class = "textbox">
                <div class="boxHeader"> {{ boxText }} </div>
                <div class="boxDescription"> {{ description }}</div>
            </div>
        </router-link>
        <div v-else class="link-box">
            <img class = "icon" :src="imgSrc" alt="Bild" />
            <div class = "textbox">
                <div class="boxHeader"> {{ boxText }} </div>
                <div class="boxDescription"> {{ description }}</div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'ListEntry',
        props: {
            boxText: {
                type: String,
                required: true
            },
            description: {
                type: String,
            },
            imgSrc: {
                type: String,
                required: true
            },
            dest: {
                type: String,
                required: false
            }
        }
    }
</script>

<style scoped>

    .textbox {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
    }

    .icon {
        height: 60px;
        width: 60px;
        margin-left: 1em;
        border-radius: 1.5em;
        margin-top: 0.2em;
        margin-bottom: 0.2em;
    }

    .boxHeader {
        font-size: large;
    }

    .boxDescription {
        font-size: medium;
    }

    .link-box {
        text-decoration: none;
        border-style: solid;
        border-radius: 20px;
        border-color: rgb(75, 62, 83);
        border-width: 5px;
        width: 100%;
        margin-top: 1em;
        display: flex;
        flex-direction: row;
        color: #e0e0e0;
    }

</style>