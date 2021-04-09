<template>
    <h3>Nederbörd just nu</h3>
    <h4>Välj Stad</h4>
    <drop-down-cities @update="getWind" />
    <div class="mt-4" id="chart">
        <apexchart style="margin-top: 30px" class="apex" type="line" :options="options" :series="series"></apexchart>
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
let values = []
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
        let rainData = await findRain(11.89, 57.69)
        console.log(rainData)
        values.push(rainData[0])
        values.push(rainData[1])
        values.push(rainData[2])
        values.push(rainData[3])
        values.push(rainData[4])
        values.push(rainData[5])
        values.push(rainData[6])
        values.push(rainData[7])
    },
    methods: {},
}
</script>

<style scoped>
h3 {
    text-align: center;
}

@media screen and (min-width: 576px) {
    .apex {
        width: 40%;
    }
    .center {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
}
</style>
