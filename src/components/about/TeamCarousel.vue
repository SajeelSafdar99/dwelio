<template>
  <section class="team-carousel q-py-xl q-px-lg container" ref="target2">
    <div class="testimonials-header">
      <div class="testimonials-title-wrapper">
        <h2 class="testimonials-title">OUR TEAM</h2>
        <p class="testimonials-subtitle">Dummy ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="testimonials-nav">
        <button class="nav-btn prev-btn" @click="scroll('left')" :disabled="isAtStart">←</button>
        <button class="nav-btn next-btn" @click="scroll('right')" :disabled="isAtEnd">→</button>
      </div>
    </div>

    <div class="slider-wrapper">
      <div
        class="team-grid"
        ref="scrollContainer"
      >
        <div
          v-for="(member, i) in teamMembersRaw"
          :key="i"
          class="team-card"
          :class="{
            'is-hovered': hoveredIndex === i,
            'is-shrunk': hoveredIndex !== null && hoveredIndex !== i
          }"
          :style="{ backgroundColor: member.bgColor }"
          @mouseenter="hoveredIndex = i"
          @mouseleave="hoveredIndex = null"
        >
          <div class="card-content">
            <div class="text-area">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
            </div>

            <div class="shapes-container">
              <img
                v-for="(shape, idx) in member.shapes"
                :key="idx"
                :src="shape"
                alt="shape"
                class="shape"
                :class="`card-${i}-shape-${idx + 1}`"
              />
            </div>

            <img :src="member.image" alt="team" class="member-photo" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount,shallowRef } from 'vue'
const target2 = shallowRef(null)
defineExpose({ target2 })
const hoveredIndex = ref(null)
const scrollContainer = ref(null)
const currentIndex = ref(0)
const isAtEnd = ref(false)
const isAtStart = ref(true)
let resizeObserver = null
let scrollDebounce = null

function getCards() {
  const c = scrollContainer.value
  if (!c) return []
  return Array.from(c.querySelectorAll('.team-card'))
}

function containerPaddingLeft() {
  const c = scrollContainer.value
  if (!c) return 0
  return parseFloat(getComputedStyle(c).paddingLeft) || 0
}

function updateBounds() {
  const c = scrollContainer.value
  if (!c) return
  isAtStart.value = c.scrollLeft <= 1
  isAtEnd.value = Math.ceil(c.scrollLeft) >= (c.scrollWidth - c.clientWidth - 1)
}

function indexFromScroll() {
  const cards = getCards()
  const c = scrollContainer.value
  if (!c || !cards.length) return 0

  const containerLeft = c.scrollLeft
  let closestIndex = 0
  let minDiff = Infinity
  for (let i = 0; i < cards.length; i++) {
    const left = cards[i].offsetLeft
    const diff = Math.abs(left - containerLeft)
    if (diff < minDiff) {
      minDiff = diff
      closestIndex = i
    }
  }
  return closestIndex
}

function onScroll() {
  if (scrollDebounce) clearTimeout(scrollDebounce)
  scrollDebounce = setTimeout(() => {
    currentIndex.value = indexFromScroll()
    updateBounds()
  }, 80)
}

function scrollToIndex(index) {
  const c = scrollContainer.value
  const cards = getCards()
  if (!c || !cards.length) return

  const targetIndex = Math.max(0, Math.min(index, cards.length - 1))
  const card = cards[targetIndex]
  const left = card.offsetLeft - containerPaddingLeft()

  c.scrollTo({ left, behavior: 'smooth' })
  currentIndex.value = targetIndex
  setTimeout(updateBounds, 300)
}

function scroll(direction) {
  const cards = getCards()
  if (!cards.length) return

  const step = 1
  const newIndex = direction === 'right' ? currentIndex.value + step : currentIndex.value - step
  scrollToIndex(newIndex)
}

onMounted(() => {
  const c = scrollContainer.value
  if (!c) return

  updateBounds()
  c.addEventListener('scroll', onScroll, { passive: true })
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      scrollToIndex(currentIndex.value)
      updateBounds()
    })
    resizeObserver.observe(c)
  } else {
    window.addEventListener('resize', () => {
      scrollToIndex(currentIndex.value)
      updateBounds()
    })
  }
})

onBeforeUnmount(() => {
  const c = scrollContainer.value
  if (c) c.removeEventListener('scroll', onScroll)
  if (resizeObserver) resizeObserver.disconnect()
})
const teamMembersRaw = [
  {
    name: 'Mr. Mark',
    role: 'Full Stack Developer',
    image: new URL('/src/assets/about/team/1.png', import.meta.url).href,
    bgColor: '#662547',
    shapes: [
      new URL('/src/assets/about/team/shapes/11.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/21.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/31.png', import.meta.url).href,
    ],
  },
  {
    name: 'Nadia Lestary',
    role: 'Frontend Engineer',
    image: new URL('/src/assets/about/team/2.png', import.meta.url).href,
    bgColor: '#2D4B8E',
    shapes: [
      new URL('/src/assets/about/team/shapes/12.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/22.png', import.meta.url).href,
    ],
  },
  {
    name: 'Evan Caster Lee',
    role: 'UI/UX Designer',
    image: new URL('/src/assets/about/team/3.png', import.meta.url).href,
    bgColor: '#1E3A3D',
    shapes: [
      new URL('/src/assets/about/team/shapes/13.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/23.png', import.meta.url).href,
    ],
  },
  {
    name: 'Stefy Catlyna',
    role: 'Project Manager',
    image: new URL('/src/assets/about/team/4.png', import.meta.url).href,
    bgColor: '#5E4A3E',
    shapes: [
      new URL('/src/assets/about/team/shapes/4.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/4.png', import.meta.url).href,
      new URL('/src/assets/about/team/shapes/4.png', import.meta.url).href,
    ],
  },
]
</script>

<style scoped>
.nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}
.team-carousel {
  color: white;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
}

.testimonials-title {
  font-size: clamp(2.5rem, 5vw, 2.5rem);
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  font-weight: 600;
  line-height: 50px;
}

.testimonials-subtitle {
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
}
.testimonials-nav {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.team-grid {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  border-radius: 30px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  scroll-padding: 0;
}
.team-grid::-webkit-scrollbar {
  display: none;
}

.team-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: clamp(400px, 45vw, 550px);
  transition: all 0.4s ease;
  flex-shrink: 0;
  box-sizing: border-box;
  transform-origin: center center;
  width: 24%;
  scroll-snap-align: start;

}

.team-card.is-shrunk {
  width: 22% !important;
  opacity: 0.6;
}

.team-card.is-hovered {
  width: 30% !important;
  opacity: 1;
  z-index: 2;
  scroll-behavior: auto;
}

@media (max-width: 1440px) {
}

@media (max-width: 1024px) {
  .team-card {
    width: 50%;
  }

  .team-card.is-shrunk {
    width: 40% !important;
    opacity: 0.6;
  }

  .team-card.is-hovered {
    width: 60% !important;
    opacity: 1;
    z-index: 2;
  }
}

@media (max-width: 640px) {
  .team-card {
    width: 100%;
  }

  .team-card.is-shrunk {
    width: 100% !important;
    opacity: 0.85;
  }

  .team-card.is-hovered {
    width: 100% !important;
    opacity: 1;
    z-index: 2;
  }
}

.member-photo {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60%;
  object-fit: contain;
  border-radius: 0 0 30px 0;
  transition: all 0.5s ease;
  z-index: 1;
}

.team-card:hover .member-photo {
  filter: brightness(0.85);
}

.card-content {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 2;
}

.text-area {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 80%;
  transition: all 0.4s ease;
}

.team-card:hover .text-area {
  top: 10%;
  left: 10%;
  transform: none;
  text-align: left;
}

.member-name {
  font-size: clamp(1.3rem, 1.8vw, 1.6rem);
  font-weight: 600;
  color: white;
  margin: 0;
}

.member-role {
  font-size: clamp(0.8rem, 1vw, 0.95rem);
  background: white;
  color: black;
  display: inline-block;
  border-radius: 999px;
  padding: 0.3rem 0.8rem;
  margin-top: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover .member-role {
  opacity: 1;
}

.shape {
  position: absolute;
  opacity: 0.7;
  width: 80px;
  height: auto;
}

.card-0-shape-1 { top: 63%; left: 45%; transform: scale(1.9);
  z-index: -11; }
.card-0-shape-2 { top: 60%; left: 10%; transform: scale(0.9);   z-index: -11;  }
.card-0-shape-3 { top: 75%; left: 25%;   z-index: -11; }
.card-1-shape-1 { top: 18%; right: 60%; transform: scale(1.3);  z-index: -11;  }
.card-1-shape-2 { top: 26%; left: 60%; transform: scale(0.4);  z-index: -11;  }
.card-2-shape-1 { top: 20%; left: 50%; transform: scale(1.5);   z-index: -11; }
.card-2-shape-2 { bottom: 24%; left: 1%; transform: scale(0.4);   z-index: -11; }
.card-3-shape-1 { top: 25%; left: 60%; transform: scale(0.7);  z-index: -11;  }
.card-3-shape-2 { top: 33%; left: 34%; transform: scale(0.7);  z-index: -11;  }
.card-3-shape-3 { top: 40%; left: 8%; transform: scale(0.7);  z-index: -11;  }
</style>
