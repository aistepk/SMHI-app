<template>
    <div>
        <h3>Molnighet just nu</h3>
        <h6>Välj Stad</h6>
        <div class="col-12">
            <drop-down-cities @update="getClouds" />
        </div>

        <div class="wrapper">
            <div class="big-box1">
                <div class="container">
                    <div id="chart1" class="box1">
                        <div class="hour-style">{{ currentHour }}</div>
                        <apexchart type="pie" :options="chartOptions1" :series="series1"></apexchart>
                    </div>

                    <div id="chart2" class="box2">
                        <div class="hour-style">{{ hourPlusOne }}</div>
                        <apexchart type="pie" :options="chartOptions2" :series="series2"></apexchart>
                    </div>

                    <div id="chart3" class="box3">
                        <div class="hour-style">{{ hourPlusTwo }}</div>
                        <apexchart type="pie" :options="chartOptions3" :series="series3"></apexchart>
                    </div>

                    <div id="chart3" class="box4">
                        <div class="hour-style">{{ hourPlusThree }}</div>
                        <apexchart type="pie" :options="chartOptions4" :series="series4"></apexchart>
                    </div>
                </div>
            </div>
            <div class="big-box2">
                <div class="mt-4">
                    Molnmängd eller molnighet indikerar hur stor andel av himmelen som täcks av moln. Molnighet <br />
                    mäts i vad som kallas "octas" eller åttondelar där noll oktas (0/8) anger molnfritt och åtta oktas
                    (8/8) helt mulet.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import findCloudCover from "../services/CloudService"
import DropDownCities from "../components/DropDownCities"

let currentHour

export default {
    name: "Clouds",
    components: { DropDownCities },
    data() {
        return {
            cloudCover: [],
            hourPlusOne: {},
            hourPlusTwo: {},
            hourPlusThree: {},
            name: "Hello world",
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
                title: {
                    text: currentHour,
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
        getTime() {
            let today = new Date()
            console.log(today.getHours() + 1)
            this.currentHour = today.getHours()
            this.hourPlusOne = today.getHours() + 1
            this.hourPlusTwo = today.getHours() + 2
            this.hourPlusThree = today.getHours() + 3
        },
        async getClouds(value) {
            console.log(value)
            this.cloud = await findCloudCover(value.lng, value.lat)
            this.series1 = [this.cloud[0], 8 - this.cloud[0]]
            this.series2 = [this.cloud[1], 8 - this.cloud[1]]
            this.series3 = [this.cloud[2], 8 - this.cloud[2]]
            this.series4 = [this.cloud[3], 8 - this.cloud[3]]
            this.getTime()
        },
    },
    async created() {
        this.cloud = await findCloudCover(11.89, 57.69)
        console.log(this.cloud)
        this.series1 = [this.cloud[0], 8 - this.cloud[0]]
        this.series2 = [this.cloud[1], 8 - this.cloud[1]]
        this.series3 = [this.cloud[2], 8 - this.cloud[2]]
        this.series4 = [this.cloud[3], 8 - this.cloud[3]]
        this.getTime()
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

.hour-style {
    text-align: center;
    font-weight: bold;
}
.mt-4 {
    border: 3px solid lightgray;
    padding: 1em;
    font-family: "Open-sans";
    font-size: 16px;
}
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.box1 {
    grid-column: 3;
    grid-row: 1;
}
.box2 {
    grid-column: 2;
    grid-row: 2;
}
.box3 {
    grid-column: 3;
    grid-row: 2;
}

.box4 {
    grid-column: 4;
    grid-row: 2;
}

@media screen and (max-width: 768px) {
    .container {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
    }
    .box1 {
        grid-column: 2;
        grid-row: 1;
    }
    .box2 {
        grid-column: 1;
        grid-row: 2;
    }
    .box3 {
        grid-column: 2;
        grid-row: 2;
    }

    .box4 {
        grid-column: 3;
        grid-row: 2;
    }
}

@media screen and (min-width: 768px) {
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .big-box1 {
        width: 100%;
    }
    .big-box2 {
        width: 40%;
        justify-content: flex-start;
        margin-right: 200px;
        margin-top: 70px;
    }
}
</style>
