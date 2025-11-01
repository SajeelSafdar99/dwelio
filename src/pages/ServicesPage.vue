<script setup>
import RealEstateSection from 'components/service/RealEstateSection.vue'
import PropertySection from 'components/service/PropertySection.vue'
import { icons } from 'assets/icons/index.js'
import SmartInvestment from 'components/service/SmartInvestment.vue'
import ExploreProperties from 'components/real-estate/ExploreProperties.vue'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FloatingImages from 'components/home/FloatingImages.vue'
const realEStateRef = ref(null)
const propertySection2Ref = ref(null)
const smartInvestmentRef = ref(null)
const explorePropertiesRef = ref(null)
let lenisInstance = null
let rafFunction = null
const sections = computed(() => [
  { name: 'target0', ref: realEStateRef},
  { name: 'target1', ref: document.getElementById('real-estate')},
  { name: 'target2', ref: propertySection2Ref.value?.target2 },
  { name: 'target3', ref: smartInvestmentRef.value?.target3 },
  { name: 'target4', ref: explorePropertiesRef.value?.target4 }
]);
const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    target0: Object.freeze({ right: '100px', top: '80px', scale: 1.2, opacity: 0.85, rotation: 8, visible: true, blur: '3px' }),
    target1: Object.freeze({ right: '280px', top: '350px', scale: 1.6, opacity: 0.95, rotation: -15, visible: true, blur: '7px' }),
    target2: Object.freeze({ right: '180px', top: '550px', scale: 2.1, opacity: 0.9, rotation: 5, visible: true, blur: '12px' }),
    target3: Object.freeze({ right: '50px', top: '-100px', scale: 1.4, opacity: 1, rotation: -2, visible: true, blur: '20px' }),
    target4: Object.freeze({ right: '350px', top: '250px', scale: 1.3, opacity: 0.8, rotation: 18, visible: true, blur: '8px' }),
  }),
  image2: Object.freeze({
    target0: Object.freeze({ top: '1050px', right: '200px', scale: 1.8, opacity: 0.5, rotation: 12, visible: true, blur: '6px' }),
    target1: Object.freeze({ top: '650px', right: '250px', scale: 1.5, opacity: 1, rotation: -5, visible: true, blur: '5px' }),
    target2: Object.freeze({ top: '-200px', right: '150px', scale: 0.8, opacity: 0.8, rotation: 30, visible: true, blur: '3px' }),
    target3: Object.freeze({ left: '80px', top: '70px', scale: 0.3, opacity: 0.2, rotation: 5, visible: false, blur: '2px' }),
    target4: Object.freeze({ top: '400px', right: '100px', scale: 1.1, opacity: 0.9, rotation: -10, visible: true, blur: '4px' }),
  }),
  image3: Object.freeze({
    target0: Object.freeze({
      left: '50px',
      top: '50px',
      scale: 0.1, // Initial state remains very small
      opacity: 0,
      rotation: 0,
      visible: false,
      blur: '0px',
    }),
    target1: Object.freeze({
      left: '280px',
      top: '150px',
      scale: 0.45, // Reduced scale
      opacity: 0.8,
      rotation: -25, // Increased rotation
      visible: true,
      blur: '2px',
    }),
    target2: Object.freeze({
      left: '100px',
      top: '450px',
      scale: 0.65, // Reduced scale, maximum visible size
      opacity: 0.9,
      rotation: 18, // Increased rotation
      visible: true,
      blur: '4px',
    }),
    target3: Object.freeze({
      left: '350px',
      top: '100px',
      scale: 0.55, // Reduced scale
      opacity: 0.7,
      rotation: -12, // Increased rotation
      visible: true,
      blur: '1px',
    }),
    target4: Object.freeze({
      left: '180px',
      top: '600px',
      scale: 0.4, // Small scale for the final stage
      opacity: 0.85,
      rotation: 30, // Increased rotation
      visible: true,
      blur: '3px',
    }),
  }),
  image4: Object.freeze({
    target0: Object.freeze({ left: '-300px', top: '120px', scale: 0.9, opacity: 0.8, rotation: 3, visible: true, blur: '8px' }),
    target1: Object.freeze({ left: '-200px', top: '50px', scale: 0.6, opacity: 1, rotation: 8, visible: true, blur: '5px' }),
    target2: Object.freeze({ left: '-320px', top: '100px', scale: 0.3, opacity: 0.7, rotation: -10, visible: true, blur: '22px' }),
    target3: Object.freeze({ left: '-350px', top: '280px', scale: 1.1, opacity: 1, rotation: 0, visible: true, blur: '15px' }),
    target4: Object.freeze({ left: '-250px', top: '400px', scale: 0.8, opacity: 0.9, rotation: 15, visible: true, blur: '10px' }),
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
    <RealEstateSection ref="realEStateRef"/>
    <PropertySection
      :useTarget1="true"
      title="Unlock Property Value"
      description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"

      :topCards="[
    { icon: icons.signal, title: 'Valuation Mastery', text: 'Discover the true worth of your property with our expert valuation services.' },
    { icon: icons.chart, title: 'Strategic Marketing', text: 'Selling a property requires more than just a listing.' },
    { icon: icons.stack, title: 'Negotiation Wizardry', text: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.' }
  ]"
      :bottomCards="[
    { icon: icons.bell, title: 'Closing Success', text: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.' },
    { title: 'Unlock the Value of Your Property Today', text: 'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.' }
  ]"
    />
    <PropertySection
      :useTarget1="false"
      title="Effortless Property Management"
      description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      ref="propertySection2Ref"
      :topCards="[
    { icon: icons.remainder, title: 'Tenant Harmony', text: 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.' },
    { icon: icons.server, title: 'Maintenance Ease', text: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.' },
    { icon: icons.ai, title: 'Financial Peace of Mind', text: 'Managing property finances can be complex. Our financial experts take care of rent collection' }
  ]"
      :bottomCards="[
    { icon: icons.sun, title: 'Legal Guardian', text: 'Stay compliant with property laws and regulations effortlessly.' },
    { title: 'Experience Effortless Property Management', text: 'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.' }
  ]"
    />
    <SmartInvestment ref="smartInvestmentRef" />
    <ExploreProperties ref="explorePropertiesRef"/>
  </q-page>
</template>

<style scoped></style>
