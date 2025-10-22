<template>
  <q-page class="q-pa-none">
    <FloatingImages :configs="floatingImageConfigs" :sections="sections" />
    <AboutUs ref="aboutUsRef"/>
    <MissionVision ref="missionVisionRef"/>
    <TeamCarousel ref="teamCarouselRef"/>
    <TrustNumbers ref="trustMembersRef" />
    <WhyChooseUs ref="whyChooseUsRef"/>
  </q-page>
</template>

<script setup>
import AboutUs from '../components/about/AboutUs.vue'
import MissionVision from 'components/about/MissionVision.vue'
import TeamCarousel from 'components/about/TeamCarousel.vue'
import TrustNumbers from 'components/about/TrustNumbers.vue'
import WhyChooseUs from 'components/about/WhyChooseUs.vue'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingImages from 'components/home/FloatingImages.vue'
const aboutUsRef = ref(null)
const missionVisionRef = ref(null)
const teamCarouselRef = ref(null)
const trustMembersRef = ref(null)
const whyChooseUsRef = ref(null)

let lenisInstance = null
let rafFunction = null
const sections = computed(() => [
  { name: 'target0', ref: aboutUsRef },
  { name: 'target1', ref: missionVisionRef.value?.target1 },
  { name: 'target2', ref: teamCarouselRef.value?.target2 },
  { name: 'target3', ref: trustMembersRef.value?.target3 },
  { name: 'target4', ref: whyChooseUsRef.value?.target4 },

])
const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    target0: Object.freeze({ right: '80px', top: '120px', scale: 1.1, opacity: 0.95, rotation: 5, visible: true, blur: '4px' }),
    target1: Object.freeze({ right: '240px', top: '380px', scale: 1.4, opacity: 1, rotation: -10, visible: true, blur: '6px' }),
    target2: Object.freeze({ right: '150px', top: '520px', scale: 1.9, opacity: 0.9, rotation: 8, visible: true, blur: '10px' }),
    target3: Object.freeze({ right: '20px', top: '-80px', scale: 1.3, opacity: 1, rotation: 0, visible: true, blur: '18px' }),
    target4: Object.freeze({ right: '300px', top: '240px', scale: 1.6, opacity: 0.85, rotation: -15, visible: true, blur: '7px' }),
  }),

  image2: Object.freeze({
    target0: Object.freeze({ top: '1100px', right: '180px', scale: 2, opacity: 0.4, rotation: 10, visible: true, blur: '5px' }),
    target1: Object.freeze({ top: '580px', right: '220px', scale: 1.8, opacity: 1, rotation: -8, visible: true, blur: '4px' }),
    target2: Object.freeze({ top: '-260px', right: '190px', scale: 1, opacity: 0.7, rotation: 25, visible: true, blur: '2px' }),
    target3: Object.freeze({ left: '100px', top: '50px', scale: 0.2, opacity: 0.3, rotation: 0, visible: false, blur: '3px' }),
    target4: Object.freeze({ top: '320px', right: '60px', scale: 1.4, opacity: 0.8, rotation: -20, visible: true, blur: '6px' }),
  }),

  image3: Object.freeze({
    target0: Object.freeze({
      left: '0',
      top: '0',
      scale: 0,
      opacity: 0,
      rotation: 0,
      visible: false,
      blur: '0px',
    }),
    target1: Object.freeze({
      left: '260px',
      top: '180px',
      scale: 0.6,
      opacity: 0.8,
      rotation: -10,
      visible: true,
      blur: '2px',
    }),
    target2: Object.freeze({
      left: '180px',
      top: '360px',
      scale: 0.7,
      opacity: 0.9,
      rotation: 8,
      visible: true,
      blur: '3px',
    }),
    target3: Object.freeze({
      left: '300px',
      top: '120px',
      scale: 0.5,
      opacity: 0.65,
      rotation: -5,
      visible: true,
      blur: '1.5px',
    }),
    target4: Object.freeze({
      left: '100px',
      top: '420px',
      scale: 0.8,
      opacity: 1,
      rotation: 15,
      visible: true,
      blur: '4px',
    }),
  }),

  image4: Object.freeze({
    target0: Object.freeze({ left: '-320px', top: '150px', scale: 1, opacity: 0.9, rotation: 0, visible: true, blur: '10px' }),
    target1: Object.freeze({ left: '-250px', top: '0px', scale: 0.7, opacity: 1, rotation: 5, visible: true, blur: '6px' }),
    target2: Object.freeze({ left: '-290px', top: '80px', scale: 0.4, opacity: 0.9, rotation: -8, visible: true, blur: '25px' }),
    target3: Object.freeze({ left: '-330px', top: '260px', scale: 1, opacity: 1, rotation: 3, visible: true, blur: '14px' }),
    target4: Object.freeze({ left: '-200px', top: '180px', scale: 0.9, opacity: 0.85, rotation: -12, visible: true, blur: '8px' }),
  }),
});
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
