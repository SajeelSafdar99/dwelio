<template>
  <Loader v-show="loading" :class="{ hidden: !loading }" />
  <router-view />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Loader from './components/PageLoader.vue'

const loading = ref(true)
const router = useRouter()

onMounted(async () => {
  await new Promise(resolve => {
    if (document.readyState === 'complete') resolve()
    else window.addEventListener('load', resolve)
  })
  setTimeout(() => (loading.value = false), 500)
})

router.beforeEach((to, from, next) => {
  loading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<style>

</style>
