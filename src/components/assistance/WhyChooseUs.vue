<template>
  <section class="why-choose-section" ref="target2">
   <div class="container">
     <div class="why-choose-container">
       <!-- LEFT SIDE -->
       <div class="why-text">
         <h2 class="why-title">Why Choose Dwelio Home?</h2>

         <ul class="why-list">
           <li v-for="(point, index) in points" :key="index" class="why-item">
            <span class="check-icon">
              <i class="fa-solid fa-circle-check"></i>
            </span>
             <p>{{ point }}</p>
           </li>
         </ul>

         <a href="#" class="read-more">
           Read more <i class="fa-solid fa-arrow-up-right-from-square"></i>
         </a>
       </div>

       <!-- RIGHT SIDE -->
       <div class="why-image-wrapper">
         <img
           src="../../assets/assistance/choose/1.png"
           alt="Why Choose Us"
           class="why-image"
         />
       </div>
     </div>
   </div>
  </section>
  <div class="cta-section">
    <h2 class="cta-title">🚀 Let’s Elevate Your Business Together</h2>
    <p class="cta-subtitle">
      Your success is our priority. At <strong>Dwelio Home</strong>, we don’t just provide virtual assistance —
      we become your trusted partner in achieving efficiency, growth, and excellence in every aspect of your real estate journey.
    </p>
    <p class="cta-text">Get Started Today! Contact us to discover how our virtual assistance team can transform your workflow
      and free up your time to focus on what you do best — helping clients find their dream homes.
    </p>
    <a href="#" class="cta-button">Get Started</a>
  </div>
</template>

<script setup>

import { shallowRef } from 'vue'
const points = [
  "Real Estate Expertise – Our VAs are trained in real estate processes, terminology, and systems.",
  "Time-Saving Efficiency – We take care of time-consuming tasks so you can focus on high-value work.",
  "Cost-Effective Solutions – Enjoy premium support without the overhead of full-time staff.",
  "Scalable Support – From solo agents to growing teams, our services grow with your business.",
]
const target2 = shallowRef(null)
defineExpose({
  target2,
})
</script>

<style scoped>
.why-choose-section {
  color: white;
}

.why-choose-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.why-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 2rem;
}

/* ===== LIST ===== */
.why-list {
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.why-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: #b0b0b0;
  font-size: 1.05rem;
  line-height: 1.6;
}

.check-icon {
  color: #ffffff;
  background: #5841D8;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* ===== READ MORE ===== */
.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #9d84f2;
}

/* ===== IMAGE ===== */
.why-image-wrapper {
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.why-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .why-choose-container {
    grid-template-columns: 1fr;
  }


  .read-more {
    justify-content: center;
  }

  .why-image-wrapper {
    margin-top: 2rem;
  }
}
/* ===== CTA SECTION ===== */
.cta-section {
  margin-top: 4rem;
  text-align: center;
  padding: 3rem 2rem;
  color: white;
}

.cta-title {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.cta-subtitle,
.cta-text {
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 0.75rem auto;
  color: rgba(255, 255, 255, 0.9);
}

.cta-button {
  display: inline-block;
  margin-top: 2rem;
  background-color: #0074e4;
  color: white;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 9999px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #005bb5;
  transform: translateY(-2px);
}

/* Responsive tweak */
@media (max-width: 600px) {
  .cta-section {
    padding: 2rem 1rem;
  }
  .cta-title {
    font-size: 1.6rem;
  }
  .cta-button {
    width: 100%;
  }
}

</style>
