<template>
  <aside class="sidebar-container">
    <div class="filter-card">
      <button @click="$emit('toggle-category-group')" class="filter-toggle-button">
        <p>CATEGORY</p>
        <i class="fa-solid fa-angle-down arrow-icon" :class="{ 'rotate-180': categoriesOpen }"></i>
      </button>

      <transition name="slide-fade">
        <div v-if="categoriesOpen" class="category-list-open">
          <div v-for="cat in categories" :key="cat.name">
            <button @click="$emit('toggle-category', cat.name)" class="category-main-button">
              <div class="category-label" :class="{ 'category-label-active': cat.open }">
                <i
                  v-if="cat.icon && cat.open"
                  :class="[
                    'fa-solid',
                    'category-icon',
                    // FIX 1: Use CSS classes for color based on activation state
                    { 'icon-active': cat.open, 'icon-default': !cat.open },
                    cat.icon === 'code'
                      ? 'fa-code'
                      : cat.icon === 'briefcase'
                        ? 'fa-briefcase'
                        : cat.icon === 'wallet'
                          ? 'fa-wallet'
                          : cat.icon === 'server'
                            ? 'fa-server'
                            : cat.icon === 'clipboard'
                              ? 'fa-clipboard-list'
                              : cat.icon === 'user'
                                ? 'fa-user'
                                : cat.icon === 'pen-tool'
                                  ? 'fa-pen-ruler'
                                  : cat.icon === 'megaphone'
                                    ? 'fa-bullhorn'
                                    : cat.icon === 'coffee'
                                      ? 'fa-mug-hot'
                                      : cat.icon === 'camera'
                                        ? 'fa-camera'
                                        : cat.icon === 'music'
                                          ? 'fa-music'
                                          : cat.icon === 'heart'
                                            ? 'fa-heart-pulse'
                                            : 'fa-list',
                  ]"
                ></i>
                <!-- End Font Awesome Icon Integration -->
                <span
                  class="truncate category-name-text"
                  :class="{ 'text-active': cat.open, 'text-default': !cat.open }"
                  >{{ cat.name }}</span
                >
              </div>
              <!-- Font Awesome Arrow Icon for Individual Category Toggle -->
              <i class="fa-solid fa-angle-down arrow-icon" :class="{ 'rotate-180': cat.open }"></i>
            </button>

            <!-- Nested Sub-Categories -->
            <transition name="slide-fade">
              <div v-if="cat.open && cat.children.length > 0" class="sub-category-list">
                <div v-for="subCat in cat.children" :key="subCat.name" class="sub-category-item">
                  <label class="checkbox-label">
                    <input
                      type="checkbox"
                      :value="subCat.name"
                      :checked="selectedCategories.includes(subCat.name)"
                      @change="handleCategoryChange($event, subCat.name)"
                      class="custom-checkbox"
                    />
                    <span
                      :class="{
                        'text-active-medium': selectedCategories.includes(subCat.name),
                        'text-light': !selectedCategories.includes(subCat.name),
                      }"
                      >{{ subCat.name }}</span
                    >
                  </label>
                  <span
                    class="count-badge"
                    :class="{ 'count-active': selectedCategories.includes(subCat.name) }"
                    >{{ subCat.count }}</span
                  >
                </div>
              </div>
            </transition>

            <div
              v-if="categories.indexOf(cat) < categories.length - 1"
              class="separator-line"
            ></div>
          </div>
        </div>
      </transition>
    </div>

    <div class="filter-card">
      <button @click="$emit('toggle-filter', 'rating')" class="filter-toggle-button">
        <span class="name">RATING</span>
        <i
          class="fa-solid fa-angle-down arrow-icon"
          :class="{ 'rotate-180': filtersState?.rating?.open }"
        ></i>
      </button>
      <transition name="slide-fade">
        <div v-if="filtersState?.rating?.open" class="filter-option-list">
          <div v-for="rate in ratings" :key="rate.label" class="filter-option-item">
            <label class="checkbox-label rating-label">
              <input
                type="checkbox"
                :value="rate.label"
                :checked="selectedRatings.includes(rate.label)"
                @change="handleRatingChange($event, rate.label)"
                class="custom-checkbox"
              />
              <i
                :class="[
                  'fa-solid fa-star star-icon',
                  {
                    'text-active': selectedRatings.includes(rate.label),
                    'text-muted': !selectedRatings.includes(rate.label),
                  },
                ]"
              ></i>

              <span
                :class="{
                  'custom-label': selectedRatings.includes(rate.label),
                  'label-name': !selectedRatings.includes(rate.label),
                }"
              >
                {{ rate.label }}
              </span>
            </label>
            <span
              class="count-badge"
              :class="{ 'count-active': selectedRatings.includes(rate.label) }"
              >{{ rate.count }}</span
            >
          </div>
        </div>
      </transition>
    </div>

    <div class="filter-card">
      <button @click="$emit('toggle-filter', 'places')" class="filter-toggle-button">
        <span class="custom-place">PLACES</span>
        <i
          class="fa-solid fa-angle-down arrow-icon"
          :class="{ 'rotate-180': filtersState?.places?.open }"
        ></i>
      </button>
      <transition name="slide-fade">
        <div v-if="filtersState?.places?.open" class="filter-option-list">
          <div v-for="place in places" :key="place.label" class="filter-option-item">
            <label class="checkbox-label">
              <input
                type="checkbox"
                :value="place.label"
                :checked="selectedPlaces.includes(place.label)"
                @change="handlePlacesChange($event, place.label)"
                class="custom-checkbox"
              />
              <span
                :class="{
                  'custom-label': selectedPlaces.includes(place.label),
                  'label-name': !selectedPlaces.includes(place.label),
                }"
              >
                {{ place.label }}
              </span>
            </label>
            <span
              class="count-badge"
              :class="{ 'count-active': selectedPlaces.includes(place.label) }"
              >{{ place.count }}</span
            >
          </div>
        </div>
      </transition>
    </div>

    <div class="filter-card">
      <button @click="$emit('toggle-filter', 'price')" class="filter-toggle-button">
        <span class="custom-place">PRICE</span>
        <i
          class="fa-solid fa-angle-down arrow-icon"
          :class="{ 'rotate-180': filtersState?.price?.open }"
        ></i>
      </button>
      <transition name="slide-fade">
        <div v-if="filtersState?.price?.open" class="price-filter-content">
          <div class="range-slider">
            <div class="track"></div>
            <div class="range-fill" :style="rangeFillStyle"></div>

            <input
              type="range"
              :min="minRange"
              :max="maxRange"
              :step="priceStep"
              :value="minPrice"
              @input="handleMinPriceChange($event.target.value)"
            />
            <input
              type="range"
              :min="minRange"
              :max="maxRange"
              :step="priceStep"
              :value="maxPrice"
              @input="handleMaxPriceChange($event.target.value)"
            />
          </div>

          <div class="price-inputs">
            <div class="price-input-wrapper">
              <span class="input-prefix">$</span>
              <input
                type="number"
                :value="minPrice"
                @input="handleMinPriceChange($event.target.value)"
                :min="minRange"
                :max="maxRange"
                placeholder="Min."
                class="price-input"
              />
              <span class="input-suffix">min</span>
            </div>
            <div class="price-input-wrapper">
              <span class="input-prefix">$</span>
              <input
                type="number"
                :value="maxPrice"
                @input="handleMaxPriceChange($event.target.value)"
                :min="minPrice"
                :max="maxRange"
                placeholder="Max."
                class="price-input"
              />
              <span class="input-suffix">max</span>
            </div>
          </div>

          <div class="price-type-list">
            <div v-for="type in priceTypes" :key="type.label" class="filter-option-item">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  :value="type.label"
                  :checked="selectedPriceTypes.includes(type.label)"
                  @change="handlePriceTypeChange($event, type.label)"
                  class="custom-checkbox"
                />
                <span
                  :class="{
                    'custom-label': selectedPriceTypes.includes(type.label),
                    'label-name': !selectedPriceTypes.includes(type.label),
                  }"
                  >{{ type.label }}</span
                >
              </label>
              <span
                class="count-badge"
                :class="{ 'count-active': selectedPriceTypes.includes(type.label) }"
                >{{ type.count }}</span
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  categories: Array,
  ratings: Array,
  places: Array,
  priceTypes: Array,
  selectedCategories: Array,
  selectedRatings: Array,
  selectedPlaces: Array,
  selectedPriceTypes: Array,
  filtersState: Object,
  categoriesOpen: Boolean,
  minRange: Number,
  maxRange: Number,
  priceStep: Number,
  minPrice: Number,
  maxPrice: Number,
})

const emit = defineEmits([
  'toggle-filter',
  'toggle-category',
  'toggle-category-group',
  'update:categories',
  'update:ratings',
  'update:places',
  'update:price-types',
  'update:min-price',
  'update:max-price',
])

const updateArrayFilter = (event, value, currentArray, emitName) => {
  const newArray = event.target.checked
    ? [...currentArray, value]
    : currentArray.filter((v) => v !== value)
  emit(emitName, newArray)
}

const handleCategoryChange = (event, value) => {
  updateArrayFilter(event, value, props.selectedCategories, 'update:categories')
}

const handleRatingChange = (event, value) => {
  updateArrayFilter(event, value, props.selectedRatings, 'update:ratings')
}

const handlePlacesChange = (event, value) => {
  updateArrayFilter(event, value, props.selectedPlaces, 'update:places')
}

const handlePriceTypeChange = (event, value) => {
  updateArrayFilter(event, value, props.selectedPriceTypes, 'update:price-types')
}

const handleMinPriceChange = (value) => {
  let newMin = Number(value)
  if (newMin > props.maxPrice) {
    newMin = props.maxPrice
  }
  emit('update:min-price', newMin)
}

const handleMaxPriceChange = (value) => {
  let newMax = Number(value)
  if (newMax < props.minPrice) {
    newMax = props.minPrice
  }
  emit('update:max-price', newMax)
}

const rangeFillStyle = computed(() => {
  const range = props.maxRange - props.minRange
  const left = ((props.minPrice - props.minRange) / range) * 100
  const width = ((props.maxPrice - props.minPrice) / range) * 100

  return {
    left: `${left}%`,
    width: `${width}%`,
  }
})
</script>

<style scoped>
.text-light {
  color: #fff;
}

.text-active-medium {
  font-weight: 400;
  background: linear-gradient(90deg, #3c6bfe 0%, #9d84f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.filter-option-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.sidebar-container {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
  .sidebar-container {
    width: 25%;
  }


}
@media (max-width: 1024px) {
  .filter-card {
  margin-top: 0 !important;
  }
}
.filter-card {
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  margin-top: 82px;
}

.filter-card p {
  font-size: 18px;
  color: #ffffff;
}

.filter-card .name {
  font-size: 18px;
  color: #ffffff;
}

.filter-toggle-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  transition: color 0.2s;
  margin-bottom: 0.75rem;
  cursor: pointer;
  background: none;
  border: none;
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
  color: #fff;
  transition: transform 0.3s;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.arrow-icon.rotate-180 {
  transform: rotate(180deg);
}

.category-list-open {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-main-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0;
  transition: color 0.2s;
  cursor: pointer;
  background: none;
  border: none;
}

.category-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: left;
}

.category-label span {
  color: #ffffff;
}

.category-name-text.text-active {
  color: #fff;
}

.category-name-text.text-default {
  font-weight: 500;
  color: #fff;
  font-size: 14px;
}

.category-icon {
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.category-icon.icon-active {
  color: #fff;
}

.category-icon.icon-default {
  color: rgb(255, 255, 255);
}

.sub-category-list {
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sub-category-item,
.filter-option-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #9fa3ac;
  transition: color 0.2s;
  cursor: pointer;
}

.sub-category-item:hover,
.filter-option-item:hover {
  color: #e0e0e0;
}

.separator-line {
  border-bottom: 1px solid #fff;
  margin: 0.75rem -1rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.custom-checkbox {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.custom-checkbox:checked {
  background-image:
    url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3e%3c/svg%3e"),
    linear-gradient(180deg, #3c6bfe 0%, #9d84f2 100%);

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%, cover;
  border-color: #5c6bc0;
}

.count-badge {
  font-size: 12px;
  padding: 0.125rem 0.5rem;
  color: #fff;
}

.count-badge.count-active {
  background: linear-gradient(90deg, #3c6bfe 0%, #9d84f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.custom-label {
  background: linear-gradient(90deg, #3c6bfe 0%, #9d84f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 14px;
}

.label-name {
  font-size: 14px;
  color: #fff;
}

.star-icon {
  height: 1rem;
  width: 1rem;
}

.rating-label {
  color: #fff;
}

.rating-label:hover {
  color: #e0e0e0;
}

.star-icon.text-active {
  color: #9d84f2;
}

.star-icon.text-muted {
  color: #fff;
  fill: transparent;
}

.custom-place {
  font-size: 18px;
  color: #ffffff;
}

.price-filter-content {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.price-inputs {
  display: flex;
  gap: 0.5rem;
}

.price-input[placeholder] {
  color: #ffffff;
  font-size: 1rem;
}

.price-input-wrapper {
  position: relative;
  width: 50%;
}

.input-prefix {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}

.input-suffix {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9fa3ac;
  font-size: 0.75rem;
  font-weight: 600;
}

.price-input {
  width: 100%;
  padding: 0.5rem 2.2rem 0.5rem 1.5rem;
  background-color: transparent;
  font-size: 0.875rem;
  transition: all 0.2s;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 24px;
}

.price-input::-webkit-outer-spin-button,
.price-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.price-input[type='number'] {
  -moz-appearance: textfield;
}

.price-input:focus {
  border-color: #5c6bc0;
  box-shadow: 0 0 0 2px #5c6bc0;
}

.price-type-list {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.range-slider {
  position: relative;
  height: 20px;
  margin-bottom: 1rem;
}

.range-slider input[type='range'] {
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  background: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  margin: 0;
}

.range-slider input[type='range']::-webkit-slider-runnable-track {
  background: none;
  height: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.range-slider input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: #5c6bc0;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -4px;
  pointer-events: all;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.range-slider .track {
  position: absolute;
  top: 7px;
  height: 5px;
  width: 100%;
  background: #fff;
  border-radius: 5px;
}

.range-slider .range-fill {
  position: absolute;
  top: 7px;
  height: 5px;
  background: linear-gradient(90deg, #3c6bfe 0%, #9d84f2 100%);
  border-radius: 5px;
}
</style>
