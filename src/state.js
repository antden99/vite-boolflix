// installo axios come libreria digitando il comando npm install axios
//creo il file state.js e importo da vue la funzione reattiva dopo aver importato axios
import axios from 'axios'

//importo la reattività da vue
import { reactive } from 'vue';

//rendo possibile con export la constante state a cui assegno l'oggetto reactive
export const state = reactive({

    //dichiaro una proprietà con all'interno il mio indirizzo principale con la mia chiave
    address_my_key:"https://api.themoviedb.org/3/search/movie?api_key=f816e22efeac8c7bafa0b02db3a618e3",

    //dichiaro una proprietà inizialmente vuota che colleghero con la modale nel App.vue principale
    searchMovie: "",
   
    //dichiaro il metodo callApifunction che mi permette, tramite la mia chiamata ajax di accedere alla lista dei film
    callApifunction(url) {

        //alla chiamata di questa funzione invoco ajax che mi permette, tramite l'http ricavato all'inizio tramite il db.jeson, di recuperare un array di oggetti che sti trova in response.data, e che successivamente assegno all'array cardsList_2
        axios
            .get(url)
            .then(response => {
                console.log(response); //faccio il console di responde.data, dove sono contenuti i miei film
            })
    },

    //aggiungo la funzione research, che si attiva quando effettuo il click sul bottone in App.vue e ricerca con l'aggiunta di una query, se i caratteri inseriti sono presenti nel db tramite l'api
    research(){
        console.log(this.searchMovie)


        this.callApifunction(`${this.address_my_key}&query=${this.searchMovie}`)
    }

    

})