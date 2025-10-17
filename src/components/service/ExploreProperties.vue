<template>
  <section class="cta-section text-white" :class="{ 'from-estate': fromEState }">
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2 class="cta-title">Start Your Real Estate Journey Today</h2>
          <p class="cta-description">
            Your dream property is just a click away. Whether you're looking for a new home, a
            strategic investment, or expert real estate advice, Estatein is here to assist you every
            step of the way. Take the first step towards your real estate goals and explore our
            available properties or get in touch with our team for personalized assistance.
          </p>
        </div>

        <div class="cta-action">
          <button
            class="cta-btn"
            :style="{
              background: fromEState ? '#017CEE' : '#fff',
              color: fromEState ? '#fff' : '#3C6BFE',
            }"
          >
            Explore Properties
          </button>
        </div>
      </div>

      <!-- Decorative image (normal version) -->
      <div v-if="!fromEState" class="cta-image">
        <img src="../../assets/service/2.png" alt="Decorative Image" />
      </div>

      <!-- Left and right images (when fromEState is true) -->
      <template v-else>
        <img src="../../assets/real-estate/4.png" alt="Left Decorative" class="side-image left" />
        <img src="../../assets/real-estate/5.png" alt="Right Decorative" class="side-image right" />
      </template>
    </div>
  </section>
</template>

<script setup>
defineProps({
  fromEState: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.cta-section {
  background: linear-gradient(90deg, rgba(60, 107, 254, 0.42) 0%, rgba(157, 132, 242, 0.54) 100%);
  padding: 3rem 0;
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  transition: all 0.3s ease;
}

.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-text {
  flex: 1 1 65%;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  color: #e0e0e0;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 900px;
}

.cta-action {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
}

.cta-btn {
  background: #fff;
  color: #3c6bfe;
  border: none;
  border-radius: 12px;
  padding: 0.9rem 2rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-btn:hover {
  background: #3c6bfe;
  color: #fff;
  transform: translateY(-2px);
}

/* Normal version image */
.cta-image {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.cta-image img {
  width: 100%;
  opacity: 0.9;
  pointer-events: none;
}

/* ========== WHEN fromEState IS TRUE ========== */
.cta-section.from-estate {
  background: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4rem 0;
}

.from-estate .side-image {
  position: absolute;
  bottom: 0;
  width: 500px;
  opacity: 0.8;
  pointer-events: none;
  z-index: -1;
  transition: all 0.3s ease;
  transform: scaleX(-1);
}

.from-estate .side-image.left {
  left: 0;
}

.from-estate .side-image.right {
  right: 0;
}

/* Responsive layout */
@media (max-width: 768px) {
  .cta-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-action {
    justify-content: flex-start;
  }

  .from-estate .side-image {
    display: none;
  }
}
</style>
