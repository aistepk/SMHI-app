import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"
//  import "./assets/style/custom.scss"
import "../scss/main.scss"
import router from "./router"
import VueApexCharts from "vue3-apexcharts"

createApp(App)
    .use(router)
    .use(VueApexCharts)
    .mount("#app")
