// installo axios come libreria digitando il comando npm install axios
// creo il file state.js e importo da vue la funzione reattiva dopo aver importato axios
import axios from 'axios'

// importo la reattività da vue
import { reactive } from 'vue';

// rendo possibile con export la costante state a cui assegno l'oggetto reactive
export const state = reactive({
    // dichiaro una proprietà con all'interno il mio indirizzo principale con la mia chiave
    address_my_key: "api_key=f816e22efeac8c7bafa0b02db3a618e3",
    // dichiaro una proprietà inizialmente vuota che colleghero con la modale nel App.vue principale
    searchMovie: "",
    // dichiaro una proprietà che contiene un array inizialmente vuoto e che andrò a riempire successivamente con la chiamata ajax fatta in research() 
    filmsList: [],
    seriesList: [],
    genresFilmsList: [],
    genresSeriesList: [],

    // dichiaro il metodo callApifunction che mi permette, tramite la mia chiamata ajax di accedere alla lista dei film
    callApifunction(url) {
        // Restituisco una promessa tramite il return per consentire la gestione asincrona dei dati
        return axios
            .get(url)
            .then(response => {
                //console.log(response)
                return response.data.results;
            });
    },

    // aggiungo la funzione research, che si attiva quando effettuo il click sul bottone in App.vue e ricerca con l'aggiunta di una query, se i caratteri inseriti sono presenti nel db tramite l'api
    research() {
        console.log("Stai cercando : " + this.searchMovie);

        // Utilizzo la promessa restituita dalla funzione callApifunction per ottenere la lista di film
        this.callApifunction(`https://api.themoviedb.org/3/search/movie?${this.address_my_key}&query=${this.searchMovie}`)
            .then(films => {
                //console.log(films)
                this.filmsList = films;
                console.log(this.filmsList);
            });

        // Utilizzo la promessa restituita dalla funzione callApifunction per ottenere la lista di serie TV
        this.callApifunction(`https://api.themoviedb.org/3/search/tv?${this.address_my_key}&query=${this.searchMovie}`)
            .then(series => {

                this.seriesList = series;
                console.log(this.seriesList);
            });
    },

    researchGenres() {
        console.log("stai attivano la funzione 2");

        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?${this.address_my_key}`)
            .then(response => {
                //console.log(response.data.genres)
                this.genresFilmsList = response.data.genres
                //console.log(this.genresFilmsList)
            })

        axios
            .get(`https://api.themoviedb.org/3/genre/tv/list?${this.address_my_key}`)
            .then(response => {
                //console.log(response.data.genres)
                this.genresSeriesList = response.data.genres
                //console.log(this.genresSeriesList)
            })
    },

});

