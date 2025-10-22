<script setup>
import { ref, shallowRef } from 'vue'
const scrollContainer = ref(null)
const target1 = shallowRef(null)
defineExpose({
  target1
})
const scroll = (direction) => {
  const container = scrollContainer.value
  if (!container) return

  const card = container.querySelector('.property-card')
  if (!card) return

  const cardWidth = card.offsetWidth + 20
  const scrollAmount = cardWidth * 1
  const maxScroll = container.scrollWidth - container.clientWidth

  let targetScroll =
    direction === 'right'
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount

  targetScroll = Math.max(0, Math.min(targetScroll, maxScroll))

  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  })
}

const properties = ref([
  {
    label: 'Hot Deal',
    title: '123 Oak street, SpringField, IL',
    price: '$750,000',
    posted: '3 Days Ago',
    details: '4 Beds, 3 Baths, 2,400 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false, // 👈 add this
  },
  {
    title: '456 Main Avenue, Downtown',
    price: '$425,000',
    posted: '1 Week Ago',
    details: '2 Beds, 2 Baths, 1,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
  {
    label: 'Recently Sold',
    title: '789 Elm Drive, Westside, IL',
    price: '$950,000',
    posted: '2 Weeks Ago',
    details: '5 Beds, 4 Baths, 3,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
  {
    label: 'Recently Sold',
    title: '789 Elm Drive, Westside, IL',
    price: '$950,000',
    posted: '2 Weeks Ago',
    details: '5 Beds, 4 Baths, 3,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
  {
    title: '456 Main Avenue, Downtown',
    price: '$425,000',
    posted: '1 Week Ago',
    details: '2 Beds, 2 Baths, 1,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
  {
    label: 'Recently Sold',
    title: '789 Elm Drive, Westside, IL',
    price: '$950,000',
    posted: '2 Weeks Ago',
    details: '5 Beds, 4 Baths, 3,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
  {
    label: 'Recently Sold',
    title: '789 Elm Drive, Westside, IL',
    price: '$950,000',
    posted: '2 Weeks Ago',
    details: '5 Beds, 4 Baths, 3,200 sqft',
    image: new URL('/src/assets/testimonial/carousel/2.png', import.meta.url).href,
    isFav: false,
  },
])
const toggleFav = (index) => {
  properties.value[index].isFav = !properties.value[index].isFav
}
</script>

<template>
  <section class="property-carousel" ref="target1">
    <div class="dream-header container">
      <div class="dream-title-wrapper">
        <h2 class="dream-title">find your dream homes</h2>
        <p class="dream-subtitle">
          Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations.
        </p>
      </div>
      <div class="dream-nav">
        <button class="nav-btn prev-btn" @click="scroll('left')">←</button>
        <button class="nav-btn next-btn" @click="scroll('right')">→</button>
      </div>
    </div>
    <div class="slider-wrapper">
      <div class="property-grid" ref="scrollContainer">
        <div
          v-for="(item, i) in properties"
          :key="i"
          class="property-card"
        >
          <div class="property-image">
            <img :src="item.image" :alt="item.title" />
            <div v-if="item.label" class="property-label">{{ item.label }}</div>
            <button
              class="fav-btn"
              :class="{ active: item.isFav }"
              @click="toggleFav(i)"
            >
              <i :class="item.isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart'"></i>
            </button>
            <div class="property-title-row">
              <h3 class="property-title">{{ item.title }}</h3>
              <button class="play-btn">
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
          <div class="property-info">
            <div class="property-top">
              <span class="price">{{ item.price }}</span>
              <span class="posted">{{ item.posted }}</span>
            </div>
            <p class="details">{{ item.details }}</p>
            <div class="property-actions">
              <button class="tour-btn">Schedule Tour</button>
              <button class="info-btn">More Info...</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>


<style scoped>
.property-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 80px;
}
/* ===== HEADER REUSE ===== */
.dream-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  color: white;
  padding-top: 80px;
}

.dream-title {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.dream-subtitle {
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.6;
}

.dream-nav {
  display: flex;
  gap: 1rem;
}
@media (max-width: 992px) {


  .dream-header {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    align-items: center;
  }

  .dream-nav {
    justify-content: center;
  }
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* ===== CAROUSEL ===== */
.property-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  transition: all 0.3s ease;

  /* 👇 create container-like left offset */
  margin-left: calc((100vw - 1300px) / 2); /* match your container max-width */
  padding-left: 0;
  padding-right: 0;
}

.property-grid::-webkit-scrollbar {
  display: none;
}
@media (max-width: 1280px) {
  .property-grid {
    margin-left: 5vw;
  }
}
.property-card {
  overflow: hidden;
  flex-shrink: 0;
  width: 370px;
  scroll-snap-align: start;
  transition: all 0.4s ease;

}

/* Hover expand effect like team carousel */
@media (hover: hover) and (pointer: fine) {
  .property-grid:hover .property-card {
    width: 340px; /* shrink others */
    opacity: 0.9;
  }

  .property-grid:hover .property-card:hover {
    width: 500px; /* expand hovered one */
    opacity: 1;
    z-index: 5;
  }
}

/* ===== IMAGE AREA ===== */
.property-image {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.property-label {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #fff;
  color: #111;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
}

.fav-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ffffff;
  border: none;
  color: #000;
  font-size: 18px;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
:deep(.fav-btn.active) {
  color: #914B65;
}
.fav-btn:hover {
  transform: scale(1.1);
}
.play-btn {
  background: none;
  border: 2px solid #fff;
  color: #fff;
  font-size: 16px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.play-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}
.property-title-row {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;               /* make them side by side */
  justify-content: space-between; /* push title left, play button right */
  align-items: center;         /* align vertically */
  gap: 10px;
}
.property-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  flex: 1;                     /* let title use remaining space */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;     /* keeps text on one line */
}

/* ===== INFO AREA ===== */
.property-info {
  padding: 1.2rem 0 0;
  color: white;
}

.property-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.price {
  font-size: 1.4rem;
  font-weight: 600;
}

.posted {
  font-size: 0.9rem;
  color: #b0b0b0;
}

.details {
  font-size: 0.95rem;
  color: #b0b0b0;
  margin-bottom: 1.2rem;
}

.property-actions {
  display: flex;
  gap: 1rem;
}

.tour-btn {
  background: #AE3A46;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}
.tour-btn:hover {
  background: rgba(174, 58, 70, 0.64);
}

.info-btn {
  background: transparent;
  color: #b0b0b0;
  border: none;
  border-bottom: 2px solid #b0b0b0;
  cursor: pointer;
  padding-bottom: 0.3rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.info-btn:hover {
  color: white;
  border-color: white;
}
</style>
