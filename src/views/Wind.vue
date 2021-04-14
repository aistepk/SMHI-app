<template>
    <!-- <div id="header">
        <h5>{{ wind }}m/s</h5>
    </div> -->
    <div>
        <div class="d-flex flex-column mb-3">
            <h4>Vindstyrkan just nu</h4>
            <drop-down-cities @update="getWind" />
            <!--  <p class="desktop">{{ wind }}m/s</p>-->
            <p>{{ temperate }}</p>
        </div>

        <div class="wrapper">
            <div class="box1">
                <div v-if="wind >= 0 && wind <= 3.9">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Svag vind
                    </p>
                    <img src="../assets/breeze.gif" />
                </div>
                <div v-if="wind >= 4 && wind <= 7.9">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Måttlig vind
                    </p>

                    <img src="../assets/lightWind.gif" />
                </div>
                <div v-if="wind >= 8 && wind <= 13.8">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Frisk vind
                    </p>

                    <img src="../assets/windy.gif" />
                </div>
                <div v-if="wind >= 13.9 && wind <= 24.4">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Hård vind
                    </p>

                    <img src="../assets/windy.gif" />
                </div>
                <div v-if="wind >= 24.5 && wind <= 32.6">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Storm
                    </p>

                    <img src="../assets/storm.gif" />
                </div>
                <div v-if="wind >= 32.7">
                    <p style="text-align: center">
                        <strong>{{ wind }}m/s</strong> Orkan
                    </p>

                    <img src="../assets/storm.gif" />
                </div>
            </div>

            <div class="box2">
                <div class="table-responsive mt-4">
                    <div v-if="wind >= 0 && wind <= 3.9">
                        <h5>Svag vind</h5>
                        <p>En vindflöjel (i gott skick) visar vindens riktning.</p>
                    </div>

                    <div v-if="wind >= 4 && wind <= 7.9">
                        <h5>Måttlig vind</h5>
                        <p>
                            Vinden sträcker en vimpel, sätter blad och tunna kvistar i oavbruten rörelse. <br />
                            Kvistar och tunna grenar rör sig. Damm och lössnö virvlar upp.
                        </p>
                    </div>
                    <div v-if="wind >= 8 && wind <= 13.8">
                        <h5>Frisk vind</h5>
                        <p>
                            Mindre lövträd börjar svaja. Vågor med utpräglade kammar på större insjöar.<br />
                            Stora trädgrenar sätts i rörelse. Det viner i telegraf- och telefontrådar (det är dock lite
                            svårt att hitta några telegraftrådar idag).
                        </p>
                    </div>
                    <div v-if="wind >= 13.9 && wind <= 24.4">
                        <h5>Hård vind</h5>
                        <p>
                            Hela träd börjar svaja. Man går ej obehindrat mot vinden.<br />
                            Kvistar bryts från träden och det börjar bli besvärligt att gå i det fria.<br />
                            Mindre skador på hus. Rökhuvar och taktegel blåser ner.
                        </p>
                    </div>
                    <div v-if="wind >= 24.5 && wind <= 32.6">
                        <h5>Storm</h5>
                        <p>Sällsynt i inlandet. Träd ryckas upp med roten, betydande skador på hus.</p>
                    </div>

                    <div v-if="wind >= 32.7">
                        <h5>Orkan</h5>
                        <p>
                            Stora föremål flyger i luften, fönster blåser in, byggnadsställningar rasar, båtar kastas
                            upp på land, allmän ödeläggelse. <br />
                            Öresundsbron stängs för tågtrafik.
                        </p>
                    </div>

                    <table>
                        <thead>
                            <tr class="border border-4">
                                <th scope="col" class="table-active">m/s</th>
                                <th scope="col" class="border border-4">0-3,9</th>
                                <th scope="col" class="border border-4">4-7,9</th>
                                <th scope="col" class="border border-4">8-13,8</th>
                                <th scope="col" class="border border-4">13,9-24,4</th>
                                <th scope="col" class="border border-4">24,5-32,6</th>
                                <th scope="col" class="border border-4">32,7-</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border border-4">
                                <th scope="row" class="table-active">Styrka</th>
                                <td class="border border-4">Svag</td>
                                <td class="border border-4">Måttlig</td>
                                <td class="border border-4">Frisk</td>
                                <td class="border border-4">Hård</td>
                                <td class="border border-4">Storm</td>
                                <td class="border border-4">Orkan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import findWindSpeed from "../services/WindService.js"
import DropDownCities from "../components/DropDownCities"

export default {
    name: "Wind",
    components: { DropDownCities },
    data() {
        return {
            wind: {},
        }
    },
    async created() {
        this.wind = await findWindSpeed(11.89, 57.69)
    },
    methods: {
        async getWind(value) {
            console.log(value)
            this.wind = await findWindSpeed(value.lng, value.lat)
        },
    },
}
</script>
<style lang="scss" scoped>
img {
    width: 100%;
    padding: 15px;
    border: 1px solid black;
    border-radius: 8px;
}

h5 {
    font-weight: 900;
    font-style: italic;
}
.table-responsive.mt-4 {
    border: 3px solid lightgray;
    padding: 1em;
    font-family: "Open sans";
    font-size: 16px;
}

h4 {
    text-align: center;
    font-family: Montserrat;
}
@media screen and (min-width: 768px) {
    img {
        width: 100%;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .box2 {
        width: 40%;
        justify-content: flex-end;
        margin-top: 50px;
        margin-left: 70px;
    }
}
</style>
