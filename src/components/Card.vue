<template>
<img src="../assets/weather.jpg" style="max-width: 350px" class=" card mb-3" alt="Responsive image" />
    <div class="card mb-3 rounded-sm" style="max-width: 350px" v-for="(obj, key) in cardJson" :key="key">
        <router-link :to="obj.path" class="txt">
            <div class="row g-0">
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ obj.caption }}</h5>
                        <p class="card-text">
                            {{ obj.title }}
                        </p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <img :src="obj.img" />
                </div></div
        ></router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cardJson: [
                {
                    img: require("../assets/rain.png"),
                    caption: "Regn",
                    title: "Some text about rain",
                    path: "/rain",
                },
                {
                    img: require("../assets/cloud.png"),
                    caption: "Moln",
                    title: "Some text about clouds",
                    path: "/clouds",
                },
                {
                    img: require("../assets/wind.png"),
                    caption: "Vind",
                    title: "Some text about wind",
                    path: "/wind",
                },
                {
                    img: require("../assets/meer.png"),
                    caption: "Om oss",
                    title: "About us",
                    path: "/about",
                },
            ],
        }
    },
}
</script>

<style scoped>
.txt {
    text-decoration: none;
    color: black;
}
</style>
