<script>
import { toDisplayString } from 'vue';
import { state } from '../state';

export default {
    name: "AppCard",
    data() {
        return {
            state: state,
            over: false,
            languages: ["it", "en", "es", "ja"],
        }
    },
    props: ["immagine", "titolo", "titoloOriginale", "lingua", "voto", "overview"],
    methods: {

        languagePresent(str) {
            console.log(str);
            console.log(this.languages.includes(str))
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
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card" @mouseenter="over = true" @mouseout="over = false">

            <div class="info" v-if="immagine === null || over === true">
                <div class="info">
                    <div class="text_color">
                        <strong>Titolo :</strong> {{ titolo }}
                    </div>
                    <div class="text_color">
                        <strong>Titolo Originale :</strong> {{ titoloOriginale }}
                    </div>
                    <div class="text_color d_flex">
                        <div class="text_color">
                            <strong :data-lang="lingua">Lingua originale :</strong>
                            <span v-if="languagePresent(lingua)">
                                <img :src="`./src/assets/img/${lingua}.png`" alt="" class="flag">
                            </span>
                            <span v-else> {{ lingua }}</span>
                        </div>
                    </div>
                    <div class="text_color">
                        <strong>Voto :</strong>
                        <span class="star_color" v-for="n in returnNumb(voto)"><i class="fa fa-star"
                                aria-hidden="true"></i></span>
                    </div>
                    <div class="text_color">
                        <strong>Overview :</strong> {{ overview }}
                    </div>
                </div>
            </div>

            <div v-else class="image">
                <img :src="`https://image.tmdb.org/t/p/w342/${immagine}`" alt="">
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
    width: calc((100% / 12) * 4 - 15px);
    height: 450px;

    & .card {
        background-color: #080708;
        border-radius: 10px;
        height: 100%;
        box-shadow: 0px 10px 15px #080708;
        font-size: 15px;
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
}
</style>
