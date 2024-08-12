import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Countries",
            component: () => import("../views/Countries.vue"),
        },
        
        {
            path: "/country/:id",
            name: "Country",
            component: () => import("../components/Country.vue"),
            props: true
        },
       
    ]
})

export default router;