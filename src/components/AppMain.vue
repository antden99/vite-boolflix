<script>
import { state } from '../state';
import AppCard from './AppCard.vue';


export default {
    name: "AppMain",

    data() {
        return {
            state: state,
            tv: "tv",
            movie: "movie",
        }
    },

    components: {
        AppCard: AppCard,

    },

    mounted() {
        state.researchGenres(); //faccio la chiamata in mounted poichè i generi sono sempre gli stessi ed in questo modo la faccio una volta al caricamento
        this.dataLoaded = true;
    },

}
</script>

<template>
    <div class="wrapper">
        <main :style="{ height: state.filmsList.length === 0 ? '76.6vh' : '' }">       <!--aggiungo il controllo sul main recuperando la lunghezza dell'array-->
        <div class="container">
            <div class="row">
                <AppCard v-for="film in state.filmsList" :immagine="film.poster_path" :titolo="film.title"
                    :titoloOriginale="film.original_title" :lingua="film.original_language" :voto="film.vote_average"
                    :overview="film.overview" :genre="film.genre_ids" :arrayDaControllare="state.genresFilmsList"
                    :id="film.id" :section="movie"></AppCard>

                <AppCard v-for="serie in state.seriesList" :immagine="serie.poster_path" :titolo="serie.name"
                    :titoloOriginale="serie.original_name" :lingua="serie.original_language" :voto="serie.vote_average"
                    :overview="serie.overview" :genre="serie.genre_ids" :arrayDaControllare="state.genresSeriesList"
                    :id="serie.id" :section="tv"></AppCard>
            </div>
        </div>      
    </main>
    </div>



</template>

<style scoped>

main {
    background-color: #141414;
    padding-bottom: 20px;
}

.container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    padding-top: 25px;
    height: 100%;

    & .row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-between;

    }
}


</style>