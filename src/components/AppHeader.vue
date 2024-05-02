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
    <ul>
        <li class="nav-item" v-for="(item, index) in menuHeader" :key="index">
            <router-link :to="{ name: item.routeName }" class="nav-link">
                {{ item.label }}
            </router-link>
        </li>
    </ul>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent</style>