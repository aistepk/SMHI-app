<template>
    <div class="container bg-light" style="height: 75px">
        <div class="d-flex justify-content-center">
            <div class="row">
                <div class="col mt-3">
                    <div class="dropdown">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Stad
                        </button>
                        <div class="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Dingles</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "DropDown",
    data() {
        return {
            cities: [
                { name: "Göteborg", lng: 16.158, lat: 58.5812 },
                { name: "Helsingborg", lng: 12.68, lat: 56.04 },
                { name: "Jönköping", lng: 14.17, lat: 57.78 },
                { name: "Linköping", lng: 15.67, lat: 58.38 },
                { name: "Malmö", lng: 13.00073, lat: 55.60587 },
                { name: "Stockholm", lng: 18.0649, lat: 59.33258 },
                { name: "Uppsala", lng: 17.7, lat: 59.87 },
                { name: "Västerås", lng: 16.55, lat: 59.6 },
                { name: "Örebro", lng: 15.18, lat: 59.28 },
            ],
        }
    },
    methods() {},
}
</script>
