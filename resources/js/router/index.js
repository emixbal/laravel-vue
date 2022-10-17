import { createRouter, createWebHashHistory } from "vue-router";

import productIndex from '../components/products/index.vue'
import notFound from '../components/notFound.vue'


const routes = [
    {
        path:"/",
        component:productIndex
    },
    {
        path: "/:pathMatch(.*)*",
        component:notFound
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;