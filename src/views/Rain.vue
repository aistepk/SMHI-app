<template>
    <div id="chart">
        <apexchart type="line" height="350" width="600" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import findRain from "../services/WindService.js"

export default {
    name: "Rain",
    data() {
        return {
            values: [],
            times: [],
            series: [],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "line",
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                title: {
                    text: "Nederbörd i mm",
                    align: "left",
                },
                xaxis: {
                    categories: [],
                },
            },
        }
    },

    async created() {
        this.rain = await findRain(16.158, 58.5812)
    },
}
</script>

<style scoped>
#chart {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
