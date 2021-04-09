<template>
    <!-- <div id="header">
        <h5>{{ wind }}m/s</h5>
    </div> -->
    <div class="d-flex flex-column mb-3">
        <div>
            <h4>Vindstyrkan just nu</h4>
            <drop-down-cities @update="getWind" />
            <p>{{ wind }}m/s</p>
            <p>{{ temperate }}</p>
        </div>
        <div>
            <div v-if="wind >= 0 && wind <= 3.9">
                <p>Svag vind</p>
                <img src="../assets/breeze.gif" />
            </div>
            <div v-if="wind >= 4 && wind <= 7.9">
                <p>Måttlig vind</p>
                <img src="../assets/lightWind.gif" />
            </div>
            <div v-if="wind >= 8 && wind <= 13.8">
                <p>Frisk vind</p>
                <img src="../assets/windy.gif" />
            </div>
            <div v-if="wind >= 13.9 && wind <= 24.4">
                <p>Hård vind</p>
                <img src="../assets/windy.gif" />
            </div>
            <div v-if="wind >= 24.5 && wind <= 32.6">
                <p>Storm</p>
                <img src="../assets/storm.gif" />
            </div>
            <div v-if="wind >= 32.7">
                <p>Orkan</p>
                <img src="../assets/storm.gif" />
            </div>
        </div>
        <div class="table-responsive mt-4">
            <h6>Vindstyrka</h6>
            <p>
                Vindhastighet eller vidstyrka är ett mått på hastigheten av stora och svaga vindar. Vindhastighet anges
                i antingen i meter per sekund eller Beaufortgrader
            </p>
            <table class="table table-bordered border border-3">
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
            // temperate: {},
        }
    },
    async created() {
        this.wind = await findWindSpeed(11.89, 57.69)
    },
    methods: {
        getTemperate() {
            if (this.wind >= 4 && this.wind <= 7.9) {
                // this.temperate = this.wind
            }
        },
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
p {
    text-align: center;
}
</style>
