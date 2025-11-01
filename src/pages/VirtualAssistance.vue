<script setup>

import HeroSection from 'components/assistance/HeroSection.vue'
import ComprehensiveAssistants from 'components/assistance/ComprehensiveAssistants.vue'
import WhyChooseUs from 'components/assistance/WhyChooseUs.vue'
import PricingSection from 'components/assistance/PricingSection.vue'
import ReadySection from 'components/assistance/ReadySection.vue'
import { ref,  onMounted, onUnmounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import FloatingImages from 'components/home/FloatingImages.vue'
const heroSectionRef = ref(null)
const comprehensiveAssistantsRef = ref(null)
const whyChooseUsRef = ref(null)
const pricingSectionRef = ref(null)
const readySectionRef = ref(null)
let lenisInstance = null
let rafFunction = null
const sections = computed(() => [
  { name: 'target0', ref: heroSectionRef },
  { name: 'target1', ref: comprehensiveAssistantsRef.value?.target1 },
  { name: 'target2', ref: whyChooseUsRef.value?.target2 },
  { name: 'target3', ref: pricingSectionRef.value?.target3 },
  { name: 'target4' , ref: readySectionRef.value?.target4}
])
const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    target0: Object.freeze({ right: '110px', top: '90px', scale: 1.35, opacity: 0.9, rotation: -12, visible: true, blur: '5px' }),
    target1: Object.freeze({ right: '290px', top: '420px', scale: 1.5, opacity: 0.98, rotation: 18, visible: true, blur: '8px' }),
    target2: Object.freeze({ right: '190px', top: '600px', scale: 2.2, opacity: 0.85, rotation: -6, visible: true, blur: '15px' }),
    target3: Object.freeze({ right: '60px', top: '-120px', scale: 1.6, opacity: 1, rotation: 22, visible: true, blur: '25px' }),
    target4: Object.freeze({ right: '320px', top: '220px', scale: 1.1, opacity: 0.88, rotation: -8, visible: true, blur: '10px' }), // NEW
  }),
  image2: Object.freeze({
    target0: Object.freeze({ top: '950px', right: '150px', scale: 1.7, opacity: 0.55, rotation: 25, visible: true, blur: '7px' }),
    target1: Object.freeze({ top: '680px', right: '280px', scale: 1.9, opacity: 1, rotation: -15, visible: true, blur: '6px' }),
    target2: Object.freeze({ top: '-200px', right: '120px', scale: 0.9, opacity: 0.6, rotation: 40, visible: true, blur: '4px' }),
    target3: Object.freeze({ left: '120px', top: '80px', scale: 0.4, opacity: 0.4, rotation: -20, visible: false, blur: '4px' }),
    target4: Object.freeze({ top: '550px', right: '80px', scale: 1.2, opacity: 0.95, rotation: 10, visible: true, blur: '3px' }), // NEW
  }),
  image3: Object.freeze({
    target0: Object.freeze({
      left: '30px',
      top: '30px',
      scale: 0.1, // Small initial scale
      opacity: 0,
      rotation: 0,
      visible: false,
      blur: '0px',
    }),
    target1: Object.freeze({
      left: '200px',
      top: '250px',
      scale: 0.45, // Reduced scale for large image
      opacity: 0.75,
      rotation: -30,
      visible: true,
      blur: '3px',
    }),
    target2: Object.freeze({
      left: '120px',
      top: '480px',
      scale: 0.6, // Max scale for large image
      opacity: 0.88,
      rotation: 20,
      visible: true,
      blur: '5px',
    }),
    target3: Object.freeze({
      left: '350px',
      top: '150px',
      scale: 0.5, // Reduced scale
      opacity: 0.6,
      rotation: -10,
      visible: true,
      blur: '2px',
    }),
    target4: Object.freeze({
      left: '80px',
      top: '650px',
      scale: 0.4, // Small scale
      opacity: 0.8,
      rotation: 15,
      visible: true,
      blur: '1px',
    }), // NEW
  }),
  image4: Object.freeze({
    target0: Object.freeze({ left: '-350px', top: '100px', scale: 1.1, opacity: 0.95, rotation: 8, visible: true, blur: '12px' }),
    target1: Object.freeze({ left: '-220px', top: '30px', scale: 0.8, opacity: 1, rotation: -15, visible: true, blur: '7px' }),
    target2: Object.freeze({ left: '-300px', top: '150px', scale: 0.5, opacity: 0.8, rotation: 25, visible: true, blur: '30px' }),
    target3: Object.freeze({ left: '-400px', top: '200px', scale: 1.2, opacity: 0.9, rotation: -5, visible: true, blur: '18px' }),
    target4: Object.freeze({ left: '-280px', top: '450px', scale: 0.95, opacity: 1, rotation: 10, visible: true, blur: '11px' }), // NEW
  }),
});onMounted(() => {
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

<template>
<q-page>
  <FloatingImages :configs="floatingImageConfigs" :sections="sections" />
  <HeroSection ref="heroSectionRef"/>
  <ComprehensiveAssistants ref="comprehensiveAssistantsRef"/>
  <WhyChooseUs ref="whyChooseUsRef"/>
  <PricingSection ref="pricingSectionRef" />
  <ReadySection ref="readySectionRef"/>
</q-page>
</template>

<style scoped>

</style>
