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
import findRain from "../services/RainService"
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
        this.rain = await findRain(11.89, 57.69)
        console.log(this.rain)
    },
    methods: {},
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
