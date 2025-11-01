<template>
  <section class="choose-section" ref="target4">
    <BackgroundGlow
      :ellipses="[
        {
          width: '300px',
          height: '500px',
          bottom: '-20%',
          right: '40%',
          gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
          opacity: 0.3,
          blur: 'blur(80px)',
        },
      ]"
    />
    <div class="container">
      <div class="choose-grid">
        <div class="choose-left">
          <div class="images-stack">
            <img
              v-for="(img, i) in images"
              :key="i"
              :src="img"
              alt="Why Choose Us"
              class="choose-img"
            />
          </div>
        </div>

        <div class="choose-right">
          <div>
            <h2 class="choose-title">WHY CHOOSE DWELIO?</h2>
            <p class="choose-subtitle">
              At Dwelio, we bring together the power of real estate expertise, advanced marketing, and dedicated virtual assistance — a combination that ensures every partner agent gets the highest quality of service and results.
            </p>
          </div>
          <ul class="choose-list">
            <li v-for="(item, i) in points" :key="i" class="choose-item">
              <div class="choose-icon">✓</div>
              <div class="choose-text">
                <h3 class="choose-item-title">{{ item.title }}</h3>
                <p class="choose-item-desc">{{ item.desc }}</p>
              </div>
            </li>
          </ul>

          <button class="choose-btn">Free Trial Today</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BackgroundGlow from 'components/BackgroundGlow.vue'
import { shallowRef } from 'vue'
const target4 = shallowRef(null)
defineExpose({
  target4,
})
const images = [
  new URL('/src/assets/about/choose/1.png', import.meta.url).href,
  new URL('/src/assets/about/choose/2.png', import.meta.url).href,
  new URL('/src/assets/about/choose/3.png', import.meta.url).href,
]

const points = [
  {
    title: 'Real Estate Expertise',
    desc: 'We understand real estate because we work with real estate professionals every day. Our referral system is designed specifically for agents and brokers — not generic lead sellers. Every lead we provide is viable, connected, and exclusive, meaning you’re speaking directly with clients actively looking to buy or sell. We limit the number of agents per area so you can focus on closing, not competing.',
  },
  {
    title: 'Proven Marketing System',
    desc: 'Our marketing goes beyond just buying leads. We use SEO, PPC campaigns, geo-farming, social media targeting, and website backlinking to attract motivated buyers and sellers in your area. This ensures every referral you receive is based on genuine interest — not cold lists or recycled data. Our goal is simple: higher-quality connections that turn into closings.',
  },
  {
    title: 'Virtual Assistance Advantage',
    desc: 'We started as a Virtual Assistance company, which means we know how to help you save time and work smarter. Our in-house team nurtures, qualifies, and connects each lead before it ever reaches you — so you’re not chasing cold calls or unresponsive prospects. You can even share your own data (past clients, FSBOs, expired listings), and our team will nurture those for you',
  },
]
</script>

<style scoped>
.choose-section {
  background: transparent;
  color: #ffffff;
  padding-top: 96px;
  padding-bottom: 80px;
  position: relative;
}

.choose-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

@media (max-width: 992px) {
  .choose-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

.images-stack {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.choose-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

@media (min-width: 1200px) {
  .choose-img {
    height: 240px;
  }
}

.choose-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.choose-title {
  font-size: 36px;
  line-height: 1.05;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.choose-subtitle {
  color: #bfbfc9;
  margin: 28px 0;
  line-height: 1.6;
  font-size: 15px;
}

.choose-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
}

.choose-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 18px;
}

.choose-icon {
  width: 36px;
  height: 36px;
  background: #ffffff;
  color: #0b0b12;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  transform: translateY(5px);
}

.choose-item-title {
  font-size: 16px;
  margin: 0 0 6px 0;
  font-weight: 600;
  color: #ffffff;
}

.choose-item-desc {
  margin: 0;
  color: #bfbfc9;
  font-size: 14px;
  line-height: 1.5;
}

.choose-btn {
  display: inline-block;
  background: #ffffff;
  color: #0b0b12;
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease;
  width: 180px;
}

.choose-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
}

@media (max-width: 576px) {
  .choose-title {
    font-size: 28px;
  }

  .choose-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .choose-img {
    height: 160px;
    border-radius: 14px;
  }

  .choose-icon {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }

  .choose-item {
    gap: 10px;
    margin-bottom: 14px;
  }

  .choose-right {
    max-width: 100%;
  }
}
</style>
