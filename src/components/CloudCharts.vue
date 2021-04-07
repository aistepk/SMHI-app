<template>
    <div id="chart">
        <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
export default {
    name: "CloudCharts",
    data: () => ({
        series: [75, 25],
        chartOptions: {
            chart: {
                width: "100%",
                type: "pie",
            },
            colors: ["#C0E8F9", "#ADB8BC"],
            labels: ["Moln:"],
            theme: {
                monochrome: {
                    enabled: false,
                },
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -10,
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
    }),
}
</script>
<style scoped></style>
