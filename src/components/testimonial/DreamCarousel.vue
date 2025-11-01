<script setup>
import { ref, shallowRef } from 'vue'

const scrollContainer = ref(null)
const target1 = shallowRef(null)

const isVideoModalOpen = ref(false)
const currentVideoUrl = ref('')

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

const openVideoModal = (videoUrl) => {
  currentVideoUrl.value = videoUrl
  isVideoModalOpen.value = true
}

const closeVideoModal = () => {
  isVideoModalOpen.value = false
  currentVideoUrl.value = ''
}

const getVideoUrl = (name) => {
  return new URL(`/src/assets/home/test logos/videos/${name}`, import.meta.url).href
}

const properties = ref([
  {
    title: '123 Oak street, SpringField, IL',
    image: new URL('/src/assets/home/test logos/clients/img.png', import.meta.url).href,
    video: getVideoUrl('Amanda-Rempe.mp4')
  },
  {
    title: '456 Main Avenue, Downtown',
    image: new URL('/src/assets/home/test logos/clients/img_1.png', import.meta.url).href,
    video: getVideoUrl('Austin Martin.mp4')
  },
  {
    title: '789 Elm Drive, Westside, IL',
    image: new URL('/src/assets/home/test logos/clients/img_2.png', import.meta.url).href,
    video: getVideoUrl('Janie-Clark.mp4')
  },
  {
    title: '123 Oak street, SpringField, IL',
    image: new URL('/src/assets/home/test logos/clients/img_3.png', import.meta.url).href,
    video: getVideoUrl('Judy-Wilson.mp4')
  },
  {
    title: '456 Main Avenue, Downtown',
    image: new URL('/src/assets/home/test logos/clients/img_4.png', import.meta.url).href,
    video: getVideoUrl('Rick-Rowland-1.mp4')
  },
  {
    title: '789 Elm Drive, Westside, IL',
    image: new URL('/src/assets/home/test logos/clients/img_5.png', import.meta.url).href,
    video: getVideoUrl('Shari-Carpenter.mp4')
  },
  {
    title: '123 Oak street, SpringField, IL',
    image: new URL('/src/assets/home/test logos/clients/img_6.png', import.meta.url).href,
    video: getVideoUrl('Stefan-Levine-1.mp4')
  },
  {
    title: '456 Main Avenue, Downtown',
    image: new URL('/src/assets/home/test logos/clients/img_7.png', import.meta.url).href,
    video: getVideoUrl('Andy-Gleason-1.mp4')
  },
  {
    title: '789 Elm Drive, Westside, IL',
    image: new URL('/src/assets/home/test logos/clients/img_8.png', import.meta.url).href,
    video: getVideoUrl('Heather-minor.mp4')
  },
  {
    title: '123 Oak street, SpringField, IL',
    image: new URL('/src/assets/home/test logos/clients/img_9.png', import.meta.url).href,
    video: getVideoUrl('Johannes-Espino (2).mp4')
  },
  {
    title: '456 Main Avenue, Downtown',
    image: new URL('/src/assets/home/test logos/clients/img_10.png', import.meta.url).href,
    video: getVideoUrl('Michelson-Aristhyl.mp4')
  },
  {
    title: '789 Elm Drive, Westside, IL',
    image: new URL('/src/assets/home/test logos/clients/img_11.png', import.meta.url).href,
    video: getVideoUrl('Rocco-Martin.mp4')
  },
  {
    title: '789 Elm Drive, Westside, IL',
    image: new URL('/src/assets/home/test logos/clients/img_12.png', import.meta.url).href,
    video: getVideoUrl('Shauna-Baker.mp4')
  },
])

</script>

<template>
  <section class="property-carousel" ref="target1">
    <div class="dream-header container">
      <div class="dream-title-wrapper">
        <h2 class="dream-title">What Our Clients Say</h2>
        <p class="dream-subtitle">
          We’re proud to have earned the trust of hundreds of Realtors and Brokers. Here’s what some of them have to say about their experience working with us.
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
            <div class="property-title-row">
              <h3 class="property-title">{{ item.title }}</h3>
              <button class="play-btn" @click="openVideoModal(item.video)">
                <i class="fa-solid fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div v-if="isVideoModalOpen" class="video-modal-overlay" @click.self="closeVideoModal">
    <div class="video-modal-content">
      <button class="modal-close-btn" @click="closeVideoModal">
        &times;
      </button>

      <video
        :src="currentVideoUrl"
        autoplay
        loop
        muted
        playsinline
        class="modal-video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
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
  margin-left: calc((100vw - 1300px) / 2);
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

@media (hover: hover) and (pointer: fine) {
  .property-grid:hover .property-card {
    width: 340px;
    opacity: 0.9;
  }

  .property-grid:hover .property-card:hover {
    width: 500px;
    opacity: 1;
    z-index: 5;
  }
}

.property-image {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.property-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.property-title {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease;
}

.video-modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.modal-video {
  display: block;
  max-width: 100%;
  max-height: 80vh;
  margin: auto;
  border-radius: 8px;
}

.modal-close-btn {
  position: fixed;
  top: 90px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
  line-height: 1;
}

@media (max-width: 768px) {
  .modal-close-btn {
    top: 10px;
    right: 10px;
    text-shadow: 0 0 5px black;
  }
}
</style>
