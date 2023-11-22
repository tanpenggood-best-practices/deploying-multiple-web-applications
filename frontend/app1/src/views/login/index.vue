<template>
    <div>
        <h1>Login</h1>
        <p><button @click="handleClickLogin">登录</button></p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleClickLogin() {
    localStorage.setItem('token', 'token-from-app1')
    alert('Login Success.')
    router.push('/home')
}
</script>

<style scoped></style>
