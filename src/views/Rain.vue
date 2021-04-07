<template>
    <h3>Nederbörd just nu</h3>
    <h4>Välj Stad</h4>
    <drop-down-cities @update="getWind" />
    <div class="mt-4" id="chart">
        <apexchart height="350" width="600" type="line" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
import DropDownCities from "../components/DropDownCities.vue"
import axios from "axios"
// import findRain from "../services/RainService.js"
const values = []
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
                    categories: [13, 14, 15, 16, 17, 18, 19, 20],
                },
                title: {
                    text: "Nederbörd i mm",
                    align: "left",
                }
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
        values.push(data.data.timeSeries[4].parameters[16].values[0])
        values.push(data.data.timeSeries[5].parameters[16].values[0])
        values.push(data.data.timeSeries[6].parameters[16].values[0])
        values.push(data.data.timeSeries[7].parameters[16].values[0])
        values.push(data.data.timeSeries[8].parameters[16].values[0])
        values.push(data.data.timeSeries[9].parameters[16].values[0])
        values.push(data.data.timeSeries[10].parameters[16].values[0])
        values.push(data.data.timeSeries[11].parameters[16].values[0])
    },
}
</script>

<style scoped> 
h3 {
    text-align: center;
}

#chart {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
