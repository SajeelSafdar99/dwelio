<template>
  <section class="real-estate" ref="target0">
    <div class="container">
      <div class="heading">
        <h2>Elevate Your Real Estate Experience</h2>
        <p>
          Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our
          comprehensive range of services, each designed to cater to your unique needs and dreams.
        </p>
      </div>
    </div>

    <div class="card-detail">
      <div class="cards">
        <div class="card" v-for="(item, i) in items" :key="i">
          <IconBorder :icon="item.icon" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <img :src="icons.arrow" :alt="icons.arrow" class="arrow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { icons } from 'assets/icons/index.js'
import IconBorder from 'components/IconBorder.vue'
import { shallowRef } from 'vue'
const target0 = shallowRef(null)

const items = [
  { icon: icons.house, title: 'Find Your Dream Home' },
  { icon: icons.cash, title: 'Unlock Property Value' },
  { icon: icons.building, title: 'Effortless Property Management' },
  { icon: icons.sun, title: 'Smart Investments, Decisions' },
]
defineExpose({
  target0,
})
</script>

<style scoped>
.real-estate {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: #fff;
}

.heading {
  padding: 4rem 0;
}

.heading h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.heading p {
  color: #a0a0b3;
  font-size: 1rem;
  line-height: 1.6;
}

/* Cards grid */
.card-detail {
  padding: 10px;
}

.cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr); /* Default: 4 cards per row */
}

/* 2x2 grid on medium screens */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 1xN grid on small screens */
@media (max-width: 640px) {
  .cards {
    grid-template-columns: 1fr;
  }
}

.card {
  gap: 19px;
  border-radius: 0.75rem;
  padding: 2rem 1.5rem;
  position: relative;
  text-align: center;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-6px);
}

.card h3 {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

.arrow {
  position: absolute;
  top: 14px;
  right: 18px;
  color: #aaa;
  font-size: 1rem;
  opacity: 0.7;
  transition: 0.2s;
}

.card:hover .arrow {
  opacity: 1;
  color: #fff;
  transform: translate(2px, -2px);
}
</style>
