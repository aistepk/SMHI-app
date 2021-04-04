<template>
    <div id="header">
        <p>Vindstyrkan just nu</p>
        <p>{{ wind }}m/s</p>
    </div>

    <div v-if="wind >= 0 && wind <= 3.9">
        <p>Svag vind</p>
        <img src="../assets/kort-vind.jpg" />
    </div>
    <div v-if="wind >= 4 && wind <= 7.9">
        <p>Måttlig vind</p>
        <img src="../assets/lightWind.gif" />
    </div>
    <div v-if="wind >= 8 && wind <= 13.8">
        <p>Frisk vind</p>
        <img src="../assets/windy.gif" />
    </div>
    <div v-if="wind >= 13.9 && wind <= 24.4">
        <p>Hård vind</p>
        <img src="../assets/windy.gif" />
    </div>
    <div v-if="wind >= 24.5 && wind <= 32.6">
        <p>Storm</p>
        <img src="../assets/storm.gif" />
    </div>
    <div v-if="wind >= 32.7">
        <p>Orkan</p>
        <img src="../assets/windy.gif" />
    </div>
</template>

<script>
import findWindSpeed from "../services/WindService.js"
export default {
    name: "Wind",
    data() {
        return {
            wind: {},
        }
    },
    async created() {
        this.wind = await findWindSpeed(16.158, 58.5812)
    },
}
</script>
<style lang="scss">
    img{
        padding: 5px;
        width: 300px;
        border: 1px solid black
    }
</style>
