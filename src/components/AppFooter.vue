<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "AppFooter",
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {

    }
}
</script>

<template>
    <footer class="sticky-bottom">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="pt-2">&copy; 2024 Ana Maria Correa</p>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="https://github.com/AnaC1997"><i
                                    class="fab fa-githu"></i></a></li>
                        <li class="list-inline-item"><a
                                href="https://www.linkedin.com/in/ana-maria-correa-espinosa-953106114/"><i
                                    class="fab fa-linkedin"></i></a></li>
                        <li class="list-inline-item px-1"><a href="anamariacorrea1997@gmail.com"><i
                                    class="fas fa-envelope "></i> anamariacorrea1997@gmail.com</a></li>
                        <li class="list-inline-item"><a href="telefono"><i class="fas fa-phone"></i></a>+39 328 224 5828
                        </li>
                    </ul>
                </div>
                <div class="col-6 ">

                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: hsl(202, 100%, 64%) !important;
    height: 10%;
    color: #fff;

}

footer a {
    color: #fff;
}

footer a:hover {
    color: #ccc;
}
</style>