<template>
    <div>
        <h3>Nederbörd just nu</h3>
        <h6 class="size">Välj Stad</h6>
        <drop-down-cities class="size" @update="getRain" />
        <div class="mt-4 center">
            <apexchart
                style="margin-top: 30px"
                class="apex"
                type="line"
                :options="options"
                :series="series"
            ></apexchart>
        </div>
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
                    title: {
                        text: "Tid på dygnet",
                        align: "right",
                    },
                },

                colors: ["#000"],

                stroke: {
                    curve: "smooth",
                    width: 5,
                },

                yaxis: {
                    title: {
                        text: "Nederbörd i mm",
                        align: "right",
                    },
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
        this.series[0].data.length = 0
        this.rain = await findRain(11.89, 57.69)
        console.log(this.rain)
        var i
        for (i = 0; i <= this.rain.length; i++) {
            values.push(this.rain[i])
        }
    },
    methods: {
        async getRain(value) {
            this.series[0].data.length = 0
            this.rain = await findRain(value.lng, value.lat)
            this.series = [{ data: this.rain }]
            console.log(this.series)
        },
    },
}
</script>

<style scoped>
h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-family: Montserrat;
    font-weight: bold;
}

@media screen and (min-width: 576px) {
    .apex {
        width: 40%;
    }
        .size {
        width: 40%;
        margin: auto;
    }
}

@media screen and (min-width: 768px) {
    .center {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
}
</style>
