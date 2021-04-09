<template>
    {{ currentHour }}
    <div id="chart1">
        <apexchart type="pie" :options="chartOptions1" :series="series1"></apexchart>
    </div>
    {{ hourPlusOne }}
    <div id="chart2">
        <apexchart type="pie" :options="chartOptions2" :series="series2"></apexchart>
    </div>
    {{ hourPlusTwo }}
    <div id="chart3">
        <apexchart type="pie" :options="chartOptions3" :series="series3"></apexchart>
    </div>
    {{ hourPlusThree }}
    <div id="chart3">
        <apexchart type="pie" :options="chartOptions4" :series="series4"></apexchart>
    </div>
    <div class="mt-4">
        Molnmängd eller molnighet indikerar hur stor andel av himmelen som täcks av moln. Molnighet <br />
        mäts i vad som kallas "octas" eller åttondelar där noll oktas (0/8) anger molnfritt och åtta oktas (8/8) helt
        mulet.
    </div>
</template>
<script>
import findCloudCover from "../services/CloudService"
export default {
    name: "CloudCharts",
    data() {
        return {
            cloudCover: [],
            currentHour: {},
            hourPlusOne: {},
            hourPlusTwo: {},
            hourPlusThree: {},
            name: "Hello woeld",
            series1: [],
            chartOptions1: {
                chart: {
                    width: "100%",
                    type: "pie",
                },
                colors: ["#ADB8BC", "#C0E8F9"],
                labels: ["Moln", "Klar himmel"],
                theme: {
                    monochrome: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        },
                    },
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + "%"]
                    },
                },
                legend: {
                    show: false,
                },
            },
            series2: [],
            chartOptions2: {
                chart: {
                    width: "100%",
                    type: "pie",
                },
                colors: ["#ADB8BC", "#C0E8F9"],
                labels: ["Moln", "Klar himmel"],
                theme: {
                    monochrome: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        },
                    },
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + "%"]
                    },
                },
                legend: {
                    show: false,
                },
            },
            series3: [],
            chartOptions3: {
                chart: {
                    width: "100%",
                    type: "pie",
                },
                colors: ["#ADB8BC", "#C0E8F9"],
                labels: ["Moln", "Klar himmel"],
                theme: {
                    monochrome: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        },
                    },
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + "%"]
                    },
                },
                legend: {
                    show: false,
                },
            },
            series4: [],
            chartOptions4: {
                chart: {
                    width: "100%",
                    type: "pie",
                },
                colors: ["#ADB8BC", "#C0E8F9"],
                labels: ["Moln", "Klar himmel"],
                theme: {
                    monochrome: {
                        enabled: false,
                    },
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5,
                        },
                    },
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + "%"]
                    },
                },
                legend: {
                    show: false,
                },
            },
        }
    },
    methods: {
        getCityValues() {},
        getTime() {
            let today = new Date()
            console.log(today.getHours() + 1)
            this.currentHour = today.getHours()
            this.hourPlusOne = today.getHours() + 1
            this.hourPlusTwo = today.getHours() + 2
            this.hourPlusThree = today.getHours() + 3
        },
    },
    async created() {
        let data = await findCloudCover(16.158, 58.5812)
        console.log(data)
        let chartData1 = [data[0], 8 - data[0]]
        this.series1 = chartData1
        let chartData2 = [data[1], 8 - data[1]]
        this.series2 = chartData2
        let chartData3 = [data[2], 8 - data[2]]
        this.series3 = chartData3
        let chartData4 = [data[3], 8 - data[3]]
        this.series4 = chartData4
        this.getTime()
    },
}
</script>
<style scoped></style>
