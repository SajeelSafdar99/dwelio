<template>
  <section class="success-stories" ref="target4">
    <div class="container">
      <div class="stories-content">
        <div class="row q-col-gutter-lg">
          <div class="col-lg-4 col-md-6 col-12">
            <h1 class="display-3 text-white">SUCCESS<br />STORIES</h1>
            <p class="text-white">
              Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div class="col-lg-4 col-md-6 col-12" v-for="(story, index) in stories" :key="index">
            <div class="card-container position-relative">
              <img :src="storiesImages[index]" alt="Success Story" class="card-image" />
              <span class="success-badge">Success Stories</span>
              <div class="arrow-icon">
                <q-icon name="north_east" size="16px" class="text-white" />
              </div>
              <div class="sccess-footer position-absolute">
                <h4 class="fw-bold card-title text-black no-margin">{{ story.title }}</h4>
                <p class="text-muted card-description text-black">{{ story.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'

const target4 = shallowRef(null)

const storiesLogo = import.meta.glob('/src/assets/home/stories/*.{png,jpg,jpeg,svg}', { eager: true })
const storiesImages = Object.values(storiesLogo).map((module) => module.default)

const stories = [
  { title: "FinConnect", description: "Customer Relationship Management (CRM)" },
  { title: "FinConnect", description: "Customer Relationship Management (CRM)" },
  { title: "FinConnect", description: "Customer Relationship Management (CRM)" },
  { title: "FinConnect", description: "Customer Relationship Management (CRM)" },
  { title: "FinConnect", description: "Customer Relationship Management (CRM)" }
]

defineExpose({
  target4
})
</script>

<style scoped>
.success-stories {
  min-height: 78vh;
}

.stories-content {
  padding-top: 100px;
}

.success-stories .display-3 {
  font-size: clamp(2.5rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 50px;
}

.success-stories p {
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
}

.card-container {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card-container:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.success-badge {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  color: white;
  z-index: 1;
}

.arrow-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 100%;
  padding: 10px;
}

.sccess-footer {
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  padding: 1rem;
  background: #fff;
  border-top-right-radius: 20px;
}

.sccess-footer h4 {
  color: #000;
  font-size: clamp(0.8rem, 1.8vw, 1.2rem);
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.sccess-footer p {
  color: #000;
  font-size: clamp(0.6rem, 1.6vw, 0.8rem);
  margin: 0;
}
</style>
