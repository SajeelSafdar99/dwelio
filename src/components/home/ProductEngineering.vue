<template>
  <section class="services-section" ref="target2">
    <div class="container">
      <div class="services-layout">
        <div class="services-left">
          <div class="services-header">
            <h2 class="services-title">Our Services</h2>
            <p class="services-description">
              At Dwelio Home, we provide innovative, results-driven solutions that help businesses
              and professionals scale to new heights. Our expertise spans multiple industries — from
              real estate growth strategies to cutting-edge marketing and automation solutions.
              Whatever your goal, our team ensures your success with dedication, strategy, and
              technology.
            </p>
          </div>
        </div>

        <div class="services-right">
          <div class="services-grid">
            <div class="service-card mvp-card">
              <img :src="mvpImages[0]" alt="MVP Icon" class="card-icon" />
              <div class="service-label">Real Estate</div>
              <h3 class="service-title">Smart Strategies. Real Results.</h3>
              <p class="service-text">
                Our real estate solutions are built for performance — helping agents, brokers, and
                property owners reach more clients and close deals faster. From lead generation and
                digital marketing to CRM setup and automation, we bring the tools and tactics to
                grow your real estate business efficiently.
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card saas-card">
              <img :src="mvpImages[1]" alt="SaaS Icon" class="card-icon" />
              <div class="service-label">Virtual Assistance</div>
              <h3 class="service-title">Your Time. Our Expertise.</h3>
              <p class="service-text">
                Free up your schedule with our reliable virtual assistants who handle administrative
                tasks, client communications, research, scheduling, and CRM management. We make your
                workflow smooth, allowing you to focus on growth while we manage the details.
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card ai-card">
              <img :src="mvpImages[2]" alt="AI Icon" class="card-icon" />
              <div class="service-label">Marketing</div>
              <h3 class="service-title">Build Brands. Drive Growth.</h3>
              <p class="service-text">
                We create powerful marketing campaigns that combine creativity with data. From
                social media management and ad campaigns to SEO and content strategy, our marketing
                experts help you attract the right audience and turn engagement into revenue.
              </p>
              <button class="service-btn">
                Talk to a Product Expert
                <span class="btn-arrow">→</span>
              </button>
            </div>

            <div class="service-card commerce-card">
              <img :src="mvpImages[3]" alt="Commerce Icon" class="card-icon" />
              <div class="service-label">SAAS</div>
              <h3 class="service-title">Innovate. Automate. Elevate.</h3>
              <p class="service-text">
                Empower your business with modern SaaS (Software as a Service) tools that simplify
                processes and increase efficiency. Whether it’s automation systems, client portals,
                or digital dashboards — we design and implement solutions that help your business
                scale effortlessly.
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

const mvpLogos = import.meta.glob('/src/assets/home/mvp logos/*.{png,jpg,jpeg,svg}', {
  eager: true,
})
const mvpImages = Object.values(mvpLogos).map((module) => module.default)

defineExpose({
  target2,
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
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(circle, #095dff 0%, #bf09ff 100%);
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
  width: fit-content;
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
