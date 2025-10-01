<template>
<!--  <q-layout>-->
    <q-header class="header text-white" height-hint="64">
      <q-toolbar class="q-px-xl">
        <div class="flex items-center q-gutter-lg">
          <div class="flex items-center">
            <div class="logo-icon q-mr-sm">
              <q-img
                :src="logo"
                alt="Chromezy Logo"
                class="logo-image"
                width="65px"
                fit="contain"
                no-spinner
                loading="lazy"
              >
              </q-img>
            </div>
          </div>
          <div class="search-container desktop-view">
            <q-input
              v-model="searchQuery"
              placeholder="Search"
              dense
              dark
              borderless
              class="search-input"
            >
              <template v-slot:prepend>
                <q-icon name="search" class="text-white"/>
              </template>
            </q-input>
          </div>
        </div>
        <q-space class="desktop-view"/>
        <div class="nav-container desktop-view">
          <div class="nav-items-wrapper">
            <div class="nav-items">
              <div
                v-for="(item, index) in navItems"
                :key="item.name"
                class="nav-item-container"
                @click="setActiveItem(index)"
              >
                <div
                  class="nav-item cursor-pointer q-px-md q-py-sm text-body2"
                  :class="{ 'text-white': activeIndex === index, 'text-grey-4': activeIndex !== index }"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="nav-bar">
              <div
                class="nav-indicator"
                :style="{ transform: `translateX(${indicatorPosition}px)`, width: `${indicatorWidth}px` }"
              ></div>
            </div>
          </div>
        </div>
        <q-space class="desktop-view"/>
        <div class="flex items-center desktop-view ">
          <span class="cursor-pointer text-grey-4 hover:text-white transition-colors">About Us</span>
          <q-btn
            label="Contact Us"
            color="blue-6"
            rounded
            no-caps
            class="q-px-md"
          />
        </div>

        <!-- Mobile Menu Button -->
        <!-- Changed lt-md to mobile-view for custom 1250px breakpoint -->
        <q-space class="mobile-view"/>
        <q-btn
          flat
          dense
          round
          icon="menu"
          class="mobile-view"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </q-toolbar>

      <!-- Mobile Navigation -->
      <q-slide-transition>
        <!-- Changed lt-md to mobile-view for custom 1250px breakpoint -->
        <div v-show="mobileMenuOpen" class="mobile-nav bg-grey-10 mobile-view">
          <div class="q-pa-md">
            <div class="q-mb-md">
              <q-input
                v-model="searchQuery"
                placeholder="Search"
                dense
                dark
                standout="bg-grey-9"
                class="search-input"
              >
                <template v-slot:prepend>
                  <q-icon name="search" class="text-grey-5"/>
                </template>
              </q-input>
            </div>

            <div
              v-for="(item, index) in navItems"
              :key="item.name"
              class="mobile-nav-item q-py-sm cursor-pointer"
              :class="{ 'text-blue-5': activeIndex === index, 'text-grey-4': activeIndex !== index }"
              @click="setActiveItem(index); mobileMenuOpen = false"
            >
              {{ item.name }}
            </div>
            <q-separator class="q-my-md" dark/>
            <div class="text-grey-4 q-py-sm cursor-pointer">About Us</div>
            <q-btn
              label="Contact Us"
              color="blue-6"
              rounded
              no-caps
              class="q-mt-md full-width"
            />
          </div>
        </div>
      </q-slide-transition>
    </q-header>
<!--  </q-layout>-->
</template>

<script setup>
import logo from 'assets/logo.png'
import {ref, onMounted, nextTick} from 'vue'

const searchQuery = ref('')
const activeIndex = ref(0)
const mobileMenuOpen = ref(false)
const indicatorPosition = ref(0)
const indicatorWidth = ref(0)

const navItems = ref([
  {name: 'Home'},
  {name: 'Explore AI'},
  {name: 'Services'},
  {name: 'E-commerce'},
  {name: 'Products'},
  {name: 'Blogs'}
])

const setActiveItem = async (index) => {
  activeIndex.value = index
  await nextTick()
  updateIndicator()
}

const updateIndicator = () => {
  const navItemsContainer = document.querySelector('.nav-items')
  const navItemContainers = document.querySelectorAll('.nav-item-container')

  if (navItemsContainer && navItemContainers[activeIndex.value]) {
    const activeItem = navItemContainers[activeIndex.value]
    const containerRect = navItemsContainer.getBoundingClientRect()
    const activeRect = activeItem.getBoundingClientRect()

    indicatorPosition.value = activeRect.left - containerRect.left
    indicatorWidth.value = activeRect.width
  }
}

onMounted(() => {
  updateIndicator()
  window.addEventListener('resize', updateIndicator)
})
</script>

<style scoped>
.header{
  padding: 10px 0px;
  background-color: #0D101a !important;
}
.search-container {
  min-width: 250px;
}
.search-input input::placeholder {
  color: #ffffff;

}
.search-input {
  border-radius: 8px;
  width: 100%;
}

.nav-container {
  display: inline-block;
}

.nav-items-wrapper {
  position: relative;
  display: inline-block;
}

.nav-items {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.nav-item-container {
  position: relative;
  transition: all 0.3s ease;
}

.nav-item {
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-item:hover {
  color: white !important;
}

.nav-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.nav-indicator {
  position: absolute;
  top: 0;
  height: 100%;
  background: linear-gradient(90deg, #11DEFF 0%, #4380FF 100%);
  border-radius: 1px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-item {
  transition: color 0.3s ease;
  padding-left: 16px;
  border-left: 3px solid transparent;
}

.mobile-nav-item:hover {
  color: white !important;
}

.mobile-nav-item.text-blue-5 {
  border-left-color: #2196F3;
}

.logo-icon svg {
  filter: drop-shadow(0 0 4px rgba(33, 150, 243, 0.3));
}

/* Added custom responsive classes for 1250px breakpoint */
.desktop-view {
  display: flex;
  gap: 10px;
}

.mobile-view {
  display: none;
}

@media (max-width: 1250px) {
  .desktop-view {
    display: none !important;
  }

  .mobile-view {
    display: block;
  }
}

/* Updated existing media queries to work with new breakpoint */
@media (max-width: 1250px) {
  .search-container {
    min-width: 180px;
  }
}

@media (max-width: 599px) {
  .search-container {
    display: none;
  }
}
</style>
