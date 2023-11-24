import { createRouter, createWebHistory } from "vue-router";
import Home from '@/components/Views/Home.vue'
import Product from '@/components/Views/Product.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/product/:id",
            name: "Product",
            component: Product
        }
    ],
});

export default router;