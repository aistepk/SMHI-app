<template>
    <div class="container-fluid" style="height: 150px">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand" href="#">Navbar</a>
                <div>{{ temp }} C</div>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/clouds">Moln</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/rain">Regn</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/wind">Vind</router-link>
                        </li>
                        <li class="nav-item ">
                            <router-link class="nav-link active" to="/about">Om oss</router-link>
                        </li>
                    </ul>
                    <div class="d-flex me-10">
                        <drop-down-cities @update="getTemp" />
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import DropDownCities from "./DropDownCities.vue"
import findTemp from "../services/ForecastService.js"
export default {
    name: "Navbar",
    components: { DropDownCities },
    data() {
        return {
            temp: {},
        }
    },
    async created() {
        this.temp = await findTemp(16.158, 58.5812)
    },
    methods: {
        async getTemp(value) {
            console.log(value)
            this.temp = await findTemp(value.lng, value.lat)
        },
    },
}
</script>

<style scoped>
.txt {
    text-decoration: none;
    color: black;
}
</style>
