<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">Vädret just nu</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/clouds">Moln</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/rain">Regn</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/wind">Vind</router-link>
                    </li>
                    <li class="nav-item mt-5">
                        <router-link class="nav-link active" to="/about">Om oss</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>
.txt {
    text-decoration: none;
    color: black;
}
</style>
