<script>

export default {
    name: "AppModale",

    props: ["story"],

    methods: {
        closeModelCard() {
            //console.log("ciao")
            this.$emit('closeModelCard')
        }
    }
}
</script>

<template>
    <div class="modale">
        <div class="relative">
            <div><strong>Overview : </strong></div>
            <p>{{ story }}</p>
            <div @click="closeModelCard"><button class="my_btn"><i class="fa-solid fa-x"></i></button></div>
        </div>
    </div>
</template>

<style scoped>
.modale {
    background-color: white;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    right: 23px;
    height: 380px;
    width: 250px;
    padding: 20px;
    border-radius: 10px;
}

.my_btn {
    width: 30px;
    aspect-ratio: 1;
    border-radius: 8px;
    position: absolute;
    top: 320px;
    right: 5px;

    &:hover {
        cursor: pointer;
    }
}

.relative {
    position: relative;
}
</style>