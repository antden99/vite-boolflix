<script>
import { state } from '../src/state.js';

export default {
  name: "AppMain",

  components: {
    state: state,
  },

  data() {
    return {
      state: state,    //alla proprietà state assegno state, che sarebbe la costante importata

    }
  },
  //con mounted al caricamento dei dati, prima di essere caricati in pagina, vado a recuperare l'array di oggetti card, tramite il localhost che ho generato nel passaggio precedente con npm run serve(vedi packge.json)
  mounted() {
    //all'avvio del programma, verrà invocata la funzione callApiFunction che sti trova nel file globale state importato precedentemente
    state.callApifunction(state.address_my_key)
  },
}
</script>

<template>
  <div>

    <!--aggiungo l'input ed il button per visualizzarli in pagina per la milestone 1-->
    <input type="text" placeholder="cerca il tuo film" v-model="state.searchMovie">

    <!--aggiungo l'evento click, che si attiva quando clicco sul bottone e attiva la funzione dichiarata nello state chiamata -->
    <button @click="state.research">Invia</button>

    <ol>
      <li v-for="film in state.filmsList">
        <div>
          {{ "titolo: " + film.title }}
        </div>
        <div>
          {{ "titolo originale:" + film.original_title }}
        </div>
        <div>
          {{ "lingua originale:" + film.original_language }}
        </div>
        <div>
          {{ "voto:" + film.vote_average }}
        </div>
      </li>
    </ol>

  </div>
</template>

<style></style>
