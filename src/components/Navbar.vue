<template>
    <nav class="navbar navbar-light bg-light" aria-label="navigation">
        <div class="container-fluid">
            <button
                class="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMain"
                aria-controls="navbarMain"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex justify-content-start">
                <div class="navbar-collapse collapse" id="navbarMain">
                    <div class="navbar-nav me-auto mb-2">
                        <h6>Vädret just nu</h6>
                        <div class="btn-group-vertical button-light" role="group" aria-label="Weather links">
                            <span class="border-0">
                                <button type="button" class="btn btn-light">Moln</button>
                                <button type="button" class="btn btn-light">Vind</button>
                                <button type="button" class="btn btn-light">Regn</button>
                                <button type="button" class="btn btn-light">Om oss</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {},
    methods: {},
}
</script>

<style scoped>
.btn-group-vertical button {
    text-align: left;
    border: none;
    padding: 1em;
    font-size: large;
}

.btn-group-vertical:hover {
    color: white;
}

.navbar-nav h6 {
    padding-top: 1em;
}
</style>
