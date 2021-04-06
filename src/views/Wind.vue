<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-center">
            <div class="row">
                <div class="col-6">
                    <h7>Vindstyrkan just nu</h7>
                    <drop-down-cities @update="getWind" />
                    <p>{{ wind }}m/s</p>
                </div>
                <div class="row">
                    <div v-if="wind >= 0 && wind <= 3.9">
                        <p>Svag vind</p>
                        <img src="../assets/kort-vind.jpg" />
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
                        <img src="../assets/windy.gif" />
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col d-flex justify-content-center">
                <div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quidem excepturi dicta eius
                        dolorum,
                    </p>
                </div>
                <div class="row">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>
                                <th scope="col">@mdo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
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
        this.wind = await findWindSpeed(16.158, 58.5812)
    },
    methods: {
        async getWind(value) {
            this.wind = await findWindSpeed(value.lng, value.lat)
        },
    },
}
</script>
<style lang="scss" scoped>
img {
}
</style>
