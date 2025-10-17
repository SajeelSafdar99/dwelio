<template>
  <section class="property-section text-white">
    <div class="container">
      <div class="row q-col-gutter-y-xl">
        <!-- Left Column: 2 stacked cards -->
        <div class="col-lg-4 col-md-12">
          <div v-for="(card, i) in leftCards" :key="i" class="q-mb-lg q-mr-xl" :class="card.class">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-text">{{ card.text }}</p>
            <button
              v-if="card.buttonText"
              class="card-btn"
              :class="card.buttonClass"
            >
              {{ card.buttonText }}
            </button>
          </div>
        </div>

        <!-- Right Column: 4 cards in a 2x2 grid -->
        <div class="col-lg-8 col-md-12 custom-grid">
          <div class="row">
            <div v-for="(card, i) in rightCards" :key="i" class="col-md-6 col-sm-12">
              <div class="card-box q-ma-sm">
                <div class="card-header">
                  <IconBorder :icon="card.icon" />
                  <h3 class="card-title">{{ card.title }}</h3>
                </div>
                <p class="card-text">{{ card.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.property-section {
  padding-block: 8rem 0;
}

.custom-grid {
  background: rgba(20, 21, 23, 0.54);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  border-radius: 12px;
}

.card-box {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 1.8rem 1.5rem;
  transition: all 0.3s ease;
  min-height: 300px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 2rem; /* space between icon and title */
  margin-bottom: 1rem;
}

.card-box:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.card-text {
  color: #bfbfc9;
  font-size: 0.95rem;
  line-height: 1.6;
}

.card-transparent h3 {
  font-weight: 600;
  font-size: 38px;
  margin: 0;
}

.card-transparent p {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #999999;
}
.card-textured {
  background-image:
    linear-gradient(90deg, rgba(60, 107, 254, 0.42) 0%, rgba(157, 132, 242, 0.54) 100%),
    url("../../assets/service/1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 1.8rem;
  border-radius: 0.75rem;
}
.card-textured h3 {
  font-weight: 600;
  font-size: 22px;
}
.card-textured p {
  font-weight: 400; font-size: 16px;
}
.btn-white{
  background: #fff;
  color: #3C6BFE;
  border-radius: 12px;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  transition: all 0.3s ease;
  width: 100%;
}
</style>

<script setup>
import IconBorder from 'components/IconBorder.vue'
import { icons } from 'assets/icons/index.js'

const leftCards = [
  {
    title: 'Smart Investments, Informed Decisions',
    text: "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
    class: 'card-transparent',
  },
  {
    title: 'Unlock Your Investment Potential',
    text: 'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
    class: 'card-textured',
    buttonText: 'Learn More', // 👈 only this one has a button
    buttonClass: 'btn-white',
  },
]

const rightCards = [
  {
    icon: icons.signal,
    title: 'Market Insight',
    text: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
  },
  {
    icon: icons.signal,
    title: 'ROI Assessment',
    text: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
  },
  {
    icon: icons.signal,
    title: 'Customized Strategies',
    text: 'Every investor is unique, and so are their goals. We develop Customized Investment ',
  },
  {
    icon: icons.signal,
    title: 'Diversification Mastery',
    text: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
  },
]
</script>

