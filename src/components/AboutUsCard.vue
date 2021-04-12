<template>
    <div class="container-fluid">
        <div class="d-flex align-items-center flex-column" style="margin-top: 30px; margin-bottom: 10px">
            <h2>Om Oss</h2>
            <p>Vi är ett gäng surikater som gillar Java, UX och väder</p>
            <p>Vår väderprognos app är baserat på data hämtat från SMHI Open Data API</p>
            <p>Du kan nå oss på surikat@väder.se</p>
        </div>
        <div class="margins">
            <div class="row row-cols-2">
                <div class="card mt-3 box-shadow p-2 mb-4 zoom bg-transparent" v-for="(obj, key) in people" :key="key">
                    <div class="row">
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-title">{{ obj.name }}</h5>
                                <p class="card-text">
                                    {{ obj.role }}
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img :src="obj.img" class="card-img-top" style="border-radius: 0px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutUsCard",
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
h2 {
    font-family: Montserrat;
    font-weight: bold;
}
.card-title {
    font-size: 30px;
    font-family: Montserrat;
}
.card-text {
    font-family: "Open sans";
    font-size: 16px;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.zoom {
    background-color: green;
    transition: transform 0.3s;
    margin: 15px;
}

.zoom:hover {
    transform: scale(1.1);
}

.card {
    width: 20rem;
    overflow: hidden;
}
.card-img-top {
    width: 80%;
}

.box-shadow {
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.d-flex {
    text-align: center;
}
@media screen and (min-width: 768px) {
    .margins {
        margin-left: 408px;
        margin-right: 200px;
    }
}
</style>
