<template>
    <div class="container bg-light" style="height: 75px">
        <div class="d-flex justify-content-between">
            <Navbar />
            <router-link v-bind:to="'/'" class="txt"><h3>Meercats</h3></router-link>
            <h4>{{ temp }} C</h4>
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
.container {
    padding-top: 0.75em;
}
.txt {
    text-decoration: none;
    color: black;
}
</style>
