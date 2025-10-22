<template>
  <div class="app-loader">
    <q-spinner color="white" size="60px" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  background: #0D101a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.6s ease, visibility 0.6s ease;
}
.app-loader.hidden {
  opacity: 0;
  visibility: hidden;
}
</style>
