<template>
  <section ref="heroSection" class="hero-section">
    <div class="hero-content">
<!--            <div ref="introText" class="intro-text">🚀 Introducing AI Automation</div>-->

      <h1 ref="mainTitle" class="main-title">
        Your <span class="concept">Vision.</span>
        Our <span class="reality">Strategy.</span>
        Real <span class="concept">Success.</span>
      </h1>

      <p ref="subtitle" class="subtitle">
        Crafting Success Through Real Estate, Marketing & Virtual Assistance.
      </p>

      <p ref="description" class="description">
        Learn the simple strategies and tools top real estate agents use to grow their business.
        With real estate lead generation, you can get more clients, win more listings, and increase
        your profits. Success isn’t just a dream – you can achieve it.
      </p>

      <div class="stats-section">
        <div class="row g-4 justify-center">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="stat-item">
              <div class="stat-number">{{ Math.round(revenueCounter) }}%</div>
              <div class="stat-label">Clients are satisfied</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class="stat-item">
              <div class="stat-number">{{ speedCounter }}%</div>
              <div class="stat-label">Lead conversion witnessed nationwide</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class="stat-item">
              <div class="stat-number">{{ Math.round(ordersCounter) }}k</div>
              <div class="stat-label">Leads delivered annually</div>
            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-3">
            <div class="stat-item">
              <div class="stat-number">{{ Math.round(usersCounter) }}x</div>
              <div class="stat-label">Increase in closings seen by Dwelio Homes Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, shallowRef, onMounted, onUnmounted } from 'vue'

const heroSection = shallowRef(null)
// const introText = shallowRef(null)
const mainTitle = shallowRef(null)
const subtitle = shallowRef(null)
const description = shallowRef(null)

const revenueCounter = ref(0)
const speedCounter = ref(0)
const ordersCounter = ref(0)
const usersCounter = ref(0)
const hasAnimated = ref(false)

defineExpose({
  heroSection,
})

const animateCounters = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / 2000, 1)

    revenueCounter.value = Math.floor(progress * 97)
    speedCounter.value = Math.floor(progress * 20)
    ordersCounter.value = Math.floor(progress * 50)
    usersCounter.value = Math.floor(progress * 3)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      revenueCounter.value = 97
      speedCounter.value = 20
      ordersCounter.value = 50
      usersCounter.value = 3
    }
  }

  requestAnimationFrame(animate)
}

let statsObserver = null

const observeStatsSection = () => {
  const statsSection = document.querySelector('.stats-section')
  if (!statsSection) return

  statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          animateCounters()
        }
      })
    },
    { threshold: 0.5 },
  )

  statsObserver.observe(statsSection)
}

onMounted(() => {
  setTimeout(() => {
    observeStatsSection()
  }, 100)
})

onUnmounted(() => {
  if (statsObserver) {
    statsObserver.disconnect()
    statsObserver = null
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url(/src/assets/Serction-Hero.png?t=1758745798359);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(90px);
  z-index: -1;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  z-index: 2;
  position: relative;
  padding-top: 4rem;
}

.intro-text {
  color: #ffbe0b;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
}

.main-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
  letter-spacing: -2px;
}

.concept {
  background: #11deff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.reality {
  background: #4380ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  color: #bdf4d0;
  margin-bottom: 2rem;
  font-weight: 300;
  line-height: 1.4;
}

.description {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
}

.stats-section {
  margin-top: 4rem;
  margin-bottom: 6rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  background: linear-gradient(#3c6bfe, #9d84f2);
  font-size: 3rem;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .stats-section {
    margin-bottom: 4rem;
  }
}
</style>
