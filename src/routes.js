import Home from './views/Home.vue'
import Careers from './views/Careers.vue'
import NotFound from './views/NotFound.vue'
import OurSolutions from "./views/OurSolutions.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {path: '/', component: Home, meta: {title: 'Home'}},
    {path: '/careers', component: Careers, meta: {title: 'Careers'}},
    {
        path: '/our-software-solutions', component: OurSolutions, meta: {title: 'Our Solutions'},
        // example of route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import('./views/About.vue')
    },
    {path: '/:path(.*)', component: NotFound},
]
