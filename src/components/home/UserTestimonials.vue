<template>
  <section class="testimonials-section" ref="target3" id="user-testimonial">
    <BackgroundGlow
      :ellipses="[
    {
      width: '300px',
      height: '500px',
      left: 'auto',
      right: '1px',
      top: '-20%',
      gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
      opacity: 0.3,
      blur: 'blur(80px)',
    },
    {
      width: '300px',
      height: '500px',
      left: '1px',
      right: 'auto',
      top: '70%',
      gradient: 'linear-gradient(0deg, #4D54E8, #4D54E8)',
      opacity: 0.3,
      blur: 'blur(80px)',
    },
  ]"
    />
    <div class="container">
      <div class="testimonials-header">
        <div class="testimonials-title-wrapper">
          <h2 class="testimonials-title">Meet our Realtors All in One Place</h2>
        </div>
        <div class="testimonials-nav">
          <button class="nav-btn prev-btn" @click="previousSlide">
            <span>←</span>
          </button>
          <button class="nav-btn next-btn" @click="nextSlide">
            <span>→</span>
          </button>
        </div>
      </div>

      <div class="testimonials-carousel" ref="carouselContainer">
        <div
          class="testimonials-track"
          ref="testimonialsTrack"
          :style="{ transform: `translateX(-${scrollPosition}px)` }"
        >
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-image-wrapper">
              <img :src="testimonial.image" :alt="`Testimonial Image for ${testimonial.clientName}`" class="testimonial-image" />
            </div>
            <div class="testimonial-footer">
              <div class="client-info">
                <h4 class="client-name">{{ testimonial.clientName }}</h4>
              </div>
              <div class="test-logo">
                <img :src="testImage" :alt="`testImage`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import { gsap } from 'gsap'
import BackgroundGlow from 'components/BackgroundGlow.vue'
const target3 = shallowRef(null)
const carouselContainer = shallowRef(null)
const testimonialsTrack = shallowRef(null)
const scrollPosition = ref(0)
const currentSlide = ref(0)
const totalSlides = 4
const testImage = new URL('/src/assets/logo.png', import.meta.url).href
const clientLogos = import.meta.glob('/src/assets/home/test logos/clients/*.{png,jpg,jpeg,svg}', { eager: true })
const clientImages = Object.values(clientLogos).map((module) => module.default)
const placeholderImage = 'https://placehold.co/400x400/png'

defineProps({
  fromTestimonials: { type: Boolean, required: false, default: false },
})

const testimonials = [
  {
    image: clientImages[0] || placeholderImage,
    clientName: "Andy Gleason",
  },
  {
    image: clientImages[1] || placeholderImage,
    clientName: "Judy Wilson",
  },
  {
    image: clientImages[2] || placeholderImage,
    clientName: "Rick Rowland",
  },
  {
    image: clientImages[3] || placeholderImage,
    clientName: "Rocco Martin",
  }
]

const nextSlide = () => {
  if (!carouselContainer.value) return
  const containerWidth = carouselContainer.value.offsetWidth

  if (window.innerWidth <= 992) {
    if (currentSlide.value < totalSlides - 1) {
      currentSlide.value++
      gsap.to(scrollPosition, {
        value: currentSlide.value * (containerWidth * 1),
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
  } else {
    const scrollAmount = containerWidth * 0.23
    const maxScroll = testimonialsTrack.value ? testimonialsTrack.value.scrollWidth - containerWidth : 0

    if (scrollPosition.value < maxScroll) {
      const newPosition = Math.min(scrollPosition.value + scrollAmount, maxScroll)
      gsap.to(scrollPosition, {
        value: newPosition,
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
  }
}

const previousSlide = () => {
  if (!carouselContainer.value) return
  const containerWidth = carouselContainer.value.offsetWidth

  if (window.innerWidth <= 992) {
    if (currentSlide.value > 0) {
      currentSlide.value--
      gsap.to(scrollPosition, {
        value: currentSlide.value * (containerWidth * 1),
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
  } else {
    const scrollAmount = containerWidth * 0.23
    if (scrollPosition.value > 0) {
      const newPosition = Math.max(scrollPosition.value - scrollAmount, 0)
      gsap.to(scrollPosition, {
        value: newPosition,
        duration: 0.5,
        ease: "power2.inOut"
      })
    }
  }
}

defineExpose({
  target3,
  nextSlide,
  previousSlide
})
</script>

<style scoped>
.testimonials-section {
  min-height: 70vh;
  position: relative;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.testimonials-title-wrapper {
  flex: 1;
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

.testimonials-carousel {
  overflow: hidden;
  position: relative;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 133.33%;
}

.testimonial-card {
  width: calc(22% - 0.25rem);
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-right: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

@media (min-width: 992px) and (max-width: 1200px) {
  .testimonial-card {
    width: calc(22% - 0.45rem);
  }
}


.testimonial-image-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.testimonial-image {
  max-width: 100%;
  max-height: 80%;
  object-fit: contain;
  border-radius: 10px;
}

.client-info {
  margin-bottom: 1.5rem;
  text-align: right;
}

.client-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}



.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}




.project-details p {
  margin: 0.25rem 0;
}

.test-logo img {
  max-height: 90px;
  object-fit: contain;
}

@media (max-width: 992px) {
  .testimonials-track {
    width: 400%;
  }

  .testimonial-card {
    width: 25%;
    margin-right: 0;
  }

  .testimonials-header {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    align-items: center;
  }

  .testimonials-nav {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.5rem;
    min-height: 350px;
  }

  .client-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

.testimonial-card:last-child {
  margin-right: 0;
}
</style>
