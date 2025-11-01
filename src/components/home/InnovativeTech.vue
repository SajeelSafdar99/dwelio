<template>
  <section class="innovative-tech-section" ref="target5">
    <div class="container">
      <div class="innovative-content">
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-sm-12 col-md-5 col-lg-4">
            <q-card class="tech-main-card">
              <div class="card-body">
                <h2 class="tech-main-title">INNOVATIVE TECHNOLOGIES KEEPING US AHEAD</h2>
                <p class="tech-description">
                  Discover the impact of bespoke digital solutions tailored precisely to your
                  business's distinct requirements.
                </p>
              </div>
              <div class="tech-shape-container">
                <q-img src="../../assets/1.png" alt="3D Abstract Shape" class="tech-3d-shape" fit="cover" />
              </div>
            </q-card>
          </div>

          <div class="col-12 col-sm-12 col-md-7 col-lg-8">
            <div class="tech-categories-container">
              <div class="tech-category" v-for="(category, index) in techCategories" :key="index">
                <div class="category-header">
                  <span class="category-number">{{ String(index + 1).padStart(2, '0') }}</span>
                  <h3 class="category-title">{{ category.title }}</h3>
                </div>
                <div class="tech-chips">
                  <q-chip
                    v-for="(tech, techIndex) in category.techs"
                    :key="techIndex"
                    :class="`tech-chip ${tech.class}`"
                    :icon="tech.icon"
                  >
                    {{ tech.name }}
                  </q-chip>
                </div>
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

const target5 = shallowRef(null)

const techCategories = [
  {
    title: "Web App Development",
    techs: [
      { name: "React", class: "react-chip", icon: "code" },
      { name: "Node", class: "node-chip", icon: "storage" },
      { name: "Angular", class: "angular-chip", icon: "web" },
      { name: "Vue", class: "vue-chip", icon: "code" },
      { name: "ExpressJS", class: "express-chip", icon: "speed" },
      { name: "AdobeXD", class: "adobe-chip", icon: "design_services" },
      { name: "Figma", class: "figma-chip", icon: "palette" },
      { name: "Whimsical", class: "whimsical-chip", icon: "account_tree" }
    ]
  },
  {
    title: "Mobile App Development",
    techs: [
      { name: "Flutter", class: "flutter-chip", icon: "phone_android" },
      { name: "Kotlin", class: "kotlin-chip", icon: "android" },
      { name: "Swift", class: "swift-chip", icon: "phone_iphone" },
      { name: "React Native", class: "react-native-chip", icon: "mobile_friendly" },
      { name: "AdobeXD", class: "adobe-chip", icon: "design_services" },
      { name: "Figma", class: "figma-chip", icon: "palette" }
    ]
  },
  {
    title: "E-commerce",
    techs: [
      { name: "Shopify", class: "shopify-chip", icon: "shopping_cart" },
      { name: "WooCommerce", class: "woo-chip", icon: "store" },
      { name: "Prestashop", class: "presta-chip", icon: "storefront" }
    ]
  },
  {
    title: "Analytics",
    techs: [
      { name: "Python", class: "python-chip", icon: "code" },
      { name: "PowerBI", class: "powerbi-chip", icon: "bar_chart" },
      { name: "Tableau", class: "tableau-chip", icon: "analytics" },
      { name: "Amazon QuickSight", class: "quicksight-chip", icon: "insights" },
      { name: "Apache Spark", class: "spark-chip", icon: "flash_on" }
    ]
  },
  {
    title: "Data & Cloud",
    techs: [
      { name: "Azure", class: "azure-chip", icon: "fa-solid fa-cloud azure-icon" },
      { name: "AWS", class: "aws-chip", icon: "fa-brands fa-aws aws-icon" },
      { name: "Docker", class: "docker-chip", icon: "fa-brands fa-docker docker-icon" },
      { name: "Kubernetes", class: "k8s-chip", icon: "fa-brands fa-kubernetes k8s-icon" },
      { name: "Google Cloud", class: "gcp-chip", icon: "fa-brands fa-google gcp-icon" },
      { name: "Ola Krutrim", class: "krutrim-chip", icon: "fa-solid fa-brain krutrim-icon" }
    ]
  }
]

defineExpose({
  target5
})
</script>

<style scoped>
.innovative-tech-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.innovative-tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.innovative-content {
  padding: 70px 0px;
}

.tech-main-card {
  border-radius: 80px;
  height: 100%;
  background: linear-gradient(180deg, rgba(40, 46, 108, 0.2) 0%, rgba(189, 213, 244, 0.2) 100%);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 90px 40px;
}

.tech-main-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.tech-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.tech-shape-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.tech-3d-shape {
  max-width: 280px;
  height: 200px;
  border-radius: 16px;
  mix-blend-mode: color-dodge;
}

.tech-categories-container {
  padding: 2rem 0;
}

.tech-category {
  margin-bottom: 2rem;
}

.category-header {
  display: flex;
  align-items: center;
}

.category-number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: rgba(148, 163, 184, 0.3);
  margin-right: 1.5rem;
  min-width: 80px;
}

.category-title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-left: 95px;
}

.tech-chip {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 16px 20px 12px;
  color: white;
  border: 1px solid rgba(20, 21, 23, 0.1);
  border-radius: 8px;
}

:deep(.tech-chip .q-icon) {
  color: #a8b3c2;
}

:deep(.react-chip .q-icon) { color: #61dafb !important; }
:deep(.node-chip .q-icon) { color: #68a063 !important; }
:deep(.angular-chip .q-icon) { color: #dd0031 !important; }
:deep(.vue-chip .q-icon) { color: #4fc08d !important; }
:deep(.express-chip .q-icon) { color: #ffffff !important; }
:deep(.adobe-chip .q-icon) { color: #ff00ff !important; }
:deep(.figma-chip .q-icon) { color: #f24e1e !important; }
:deep(.whimsical-chip .q-icon) { color: #ffffff !important; }
:deep(.flutter-chip .q-icon) { color: #027dfb !important; }
:deep(.kotlin-chip .q-icon) { color: #7c4dff !important; }
:deep(.swift-chip .q-icon) { color: #fa5f55 !important; }
:deep(.react-native-chip .q-icon) { color: #61dafb !important; }
:deep(.shopify-chip .q-icon) { color: #95d03a !important; }
:deep(.woo-chip .q-icon) { color: #95d03a !important; }
:deep(.presta-chip .q-icon) { color: #df7980 !important; }
:deep(.python-chip .q-icon) { color: #ffd43b !important; }
:deep(.powerbi-chip .q-icon) { color: #f2c41b !important; }
:deep(.tableau-chip .q-icon) { color: #e87d37 !important; }
:deep(.quicksight-chip .q-icon) { color: #ff9900 !important; }
:deep(.spark-chip .q-icon) { color: #e54d26 !important; }
:deep(.azure-chip .q-icon) { color: #0078d7 !important; }
:deep(.aws-chip .q-icon) { color: #ff9900 !important; }
:deep(.docker-chip .q-icon) { color: #00b4f0 !important; }
:deep(.k8s-chip .q-icon) { color: #326ce5 !important; }
:deep(.gcp-chip .q-icon) { color: #4285f4 !important; }
:deep(.krutrim-chip .q-icon) { color: #ffffff !important; }

.tech-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .tech-chips {
    margin-left: 0;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .category-number {
    margin-right: 0;
    margin-bottom: 0.5rem;
    min-width: auto;
  }
}
</style>
