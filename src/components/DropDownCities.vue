<template>
    <div class="cities-select-container">
        <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            v-model="selectedOption"
            v-on:change="optionChange"
        >
            <option :value="obj" selected v-for="(obj, city) in cities" :key="city">
                {{ obj.name }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    name: "DropDownCities",
    data: function () {
        return {
            selectedOption: {
                name: "Göteborg",
                lng: 11.89,
                lat: 57.69,
            },
            cities: [
                { name: "Alingsås", lng: 12.51, lat: 57.93 },
                { name: "Arboga", lng: 15.86, lat: 59.4 },
                { name: "Arvika", lng: 12.59, lat: 59.65 },
                { name: "Avesta", lng: 16.18, lat: 60.15 },
                { name: "Boden", lng: 21.7, lat: 65.82 },
                { name: "Bollnäs", lng: 16.4, lat: 61.35 },
                { name: "Borlänge", lng: 15.42, lat: 60.48 },
                { name: "Borås", lng: 12.95, lat: 57.73 },
                { name: "Bålsta", lng: 17.53, lat: 59.57 },
                { name: "Enköping", lng: 17.09, lat: 59.63 },
                { name: "Eskilstuna", lng: 16.55, lat: 59.37 },
                { name: "Eslöv", lng: 13.27, lat: 55.84 },
                { name: "Fagersta", lng: 15.77, lat: 60.0 },
                { name: "Falkenberg", lng: 12.47, lat: 56.89 },
                { name: "Falköping", lng: 13.56, lat: 58.17 },
                { name: "Falun", lng: 15.62, lat: 60.61 },
                { name: "Finspång", lng: 15.76, lat: 58.71 },
                { name: "Gällivare", lng: 20.69, lat: 67.13 },
                { name: "Gävle", lng: 17.12, lat: 60.66 },
                { name: "Göteborg", lng: 11.89, lat: 57.69 },
                { name: "Hallstahammar", lng: 16.2, lat: 59.62 },
                { name: "Halmstad", lng: 12.83, lat: 56.66 },
                { name: "Helsingborg", lng: 12.68, lat: 56.04 },
                { name: "Hudiksvall", lng: 17.11, lat: 61.72 },
                { name: "Härnösand", lng: 17.97, lat: 62.63 },
                { name: "Hässleholm", lng: 13.74, lat: 56.16 },
                { name: "Höganäs", lng: 12.56, lat: 56.21 },
                { name: "Hömb", lng: 13.89, lat: 58.23 },
                { name: "Jönköping", lng: 14.17, lat: 57.78 },
                { name: "Kalmar", lng: 16.33, lat: 56.68 },
                { name: "Karlshamn", lng: 14.86, lat: 56.17 },
                { name: "Karlskoga", lng: 14.53, lat: 59.32 },
                { name: "Karlskrona", lng: 15.6, lat: 56.16 },
                { name: "Karlstad", lng: 13.48, lat: 59.39 },
                { name: "Katrineholm", lng: 16.19, lat: 59.0 },
                { name: "Kinna", lng: 12.7, lat: 57.51 },
                { name: "Kiruna", lng: 20.23, lat: 67.85 },
                { name: "Kristianstad", lng: 14.15, lat: 56.03 },
                { name: "Kristinehamn", lng: 14.09, lat: 59.32 },
                { name: "Kumla", lng: 15.16, lat: 59.13 },
                { name: "Kungsbacka", lng: 12.09, lat: 57.49 },
                { name: "Kungälv", lng: 11.98, lat: 57.87 },
                { name: "Köping", lng: 15.97, lat: 59.52 },
                { name: "Landskrona", lng: 12.82, lat: 55.87 },
                { name: "Lerum", lng: 12.27, lat: 57.76 },
                { name: "Lidingö", lng: 18.15, lat: 59.37 },
                { name: "Lidköping", lng: 13.17, lat: 58.51 },
                { name: "Linköping", lng: 15.67, lat: 58.38 },
                { name: "Ljungby", lng: 13.92, lat: 56.84 },
                { name: "Ludvika", lng: 15.18, lat: 60.15 },
                { name: "Luleå", lng: 22.15, lat: 65.59 },
                { name: "Lund", lng: 13.23, lat: 55.72 },
                { name: "Malmberget", lng: 20.67, lat: 67.18 },
                { name: "Malmö", lng: 12.97, lat: 55.61 },
                { name: "Mariestad", lng: 13.82, lat: 58.71 },
                { name: "Mjölby", lng: 15.15, lat: 58.33 },
                { name: "Mora", lng: 14.54, lat: 61.0 },
                { name: "Motala", lng: 15.0, lat: 58.55 },
                { name: "Märsta", lng: 17.84, lat: 59.63 },
                { name: "Mölndal", lng: 12.0, lat: 57.66 },
                { name: "Mölnlycke", lng: 12.14, lat: 57.66 },
                { name: "Nacka", lng: 18.17, lat: 59.31 },
                { name: "Norrköping", lng: 16.18, lat: 58.61 },
                { name: "Norrtälje", lng: 18.72, lat: 59.76 },
                { name: "Nybro", lng: 15.92, lat: 56.75 },
                { name: "Nyköping", lng: 16.99, lat: 58.75 },
                { name: "Nynäshamn", lng: 17.93, lat: 58.91 },
                { name: "Nässjö", lng: 14.68, lat: 57.65 },
                { name: "Oskarshamn", lng: 16.48, lat: 57.27 },
                { name: "Oxelösund", lng: 17.05, lat: 58.68 },
                { name: "Piteå", lng: 21.49, lat: 65.32 },
                { name: "Ronneby", lng: 15.28, lat: 56.21 },
                { name: "Sala", lng: 16.61, lat: 59.93 },
                { name: "Sandviken", lng: 16.79, lat: 60.61 },
                { name: "Skara", lng: 13.41, lat: 58.39 },
                { name: "Skellefteå", lng: 20.96, lat: 64.74 },
                { name: "Skoghall", lng: 13.47, lat: 59.32 },
                { name: "Skövde", lng: 13.88, lat: 58.41 },
                { name: "Sollentuna", lng: 17.94, lat: 59.43 },
                { name: "Solna", lng: 18.02, lat: 59.36 },
                { name: "Staffanstorp", lng: 13.19, lat: 55.64 },
                { name: "Stockholm", lng: 18.06, lat: 59.32 },
                { name: "Strängnäs", lng: 17.04, lat: 59.37 },
                { name: "Sundsvall", lng: 17.32, lat: 62.39 },
                { name: "Säffle", lng: 12.94, lat: 59.13 },
                { name: "Söderhamn", lng: 17.03, lat: 61.31 },
                { name: "Södertälje", lng: 17.61, lat: 59.19 },
                { name: "Timrå", lng: 17.33, lat: 62.49 },
                { name: "Tranås", lng: 15.0, lat: 58.04 },
                { name: "Trelleborg", lng: 13.19, lat: 55.38 },
                { name: "Trollhättan", lng: 12.27, lat: 58.28 },
                { name: "Tumba", lng: 17.8, lat: 59.2 },
                { name: "Täby", lng: 18.04, lat: 59.44 },
                { name: "Uddevalla", lng: 11.92, lat: 58.36 },
                { name: "Umeå", lng: 20.29, lat: 63.83 },
                { name: "Upplands Väsby", lng: 17.92, lat: 59.52 },
                { name: "Uppsala", lng: 17.7, lat: 59.87 },
                { name: "Vallentuna", lng: 18.07, lat: 59.53 },
                { name: "Varberg", lat: 57.1, lng: 12.24 },
                { name: "Vetlanda", lng: 15.07, lat: 57.43 },
                { name: "Visby", lng: 18.29, lat: 57.64 },
                { name: "Vänersborg", lng: 12.34, lat: 58.38 },
                { name: "Värnamo", lng: 14.02, lat: 57.19 },
                { name: "Västervik", lng: 16.64, lat: 57.76 },
                { name: "Västerås", lng: 16.55, lat: 59.6 },
                { name: "Växjö", lng: 14.83, lat: 56.89 },
                { name: "Ystad", lng: 13.84, lat: 55.44 },
                { name: "Åkersberga", lng: 18.3, lat: 59.48 },
                { name: "Ängelholm", lng: 12.85, lat: 56.25 },
                { name: "Örebro", lng: 15.18, lat: 59.28 },
                { name: "Örnsköldsvik", lng: 18.73, lat: 63.29 },
                { name: "Östersund", lng: 14.7, lat: 63.18 },
            ],
        }
    },
    methods: {
        optionChange: function () {
            this.$emit("update", this.selectedOption)
        },
    },
}
</script>

<style lang="scss" scoped>
.menu {
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>
