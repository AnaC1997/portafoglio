<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppHeader",
    data() {
        return {
            store,
            menuHeader: [
                {
                    routeName: "home",
                    label: "Su di me"
                },
                {
                    routeName: "progetti",
                    label: "Progetti"
                },
                {
                    routeName: "contatti",
                    label: "Contatti"
                },

            ]
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary fw-bold">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(item, index) in menuHeader" :key="index">
                        <router-link :to="{ name: item.routeName }" class="nav-link">
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    </header>
    

</template>

<style scoped lang="scss">
.navbar{
    background-color:hsl(202, 89%, 50%)!important;
    background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    transparent 75%,
    transparent
  )!important;
}

.nav-link{
    color: white !important;
}


</style>