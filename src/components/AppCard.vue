<script>
import { state } from '../state';
import axios from 'axios';
import AppModale from './AppModale.vue';

export default {
    name: "AppCard",
    data() {
        return {
            state: state,
            over: false,
            languages: ["it", "en", "es", "ja"],
            actors: [],
            modaleAperta: false,
            contenutoModale: null,
        }
    },
    components: {
        AppModale: AppModale,
    },
    props: ["immagine", "titolo", "titoloOriginale", "lingua", "voto", "overview", "genre", "arrayDaControllare", "id", "section"],

    methods: {

        languagePresent(str) {
            //console.log(str);
            //console.log(this.languages.includes(str))
            if (this.languages.includes(str)) {
                return true;
            } else {
                return false;
            }
        },

        returnNumb(number) {
            const newNumber = number / 2;
            let intero = (Math.trunc(newNumber)); //il metodo trunc mi permette di troncare la parte decimale e prendere solo il numero intero e lo salvo in numb
            const decimale = newNumber - intero
            //console.log("numero originale: " + number + "numero diviso: " + newNumber + "parte intera:" + intero + "parte decimale:" + Number(decimale.toFixed(2)))
            if (Number(decimale.toFixed(2)) > 0.5) {
                intero++
            } else if (number <= 0) {
                intero = 1
            }

            return intero
        },
        genreSearch(componente, array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].id === componente) {
                    return array[i].name;
                }
            }
        },
        researchActors(researchSection, identifier) {
            axios
                .get(`https://api.themoviedb.org/3/${researchSection}/${identifier}/credits?${state.address_my_key}`)
                .then(response => {
                    console.log(response.data.cast);

                    this.actors = response.data.cast;
                })
                .catch(error => {
                    console.error('Errore nella ricerca degli attori:', error);
                });
        },
        showProduct(card) {
            this.modaleAperta = true;
            console.log(this.modaleAperta);

            this.contenutoModale = this.overview
        },

        closeModel() {
            this.modaleAperta = false
        },

    },
    mounted() {
        this.researchActors(this.section, this.id);       //quando viene montato il componente, richiamo la funzione che ricerca gli attori una sola volta, in modo tale che in actors ci saranno già i nomi salvati quando mi serviranno
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <div class="info">
                <!--se l'immagine non è presente o over è vero(perchè l'ho modificato con l'evento allora mostro le info altrimenti mostro l'imamgine)-->
                <div class="info text_color">
                    <div v-if="titolo === titoloOriginale">
                        <strong>Titolo :</strong> {{ titolo }}
                    </div>
                    <div v-else>
                        <div><strong>Titolo :</strong> {{ titolo }}</div>
                        <div><strong>Titolo Originale :</strong> {{ titoloOriginale }}</div>
                    </div>
                    <div class="d_flex">
                        <div>
                            <strong :data-lang="lingua">Lingua originale :</strong>
                            <span v-if="languagePresent(lingua)">
                                <img :src="`./src/assets/img/${lingua}.png`" alt="" class="flag">
                            </span>
                            <span v-else> {{ lingua }}</span>
                        </div>
                    </div>
                    <div>
                        <strong>Voto :</strong>
                        <span class="star_color" v-for="n in returnNumb(voto)"><i class="fa fa-star"
                                aria-hidden="true"></i></span>
                    </div>
                    <div>
                        <strong>Generi : </strong>
                        <span v-for="componente in genre"> - {{ genreSearch(componente, arrayDaControllare) }} </span>
                    </div>

                    <div v-if="actors.length > 0">
                        <!--se ci sono attori allora mostro i primi 5, altrimenti non mostro nulla-->
                        <strong>Attori : </strong>
                        <div v-for="(actor, index) in actors ">
                            <div v-if="(index) <= 4">{{ actor.name }}</div>
                        </div>
                    </div>
                    <button v-if="(overview !== '')" @click="showProduct()">Overview</button>
                    <AppModale v-if="modaleAperta === true" :story="overview" @closeModelCard="closeModel">
                    </AppModale>
                </div>
            </div>

            <div class="image">
                <img v-if="immagine !== null" :src="`https://image.tmdb.org/t/p/w342/${immagine}`" alt="">
                <img v-else src="../assets/img/play.png" alt="">
            </div>

        </div>
    </div>
</template>

<style scoped>
.flag {
    max-width: 20px;

}

.star_color {
    color: gold;
}

.col {
    width: calc((100% / 12) * 3 - 15px);
    height: 450px;

    & .card {
        background-color: #4d4a4a;
        border-radius: 10px;
        height: 100%;
        box-shadow: 0px 10px 15px #080708;
        font-size: 15px;
        position: relative;

        &:hover {
            .info {
                display: block;
            }

            .image {
                display: none;
            }
        }
    }
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}

.image {
    width: 100%;
    height: 100%;
}

.text_color {
    color: white;
}

.d_flex {
    display: flex;
    align-items: center;
}

.info {
    padding: 20px;
    display: none;
}

button {
    background-color: white;
    color:black;
    margin-top: 10px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }
}
</style>
