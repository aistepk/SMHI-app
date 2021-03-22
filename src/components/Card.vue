<template>
    <div class="card mb-3 rounded" v-for="(obj, key) in cardJson" :key="key">
        <router-link :to="obj.path" class="txt">
            <div class="row g-0">
                <div class="col-xs ">
                    <div class="card-body">
                        <div class="d-flex justify-content-around">
                            <div class="d-flex row">
                                <h5 class="card-title">{{ obj.caption }}</h5>
                                <p class="card-text">
                                    {{ obj.title }}
                                </p>
                            </div>
                            <img :src="obj.img" />
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Card",
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

.card-title {
    border-radius: 20%;
}
</style>
