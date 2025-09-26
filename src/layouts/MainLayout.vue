<template>
  <q-layout view="lHh Lpr lff">
    <ChromezyHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer is now handled within the page component for proper scroll targeting -->
  </q-layout>
</template>

<script setup>
import ChromezyHeader from 'components/ChromezyHeader.vue'
</script>

<style scoped>
/* Added layout fixes to prevent footer disappearing */
.q-page-container {
  padding-bottom: 0 !important;
}
</style>
