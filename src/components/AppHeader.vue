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

<style scoped>
header {
    background-color: #080708;
    height: 100px;
    display: flex;
    width:100%;
    position: fixed;
    z-index: 1;
    top: 0;
}
.container{
    width: 80%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.left {
    color: #dc1a28;
    font-size: 50px;
}

input{
    padding: 5px 10px;
    background: #fff;
    box-shadow: none;
    width: 200px;
    border-radius: 5px;
    margin: 0 15px;
}

button{
    width: 60px;
    height: 30px;
    border-radius: 10px;
    outline: none;
    margin-left: 10px;
    background-color: #dc1a28;
    color: white;

    &:hover{
        cursor: pointer;
        transition:  3s;
    }
}
</style>