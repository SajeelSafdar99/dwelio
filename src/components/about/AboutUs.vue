<template>
  <section class="about-section" ref="target0">
    <BackgroundGlow
      :ellipses="[
        {
          width: '300px',
          height: '300px',
          right: '1px',
          top: '50%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
        {
          width: '300px',
          height: '300px',
          left: '1px',
          top: '70%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
        {
          width: '300px',
          height: '300px',
          right: '40%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
          {
          width: '300px',
          height: '300px',
          left: '1px',
          top: '20%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
          {
          width: '300px',
          height: '300px',
          left: '1px',
          top: '1%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
      ]"
    />

    <div class="about-wrapper q-pa-md container">
      <div class="about-bg">
        <div class="about-overlay"></div>
      </div>

      <div class="about-content">
        <h2 class="about-title">OUR STORY</h2>
        <p class="about-text">
          Dwelio began as a small virtual assistance firm dedicated to helping real estate professionals manage their time, nurture prospects, and streamline their client communication.
        </p>
        <p class="about-text">
          Over time, as we built trusted relationships with agents across multiple states, we noticed a growing need for something deeper — qualified, ready-to-convert referrals backed by real human connection.
        </p>
        <p class="about-text">
          That realization transformed Dwelio from a support service into a complete real estate referral and marketing platform built on transparency, performance, and partnership.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// no script logic needed
import BackgroundGlow from 'components/BackgroundGlow.vue'
import { shallowRef } from 'vue'
const target0 = shallowRef(null)
defineExpose({
  target0,
})
</script>

<style scoped>
.about-section {
  position: relative;
  width: 100%;
  padding: 80px 0;
  overflow: visible;
}
.about-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../../assets/flower.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(90px);
  z-index: -1;
}
.about-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 571px;
  border-radius: 36px;
  background: #7E2148;
}

.about-bg {
  position: absolute;
  inset: 0;
  background-image: url('../../assets/about/stories/1.png');
  background-size: cover;
  background-position: center;
  mix-blend-mode: color-dodge;
  border-radius: inherit;
  z-index: 1;
}

.about-overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 21, 23, 0.78);
  border-radius: inherit;
  z-index: 2;
  filter: blur(20px);
}

.about-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1158px;
  padding: 0 24px;
  font-family: 'Sora', sans-serif;
  color: #fff;
}

.about-title {
  font-weight: 600;
  font-size: clamp(1.8rem, 2vw + 1rem, 2.5rem);
  text-transform: uppercase;
}

.about-text {
  font-weight: 400;
  font-size: clamp(0.9rem, 0.4vw + 0.5rem, 1rem);
  line-height: 1.6;
  color: #ffffff;
  margin: 0 !important;
}
</style>
