<template>
  <div class="background-glow-container">
    <div
      v-for="(ellipse, index) in ellipses"
      :key="index"
      class="ellipse"
      :style="{
        width: ellipse.width,
        height: ellipse.height,
        left: ellipse.left,
        top: ellipse.top,
        right: ellipse.right,
        bottom: ellipse.bottom,
        background: ellipse.gradient,
        opacity: ellipse.opacity,
        filter: ellipse.blur,
      }"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  ellipses: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.background-glow-container {
  position: absolute;
  inset: 0;
  overflow: visible;
  z-index: 0;
}

.ellipse {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
</style>
