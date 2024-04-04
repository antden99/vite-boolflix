<script>
import { state } from '../state';

export default {
    name: "AppHeader",

    data() {
        return {
            state: state,
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="left">BOOLFLIX</div>
            <div class="right">
                <!--aggiungo l'input ed il button per visualizzarli in pagina per la milestone 1-->
                <input type="text" placeholder="cerca il tuo film" v-model="state.searchMovie">

                <!--aggiungo l'evento click, che si attiva quando clicco sul bottone e attiva la funzione dichiarata nello state chiamata -->
                <button @click="state.research">Invia</button>
            </div>
        </div>
    </header>
</template>

<style>
header {
    background-color: #080708;
    height: 100px;
    display: flex;
}

.left{
    
    color: red;
    font-size: 50px;
}
</style>