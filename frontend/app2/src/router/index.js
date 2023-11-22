import { createRouter, createWebHistory } from 'vue-router'
import { routers } from './router'

/**
 *  "history": createWebHistory()
 *   "hash": createWebHashHistory()
 *   "abstract": createMemoryHistory()
 */
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes: routers,
})

router.beforeEach((to, form, next) => {
    const hasToken = localStorage.getItem('token')
    if (hasToken) {
        if (to.path === '/login') {
            next('/home')
            return
        }
        next()
    } else {
        location.href = import.meta.env.VITE_APP1_LOGIN_URL
    }
})

export default router
