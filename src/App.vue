<template>
    <div>
        <navbar />
        <router-view />
    </div>
</template>

<script>
// import Header from "./components/Header.vue"
import Navbar from "./components/Navbar.vue"

export default {
    name: "App",
    components: { Navbar },
}
</script>

<style>
html body {
    background-color: #fafafa;
}
</style>
