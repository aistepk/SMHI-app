<template>
    <!-- <div id="header">
        <h5>{{ wind }}m/s</h5> class="d-flex flex-column mb-3" img-responsive center-block d-block mx-auto
    </div> -->

    <div class="container">
        <div v-if="wind >= 0 && wind <= 3.9" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Svag vind</h5>
            <img src="../assets/breeze.gif" />
        </div>
        <div v-if="wind >= 4 && wind <= 7.9" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Måttlig vind</h5>
            <br /><br />
            <img src="../assets/lightWind.gif" class="img-fluid" alt="Gif of light wind" />
        </div>
        <div v-if="wind >= 8 && wind <= 13.8" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Frisk vind</h5>
            <img src="../assets/windy.gif" />
        </div>
        <div v-if="wind >= 13.9 && wind <= 24.4" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Hård vind</h5>
            <img src="../assets/windy.gif" />
        </div>
        <div v-if="wind >= 24.5 && wind <= 32.6" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Storm</h5>
            <img src="../assets/storm.gif" />
        </div>
        <div v-if="wind >= 32.7" class="row">
            <h5>{{ wind }}m/s</h5>
            <h5>Orkan</h5>
            <img src="../assets/storm.gif" />
        </div>
        <div class=" row mt-4">
            <h6>Vindstyrka</h6>
            <p>Här finns information om vad vindstyrka innebär</p>
            <table class="table table-bordered border border-3" style="margin: auto">
                <thead>
                    <tr class="table border border-4">
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
</template>

<script>
import findWindSpeed from "../services/WindService.js"
export default {
    name: "Wind",
    data() {
        return {
            wind: {},
            temperate: {},
        }
    },
    async created() {
        this.wind = await findWindSpeed(16.158, 58.5812)
    },
    methods: {
        getTemperate() {
            if (this.wind >= 4 && this.wind <= 7.9) {
                this.temperate = this.wind
            }
        },
    },
}
</script>
<style lang="scss">
// img {
//     width: 100%;
//     padding: 15px;
//     border: 1px solid black;
//     border-radius: 8px;
// }
h5 {
    text-align: center;
}
</style>
