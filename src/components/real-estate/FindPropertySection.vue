<template>
  <div class="find-property-container">
    <div class="container">
      <!-- Header Section -->
      <div class="header-section">
        <h1 class="section-title">{{ sectionData.title }}</h1>
        <p class="section-description">{{ sectionData.description }}</p>
      </div>

      <!-- Search and Filters Section -->
      <div class="search-section">
        <!-- Search Bar -->
        <div class="search-bar-wrapper">
          <div class="search-input-container">
            <input
              v-model="sectionData.searchQuery"
              type="text"
              class="search-input"
              :placeholder="sectionData.searchPlaceholder"
            />
            <button class="btn-find-property" @click="handleSearch">
              <i class="fa-solid fa-magnifying-glass"></i>
              {{ sectionData.findButtonText }}
            </button>
          </div>
        </div>

        <!-- Filter Pills -->
        <div class="filters-wrapper">
          <div class="row q-col-gutter-md">
            <!-- Location Filter -->
            <div class="col-lg col-md-6 col-sm-12">
              <div class="filter-pill">
                <i class="fa-solid fa-location-dot filter-icon"></i>
                <select v-model="sectionData.selectedLocation" class="filter-select">
                  <option value="">{{ filterLabels.location }}</option>
                  <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
                </select>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </div>
            </div>

            <!-- Property Type Filter -->
            <div class="col-lg col-md-6 col-sm-12">
              <div class="filter-pill">
                <i class="fa-solid fa-home filter-icon"></i>
                <select v-model="sectionData.selectedPropertyType" class="filter-select">
                  <option value="">{{ filterLabels.propertyType }}</option>
                  <option v-for="type in propertyTypes" :key="type" :value="type">
                    {{ type }}
                  </option>
                </select>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </div>
            </div>

            <!-- Pricing Range Filter -->
            <div class="col-lg col-md-6 col-sm-12">
              <div class="filter-pill">
                <i class="fa-solid fa-dollar-sign filter-icon"></i>
                <select v-model="sectionData.selectedPricingRange" class="filter-select">
                  <option value="">{{ filterLabels.pricingRange }}</option>
                  <option v-for="range in pricingRanges" :key="range" :value="range">
                    {{ range }}
                  </option>
                </select>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </div>
            </div>

            <!-- Property Size Filter -->
            <div class="col-lg col-md-6 col-sm-12">
              <div class="filter-pill">
                <i class="fa-solid fa-ruler filter-icon"></i>
                <select v-model="sectionData.selectedPropertySize" class="filter-select">
                  <option value="">{{ filterLabels.propertySize }}</option>
                  <option v-for="size in propertySizes" :key="size" :value="size">
                    {{ size }}
                  </option>
                </select>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </div>
            </div>

            <!-- Build Year Filter -->
            <div class="col-lg col-md-6 col-sm-12">
              <div class="filter-pill">
                <i class="fa-solid fa-calendar filter-icon"></i>
                <select v-model="sectionData.selectedBuildYear" class="filter-select">
                  <option value="">{{ filterLabels.buildYear }}</option>
                  <option v-for="year in buildYears" :key="year" :value="year">{{ year }}</option>
                </select>
                <i class="fa-solid fa-chevron-down chevron-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sectionData = ref({
  title: 'Find Your Dream Property',
  description:
    'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey',
  searchQuery: '',
  searchPlaceholder: 'Search For A Property',
  findButtonText: 'Find Property',
  selectedLocation: '',
  selectedPropertyType: '',
  selectedPricingRange: '',
  selectedPropertySize: '',
  selectedBuildYear: '',
})

const filterLabels = ref({
  location: 'Location',
  propertyType: 'Property Type',
  pricingRange: 'Pricing Range',
  propertySize: 'Property Size',
  buildYear: 'Build Year',
})

const locations = ref([
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Miami',
  'San Francisco',
  'Boston',
])

const propertyTypes = ref([
  'House',
  'Apartment',
  'Condo',
  'Townhouse',
  'Land',
  'Commercial',
  'Villa',
  'Penthouse',
])

const pricingRanges = ref([
  '$50K - $100K',
  '$100K - $250K',
  '$250K - $500K',
  '$500K - $1M',
  '$1M - $2M',
  '$2M+',
])

const propertySizes = ref([
  'Under 1000 sqft',
  '1000 - 2000 sqft',
  '2000 - 3000 sqft',
  '3000 - 4000 sqft',
  '4000+ sqft',
])

const buildYears = ref([
  'Before 1990',
  '1990 - 2000',
  '2000 - 2010',
  '2010 - 2020',
  '2020 - Present',
])

const handleSearch = () => {
  console.log('Search initiated:', {
    query: sectionData.value.searchQuery,
    filters: {
      location: sectionData.value.selectedLocation,
      propertyType: sectionData.value.selectedPropertyType,
      pricingRange: sectionData.value.selectedPricingRange,
      propertySize: sectionData.value.selectedPropertySize,
      buildYear: sectionData.value.selectedBuildYear,
    },
  })
  alert('Search initiated! Check console for details.')
}
</script>

<style scoped>
.find-property-container {
  position: relative;
  overflow: hidden;
  padding: 60px 0;
  margin: 0 10px;
  background: rgba(255, 255, 255, 0.07); backdrop-filter: blur(10px);
}

.header-section {
  text-align: left;
  margin-bottom: 40px;
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

.search-section {
  margin-top: 30px;
}

.search-input-container {
  display: flex;
  align-items: center;
  background-color: black;
  border: 10px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
  border-radius: 23px;
  gap: 10px;
  transition: all 0.3s ease;
  margin: 0 100px;
}

.search-input-container:focus-within {
  border-color: rgba(100, 150, 255, 0.5);
  background-color: rgba(40, 50, 80, 0.9);
}

.search-icon {
  color: #a0a8c0;
  font-size: 1rem;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.95rem;
  padding: 25px;
  outline: none;
  border-radius: 12px;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.btn-find-property {
  background: linear-gradient(135deg, #4a7fff 0%, #6495ff 100%);
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  margin-right: 20px;
}

.btn-find-property:hover {
  box-shadow: 0 6px 20px rgba(74, 127, 255, 0.4);
}

.btn-find-property:active {
  transform: translateY(0);
}

.filters-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.filter-pill {
  position: relative;
  display: flex;
  align-items: center;
  gap: 25px;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  width: 100%;
  background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px);

}.filter-pill .filter-icon {
   position: relative;
   padding-right: 12px;
 }
.filter-pill .filter-icon::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 22px;
  background-color: rgba(255, 255, 255, 0.3);
}
@media (max-width: 1440px) {
  .row > .col-lg:last-child {
    margin-left: auto;
    margin-right: auto;
  }
}


.filter-icon {
  color: #fff;
  font-size: 1rem;
  flex-shrink: 0;
}


.filter-select {
  flex: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  padding: 0;
}

.filter-select option {
  background-color: #1e233c;
  color: #ffffff;
}

.chevron-icon {
  color: #000;
  background: white;
  font-size: 0.8rem;
  flex-shrink: 0;
  pointer-events: none;
  border-radius: 50%;
  padding: 10px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .search-input-container {
    flex-direction: column;
    align-items: stretch;
    padding: 15px;
    margin: 0;
  }

  .search-input {
    padding: 10px 0;
  }

  .btn-find-property {
    width: 100%;
    justify-content: center;
  }

  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .filter-pill {
    width: 100%;
  }
}

@media (max-width: 600px) {

  .section-description {
    font-size: 0.95rem;
  }

  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .filter-pill {
    padding: 8px 12px;
  }

  .filter-icon {
    font-size: 0.9rem;
  }

  .filter-select {
    font-size: 0.85rem;
  }
}
</style>
