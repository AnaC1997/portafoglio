import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import Progetti from  './pages/Progetti.vue';
import Contatti from  './pages/Contatti.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/progetti',
            name: 'progetti',
            component: Progetti
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: Contatti
        }
    ]
});

export { router };