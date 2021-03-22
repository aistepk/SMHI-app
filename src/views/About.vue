<template>
    <div class="d-flex align-items-center flex-column" style="height: 130px">
        <div class="mb-auto p-"><strong>Om oss</strong></div>
        <div class="p-2">Vi är ett gäng surikater som gillar Java, UX och väder</div>
        <div class="p-2">Du kan nå oss på surikat@väder.se</div>
    </div>
    <div class="container">
        <div class="row row-cols-2">
            <div class="card mb-3 rounded-sm" style="max-width: 540px" v-for="(obj, key) in people" :key="key">
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
                        <img :src="obj.img" />
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
                    img: require("../assets/profile.png"),
                    name: "Lena",
                    role: "UX",
                },
                {
                    img: require("../assets/profile.png"),
                    name: "Aiste",
                    role: "Java",
                },
                {
                    img: require("../assets/profile.png"),
                    name: "Mathilda",
                    role: "UX",
                },
                {
                    img: require("../assets/profile.png"),
                    name: "Emelie",
                    role: "UX",
                },
                {
                    img: require("../assets/profile.png"),
                    name: "Troj",
                    role: "Java",
                },
                {
                    img: require("../assets/profile.png"),
                    name: "Marius",
                    role: "Java",
                },
                {
                    img: require("../assets/profile.png"),
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
</style>