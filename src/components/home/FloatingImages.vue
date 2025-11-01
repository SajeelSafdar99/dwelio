<template>
  <div
    v-for="(key, index) in imageKeys"
    :key="`floating-wrapper-${index}`"
    class="floating-image-wrapper"
    :ref="el => floatingImageRefs[index] = el"
    :style="{
      position: 'fixed',
      mixBlendMode: index === 3 ? 'plus-lighter' : 'normal',
      zIndex: -999,
      pointerEvents: 'none',
    }"
  >
    <img
      :src="floatingImageSources[index % floatingImageSources.length]"
      :alt="`Floating decoration ${index + 1}`"
      class="floating-image"
      :style="{ width: '100%', height: '100%', objectFit: 'cover', transform: 'translate3d(0,0,0)' }"
    />
  </div>
</template>

<script setup>
import { computed, shallowRef, onMounted, onUnmounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  configs: {
    type: Object,
    required: true
  },
  sections: {
    type: Array,
    required: true
  }
})

const floatingImageRefs = shallowRef([])
const floatingImageSources = shallowRef([])

const objLogos = import.meta.glob('/src/assets/home/objects/*.{png,jpg,jpeg,svg}', { eager: true })
const floatingImages = Object.values(objLogos).map((module) => module.default)

let lastTargetName = null

const imageKeys = computed(() => Object.keys(props.configs))

const animateFloatingImagesToTarget = (targetName) => {
  if (lastTargetName === targetName) return
  lastTargetName = targetName
console.log(targetName)
  imageKeys.value.forEach((imageKey, index) => {
    const config = props.configs[imageKey][targetName]
    if (!config) return
    const imageWrapperRef = floatingImageRefs.value[index]
    if (!imageWrapperRef) return

    gsap.killTweensOf(imageWrapperRef)
    const imgElement = imageWrapperRef.querySelector('img')
    if (imgElement) gsap.killTweensOf(imgElement)

    if (config.visible) imageWrapperRef.style.display = 'block'

    if (config.left !== undefined) {
      gsap.set(imageWrapperRef, { right: 'auto' })
    } else if (config.right !== undefined) {
      gsap.set(imageWrapperRef, { left: 'auto' })
    }

    if (config.top !== undefined) {
      gsap.set(imageWrapperRef, { bottom: 'auto' })
    } else if (config.bottom !== undefined) {
      gsap.set(imageWrapperRef, { top: 'auto' })
    }

    const animationProps = {
      scale: config.scale,
      rotation: config.rotation,
      opacity: config.visible ? config.opacity : 0,
      duration: 0.8,
      ease: "power2.inOut",
      force3D: true,
      immediateRender: false,
      overwrite: 'auto',
      onComplete: () => {
        imageWrapperRef.style.display = config.visible ? 'block' : 'none'
      }
    }

    if (config.left !== undefined) animationProps.left = config.left
    if (config.right !== undefined) animationProps.right = config.right
    if (config.top !== undefined) animationProps.top = config.top
    if (config.bottom !== undefined) animationProps.bottom = config.bottom

    gsap.to(imageWrapperRef, animationProps)

    if (imgElement && config.blur !== undefined) {
      gsap.to(imgElement, {
        filter: `blur(${config.blur})`,
        duration: 0.8,
        ease: "power2.inOut",
        immediateRender: false
      })
    }
  })
}

const setupScrollTriggers = () => {
  const sectionOrder = props.sections.map(s => s.name)
  props.sections.forEach((section, index) => {
    const refOrEl = section.ref
    const sectionEl =
      refOrEl?.value?.$el ||
      refOrEl?.value ||
      refOrEl?.$el ||
      refOrEl ||
      document.getElementById(section.name)

    if (!sectionEl) return

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top 10%',
      end: 'bottom 30%',
      onEnter: () => {
        const currentIndex = sectionOrder.indexOf(lastTargetName)
        if (currentIndex === -1 || index > currentIndex) {
          animateFloatingImagesToTarget(section.name)
        }
      },
      onEnterBack: () => {
        const currentIndex = sectionOrder.indexOf(lastTargetName)
        if (currentIndex === -1 || index < currentIndex) {
          animateFloatingImagesToTarget(section.name)
        }
      },
      onLeaveBack: () => {
        if (index > 0) {
          const previousSection = props.sections[index - 1]
          const currentIndex = sectionOrder.indexOf(lastTargetName)
          const previousIndex = index - 1
          if (currentIndex === -1 || previousIndex < currentIndex) {
            animateFloatingImagesToTarget(previousSection.name)
          }
        }
      }
    })
  })
}

onMounted(() => {
  floatingImageSources.value = floatingImages
  floatingImageRefs.value = Array(floatingImages.length).fill(null)

  nextTick(() => {
    floatingImageRefs.value.forEach((el, index) => {
      const config = props.configs[`image${index+1}`]?.heroSection || props.configs[`image${index+1}`]?.target0
      if (!config || !el) return
      if (config.left !== undefined) {
        el.style.left = config.left
        el.style.right = 'auto'
      }
      if (config.right !== undefined) {
        el.style.right = config.right
        el.style.left = 'auto'
      }
      if (config.top !== undefined) el.style.top = config.top
      if (config.bottom !== undefined) el.style.bottom = config.bottom

      gsap.set(el, {
        scale: config.scale,
        rotation: config.rotation,
        opacity: config.opacity,
        x: 0,
        y: 0,
      })

      const imgElement = el.querySelector('img')
      if (imgElement && config.blur !== undefined) {
        gsap.set(imgElement, { filter: `blur(${config.blur})` })
      }

      el.style.display = config.visible ? 'block' : 'none'
    })
    setupScrollTriggers()
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
.floating-image-wrapper {
  will-change: transform, opacity;
  backface-visibility: hidden;
}
</style>
