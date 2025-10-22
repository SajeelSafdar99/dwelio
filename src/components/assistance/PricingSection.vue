<template>
  <section class="pricing-section" ref="target3">
    <BackgroundGlow
      :ellipses="[
    {
      width: '300px',
      height: '900px',
      left: 'auto',
      right: '1px',
      top: '70%',
      gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
      opacity: 0.3,
      blur: 'blur(80px)',
    },
    {
      width: '300px',
      height: '900px',
      left: '1px',
      right: 'auto',
      top: '70%',
      gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
      opacity: 0.3,
      blur: 'blur(80px)',
    },
  ]"
    />


    <div class="pricing-container container">
      <!-- Header -->
      <div class="pricing-header">
        <h2 class="pricing-title">Simple, Transparent Pricing</h2>
        <p class="pricing-subtitle">Start free, upgrade when you need more</p>
      </div>

      <!-- Pricing Cards -->
      <div class="pricing-grid">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          :class="['pricing-card', plan.featured && 'featured' , plan.premium && 'premium']"
        >
          <div class="plan-header">
        <span
          v-if="plan.badge"
          class="plan-badge"
          :class="[plan.badgeClass, { 'last-plan-badge': i === plans.length - 1 }]"
          v-html="plan.badge"
        ></span>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-price">
              <span class="price">${{ plan.price }}</span
              ><span class="period">/month</span>
            </p>
            <p class="plan-desc">{{ plan.description }}</p>
          </div>

          <ul class="plan-features">
            <li v-for="(feature, f) in plan.features" :key="f" class="feature-item">
              <img :src="icons.tick" alt="Tick Icon" class="icon" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <button class="plan-btn" :class="plan.buttonClass">{{ plan.buttonText }}</button>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import { icons } from 'assets/icons/index.js'
import BackgroundGlow from 'components/BackgroundGlow.vue'
import { shallowRef } from 'vue'
const target3 = shallowRef(null)
defineExpose({
  target3,
})
const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: [
      'Basic AI assistant features',
      'Connect up to 3 apps',
      '50 AI requests per month',
      'Community support',
      'No calling features',
    ],
    buttonText: 'Get Started Free',
    buttonClass: 'green',
    badge: `<img src="${icons.gift}" class="icon" alt="Gift Icon" /> Free Forever`,
    badgeClass: 'badge-green',
  },
  {
    name: 'Pro',
    price: 10,
    description: 'Complete AI workforce',
    features: [
      'Everything in Free',
      'Unlimited AI requests',
      'Advanced content creation',
      'Data analysis & reporting',
      'Real phone calls & bookings',
      'Workflow automation',
      'Project management',
      'Priority support',
    ],
    buttonText: 'Upgrade to Pro',
    buttonClass: 'pink',
    badge: 'Most Popular',
    badgeClass: 'badge-pink',
    featured: true,
  },
  {
    name: 'Premium',
    price: 100,
    description: 'Enterprise AI workforce',
    features: [
      'Everything in Pro',
      '24/7 concierge support',
      'Custom AI training',
      'Advanced automation',
      'Strategic planning',
      'Custom integrations',
      'Team collaboration',
      'Dedicated account manager',
    ],
    buttonText: 'Get Premium',
    buttonClass: 'purple',
    badge: `<img src="${icons.crown}" class="icon" alt="Gift Icon" />`,
    premium: true,
  },
]
</script>

<style scoped>
.pricing-section {
  display: flex;
  justify-content: center;
  color: #fff;
position: relative;
  margin: 48px auto;
}


.pricing-container {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background: rgba(3, 7, 18, 0.54);
  mix-blend-mode: normal;
  backdrop-filter: blur(10px);
  border-radius: 24px;
}

/* Header */
.pricing-header {
  text-align: center;
}

.pricing-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pricing-subtitle {
  color: #bcbcc6;
}

/* Pricing Cards */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative; /* Needed for badge positioning */
  overflow: visible;
}

.pricing-card.featured {
  border: 1px solid #7e2148;
  background: rgba(255, 255, 255, 0.08);
}
.pricing-card.premium {
  border: 1px solid #9333EA;
  background: rgba(255, 255, 255, 0.08);
}

/* Plan Header */
.plan-header {
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

/* Floating Badge */
.plan-badge {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  white-space: nowrap;
}

.badge-green {
  background: #059669;
  color: #fff;
}

.badge-pink {
  background: #7e2148;
  color: #fff;
}

.plan-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: -1.5rem;
}

.plan-price {
  font-size: clamp(4rem, 6vw, 7rem);
  font-weight: 700;
}

.plan-price .period {
  font-size: 1rem;
  color: #bfbfc9;
  margin-left: 4px;
}

.plan-desc {
  color: #bfbfc9;
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  margin-top: -1.5rem;
}

/* Features */
.plan-features {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 2rem 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.8rem;
  color: #dcdce3;
  font-size: 0.95rem;
}

.check {
  color: #6a9bff;
  font-weight: bold;
}

/* Buttons */
.plan-btn {
  border: none;
  border-radius: 9999px;
  padding: 0.9rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: 0.3s;
}

.plan-btn.green {
  background: #059669;
  color: #fff;
}

.plan-btn.pink {
  background: #7e2148;
  color: #fff;
}

.plan-btn.purple {
  background: #FFFFFF;
  color: #9333EA;
}

.plan-btn:hover {
  opacity: 0.9;
}

.last-plan-badge {
  top: -20px !important;
  right: -45px !important;
  left: auto !important;
}
</style>
