<template>
    <div class="dropdown">
        <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
                <a class="dropdown-item"><router-link v-bind:to="'/clouds'" class="txt">Moln</router-link></a>
            </li>
            <li>
                <a class="dropdown-item"><router-link v-bind:to="'/wind'" class="txt">Vind</router-link></a>
            </li>
            <li>
                <a class="dropdown-item"><router-link v-bind:to="'/rain'" class="txt">Regn</router-link></a>
            </li>
            <li>
                <a class="dropdown-item"><router-link v-bind:to="'/about'" class="txt">Om oss</router-link></a>
            </li>
        </ul>
    </div>
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
