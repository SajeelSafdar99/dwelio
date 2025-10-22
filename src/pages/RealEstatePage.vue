<script setup>
import SellPropertyForm from 'components/real-estate/SellPropertyForm.vue'
import FindPropertySection from 'components/real-estate/FindPropertySection.vue'
import DiscoverProperties from 'components/real-estate/DiscoverProperties.vue'
import ExploreProperties from 'components/real-estate/ExploreProperties.vue'
import { ref,  onMounted, onUnmounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import FloatingImages from 'components/home/FloatingImages.vue'
const findPropertyRef = ref(null)
const discoverPropertyRef = ref(null)
const sellPropertyRef = ref(null)
let lenisInstance = null
let rafFunction = null
const sections = computed(() => [
  { name: 'target0', ref: findPropertyRef },
  { name: 'target1', ref: discoverPropertyRef.value?.target1 },
  { name: 'target2', ref: sellPropertyRef.value?.target2 },
  { name: 'target3', ref: document.getElementById('cta-section') },
])
const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    target0: Object.freeze({ right: '80px', top: '120px', scale: 1.1, opacity: 0.95, rotation: 5, visible: true, blur: '4px' }),
    target1: Object.freeze({ right: '240px', top: '380px', scale: 1.4, opacity: 1, rotation: -10, visible: true, blur: '6px' }),
    target2: Object.freeze({ right: '150px', top: '520px', scale: 1.9, opacity: 0.9, rotation: 8, visible: true, blur: '10px' }),
    target3: Object.freeze({ right: '20px', top: '-80px', scale: 1.3, opacity: 1, rotation: 0, visible: true, blur: '18px' }),
  }),
  image2: Object.freeze({
    target0: Object.freeze({ top: '1100px', right: '180px', scale: 2, opacity: 0.4, rotation: 10, visible: true, blur: '5px' }),
    target1: Object.freeze({ top: '580px', right: '220px', scale: 1.8, opacity: 1, rotation: -8, visible: true, blur: '4px' }),
    target2: Object.freeze({ top: '-260px', right: '190px', scale: 1, opacity: 0.7, rotation: 25, visible: true, blur: '2px' }),
    target3: Object.freeze({ left: '100px', top: '50px', scale: 0.2, opacity: 0.3, rotation: 0, visible: false, blur: '3px' }),
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
  }),
  image4: Object.freeze({
    target0: Object.freeze({ left: '-320px', top: '150px', scale: 1, opacity: 0.9, rotation: 0, visible: true, blur: '10px' }),
    target1: Object.freeze({ left: '-250px', top: '0px', scale: 0.7, opacity: 1, rotation: 5, visible: true, blur: '6px' }),
    target2: Object.freeze({ left: '-290px', top: '80px', scale: 0.4, opacity: 0.9, rotation: -8, visible: true, blur: '25px' }),
    target3: Object.freeze({ left: '-330px', top: '260px', scale: 1, opacity: 1, rotation: 3, visible: true, blur: '14px' }),
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

<template>
<q-page>
  <FloatingImages :configs="floatingImageConfigs" :sections="sections" />
  <FindPropertySection ref="findPropertyRef"/>
  <DiscoverProperties  ref="discoverPropertyRef"/>
<SellPropertyForm ref="sellPropertyRef"/>
<ExploreProperties :fromEState="true"/>
</q-page>
</template>

<style scoped>

</style>
