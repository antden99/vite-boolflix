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
                <AppCard v-for="film in state.filmsList" :immagine="film.poster_path" :titolo="film.title"
                    :titoloOriginale="film.original_title" :lingua="film.original_language" :voto="film.vote_average"
                    :overview="film.overview"></AppCard>

                <AppCard v-for="serie in state.seriesList" :immagine="serie.poster_path" :titolo="serie.name"
                    :titoloOriginale="serie.original_name" :lingua="serie.original_language" :voto="serie.vote_average"
                    :overview="serie.overview"></AppCard>
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
    border: ;
    padding-top: 25px;

    & .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-between;

    }
}
</style>