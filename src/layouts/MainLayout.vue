<template>
  <q-layout view="lHh Lpr lff">
    <ChromezyHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <ChromezyFooter />
  </q-layout>
</template>

<script setup>
import ChromezyHeader from 'components/ChromezyHeader.vue'
import ChromezyFooter from 'components/ChromezyFooter.vue'
</script>

<style scoped>
.q-page-container {
  padding-bottom: 0 !important;
}
</style>
