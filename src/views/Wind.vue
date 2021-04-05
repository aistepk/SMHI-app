<template>
    <div id="header">
        <h5>{{ wind }}m/s</h5>
    </div>

    <div id="container">
        <div v-if="wind >= 0 && wind <= 3.9">
            <h5>Svag vind</h5>
            <img src="../assets/lightWind.gif" />
        </div>
        <div v-if="wind >= 4 && wind <= 7.9">
            <h5>Måttlig vind</h5>
            <img src="../assets/lightWind.gif" />
        </div>
        <div v-if="wind >= 8 && wind <= 13.8">
            <h5>Frisk vind</h5>
            <img src="../assets/windy.gif" />
        </div>
        <div v-if="wind >= 13.9 && wind <= 24.4">
            <h5>Hård vind</h5>
            <img src="../assets/windy.gif" />
        </div>
        <div v-if="wind >= 24.5 && wind <= 32.6">
            <h5>Storm</h5>
            <img src="../assets/storm.gif" />
        </div>
        <div v-if="wind >= 32.7">
            <h5>Orkan</h5>
            <img src="../assets/windy.gif" />
        </div>
    </div>

    <div id="footer">
        <h6>Vindstyrka</h6>
        <p>Här finns information om vad vindstyrka innebär</p>
        <table class="table table-bordered border border-3" id="table">
            <thead>
                <tr class="border border-4">
                    <th scope="col" class="table-active">m/s</th>
                    <th scope="col" class="border border-4">0-3,9</th>
                    <th scope="col" class="border border-4">4-7,9</th>
                    <th scope="col" class="border border-4">8-13,8</th>
                    <th scope="col" class="border border-4">13,9-24,4</th>
                    <th scope="col" class="border border-4">24,5-32,6</th>
                    <th scope="col" class="border border-4">32,7-</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border border-4">
                    <th scope="row" class="table-active">Styrka</th>
                    <td class="border border-4">Svag</td>
                    <td class="border border-4">Måttlig</td>
                    <td class="border border-4">Frisk</td>
                    <td class="border border-4">Hård</td>
                    <td class="border border-4">Storm</td>
                    <td class="border border-4">Orkan</td>
                </tr>
            </tbody>
        </table>
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
#container > div h5 {
    text-align: center;
}
#container > div img {
    height: 300px;
    width: 100%;
    padding: 15px;
    border: 1px solid black;
    border-radius: 8px;
}

#header {
    text-align: center;
}

#footer {
    height: auto;
    width: 100%;
    padding: 15px;
    border: 1px solid rgb(214, 210, 210);
    position: fixed;
    bottom: 0;
}

#table{
    width: 50%;
}
</style>
