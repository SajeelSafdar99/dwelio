<template>
  <section class="assistants-section" ref="target1">
    <div class="assistants-header">
      <h2 class="assistants-title">What We Offer</h2>

    </div>

    <div class="assistants-grid">
      <div
        v-for="(item, index) in assistants"
        :key="index"
        class="assistant-card"
      >
        <div class="icon-container">
          <i :class="item.icon"></i>
        </div>

        <h3 class="assistant-title">{{ item.title }}</h3>
        <p class="assistant-description">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { shallowRef } from 'vue'

const target1 = shallowRef(null)
defineExpose({
  target1,
})
const assistants = [
  {
    icon: "fa-solid fa-pen-nib",
    title: "Administrative & Transaction Coordination",
    description:
      "Streamline your workflow with reliable assistance in managing documents, contracts, scheduling, and client communications — all handled with precision and confidentiality.",
    quote: "Draft a proposal for the Johnson project with our standard terms",
  },
  {
    icon: "fa-solid fa-calculator",
    title: "Marketing & Social Media Management",
    description:
      "Boost your online presence with tailored marketing strategies, engaging social media posts, and consistent branding across all platforms to attract and retain clients.",
    quote: "Analyze last quarter's sales data and highlight key trends",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Lead Management & CRM Support",
    description:
      "Never miss an opportunity again. We organize, track, and nurture your leads using advanced CRM systems, helping you stay connected with prospects and past clients.",
    quote: "Create a project timeline for the website redesign launch",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Property Listing & MLS Management",
    description:
      "Save hours by letting our team handle property uploads, photo updates, descriptions, and listing optimization to ensure your properties stand out.",
    quote: "Research our top 3 competitors and their pricing strategies",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Strategy & Planning",
    description:
      "Develop business strategies, marketing plans, and growth initiatives",
    quote: "Help me create a go-to-market strategy for our new product",
  },
]
</script>

<style scoped>
.assistants-section {
  color: white;
  text-align: center;
  padding: 0rem 0rem 5rem;
}

.assistants-section::before {
  content: '';
  position: absolute;
  top: 300px; /* overlap previous section */
  left: 0;
  right: 0;
  height: 600px;
  background-image: url('../../assets/flower.png');
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(10px); /* optional smooth transition */
  opacity: 0.9;
  mix-blend-mode: plus-lighter;
}

.assistants-header {
  margin-bottom: 4rem;
}

.assistants-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}

.assistants-subtitle {
  color: #b0b0b0;
  font-size: 1.1rem;
}

/* ===== GRID ===== */
.assistants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
  align-items: stretch;
  max-width: 1100px;
  margin: 0 auto;
}

/* ===== CARD ===== */
.assistant-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: left;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.assistant-card:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.08);
}

/* ===== ICON ===== */
.icon-container {
  font-size: 1.6rem;
  color: #b0b0b0;
  margin-bottom: 1rem;
}

/* ===== TEXT ===== */
.assistant-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 2rem;
}

.assistant-description {
  color: #b0b0b0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

/* ===== QUOTE BOX ===== */
.quote-box {
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-style: italic;
  color: #b0b0b0;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
