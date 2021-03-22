import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"
import "./assets/style/custom.scss"
import router from "./router"

createApp(App)
    .use(router)
    .mount("#app")
