import VueRouter from "vue-router";

import CatPage from './pages/CatsPage.vue'
import HelloWorld from './pages/MyProfilePage.vue'
import Home from './pages/Home.vue'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/hello',
            component: HelloWorld
        },
        {
            path: '/cat',
            component: CatPage
        }
    ],
    mode: "history"
})

