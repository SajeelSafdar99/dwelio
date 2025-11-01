<template>
  <section class="mission-vision-wrapper q-py-xl q-px-lg" ref="target1">
    <div class="mission-vision-container row q-col-gutter-xl items-start justify-center">
      <!-- OUR MISSION -->
      <div class="col-12 col-md-5 card-section">
        <h2 class="section-title">OUR MISSION</h2>
        <p class="section-subtitle">Our mission is simple — to empower real estate professionals with meaningful opportunities that convert.</p>

        <div class="glass-card q-pa-lg">
          <p class="section-text">We aim to bridge the gap between agents and serious buyers or sellers through advanced digital marketing, personalized lead nurturing, and hands-on support. By keeping our network intentionally limited, we ensure every partner receives the quality, exclusivity, and results they deserve.
          </p>
        </div>
      </div>

      <!-- OUR VISION -->
      <div class="col-12 col-md-5 card-section">
        <h2 class="section-title">OUR VISION</h2>
        <p class="section-subtitle">To redefine the way real estate professionals grow their business — not through quantity, but through qualified quality.</p>

        <div class="glass-card q-pa-lg">
          <p class="section-text">
            Dwelio envisions a marketplace where trust, accountability, and proven performance replace empty promises. Our vision is to become the most reliable referral partner in the real estate industry, helping agents close more deals, build stronger relationships, and achieve lasting success.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'
const target1 = shallowRef(null)
defineExpose({
  target1,
})
</script>

<style scoped>
.mission-vision-wrapper {
  color: #fff;
  display: flex;
  justify-content: center;
}

.section-title {
  font-weight: 600;
  font-size: clamp(1.6rem, 2vw + 0.5rem, 2.2rem);
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.section-subtitle {
  font-weight: 400;
  font-size: clamp(0.9rem, 0.5vw + 0.4rem, 1rem);
  color: #bfbfbf;
  margin-bottom: 1.5rem;
}

.glass-card {
  background: rgba(20, 21, 23, 0.42);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  line-height: 1.7;
}

.section-text {
  color: #e6e6e6;
  font-size: clamp(0.9rem, 0.4vw + 0.4rem, 1rem);
  margin-bottom: 1rem;
}

.card-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
</style>
