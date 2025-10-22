<template>
  <section class="hero-section" ref="target0">
    <div class="hero-content">
      <h1 class="hero-title">
        Professional Virtual Assistance <br />
        <span class="gradient-text">For Modern Businesses</span>
      </h1>

      <p class="hero-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac felis nec lorem luctus tincidunt.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div class="hero-buttons">
        <button class="btn primary-btn">
          <i class="fa-solid fa-gift"></i>
          Start Free – No Credit Card
        </button>
        <button class="btn secondary-btn">
          <i class="fa-regular fa-circle-play"></i>
          Watch Demo
        </button>
      </div>

      <div class="hero-features">
        <span><i class="fa-solid fa-gift" style="color: #b0b0b0;"></i> Free Forever Plan</span>
        <span><i class="fa-solid fa-brain" style="color: #b0b0b0;"></i> AI Work Assistant</span>
        <span><i class="fa-solid fa-shield" style="color: #b0b0b0;"></i> Secure & Private</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import {  shallowRef } from 'vue'

const target0 =shallowRef(null)
defineExpose({
  target0,
})
</script>

<style scoped>
.hero-section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  color: white;
  overflow: hidden;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(90deg, #60A5FA 0%, #34D399 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.hero-subtitle {
  color: #b0b0b0;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  border: none;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.primary-btn {
  background: white;
  color: black;
}

.primary-btn:hover {
  transform: translateY(-3px);
  background: #f1f1f1;
}

.secondary-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

.hero-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  color: #b0b0b0;
  font-size: 0.95rem;
}

.hero-features span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.hero-features i {
  color: #3c6bfe;
}
</style>
