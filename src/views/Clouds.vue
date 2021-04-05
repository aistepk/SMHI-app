<template>
    <div class="container">
        <h4>Molnighet just nu</h4>
        <h8 class="col-1 ">Välj Stad</h8>
        <div class="row justify-content-left">
            <drop-down-cities class="col-10" />
        </div>
        <div class="row justify-content-center">
            <cloud-charts class="col-5 mt-5" />
        </div>
        <div class="row ">
            <cloud-charts class="col-4 mt-5" />
            <cloud-charts class="col-4 mt-5" />
            <cloud-charts class="col-4 mt-5" />
        </div>
    </div>
</template>
<script>
import CloudCharts from "../components/CloudCharts.vue"
import DropDownCities from "../components/DropDownCities.vue"
export default {
    components: { CloudCharts, DropDownCities },
}
</script>
<style scoped>
h4 {
    text-align: center;
}
</style>
