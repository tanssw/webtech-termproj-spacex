import Vue from 'vue'
import Router from 'vue-router'

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')

Vue.use(Router)

export const router = new Router({
    mode: "history",
    routes: [
        {
            name: "Falcon9",
            path: "/vehicles/falcon9",
            component: Falcon9,
            meta: {
                title: "SpaceX - Falcon 9"
            }
        },
        {path: "*", redirect: {name: "Falcon9"}}
    ]
})

/* Automatic change page title depend on route meta. */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})