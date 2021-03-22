<template>
    <div class="container bg-light">
        <div class="row">
            <div class="col-sm">
                <navbar />
            </div>
            <div class="col-sm">
                <h4>Meerkats</h4>
            </div>
            <div class="col-sm">
                <div>{{ temp }} C</div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import findTemp from "../services/ForecastService.js"

export default {
    name: "Header",
    components: { Navbar },
    data() {
        return {
            temp: {},
        }
    },
    async created() {
        this.temp = await findTemp(16.158, 58.5812)
    },
}
</script>

<style scoped>
.row {
    padding-top: 0.5em;
}
</style>
