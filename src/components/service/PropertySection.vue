<template>
  <section class="real-estate" ref="target2" id="real-estate">
    <div class="container">
      <div class="heading">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>

      <div class="property-grid text-white">
        <!-- Top row -->
        <div class="row q-col-gutter-lg q-pb-lg">
          <div class="col-lg-4 col-md-6 col-sm-12" v-for="(card, i) in topCards" :key="'top-' + i">
            <div class="card-box">
              <div class="card-header">
                <IconBorder :icon="card.icon" />
                <h3 class="card-title">{{ card.title }}</h3>
              </div>
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>

        <!-- Bottom row -->
        <div class="row q-col-gutter-lg">
          <div
            v-for="(card, i) in bottomCards"
            :key="'bottom-' + i"
            :class="['col-md-6 col-sm-12', i === 1 ? 'col-lg-8' : 'col-lg-4']"
          >
            <div class="card-box" :class="{ 'long-card': i === 1 }">
              <template v-if="i === 1">
                <div class="long-card-header">
                  <h3 class="long-card-title mb-0">{{ card.title }}</h3>
                  <button class="long-card-btn">Learn More</button>
                </div>
                <p class="long-card-text">{{ card.text }}</p>
              </template>
              <template v-else>
                <div class="card-header">
                  <IconBorder :icon="card.icon" />
                  <h3 class="card-title">{{ card.title }}</h3>
                </div>
                <p class="card-text">{{ card.text }}</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconBorder from 'components/IconBorder.vue'
import { shallowRef } from 'vue'
const target2 = shallowRef(null)

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  useTarget1: { type: Boolean, required: true },
  topCards: {
    type: Array,
    required: true,
  },
  bottomCards: {
    type: Array,
    required: true,
  },
})

// Conditionally expose either target1 or target2 based on useTarget1 variable
defineExpose({
  target2
})
</script>

<style scoped>
.real-estate {
  color: #fff;
}

.heading {
  padding: 4rem 0;
}

.heading h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.heading p {
  color: #a0a0b3;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 1000px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.card-box {
  background: rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;
  padding: 2rem;
  transition: all 0.3s ease;
  height: 100%;
}

.card-box:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.card-text {
  color: #bfbfc9;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .card-box {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}

/* === Long Card Specific Styles === */
.long-card {
  padding: 3rem;
  color: #fff;
  transition: all 0.3s ease;
  background-image:
    linear-gradient(90deg, rgba(60, 107, 254, 0.42) 0%, rgba(157, 132, 242, 0.54) 100%),
    url('../../assets/service/1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Header with title + button aligned horizontally */
.long-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

/* Title text */
.long-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

/* Button styling */
.long-card-btn {
  background: #ffffff;
  color: #3c6bfe;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Paragraph text */
.long-card-text {
  color: #bfbfc9;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 0;
}

/* Responsive — stack the button below title on mobile */
@media (max-width: 576px) {
  .long-card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }

  .long-card-btn {
    align-self: flex-start;
  }
}
</style>
