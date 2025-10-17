<template>
  <section class="trust-section">
    <div class="container text-center">
      <h2 class="trust-title">TRUST BACKED BY NUMBERS</h2>
      <p class="trust-subtitle">
        We have a big mission in front of us: Connect a billion people by 2031 —
        and we can only achieve this with your trust.
      </p>

      <!-- Background shape -->
      <div class="trust-shape"></div>

      <div class="stats-wrapper">
        <div class="stat-card" v-for="(stat, i) in stats" :key="i">
          <h3 class="stat-value">
            {{ displayValues[i] }}
          </h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const stats = [
  { value: 200, suffix: "%", label: "Revenue Growth" },
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 73, suffix: "%", label: "New Orders" },
];

const displayValues = ref(stats.map(() => 0));
let animated = false;

function animateCounter(index, endValue, suffix) {
  const duration = 1500; // 1.5s
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = Math.floor(progress * endValue);
    displayValues.value[index] = `${value}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      displayValues.value[index] = `${endValue}${suffix}`;
    }
  }

  requestAnimationFrame(updateCounter);
}

onMounted(() => {
  const section = document.querySelector(".trust-section");

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        stats.forEach((stat, i) =>
          animateCounter(i, stat.value, stat.suffix)
        );
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
});
</script>

<style scoped>
.trust-section {
  position: relative;
  color: white;
  text-align: center;
  padding: 6rem 1.5rem 10rem;
  overflow: hidden;
}

/* Title & subtitle */
.trust-title {
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.trust-subtitle {
  color: #c6c6d0;
  font-size: clamp(0.9rem, 1vw, 1.1rem);
  max-width: 700px;
  margin: 0 auto 11rem;
  line-height: 1.6;
}

/* Background image */
.trust-shape {
  background-image: url("../../assets/about/stats/1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 250px;
  opacity: 0.8;
  z-index: -1;
}

/* Stats cards */
.stats-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 3;
}

/* ✅ Fixed, consistent card size */
.stat-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 190px;         /* fixed width */
  height: 160px;        /* fixed height */
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.12);
}

.stat-value {
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  font-weight: 700;
  background: linear-gradient(90deg, #5088ff, #9b6bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.85;
  margin-top: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .trust-shape {
    width: 400px;
    height: 180px;
    bottom: 100px;
  }

  .stat-card {
    padding: 1.2rem 2rem;
  }
}
</style>
