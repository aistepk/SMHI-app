<template>
    <div>
        <div>
            <img src="../assets/startsida.jpg" class="start-image" />
        </div>
        <div class="row col-xs-6">
            <div
                class="card box-shadow p-2 mb-4 zoom card-image bg-transparent spaces"
                v-for="(obj, key) in cardJson"
                :key="key"
            >
                <router-link :to="obj.path" class="txt">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex row">
                                <h5 class="card-title">{{ obj.caption }}</h5>
                                <p class="card-textt">
                                    {{ obj.title }}
                                </p>
                            </div>
                            <img :src="obj.img" class="image-img-top resp-img" />
                        </div>
                    </div>
                </router-link>
            </div>
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
                    title: "Nederbörd de närmaste timmarna",
                    path: "/rain",
                },
                {
                    img: require("../assets/kort-moln.jpg"),
                    caption: "Moln",
                    title: "Molnighet de närmaste timmarna",
                    path: "/clouds",
                },
                {
                    img: require("../assets/kort-vind.jpg"),
                    caption: "Vind",
                    title: "Vindhastighet just nu",
                    path: "/wind",
                },
                {
                    img: require("../assets/kort-omoss.jpg"),
                    caption: "Om oss",
                    title: "Vi i teamet",
                    path: "/about",
                },
            ],
        }
    },
}
</script>

<style scoped>
.card-title {
    font-size: 30px;
    font-family: Montserrat;
}
.card-text {
    font-family: "Open sans";
    font-size: 16px;
}

.txt {
    text-decoration: none;
    color: black;
    text-align: left;
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
.box-shadow {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

p {
    text-align: left;
}

h5 {
    text-align: left;
}
@media screen and (min-width: 768px) {
    .spaces {
        height: 150px;
        width: 700px;
    }
    .resp-img {
        width: 160px;
        height: auto;
        margin-left: 100px;
    }
}
</style>
