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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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

    <ul>

    </ul>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent</style>