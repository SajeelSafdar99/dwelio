<template>
  <q-page class="home-page">
    <FloatingImages :configs="floatingImageConfigs" :sections="sections" />
    <HeroSection ref="heroSectionRef" />
    <CompanyLogos ref="companyLogosRef" />
    <ProductEngineering ref="productEngineeringRef" />
    <Testimonials ref="testimonialsRef" />
    <SuccessStories ref="successStoriesRef" />
    <InnovativeTech ref="innovativeTechRef" />
    <FeaturedInsights ref="featuredInsightsRef" />
    <ContactSection ref="contactSectionRef" />
  </q-page>
</template>

<script setup>
import { ref,  onMounted, onUnmounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import FloatingImages from '../components/home/FloatingImages.vue'
import HeroSection from '../components/home/HeroSection.vue'
import CompanyLogos from '../components/home/CompanyLogos.vue'
import ProductEngineering from '../components/home/ProductEngineering.vue'
import Testimonials from '../components/home/UserTestimonials.vue'
import SuccessStories from '../components/home/SuccessStories.vue'
import InnovativeTech from '../components/home/InnovativeTech.vue'
import FeaturedInsights from '../components/home/FeaturedInsights.vue'
import ContactSection from '../components/home/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

const heroSectionRef = ref(null)
const companyLogosRef = ref(null)
const productEngineeringRef = ref(null)
const testimonialsRef = ref(null)
const successStoriesRef = ref(null)
const innovativeTechRef = ref(null)
const featuredInsightsRef = ref(null)
const contactSectionRef = ref(null)

const floatingImageConfigs = Object.freeze({
  image1: Object.freeze({
    heroSection: Object.freeze({ right: '0', top: '150px', scale: 1.2, opacity: 1, rotation: 0, visible: true, blur: '0px' }),
    target1: Object.freeze({ top: '400px', right: '250px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '0px' }),
    target2: Object.freeze({ right: '210px', top: '365px', scale: 2.1, opacity: 1, rotation: 0, visible: true, blur: '0px' }),
    target3: Object.freeze({ right: '55px', top: '-160px', scale: 1.2, opacity: 1, rotation: 0, visible: true, blur: '12px' }),
    target4: Object.freeze({ right: '218px', top: '182px', scale: 1.7, opacity: 1, rotation: 0, visible: true, blur: '15px' }),
    target5: Object.freeze({ right: '200px', top: '350px', scale: 1.8, opacity: 0.6, rotation: 0, visible: true, blur: '35px' }),
    target6: Object.freeze({ right: '575px', top: '560px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '20px' }),
    target7: Object.freeze({ right: '800px', top: '350px', scale: 1.5, opacity: 1, rotation: 0, visible: true, blur: '40px' }),
  }),
  image2: Object.freeze({
    heroSection: Object.freeze({ top: '1300px', right: '210px', scale: 2.1, opacity: 0, rotation: 0, visible: true, blur: '6px' }),
    target1: Object.freeze({ top: '600px', right: '210px', scale: 2.1, opacity: 1, rotation: 0, visible: true, blur: '6px' }),
    target2: Object.freeze({ right: '210px', top: '-300px', scale: 1, opacity: 0.6, rotation: 25, visible: true, blur: '0.5px' }),
    target3: Object.freeze({ left: '0px', top: '0px', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '2px' }),
    target4: Object.freeze({ left: '0px', top: '0px', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' }),
    target5: Object.freeze({ left: '180px', top: '400px', scale: 0, opacity: 0, rotation: 0, visible: true, blur: '3px' }),
    target6: Object.freeze({ left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' }),
    target7: Object.freeze({ left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '1px' }),
  }),
  image3: Object.freeze({
    heroSection: Object.freeze({ left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0.5px' }),
    target1: Object.freeze({ left: '320px', top: '180px', scale: 0.9, opacity: 0.7, rotation: -15, visible: false, blur: '1px' }),
    target2: Object.freeze({ left: '180px', top: '350px', scale: 1.2, opacity: 0.8, rotation: 10, visible: false, blur: '2px' }),
    target3: Object.freeze({ left: '250px', top: '120px', scale: 1, opacity: 0.5, rotation: 0, visible: false, blur: '0px' }),
    target4: Object.freeze({ left: '-900px', top: '300px', scale: 0.3, opacity: 0, rotation: -60, visible: true, blur: '0px' }),
    target5: Object.freeze({ left: '-900px', top: '-280px', scale: 0.4, opacity: 1, rotation: 0, visible: true, blur: '0px' }),
    target6: Object.freeze({ left: '-1090px', top: '-450px', scale: 0.4, opacity: 1, rotation: -80, visible: true, blur: '0px' }),
    target7: Object.freeze({ left: '-800px', top: '-1110px', scale: 0.3, opacity: 1, rotation: 0, visible: true, blur: '0px' }),
  }),
  image4: Object.freeze({
    heroSection: Object.freeze({ left: '-350px', top: '170px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '12px' }),
    target1: Object.freeze({ left: '-250px', top: '0px', scale: 0.6, opacity: 1, rotation: 0, visible: true, blur: '8px' }),
    target2: Object.freeze({ left: '-270px', top: '45px', scale: 0.3, opacity: 1, rotation: 0, visible: true, blur: '60px' }),
    target3: Object.freeze({ left: '-300px', top: '230px', scale: 0.8, opacity: 1, rotation: 0, visible: true, blur: '15px' }),
    target4: Object.freeze({ left: '-400px', top: '150px', scale: 1.4, opacity: 1, rotation: 0, visible: true, blur: '15px' }),
    target5: Object.freeze({ left: '-400px', top: '100px', scale: 1, opacity: 0, rotation: 0, visible: true, blur: '15px' }),
    target6: Object.freeze({ left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' }),
    target7: Object.freeze({ left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '8px' }),
  })
})


const contactSectionConfig = Object.freeze({
  target5: Object.freeze({
    marginTop: '0px',
    mailIconScale: 1.5,
    mailIconOpacity: 0,
    avatarScale: 0.2,
    avatarOpacity: 0,
    mailIconRight: '75px',
    formBoxMargin: '0px 55px 0px 0px',
    mailIconTop: '-50px',
    formBoxOverflow: 'hidden',
    formBoxClipPath: 'inset(100%)',
    avatarRight: '0px'
  }),
  target6: Object.freeze({
    marginTop: '0px',
    mailIconScale: 1.5,
    mailIconOpacity: 1,
    avatarScale: 0.2,
    avatarOpacity: 0.7,
    mailIconRight: '75px',
    formBoxMargin: '0px 55px 0px 0px',
    mailIconTop: '-50px',
    formBoxOverflow: 'visible',
    formBoxClipPath: 'inset(-10%)',
    avatarRight: '0px'
  }),
  target7: Object.freeze({
    marginTop: '0px',
    mailIconScale: 1,
    mailIconOpacity: 1,
    avatarScale: 1,
    avatarOpacity: 1,
    formBoxMargin: '50px 0px 50px -100px',
    mailIconTop: '-30px',
    mailIconRight: '-30px',
    formBoxOverflow: 'visible',
    formBoxClipPath: 'inset(0% 0% 0% 0%)',
    avatarRight: '0px'
  })
})

const sections = computed(() => [
  { name: 'heroSection', ref: heroSectionRef },
  { name: 'target1', ref: companyLogosRef.value?.target1 },
  { name: 'target2', ref: productEngineeringRef.value?.target2 },
  { name: 'target3', ref: testimonialsRef.value?.target3 },
  { name: 'target4', ref: successStoriesRef.value?.target4 },
  { name: 'target5', ref: innovativeTechRef.value?.target5 },
  { name: 'target6', ref: featuredInsightsRef.value?.target6 },
  { name: 'target7', ref: contactSectionRef.value?.target7 },
])

let lenisInstance = null
let rafFunction = null
let lastContactTarget = null

const animateContactSection = (targetName) => {
  if (lastContactTarget === targetName) return

  lastContactTarget = targetName

  const config = contactSectionConfig[targetName]
  if (!config) return

  const contactWrapper = contactSectionRef.value?.target7?.value?.$el || contactSectionRef.value?.target7?.value
  if (contactWrapper) {
    gsap.to(contactWrapper, {
      marginTop: config.marginTop,
      duration: 0.6,
      ease: "power2.inOut",
      force3D: true,
      overwrite: 'auto'
    })
  }

  if (contactSectionRef.value?.mailIcon) {
    gsap.to(contactSectionRef.value.mailIcon, {
      scale: config.mailIconScale,
      opacity: config.mailIconOpacity,
      top: config.mailIconTop,
      right: config.mailIconRight,
      duration: 0.6,
      ease: "power2.inOut",
      force3D: true,
      overwrite: 'auto'
    })
  }

  if (contactSectionRef.value?.avatarImg) {
    gsap.to(contactSectionRef.value.avatarImg, {
      scale: config.avatarScale,
      opacity: config.avatarOpacity,
      right: config.avatarRight,
      duration: 0.6,
      ease: "power2.inOut",
      force3D: true,
      overwrite: 'auto'
    })
  }

  if (contactSectionRef.value?.formBox) {
    gsap.to(contactSectionRef.value.formBox, {
      margin: config.formBoxMargin,
      clipPath: config.formBoxClipPath,
      duration: 0.6,
      ease: "power2.inOut",
      overwrite: 'auto'
    })
  }
}

const setupContactScrollTriggers = async () => {
  const contactSections = [
    { name: 'target5', ref: innovativeTechRef.value?.target5 },
    { name: 'target6', ref: featuredInsightsRef.value?.target6 },
    { name: 'target7', ref: contactSectionRef.value?.target7 }
  ]

  const sectionOrder = contactSections.map(s => s.name)

  contactSections.forEach((section, index) => {
    const sectionEl = section.ref?.$el || section.ref

    if (!sectionEl) {
      console.warn(`[SetupContactScrollTriggers] ⚠️ Skipping ${section.name} — ref not found.`)
      return
    }

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        const currentIndex = sectionOrder.indexOf(lastContactTarget)
        if (currentIndex === -1 || index > currentIndex) {
          animateContactSection(section.name)
        }
      },
      onEnterBack: () => {
        const currentIndex = sectionOrder.indexOf(lastContactTarget)
        if (currentIndex === -1 || index < currentIndex) {
          animateContactSection(section.name)
        }
      },
      onLeaveBack: () => {
        if (index > 0) {
          const previousSection = contactSections[index - 1]
          const currentIndex = sectionOrder.indexOf(lastContactTarget)
          const previousIndex = index - 1
          if (currentIndex === -1 || previousIndex < currentIndex) {
            animateContactSection(previousSection.name)
          }
        }
      }
    })
  })
}
const setupTestimonialScrollTriggers = () => {
  const target3El = testimonialsRef.value?.target3?.$el || testimonialsRef.value?.target3
  const target4El = successStoriesRef.value?.target4?.$el || successStoriesRef.value?.target4


  if (target3El) {
    ScrollTrigger.create({
      trigger: target3El,
      start: 'top 70%',
      onEnter: () => testimonialsRef.value?.nextSlide?.(),
      onLeaveBack: () => testimonialsRef.value?.previousSlide?.()
    })
  } else {
    console.warn('[Testimonials] ⚠️ target3 ref not found.')
  }

  if (target4El) {
    ScrollTrigger.create({
      trigger: target4El,
      start: 'top 70%',
      onEnter: () => testimonialsRef.value?.previousSlide?.(),
      onLeaveBack: () => testimonialsRef.value?.nextSlide?.()
    })
  } else {
    console.warn('[Testimonials] ⚠️ target4 ref not found.')
  }
}


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
      setupContactScrollTriggers()
      setupTestimonialScrollTriggers()
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

<style scoped>
.home-page {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'sora', sans-serif;
}
</style>
