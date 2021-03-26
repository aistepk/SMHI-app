<template>
    <div class="d-flex align-items-center flex-column" style="height: 130px">
        <div class="mb-auto p-2"><strong>Om oss</strong></div>
        <div class="p-2">Vi är ett gäng surikater som gillar Java, UX och väder</div>
        <div class="p-2">Du kan nå oss på surikat@väder.se</div>
    </div>


    <div class="row row-cols-2 justify-content-center">
        <div class="row">
            <div class="card mb-3 shadow-sm p-3 mb-5 zoom card" v-for="(obj, key) in people" :key="key">
                <div class="row g-0">
                    <div class="col-sm-8">
                        <div class="card-body">
                            <h5 class="card-title">{{ obj.name }}</h5>
                            <p class="card-text">
                                {{ obj.role }}
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img :src="obj.img" class="card-img-top" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            people: [
                {
                    img: require("../assets/MeerkatLena.jpg"),
                    name: "Lena",
                    role: "UX",
                },
                {
                    img: require("../assets/MeerkatAiste.jpg"),
                    name: "Aiste",
                    role: "Java",
                },
                {
                    img: require("../assets/MeerkatMathilda.jpg"),
                    name: "Mathilda",
                    role: "UX",
                },
                {
                    img: require("../assets/MeerkatEmelie.jpg"),
                    name: "Emelie",
                    role: "UX",
                },
                {
                    img: require("../assets/MeerkatTroj.jpg"),
                    name: "Troj",
                    role: "Java",
                },
                {
                    img: require("../assets/MeerkatMarius.jpg"),
                    name: "Marius",
                    role: "Java",
                },
                {
                    img: require("../assets/MeerkatShahid.jpg"),
                    name: "Shahid",
                    role: "Java",
                },
            ],
        }
    },
}
</script>

<style>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.zoom {
    background-color: green;
    transition: transform 0.3s; /* Animation */
    margin: 0 auto;
}

.zoom:hover {
    transform: scale(1.1); /* (150% zoom)*/
}

.card {
    width: 20rem; /* Using this as an example, you can keep 20rem */
    overflow: hidden; /* Optional */
}
.card-img-top {
    width: 80%;
}
</style>
