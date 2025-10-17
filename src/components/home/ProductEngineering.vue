<template>
  <section class="services-section" ref="target2">
    <div class="container">
      <div class="services-layout">
        <div class="services-left">
          <div class="services-header">
            <h2 class="services-title">PRODUCT ENGINEERING</h2>
            <p class="services-description">
              Discover the impact of bespoke digital solutions tailored precisely to your
              business's distinct requirements. Our experienced team of professionals ensures you
              receive outstanding results that consistently exceed your expectations.
            </p>
          </div>
        </div>

        <div class="services-right">
          <div class="services-grid">
            <div class="service-card mvp-card">
              <img :src="mvpImages[0]" alt="MVP Icon" class="card-icon" />
              <div class="service-label">Our Services</div>
              <h3 class="service-title">MVP</h3>
              <p class="service-text">
                We specialize in custom MVP development, focusing on tailored prototyping services
                to meet diverse client needs and ensure rapid market launch.
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card saas-card">
              <img :src="mvpImages[1]" alt="SaaS Icon" class="card-icon" />
              <div class="service-label">Our Services</div>
              <h3 class="service-title">SaaS</h3>
              <p class="service-text">
                Take your business to new heights with our all-inclusive SaaS development
                services, delivering seamless and digital experiences that are platform- agnostic
                and tailored to your customers' needs.
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card ai-card">
              <img :src="mvpImages[2]" alt="AI Icon" class="card-icon" />
              <div class="service-label">Our Services</div>
              <h3 class="service-title">AI</h3>
              <p class="service-text">
                We develop tailored AI solutions, leveraging machine learning, NLP, and computer
                vision to automate, optimize, and enhance decision-making processes
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card commerce-card">
              <img :src="mvpImages[3]" alt="Commerce Icon" class="card-icon" />
              <div class="service-label">Our Services</div>
              <h3 class="service-title">B2B & B2C<br />Commerce<br />Transformation</h3>
              <p class="service-text">
                We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and
                Woocommerce to boost online orders and enhance customer shopping experiences,
                keeping you competitive.
              </p>
              <button class="service-btn">
                Talk to a Ecommerce Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'

const target2 = shallowRef(null)

const mvpLogos = import.meta.glob('/src/assets/home/mvp logos/*.{png,jpg,jpeg,svg}', { eager: true })
const mvpImages = Object.values(mvpLogos).map((module) => module.default)

defineExpose({
  target2
})
</script>

<style scoped>
.card-icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 165px;
  height: auto;
  opacity: 0.9;
  pointer-events: none;
}

.services-section {
  min-height: 89vh;
  position: relative;
  padding-top: 50px;
}

.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(circle, #095DFF 0%, #BF09FF 100%);
  filter: blur(300px);
  z-index: 0;
  pointer-events: none;
}

.services-layout {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: flex-start;
}

.services-left {
  flex: 0 0 35%;
  max-width: 65%;
}

.services-right {
  flex: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.services-header {
  padding-right: 0;
}

.services-title {
  font-size: clamp(2.5rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 50px;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.services-description {
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-weight: 500;
  padding: 8px;
  border-radius: 30px;
  background: #ffefd12e;
  width: 100px;
}

.service-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.service-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.service-btn {
  background: #000;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  margin-top: auto;
}

.service-btn:hover {
  background: #333;
  transform: translateY(-2px);
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.service-btn:hover .btn-arrow {
  transform: translateX(5px);
}

.mvp-card {
  background: #2f41a3;
}

.saas-card {
  background: #7e2148;
}

.ai-card {
  background: #aa7333;
}

.commerce-card {
  background: #224a38;
}

@media (max-width: 992px) {
  .services-layout {
    flex-direction: column;
    gap: 3rem;
  }

  .services-left {
    flex: none;
    max-width: 100%;
    text-align: center;
  }

  .services-title {
    font-size: 3rem;
  }

  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-title {
    font-size: 1.5rem;
  }
}
</style>
