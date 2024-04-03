// installo axios come libreria digitando il comando npm install axios
//creo il file state.js e importo da vue la funzione reattiva dopo aver importato axios
import axios from 'axios'

//importo la reattività da vue
import { reactive } from 'vue';

//rendo possibile con export la constante state a cui assegno l'oggetto reactive
export const state = reactive({
    //dichiaro una proprietà con all'interno il mio indirizzo principale con la mia chiave
    address_my_key: "https://api.themoviedb.org/3/search/movie?api_key=f816e22efeac8c7bafa0b02db3a618e3",
    //dichiaro una proprietà inizialmente vuota che colleghero con la modale nel App.vue principale
    searchMovie: "",
    //dichiato una proprietà che contiene un array inizialmente vuoto e che andrò a riempire successivamente con la chiamata ajax fatta in research() 
    filmsList: [],

    //dichiaro il metodo callApifunction che mi permette, tramite la mia chiamata ajax di accedere alla lista dei film
    callApifunction(url) {
        // Restituisco una promessa tramite il return per consentire la gestione asincrona dei dati
        return axios
            .get(url)
            .then(response => {
                this.filmsList = response.data.results;
                return response.data.results; // Restituisci i dati aggiornati per la gestione successiva
            })
    },

    //aggiungo la funzione research, che si attiva quando effettuo il click sul bottone in App.vue e ricerca con l'aggiunta di una query, se i caratteri inseriti sono presenti nel db tramite l'api
    research() {
        console.log("Stai cercando : " + this.searchMovie);

        // Utilizzo la promessa restituita dalla funzione callApifunction
        this.callApifunction(`${this.address_my_key}&query=${this.searchMovie}`)
            .then(() => {
                // dopo che ho ricevuto i dati aggiornati dalla promessa, stampo in console il risultato
                console.log(this.filmsList);
            });
    },

})