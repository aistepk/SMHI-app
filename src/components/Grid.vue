<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <navbar />
            </div>
            <div class="col-sm">
                One of three columns
            </div>
            <div class="col-sm">
                One of three columns
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue"

export default {
    name: "Grid",
    components: {
        Navbar,
    },
}
</script>
