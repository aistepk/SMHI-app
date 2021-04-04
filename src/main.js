import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"
<<<<<<< HEAD
import router from "./router"
import "vue-gifplayer/src/gif.css"
import "animated_gif"


=======
//  import "./assets/style/custom.scss"
import "../scss/main.scss"
import router from "./router"
import VueApexCharts from "vue3-apexcharts"
>>>>>>> fd7ff080ca66ceeb0814fd9043f12d9afaca2d16

createApp(App)
    .use(router)
    .use(VueApexCharts)
    .mount("#app")
