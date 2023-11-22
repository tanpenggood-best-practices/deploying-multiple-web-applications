export const routers = [
    {
        path: "/login",
        name: "Login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
        },
    },
    {
        path: "/",
        name: "Home",
        redirect: '/home',
        children: [
            {
                path: "/home",
                name: "Home",
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: "首页",
                },
            },
        ]
    },
    {
        path: "/version",
        name: "Version",
        component: () => import("@/views/version/index.vue"),
        meta: {
            title: "Version",
        },
    },
]
