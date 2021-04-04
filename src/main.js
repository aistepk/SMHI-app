import { createApp } from "vue"
import App from "./App.vue"
import "bootstrap"
import router from "./router"
import "vue-gifplayer/src/gif.css"
import "animated_gif"



createApp(App)
    .use(router)
    .mount("#app")
