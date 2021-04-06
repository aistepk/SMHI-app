<template>
    <div>
        <img src="../assets/startsida.jpg" class="start-image" />
    </div>
    <div class="row">
        <div class="card shadow-sm p-3 mb-5 zoom card-image bg-transparent" v-for="(obj, key) in cardJson" :key="key">
            <router-link :to="obj.path" class="txt">
                <div class="card-body">
                    <div class="d-flex justify-content-around">
                        <div class="d-flex row">
                            <h5 class="card-title">{{ obj.caption }}</h5>
                            <p class="card-text">
                                {{ obj.title }}
                            </p>
                        </div>
                        <img :src="obj.img" class="image-img-top" />
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            cardJson: [
                {
                    img: require("../assets/kort-regn.jpg"),
                    caption: "Regn",
                    title: "Some text about rain",
                    path: "/rain",
                },
                {
                    img: require("../assets/kort-moln.jpg"),
                    caption: "Moln",
                    title: "Some text about clouds",
                    path: "/clouds",
                },
                {
                    img: require("../assets/kort-vind.jpg"),
                    caption: "Vind",
                    title: "Some text about wind",
                    path: "/wind",
                },
                {
                    img: require("../assets/kort-omoss.jpg"),
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

.zoom {
    transition: transform 0.3s; /* Animation */
    margin: 0 auto;
}

.zoom:hover {
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05);
}
.card-image {
    width: 20rem;
    overflow: hidden;
    padding: 40px;
}
.image-img-top {
    width: 60%;
}
.start-image {
    height: 300px;
    width: 100%;
    padding: 15px;
}
</style>
