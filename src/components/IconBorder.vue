<template>
  <div
    class="icon-wrap"
    :style="{
      width: size + 'px',
      height: size + 'px'
    }"
  >
    <img
      class="icon"
      :src="icon"
      :alt="alt"
      :style="{
        width: iconSize + 'px',
        height: iconSize + 'px'
      }"
    />
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  alt: { type: String, default: '' },
  size: { type: Number, default: 50 },       // outer circle size
  iconSize: { type: Number, default: 28 }    // icon inside
})
</script>

<style scoped>
.icon-wrap {
  position: relative;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Border rings only (center transparent) */
.icon-wrap::before,
.icon-wrap::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

/* Inner border gradient (top-left/bottom-right brighter) */
.icon-wrap::before {
  padding: 2px;
  background: conic-gradient(
    from 125deg,
    rgb(255, 255, 255) 0deg,
    rgba(255, 255, 255, 0) 90deg,
    rgb(255, 255, 255) 180deg,
    rgba(255, 255, 255, 0) 270deg,
    rgb(255, 255, 255) 360deg
  );
}

/* Outer border gradient (top-right/bottom-left brighter) */
.icon-wrap::after {
  inset: -10px;
  background: conic-gradient(
    from 45deg,
    rgb(255, 255, 255) 0deg,
    rgba(255, 255, 255, 0) 90deg,
    rgb(255, 255, 255) 180deg,
    rgba(255, 255, 255, 0) 270deg,
    rgb(255, 255, 255) 360deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
  padding: 2px;
}

.icon {
  position: relative;
  z-index: 1;
}
</style>
