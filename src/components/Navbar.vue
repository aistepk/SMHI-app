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
                <a class="dropdown-item"
                    ><router-link v-bind:to="'/clouds'" class="txt"><div>Moln</div></router-link></a
                >
            </li>
            <li>
                <a class="dropdown-item"
                    ><router-link v-bind:to="'/wind'" class="txt"><div>Vind</div></router-link></a
                >
            </li>
            <li>
                <a class="dropdown-item"
                    ><router-link v-bind:to="'/rain'" class="txt"><div>Regn</div></router-link></a
                >
            </li>
            <li>
                <a class="dropdown-item"
                    ><router-link v-bind:to="'/about'" class="txt"><div>Om oss</div></router-link></a
                >
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
