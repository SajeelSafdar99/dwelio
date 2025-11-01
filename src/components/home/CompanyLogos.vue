<template>
  <div class="container">
    <q-separator class="dashed-separator" ref="target1" />
    <div class="hero-logos">
      <div class="marquee-container">
        <div class="marquee-content">
          <div class="logo-set" v-for="set in 2" :key="set">
            <div
              class="company-logo"
              v-for="(logo, index) in logoImages"
              :key="`${set}-${index}`"
            >
              <img :src="logo" :alt="'Logo ' + (index + 1)" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <q-separator class="dashed-separator" />
  </div>
</template>

<script setup>
import { shallowRef } from 'vue'

const target1 = shallowRef(null)

const logos = import.meta.glob('/src/assets/home/hero logos/*.{png,jpg,jpeg,svg}', { eager: true })
const logoImages = Object.values(logos).map((module) => module.default)

defineExpose({
  target1
})
</script>

<style scoped>
.dashed-separator {
  border-top: 1px dashed rgba(255, 255, 255, 0.2) !important;
  opacity: 1 !important;
  width: 100%;
}

.hero-logos {
  padding: 3rem 0;
  width: 100%;
  overflow: hidden;
}

.marquee-container {
  width: 100%;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 30s linear infinite;
  width: fit-content;
}

.logo-set {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;
}

.company-logo {
  padding: 1rem;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.company-logo:hover {
  transform: translateY(-5px);
}

.company-logo img {
  max-height: 80px;
  width: auto;
  filter: brightness(0.8) contrast(1.2);
  transition: filter 0.3s ease;
}

.company-logo:hover img {
  filter: brightness(1) contrast(1.3);
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .company-logo img {
    max-height: 60px;
  }
}
</style>
