<template>
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
              v-for="(item, index) in desktopNavItems"
              :key="item.name"
              class="nav-item-container"
              @mouseenter="item.dropdown ? (hoveredIndex = index) : null"
              @mouseleave="item.dropdown ? (hoveredIndex = null) : null"
            >
              <div
                class="nav-item cursor-pointer q-px-md q-py-sm text-body2 flex items-center"
                :class="{ 'text-white': isItemActive(item.path), 'text-grey-4': !isItemActive(item.path) }"
                @click="setActiveItem(item.path)"
              >
                {{ item.name }}
                <q-icon
                  v-if="item.dropdown"
                  name="arrow_drop_down"
                  size="20px"
                  class="q-ml-xs"
                />
              </div>

              <!-- Dropdown -->
              <div
                v-if="item.dropdown"
                class="custom-dropdown"
                v-show="hoveredIndex === index"
              >
                <div
                  v-for="subItem in item.children"
                  :key="subItem.name"
                  class="dropdown-item"
                  @click="setActiveItem(subItem.path)"
                >
                  {{ subItem.name }}
                </div>
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
        <span class="cursor-pointer text-grey-4 hover:text-white transition-colors q-mr-lg" @click="$router.push('/about')">About Us</span>
        <q-btn
          label="Contact Us"
          color="blue-6"
          rounded
          no-caps
          class="q-px-md"
        />
      </div>

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

    <q-slide-transition>
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

          <template v-for="(item) in navItems" :key="item.name">
            <!-- Normal nav items -->
            <div
              v-if="!item.dropdown"
              class="mobile-nav-item q-py-sm cursor-pointer"
              :class="{ 'text-blue-5': route.path === item.path, 'text-grey-4': route.path !== item.path }"
              @click="setActiveItem(item.path); mobileMenuOpen = false"
            >
              {{ item.name }}
            </div>

            <!-- Dropdown nav items (like Services) -->
            <div v-else class="mobile-nav-item q-py-sm">
              <div
                class="flex items-center justify-between cursor-pointer"
                :class="{ 'text-blue-5': route.path === item.path || item.children.some(c => route.path === c.path), 'text-grey-4': route.path !== item.path }"
              >
                <!-- Label (navigates to /services) -->
                <span @click="setActiveItem(item.path); mobileMenuOpen = false">
        {{ item.name }}
      </span>

                <!-- Arrow icon toggles expansion -->
                <q-icon
                  name="keyboard_arrow_down"
                  class="dropdown-icon"
                  :class="[expandedItem === item.name ? 'rotate-180' : '']"
                  @click.stop="toggleExpand(item.name)"
                />
              </div>

              <!-- Sub-items (expandable section) -->
              <transition name="fade">
                <div v-if="expandedItem === item.name" class="q-pl-md q-mt-sm">
                  <div
                    v-for="subItem in item.children"
                    :key="subItem.name"
                    class="mobile-nav-item sub-item q-py-sm cursor-pointer"
                    :class="{ 'text-blue-5': route.path === subItem.path, 'text-grey-4': route.path !== subItem.path }"
                    @click="setActiveItem(subItem.path); mobileMenuOpen = false"
                  >
                    {{ subItem.name }}
                  </div>
                </div>
              </transition>
            </div>
          </template>

          <q-separator class="q-my-md" dark/>
          <div class="text-grey-4 q-py-sm cursor-pointer q-pl-sm"  @click="$router.push('/about'); mobileMenuOpen = false">About Us</div>
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
</template>

<script setup>
import logo from 'assets/logo.png'
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const searchQuery = ref('')
const activeIndex = ref(0)
const mobileMenuOpen = ref(false)
const indicatorPosition = ref(0)
const indicatorWidth = ref(0)
const dropdownOpen = ref(false)
const hoveredIndex = ref(null)
const expandedItem = ref(null)

const toggleExpand = (name) => {
  expandedItem.value = expandedItem.value === name ? null : name
}
const navItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Testimonials', path: '/testimonials' },
  {
    name: 'Services',
    path: '/services',
    dropdown: true,
    children: [
      { name: 'Virtual Assistance', path: '/virtual-assistance' },
      { name: 'Real Estate', path: '/real-estate' },
    ],
  },
  { name: 'Listing', path: '/listings' },
])

// Flattened list for desktop navigation (excluding dropdown children for indicator logic)
const desktopNavItems = computed(() => {
  return navItems.value.map(item => ({
    name: item.name,
    path: item.path,
    dropdown: item.dropdown,
    children: item.children
  }))
})

// Determine if a specific item path is the current active route (including dropdown children)
const isItemActive = (path) => {
  // Check if the current route path matches the item's path
  if (route.path === path) return true

  // Check if the item is a dropdown and one of its children's paths matches the current route
  const item = navItems.value.find(i => i.path === path)
  if (item && item.dropdown) {
    return item.children.some(child => route.path === child.path)
  }

  return false
}

// Navigate + update active indicator
const setActiveItem = async (path) => {
  // Find the parent item index for the path in the flattened desktopNavItems
  const foundIndex = desktopNavItems.value.findIndex(item => item.path === path || (item.dropdown && item.children.some(child => child.path === path)))

  if (foundIndex !== -1) {
    activeIndex.value = foundIndex
  }

  // Push the route
  router.push(path)

  // Ensure DOM updates and recalculate indicator position
  await nextTick()
  updateIndicator()

  // Close dropdown after selection
  dropdownOpen.value = false;
}

// Indicator logic (UPDATED to use the flattened desktopNavItems)
const updateIndicator = () => {
  const navItemsContainer = document.querySelector('.nav-items')
  // We need to query the desktop nav item containers
  const navItemContainers = Array.from(document.querySelectorAll('.nav-item-container'))
    .filter((_, i) => i < desktopNavItems.value.length)


  if (navItemsContainer && navItemContainers[activeIndex.value]) {
    const activeItem = navItemContainers[activeIndex.value]
    const containerRect = navItemsContainer.getBoundingClientRect()
    const activeRect = activeItem.getBoundingClientRect()

    indicatorPosition.value = activeRect.left - containerRect.left
    indicatorWidth.value = activeRect.width
  } else {
    // Hide indicator if no active item is found
    indicatorWidth.value = 0
  }
}

// Sync the active tab with the current route
watch(
  () => route.path,
  (newPath) => {
    let foundIndex = -1

    // Find the parent item index for the current route path
    for (let i = 0; i < desktopNavItems.value.length; i++) {
      const item = desktopNavItems.value[i]

      // Match direct path (Home, Testimonials, Listing)
      if (item.path === newPath) {
        foundIndex = i
        break
      }
      // Match path inside a dropdown (Virtual Assistance, Real Estate)
      if (item.dropdown && item.children.some(child => child.path === newPath)) {
        foundIndex = i
        break
      }
    }

    if (foundIndex !== -1) {
      activeIndex.value = foundIndex
      nextTick(() => updateIndicator())
    } else {
      activeIndex.value = -1
      indicatorWidth.value = 0 // 👈 hide indicator
    }
  },
  { immediate: true }
)

onMounted(() => {
  // Initial update after component is mounted and data is processed
  nextTick(() => {
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
  })
})
</script>

<style scoped>
.custom-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0D101a;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 100;
  min-width: 180px;
}

.dropdown-item {
  color: #fff;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #11DEFF;
}

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
  /* Added for dropdown hover effect on icon */
  display: flex;
  align-items: center;
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

/* Mobile styles */
.mobile-nav {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-nav-item {
  transition: color 0.3s ease;
  padding-left: 16px;
  border-left: 3px solid transparent;
}

/* Ensure the expansion-item header respects the left-border styling */
.q-expansion-item > .q-expansion-item__container > .q-item {
  padding-left: 0 !important;
}
.q-expansion-item__content .mobile-nav-item.sub-item {
  border-left: 3px solid transparent;
}


.mobile-nav-item:hover {
  color: white !important;
}

.mobile-nav-item.text-blue-5 {
  border-left-color: #2196F3;
}
.mobile-nav-item.text-blue-5.sub-item {
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
.dropdown-icon {
  font-size: 26px; /* makes icon visually bigger */
  line-height: 1; /* prevents extra spacing */
  height: auto; /* don't force a larger height */
  margin-left: 6px; /* optional, adjust spacing from text */
}

</style>
