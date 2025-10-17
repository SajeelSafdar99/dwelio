<template>
  <section class="testimonials-section" ref="target3">
    <div class="container">
      <div class="testimonials-header">
        <div class="testimonials-title-wrapper">
          <h2 class="testimonials-title">OUR HAPPY CLIENTS</h2>
          <p class="testimonials-subtitle">
            Dummy ipsum dolor sit amet, consectetur adipiscing elit
          </p>
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
            <div class="quote-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0004 24.0002C24.5308 24.0002 25.0395 23.7895 25.4146 23.4144C25.7896 23.0393 26.0004 22.5306 26.0004 22.0002V17.1162C26.0004 16.5857 25.7896 16.077 25.4146 15.702C25.0395 15.3269 24.5308 15.1162 24.0004 15.1162H21.2244C21.2244 14.4135 21.2657 13.7109 21.3484 13.0082C21.4724 12.2642 21.679 11.6028 21.9684 11.0242C22.2577 10.4455 22.6304 9.99018 23.0864 9.65818C23.5397 9.28618 24.1184 9.10018 24.8224 9.10018V6.00018C23.665 6.00018 22.6517 6.24818 21.7824 6.74418C20.919 7.23393 20.1773 7.91209 19.6124 8.72818C19.0436 9.62648 18.6248 10.6114 18.3724 11.6442C18.1171 12.7837 17.9923 13.9485 18.0004 15.1162V22.0002C18.0004 22.5306 18.2111 23.0393 18.5862 23.4144C18.9612 23.7895 19.4699 24.0002 20.0004 24.0002H24.0004ZM12.0004 24.0002C12.5308 24.0002 13.0395 23.7895 13.4146 23.4144C13.7897 23.0393 14.0004 22.5306 14.0004 22.0002V17.1162C14.0004 16.5857 13.7897 16.077 13.4146 15.702C13.0395 15.3269 12.5308 15.1162 12.0004 15.1162H9.22436C9.22436 14.4135 9.2657 13.7109 9.34836 13.0082C9.4737 12.2642 9.68037 11.6028 9.96836 11.0242C10.2577 10.4455 10.6304 9.99018 11.0864 9.65818C11.5397 9.28618 12.1184 9.10018 12.8224 9.10018V6.00018C11.665 6.00018 10.6517 6.24818 9.78236 6.74418C8.91905 7.23393 8.17731 7.91209 7.61236 8.72818C7.04359 9.62648 6.62478 10.6114 6.37236 11.6442C6.11713 12.7837 5.99233 13.9485 6.00036 15.1162V22.0002C6.00036 22.5306 6.21108 23.0393 6.58615 23.4144C6.96122 23.7895 7.46993 24.0002 8.00036 24.0002H12.0004Z" fill="#0AB7A8"/>
              </svg>
            </div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="client-info">
              <h4 class="client-name">{{ testimonial.clientName }}</h4>
              <p class="client-title">{{ testimonial.clientTitle }}</p>
            </div>
            <div class="testimonial-footer">
              <div class="project-details">
                <span class="rating-text">{{ testimonial.rating }}</span>
                <p>{{ testimonial.project }}</p>
                <p>{{ testimonial.country }}</p>
              </div>
              <div class="test-logo">
                <img :src="testImages[index]" :alt="`testImage${index}`" />
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

const target3 = shallowRef(null)
const carouselContainer = shallowRef(null)
const testimonialsTrack = shallowRef(null)
const scrollPosition = ref(0)
const currentSlide = ref(0)
const totalSlides = 4

const testLogos = import.meta.glob('/src/assets/home/test logos/*.{png,jpg,jpeg,svg}', { eager: true })
const testImages = Object.values(testLogos).map((module) => module.default)

const testimonials = [
  {
    text: "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
    clientName: "BRANDON LAU",
    clientTitle: "(CEO), KIRI Journey",
    rating: "Star Rating - 5/5",
    project: "Project - E-commerce Development",
    country: "Country - HongKong"
  },
  {
    text: "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution that helped us automate workflows, and get an analytics dashboard for swift decision-making.",
    clientName: "MARC DOLLON",
    clientTitle: "CTO, MasterStudy",
    rating: "Star Rating - 5/5",
    project: "Project - SaaS-Based Cloud ERP",
    country: "Country - United States"
  },
  {
    text: "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably. Onwards and upwards with Chromezy!",
    clientName: "JEET OBERAI",
    clientTitle: "(Entrepreneur), PayLoan",
    rating: "Star Rating - 4.8/5",
    project: "Project - Product Development",
    country: "Country - Singapore"
  },
  {
    text: "Exceptional service and innovative solutions. Chromezy transformed our digital presence with cutting-edge technology and user-centric design.",
    clientName: "SARAH CHEN",
    clientTitle: "CTO, TechFlow",
    rating: "Star Rating - 5/5",
    project: "Project - Digital Transformation",
    country: "Country - Canada"
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
  min-height: 82vh;
  position: relative;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

.quote-icon {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1rem;
  margin-bottom: 2rem;
  flex-grow: 1;
  font-weight: 600;
  line-height: 26px;
  color: #ffffff;
}

.client-info {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: right;
}

.client-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.client-title {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.rating-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.project-details {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
}

.project-details p {
  margin: 0.25rem 0;
}

.test-logo img {
  max-height: 40px;
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
