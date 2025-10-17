<script setup>

import SellPropertyForm from 'components/real-estate/SellPropertyForm.vue'
import FindPropertySection from 'components/real-estate/FindPropertySection.vue'
import DiscoverProperties from 'components/real-estate/DiscoverProperties.vue'
import ExploreProperties from 'components/service/ExploreProperties.vue'
</script>

<template>
<q-page>
  <FindPropertySection />
  <DiscoverProperties />
<SellPropertyForm />
<ExploreProperties :fromEState="true" />
</q-page>
</template>

<style scoped>

</style>
