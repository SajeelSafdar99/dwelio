<template>
  <section class="team-carousel q-py-xl q-px-lg container">
    <div class="testimonials-header">
      <div class="testimonials-title-wrapper">
        <h2 class="testimonials-title">OUR TEAM</h2>
        <p class="testimonials-subtitle">Dummy ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div class="testimonials-nav">
        <button class="nav-btn prev-btn" @click="previousSlide">←</button>
        <button class="nav-btn next-btn" @click="nextSlide">→</button>
      </div>
    </div>

    <swiper
      :observer="true"
      :observeParents="true"
      :space-between="20"
      :loop="true"
      :grab-cursor="true"
      :slides-per-group="1"

      :breakpoints="{

    320: { slidesPerView: 1, slidesPerGroup: 1 },
    640: { slidesPerView: 2, slidesPerGroup: 1 },
    1024: { slidesPerView: 3, slidesPerGroup: 1 },
    1440: { slidesPerView: 4, slidesPerGroup: 1 }
  }"
      @swiper="onSwiper"
      class="team-slide"
    >
      <swiper-slide
        v-for="(member, i) in teamMembers"
        :key="i"
        class="team-card"
        :style="{ backgroundColor: member.bgColor }"

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
              :class="`card-${i % teamMembersRaw.length}-shape-${idx + 1}`"
            />
          </div>

          <img :src="member.image" alt="team" class="member-photo" />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'

const swiperInstance = ref(null)

const teamMembersRaw = [
  {
    name: 'Mr. Mark',
    role: 'Full Stack Developer',
    image: '/src/assets/about/team/1.png',
    bgColor: '#662547',
    shapes: [
      '/src/assets/about/team/shapes/11.png',
      '/src/assets/about/team/shapes/21.png',
      '/src/assets/about/team/shapes/31.png',
    ],
  },
  {
    name: 'Nadia Lestary',
    role: 'Frontend Engineer',
    image: '/src/assets/about/team/2.png',
    bgColor: '#2D4B8E',
    shapes: ['/src/assets/about/team/shapes/12.png', '/src/assets/about/team/shapes/22.png'],
  },
  {
    name: 'Evan Caster Lee',
    role: 'UI/UX Designer',
    image: '/src/assets/about/team/3.png',
    bgColor: '#1E3A3D',
    shapes: ['/src/assets/about/team/shapes/13.png', '/src/assets/about/team/shapes/23.png'],
  },
  {
    name: 'Stefy Catlyna',
    role: 'Project Manager',
    image: '/src/assets/about/team/4.png',
    bgColor: '#5E4A3E',
    shapes: [
      '/src/assets/about/team/shapes/4.png',
      '/src/assets/about/team/shapes/4.png',
      '/src/assets/about/team/shapes/4.png',
    ],
  },
]

// Duplicate slides to make loop smooth
const teamMembers = [...teamMembersRaw, ...teamMembersRaw]


function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function nextSlide() {
  swiperInstance.value?.slideNext()
}

function previousSlide() {
  swiperInstance.value?.slidePrev()
}

</script>


<style scoped>
.team-carousel {
  color: white;
  border-radius: 20px;
}

/* ===== HEADER ===== */
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


/* ===== TEAM CARD ===== */
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
}

.team-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-card {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  opacity: 0.85;
  min-height: clamp(400px, 45vw, 550px);
  transition: all 0.4s ease;
}

/* When hovering the inner card, not the slide */
.team-card:hover {
  width: 30% !important; /* expands slightly */
  opacity: 1;
  z-index: 2;
}
@media (max-width: 1440px) {

  .team-card:hover{
    width: 40% !important;
    opacity: 1;
    z-index: 2;
  }
}
@media (max-width: 1024px) {

  .team-card:hover{
    width: 60% !important;
    opacity: 1;
    z-index: 2;
  }
}
@media (max-width: 640px) {
  .team-card:hover{
    width: 100% !important;
    opacity: 1;
    z-index: 2;
  }
}
/* ===== IMAGE ===== */
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

/* ===== TEXT AREA ===== */
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

/* ===== MEMBER INFO ===== */
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

/* ===== SHAPES ===== */
.shape {
  position: absolute;
  opacity: 0.7;
  width: 80px;
  height: auto;
}

/* Unique shape positions per card */
.card-0-shape-1 {
  top: 63%;
  left: 45%;
  transform: scale(1.9);
}

.card-0-shape-2 {
  top: 60%;
  left: 10%;
  transform: scale(0.9);
}

.card-0-shape-3 {
  top: 75%;
  left: 25%;
}

.card-1-shape-1 {
  top: 18%;
  right: 60%;
  transform: scale(1.3);
}

.card-1-shape-2 {
  top: 26%;
  left: 60%;
  transform: scale(0.4);
}

.card-2-shape-1 {
  top: 20%;
  left: 50%;
  transform: scale(1.5);
}

.card-2-shape-2 {
  bottom: 24%;
  left: 1%;
  transform: scale(0.4);
}

.card-3-shape-1 {
  top: 25%;
  left: 60%;
  transform: scale(0.7);
}

.card-3-shape-2 {
  top: 33%;
  left: 34%;
  transform: scale(0.7);
}

.card-3-shape-3 {
  top: 40%;
  left: 8%;
  transform: scale(0.7);
}
</style>
