<template>
    <div>
        <h1>Route List</h1>
        <p><a href="/login">/login</a></p>
        <p><a href="/version">/version</a></p>
    </div>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <div>
        <button @click="handleClickLogout">退出</button>
    </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClickLogout() {
    localStorage.removeItem('token')
    alert('Logout Success.')
    router.push('/login')
}
</script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
