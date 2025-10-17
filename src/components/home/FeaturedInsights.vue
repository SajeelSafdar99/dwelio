<template>
  <section class="featured-insights" ref="target6">
    <div class="container insights-content">
      <div class="insights-header">
        <h2 class="insights-title">FEATURED INSIGHTS</h2>
        <p class="insights-subtitle">
          Were you looking to explore a specific topic? You're in the right spot.
        </p>
      </div>

      <div class="row insights-grid q-col-gutter-lg">
        <div class="col-12 col-md-4" v-for="(insight, index) in insights" :key="index">
          <div class="insight-card">
            <div class="card-image-container">
              <img :src="insightImages[index]" :alt="insight.title" class="img-fluid mx-auto d-block insight-image" />
            </div>
            <div class="card-content">
              <h3 class="insight-title">
                <span class="insight-title-text">{{ insight.title }}</span>
                <span class="title-arrow">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </span>
              </h3>
              <p class="insight-description">{{ insight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'

const target6 = shallowRef(null)

const insightLogo = import.meta.glob('/src/assets/home/feature insights/*.{png,jpg,jpeg,svg}', { eager: true })
const insightImages = Object.values(insightLogo).map((module) => module.default)

const insights = [
  {
    title: "Successful MVP Launches That Changed the Game.",
    description: "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success."
  },
  {
    title: "How Our AI Product Development Company is Pioneering Innovation?",
    description: "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future."
  },
  {
    title: "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
    description: "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions."
  }
]

defineExpose({
  target6
})
</script>

<style scoped>
.featured-insights {
  min-height: 66vh !important;
  position: relative;
}

.insights-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.insights-header {
  margin-bottom: 4rem;
}

.insights-subtitle {
  font-size: clamp(0.95rem, 1.1vw, 1.2rem);
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0 auto;
}

.insights-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
}

.title-arrow {
  flex: 0 0 35px;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  line-height: 1;
  z-index: 2;
  padding: 1.5rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.insight-card {
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
}

.insight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  padding: 2rem 2rem 0 2rem;
}

.card-image-container img,
.card-image-container .q-img__image {
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto;
}

.insight-image {
  transition: transform 0.3s ease;
}

.insight-card:hover .card-arrow i {
  transform: translate(2px, -2px);
}

.card-content {
  padding: 2rem;
}

.insight-description {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin: 0;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
}

.insight-title {
  font-size: clamp(1rem, 1.4vw, 0.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.insight-title-text {
  flex: 1 1 auto;
  min-width: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .featured-insights {
    padding: 4rem 0;
  }

  .insights-header {
    margin-bottom: 3rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}
</style>
