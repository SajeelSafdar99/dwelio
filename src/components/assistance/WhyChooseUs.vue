<template>
  <section class="why-choose-section" ref="target2">
   <div class="container">
     <div class="why-choose-container">
       <!-- LEFT SIDE -->
       <div class="why-text">
         <h2 class="why-title">Why Choose Our Virtual Assistant Services?</h2>

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
</template>

<script setup>

import { shallowRef } from 'vue'
const points = [
  "AI Interview empowers easy, initial screening, precisely",
  "AI Interview helps in almost 60 to 70% time saving",
  "AI interview ensures fair interview experience with",
  "AI interview helps in reducing dependencies on",
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
</style>
