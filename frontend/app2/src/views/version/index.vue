<template>
    <div>
        <h1>Version</h1>
        <p>{{ version }}</p>
    </div>
</template>

<script setup>
import { versionAPI } from "@/api.js"
import { ref } from 'vue'

const version = ref('')

versionAPI().then(res => {
    version.value = res
})
</script>

<style scoped></style>
