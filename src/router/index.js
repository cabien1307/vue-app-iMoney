import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../config/firebase";

const requireAuth = (to, from, next) => {
    const user = projectAuth.currentUser;

    if (!user) next({ name: "Login", params: {} });
    else next();
};

const routes = [
    {
        path: "/",
        name: "Home",
        meta: {
            text: "Hey! Ca Bien",
            leading: true,
        },
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Index.vue"),
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            layout: "auth",
        },

        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth",
        },

        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            text: "Profile",
            leading: false,
        },
        component: () =>
            import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
        beforeEnter: requireAuth,
    },
    {
        path: "/budget",
        name: "Budget",
        meta: {
            text: "Budget",
            leading: false,
        },
        component: () =>
            import(/* webpackChunkName: "budget" */ "../views/Budget.vue"),
    },
    {
        path: "/report",
        name: "Report",
        meta: {
            text: "Report",
            leading: false,
        },
        component: () =>
            import(/* webpackChunkName: "report" */ "../views/Report.vue"),
    },
    {
        path: "/new-transaction",
        meta: {
            text: "Transaction",
            leading: false,
        },
        name: "NewTransaction",
        component: () =>
            import(
                /* webpackChunkName: "newTransaction" */ "../views/NewTransaction.vue"
            ),
    },
    {
        path: "/logout",
        name: "Logout",
        component: () =>
            import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
