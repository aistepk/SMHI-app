<template>
    <Header />
    <drop-down-cities />
    <router-view />
</template>

<script>
import DropDownCities from "./components/DropDownCities.vue"
import Header from "./components/Header.vue"

export default {
    name: "App",
    components: { Header, DropDownCities },
}
</script>
