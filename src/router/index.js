import { createRouter, createWebHashHistory } from "vue-router"
import About from "../views/About.vue"
import Rain from "../views/Rain.vue"
import Wind from "../views/Wind.vue"
import Clouds from "../views/Clouds.vue"
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // eslint-disable-next-line no-dupe-keys
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: About,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // eslint-disable-next-line no-dupe-keys
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/rain",
        name: "Rain",
        component: Rain,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // eslint-disable-next-line no-dupe-keys
        component: () => import(/* webpackChunkName: "rain" */ "../views/Rain.vue"),
    },
    {
        path: "/wind",
        name: "Wind",
        component: Wind,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // eslint-disable-next-line no-dupe-keys
        component: () => import(/* webpackChunkName: "wind" */ "../views/Wind.vue"),
    },
    {
        path: "/clouds",
        name: "Clouds",
        component: Clouds,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // eslint-disable-next-line no-dupe-keys
        component: () => import(/* webpackChunkName: "cloud" */ "../views/Clouds.vue"),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
