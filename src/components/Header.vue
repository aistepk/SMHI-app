<template>
    <div class="container bg-light" style="height: 120px">
        <div class="row">
            <div class="d-flex justify-content-between">
                <navbar />
                <router-link :to="'/'" class="txt"><h3>Meercats</h3></router-link>
                <h4>{{ temp }} C</h4>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import findTemp from "../services/ForecastService.js"

export default {
    components: { Navbar },
    name: "Header",
    data() {
        return {
            temp: {},
        }
    },
    methods: {
        async getTemp(value) {
            this.temp = await findTemp(value.lng, value.lat)
            console.log(value)
        },
    },
}
</script>

<style scoped>
.container {
    padding-top: 0.75em;
}
.txt {
    text-decoration: none;
    color: black;
}
</style>
