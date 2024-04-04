<script>
import { state } from '../state';
import AppCard from './AppCard.vue';

export default {
    name: "AppMain",

    data() {
        return {
            state: state,
        }
    },

    components: {
        AppCard: AppCard,
    },


}
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <AppCard v-for="film in state.filmsList" :card="film"></AppCard>

                <AppCard v-for="serie in state.seriesList" :card="serie"></AppCard>
            </div>
        </div>
    </main>
</template>

<style scoped>


main {
    background-color: #141414;
    height: calc(100vh - 100px);
    overflow-y: auto;
}

.container {
    width: 80%;
    max-width: 1200px;
    margin: auto;

    padding-top: 20px;

    & .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        
    }
}
</style>