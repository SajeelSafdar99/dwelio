<template>
  <div class="discover-properties-container" ref="target1">
    <div class="container">
      <div class="header-section mb-5">
        <h1 class="section-title">{{ sectionData.title }}</h1>
        <p class="section-description">{{ sectionData.description }}</p>
      </div>

      <div class="carousel-wrapper">
        <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="3"
          :space-between="20"
          :loop="true"
          :speed="600"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
          ref="swiperRef"
          class="property-swiper"
          :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide v-for="property in properties" :key="property.id">
            <div class="property-card">
              <div class="card-image-wrapper">
                <img :src="property.image" :alt="property.name" class="card-image" />
              </div>

              <div class="card-content">
                <span class="category-badge">{{ property.category }}</span>
                <h3 class="property-name">{{ property.name }}</h3>
                <p class="property-description">
                  {{ property.description }}
                  <a href="#" class="read-more-link">Read More</a>
                </p>

                <div class="card-footer">
                  <div class="price-section">
                    <span class="price-label">Price</span>
                    <span class="price-value">{{ property.price }}</span>
                  </div>
                  <button class="btn-view-details">View Property Details</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="carousel-controls">
          <div class="slide-counter">
            {{ String(currentSlide + 1).padStart(2, '0') }} of
            {{ String(properties.length).padStart(2, '0') }}
          </div>
          <div class="navigation-arrows">
            <button class="arrow-btn prev-btn" @click="goToPrev" aria-label="Previous slide">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="arrow-btn next-btn" @click="goToNext" aria-label="Next slide">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
const target1 = shallowRef(null)
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperRef = ref(null)
const swiperInstance = ref(null)
const currentSlide = ref(0)
defineExpose({
  target1
})
const sectionData = ref({
  title: 'Discover a World of Possibilities',
  description:
    'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home',
})

const properties = ref([
  {
    id: 1,
    name: 'Seaside Serenity Villa',
    category: 'Coastal Escapes - Where Waves Beckon',
    image: new URL('/src/assets/real-estate/1.png', import.meta.url).href,
    description: 'Wake up to the soothing melody of waves. This beachfront villa offers...',
    price: '$1,250,000',
  },
  {
    id: 2,
    name: 'Metropolitan Haven',
    category: 'Urban Oasis - Life in the Heart of the City',
    image: new URL('/src/assets/real-estate/2.png', import.meta.url).href,
    description: 'Immerse yourself in the energy of the city. This modern apartment in the heart...',
    price: '$650,000',
  },
  {
    id: 3,
    name: 'Rustic Retreat Cottage',
    category: "Countryside Charm - Escape to Nature's Embrace",
    image: new URL('/src/assets/real-estate/3.png', import.meta.url).href,
    description: 'Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills...',
    price: '$350,000',
  },
  {
    id: 4,
    name: 'Mountain Peak Estate',
    category: 'Alpine Luxury - Touch the Sky',
    image: new URL('/src/assets/real-estate/1.png', import.meta.url).href,
    description: 'Experience breathtaking views from this stunning mountain estate with panoramic vistas...',
    price: '$2,100,000',
  },
  {
    id: 5,
    name: 'Desert Oasis Manor',
    category: 'Desert Living - Luxury in Solitude',
    image: new URL('/src/assets/real-estate/2.png', import.meta.url).href,
    description: 'Discover exclusive desert living with this magnificent manor featuring modern amenities...',
    price: '$1,800,000',
  },
  {
    id: 6,
    name: 'Lakeside Paradise',
    category: 'Waterfront Bliss - Serene Lakeside Living',
    image: new URL('/src/assets/real-estate/3.png', import.meta.url).href,
    description: 'Enjoy peaceful lakeside living with private beach access and stunning water views...',
    price: '$950,000',
  },
  {
    id: 7,
    name: 'Historic Manor House',
    category: 'Heritage Homes - Timeless Elegance',
    image: new URL('/src/assets/real-estate/1.png', import.meta.url).href,
    description: 'Own a piece of history with this beautifully restored historic manor featuring original details...',
    price: '$1,500,000',
  },
  {
    id: 8,
    name: 'Modern Minimalist Loft',
    category: 'Contemporary Design - Urban Sophistication',
    image: new URL('/src/assets/real-estate/2.png', import.meta.url).href,
    description: 'Experience cutting-edge design in this sleek minimalist loft with open floor plans...',
    price: '$750,000',
  },
  {
    id: 9,
    name: 'Tropical Island Villa',
    category: 'Island Paradise - Exotic Getaway',
    image: new URL('/src/assets/real-estate/3.png', import.meta.url).href,
    description: 'Escape to paradise with this exclusive island villa featuring private access and luxury amenities...',
    price: '$3,200,000',
  },
  {
    id: 10,
    name: 'Vineyard Estate',
    category: 'Wine Country - Rustic Sophistication',
    image: new URL('/src/assets/real-estate/1.png', import.meta.url).href,
    description: 'Own your own vineyard estate with this sprawling property perfect for wine enthusiasts...',
    price: '$2,500,000',
  },
])
const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const goToPrev = () => {
  if (swiperInstance.value) swiperInstance.value.slidePrev()
}

const goToNext = () => {
  if (swiperInstance.value) swiperInstance.value.slideNext()
}

const onSlideChange = (swiper) => {
  currentSlide.value = swiper.realIndex
}

</script>

<style scoped>
.discover-properties-container {
  position: relative;
  overflow: hidden;
  padding: 60px 0;
}
.discover-properties-container::before {
  position: absolute;
  content: '';
  background-image: url('../../assets/flower.png');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  top: -30%;
  left: 10%;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  filter: blur(60px);
}

.header-section {
  text-align: left;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.section-description {
  font-size: 0.95rem;
  color: #a0a8c0;
  line-height: 1.6;
  max-width: 700px;
}

.carousel-wrapper {
  position: relative;
}

/* Property Card Styles */
.property-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
}

.property-card:hover {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

.card-image-wrapper {
  position: relative;
  height: 200px;
  padding: 20px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.property-card:hover .card-image {
  transform: scale(1.05);
}

.category-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.card-content {
  padding: 0 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.property-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}

.property-description {
  font-size: 0.85rem;
  color: #a0a8c0;
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1;
  min-height: 65px;
}

.read-more-link {
  color: #fff;
  font-weight: 600;
  transition: color 0.3s ease;
  text-decoration: underline;
}

.read-more-link:hover {
  color: #c084fc;
  text-decoration: underline;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding-top: 15px;
}

.price-section {
  display: flex;
  flex-direction: column;
}

.price-label {
  font-size: 0.75rem;
  color: #a0a8c0;
  font-weight: 600;
  text-transform: uppercase;
}

.price-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
}

.btn-view-details {
  background: linear-gradient(135deg, #4a7fff 0%, #6495ff 100%);
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-view-details:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 127, 255, 0.3);
}

/* Carousel Controls */
.carousel-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.slide-counter {
  font-size: 0.9rem;
  color: #a0a8c0;
  font-weight: 600;
}

.navigation-arrows {
  display: flex;
  gap: 12px;
}

.arrow-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(60, 70, 100, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-btn:hover {
  background-color: rgba(100, 150, 255, 0.3);
  border-color: rgba(100, 150, 255, 0.5);
  transform: translateY(-2px);
}

.arrow-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.5rem;
  }

  .section-description {
    font-size: 0.95rem;
  }
}

@media (max-width: 768px) {
  .discover-properties-container {
    padding: 40px 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-view-details {
    width: 100%;
    text-align: center;
  }

  .carousel-controls {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .btn-view-details {
    padding: 10px 0px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .card-image-wrapper {
    height: 150px;
  }

  .property-name {
    font-size: 1rem;
  }
}
</style>
