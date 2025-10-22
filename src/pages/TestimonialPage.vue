<template>
  <q-page>
    <FloatingImages :configs="floatingImageConfigs" :sections="sections" />
    <TestimonialsSection ref="testimonialsSectionRef"/>
    <DreamCarousel ref="dreamCarouselRef" title="find your dream homes" subtitle="Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements. Our experienced team of professionals ensures you receive outstanding results that consistently exceed your expectations." />
    <UserTestimonials :fromTestimonials="true"/>
  </q-page>
</template>

<style scoped></style>
<script setup>
import TestimonialsSection from 'components/testimonial/TestimonialsSection.vue'
import UserTestimonials from 'components/home/UserTestimonials.vue'
import { ref,  onMounted, onUnmounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import FloatingImages from 'components/home/FloatingImages.vue'
import DreamCarousel from 'components/testimonial/DreamCarousel.vue'
const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    target0: Object.freeze({
      right: '110px',
      top: '90px',
      scale: 1.35,
      opacity: 0.9,
      rotation: -12,
      visible: true,
      blur: '5px',
    }),
    target1: Object.freeze({
      right: '290px',
      top: '420px',
      scale: 1.5,
      opacity: 0.98,
      rotation: 18,
      visible: true,
      blur: '8px',
    }),
    target2: Object.freeze({
      right: '180px',
      top: '260px',
      scale: 1.25,
      opacity: 0.8,
      rotation: 5,
      visible: true,
      blur: '4px',
    }),
  }),

  image2: Object.freeze({
    target0: Object.freeze({
      top: '950px',
      right: '150px',
      scale: 1.7,
      opacity: 0.55,
      rotation: 25,
      visible: true,
      blur: '7px',
    }),
    target1: Object.freeze({
      top: '680px',
      right: '280px',
      scale: 1.9,
      opacity: 1,
      rotation: -15,
      visible: true,
      blur: '6px',
    }),
    target2: Object.freeze({
      top: '800px',
      right: '210px',
      scale: 1.6,
      opacity: 0.7,
      rotation: 10,
      visible: true,
      blur: '5px',
    }),
  }),

  image3: Object.freeze({
    target0: Object.freeze({
      left: '30px',
      top: '30px',
      scale: 0.1,
      opacity: 0,
      rotation: 0,
      visible: false,
      blur: '0px',
    }),
    target1: Object.freeze({
      left: '200px',
      top: '250px',
      scale: 0.45,
      opacity: 0.75,
      rotation: -30,
      visible: true,
      blur: '3px',
    }),
    target2: Object.freeze({
      left: '120px',
      top: '180px',
      scale: 0.35,
      opacity: 0.6,
      rotation: -10,
      visible: true,
      blur: '2px',
    }),
  }),

  image4: Object.freeze({
    target0: Object.freeze({
      left: '-350px',
      top: '100px',
      scale: 1.1,
      opacity: 0.95,
      rotation: 8,
      visible: true,
      blur: '12px',
    }),
    target1: Object.freeze({
      left: '-220px',
      top: '30px',
      scale: 0.8,
      opacity: 1,
      rotation: -15,
      visible: true,
      blur: '7px',
    }),
    target2: Object.freeze({
      left: '-280px',
      top: '160px',
      scale: 0.9,
      opacity: 0.85,
      rotation: 3,
      visible: true,
      blur: '5px',
    }),
  }),
});
const testimonialsSectionRef = ref(null)
const dreamCarouselRef = ref(null)
let lenisInstance = null
let rafFunction = null
const sections = computed(() => [
  { name: 'target0', ref: testimonialsSectionRef.value?.target0 },
  { name: 'target1', ref: dreamCarouselRef.value?.target1 },
  { name: 'target2', ref: document.getElementById('user-testimonial') },
])


onMounted(() => {
  nextTick(() => {
    lenisInstance = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    rafFunction = (time) => {
      if (lenisInstance) {
        lenisInstance.raf(time * 1000)
      }
    }

    gsap.ticker.add(rafFunction)
    gsap.ticker.lagSmoothing(0)

    lenisInstance.on('scroll', ScrollTrigger.update)

    setTimeout(() => {
      ScrollTrigger.refresh()
      console.log('Sections status:', sections.value.map(s => ({ name: s.name, element: !!s.ref })))
    }, 100)
  })
})

onUnmounted(() => {
  if (rafFunction) {
    gsap.ticker.remove(rafFunction)
    rafFunction = null
  }

  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }

  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

</script>


