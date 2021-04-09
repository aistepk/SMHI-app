<template>
    <h3>Nederbörd just nu</h3>
    <h4>Välj Stad</h4>
    <drop-down-cities @update="getWind" />
    <div class="mt-4">
        <apexchart width="100%" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import DropDownCities from "../components/DropDownCities.vue"
import axios from "axios"
let today = new Date()
let current = today.getHours()
let currentPlusOne = today.getHours() + 1
let currentPlusTwo = today.getHours() + 2
let currentPlusThree = today.getHours() + 3
let currentPlusFour = today.getHours() + 4
let currentPlusFive = today.getHours() + 5
let currentPlusSix = today.getHours() + 6
let currentPlusSeven = today.getHours() + 7
const values = []
// let currentPlusOne
// let currentPlusTwo
// let currentPlusThree
// let currentPlusFour
// let currentPlusFive
// let currentPlusSix
// let currentPlusSeven
export default {
    name: "Rain",
    components: { DropDownCities },
    data() {
        return {
            rain: [],
            options: {
                chart: {
                    id: "vuechart-example",
                },
                xaxis: {
                    categories: [
                        current,
                        currentPlusOne,
                        currentPlusTwo,
                        currentPlusThree,
                        currentPlusFour,
                        currentPlusFive,
                        currentPlusSix,
                        currentPlusSeven,
                    ],
                },
                title: {
                    text: "Nederbörd i mm",
                    align: "left",
                },
            },
            series: [
                {
                    data: values,
                },
            ],
        }
    },

    async created() {
        // this.rain = await findRain(16.158, 58.5812)
        const BASE_URL = "https://opendata-download-metfcst.smhi.se/api"
        const url = `${BASE_URL}/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json`
        const data = await axios.get(url)
        console.log(data)
        values.push(data.data.timeSeries[2].parameters[3].values[0])
        values.push(data.data.timeSeries[3].parameters[3].values[0])
        values.push(data.data.timeSeries[4].parameters[3].values[0])
        values.push(data.data.timeSeries[5].parameters[3].values[0])
        values.push(data.data.timeSeries[6].parameters[16].values[0])
        values.push(data.data.timeSeries[7].parameters[16].values[0])
        values.push(data.data.timeSeries[8].parameters[16].values[0])
        values.push(data.data.timeSeries[9].parameters[16].values[0])
    },
    methods: {},
}
</script>
