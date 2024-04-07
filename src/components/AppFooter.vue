<script>

export default {
    name: "AppFooter",
}
</script>

<template>
    <footer>

        <div class="container">
            <div class="row">

                <div>
                    <ul>
                        <li><a href="#">Rapporto con investitori</a></li>
                        <li><a href="#">Come guardare Boolflix</a></li>
                        <li><a href="#">Info Azienda</a></li>
                        <li><a href="#">Note legali</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Centro assistenza</a></li>
                        <li><a href="#">Opportunità di lavoro</a></li>
                        <li><a href="#">Condizioni di utilizzo</a></li>
                        <li><a href="#">Contattaci</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Riscatta regalo</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Test velocità</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Acquista carta regalo</a></li>
                        <li><a href="#">Preferenze per i cookie</a></li>
                        <li><a href="#">Garanzia legale</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    height: 100px;
    background-color: #080708;
    padding: 100px;
}

.container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    height: 100%;
    color: white;
    
}

.row {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    text-align: center;

    & div {
        flex-grow: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        & a {
            color: white;
        }

        & li{
            list-style: none;
        }
    }
}
</style>
