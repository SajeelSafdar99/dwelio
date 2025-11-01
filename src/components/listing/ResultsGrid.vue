<template>
  <main class="results-main-area">
    <!-- Tab and Result Count -->
    <div class="results-header">
      <div class="tab-buttons-group">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="$emit('update:activeTab', tab)"
          :class="['tab-button', { 'tab-active': activeTab === tab }]"
        >
          {{ tab }}
        </button>
      </div>

      <p class="result-count-text">Show {{ filteredItems.length }} Results</p>
    </div>

    <div class="items-grid-container">
      <div v-for="item in filteredItems.slice(0, 9)" :key="item.id" class="item-card">
        <div class="card-image-wrapper">
          <img :src="item.image" alt="Property Image" class="card-image" />
          <div class="image-overlay"></div>
          <div class="like-badge">
            <button class="like-button">
              <i class="fa-regular fa-heart like-icon"></i>
            </button>
            <span>{{ item.likes }}</span>
          </div>
        </div>

        <div class="card-content">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-price">{{ item.price }}</p>
          <p class="card-address">{{ item.address }}</p>
        </div>

        <div class="card-actions">
          <div class="profile-info">
            <img :src="profileImage" alt="Profile" class="profile-pic" />
            <span class="profile-name">Ronald Swiller</span>
          </div>
          <span class="post-date">July 12, 2025 at 01:06pm</span>
        </div>

        <div class="zillow-button-container">
          <button class="zillow-button">View in Zillow</button>
        </div>
      </div>
    </div>

    <div class="paging-controls">
      <button class="paging-button">
        <i class="fa-solid fa-arrow-left paging-icon"></i>
      </button>
      <button class="paging-button">
        <i class="fa-solid fa-arrow-right paging-icon"></i>
      </button>
    </div>
    <div class="users-grid-container">
      <div v-for="user in users" :key="user.id" class="user-card">
        <div class="user-info-wrapper">
          <div class="avatar-gradient-border">
            <img :src="user.avatar" :alt="user.name" class="user-avatar" />
          </div>

          <div class="user-details">
            <h4 class="user-name">
              {{ user.name }}
              <span class="verified-icon">
                <i class="fa-solid fa-certificate"></i>
                <span class="checkmark">✓</span>
              </span>
            </h4>
            <div class="user-stats-group">
              <div class="user-stat-item">
                <i class="fa-solid fa-image stat-icon-primary"></i>
                <span class="stat-text">{{ user.items }}</span>
              </div>
              <div class="user-stat-item">
                <i class="fa-solid fa-basket-shopping stat-icon-primary"></i>
                <span class="stat-text">{{ user.sales }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const profileImage = new URL('/src/assets/listing/img.png', import.meta.url).href
defineProps({
  filteredItems: Array,
  users: Array,
  activeTab: String,
  tabs: {
    type: Array,
    default: () => ['All', 'Items', 'Collection', 'Users'],
  },
})

defineEmits(['update:activeTab'])
</script>

<style scoped>
.results-main-area {
  width: 100%;
}

@media (min-width: 1024px) {
  .results-main-area {
    width: 75%;
  }
}

.results-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .results-header {
    flex-direction: column;
    gap: 1rem;
  }
}

.tab-buttons-group {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3a3a45;
  border-radius: 2rem;
  padding: 0.25rem;
  gap: 0.25rem;
  width: fit-content;
}

.tab-button {
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #e0e0e0;
  background: transparent;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.tab-active {
  background: #000000;
  color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.tab-button:not(.tab-active):hover {
  color: #ffffff;
}

.result-count-text {
  color: #fff;
  font-size: 18px;
}

.items-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.item-card {
  background-color: #0d0d0f;
  border-radius: 1.25rem;
  position: relative;
  padding: 1.25rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  margin-top: 35px;
}

.item-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}

.card-image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: -3.5rem;
  margin-bottom: 1rem;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius: 1rem;
}

.like-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 1.5rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.like-icon {
  color: white;
  font-size: 0.9rem;
}

.like-badge span {
  color: white;
  font-weight: 500;
}

.card-content {
  padding: 0 0.25rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;
}

.card-title {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
}

.card-price {
  color: #3c6bfe;
  font-weight: 700;
  font-size: 26px;
}

.card-address {
  color: rgba(255, 255, 255, 0.38);
  font-weight: 400;
  font-size: 12px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: #fff;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.profile-pic {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #7e2148;
}

.profile-name {
  font-weight: 600;
  font-size: 14px;
}

.post-date {
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.8;
}
.zillow-button-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.zillow-button {
  background-color: #0074e4;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.zillow-button:hover {
  background-color: #005bb5;
}
.like-button {
  background: none;
  border: none;
}

.paging-controls {
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.paging-button {
  padding: 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: all 0.2s;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.paging-button:hover {
  background: rgba(255, 255, 255, 0.44);
}

.paging-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.users-grid-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

@media (min-width: 640px) {
  .users-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .users-grid-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .users-grid-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.user-card {
  background-color: rgba(107, 114, 128, 0.6);
  padding: 0.75rem;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.4),
    0 4px 6px -2px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s;
}

.user-card:hover {
  border-color: rgba(92, 107, 192, 0.5);
}

.user-info-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-gradient-border {
  display: inline-flex;
  padding: 2px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #b2ebf2 0%, #d1c4e9 65%, #f8bbd0 100%);
}

.user-avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  object-fit: cover;
  display: block;
}

.user-details {
  flex-grow: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  margin-top: 0;
  color: white;
}

.verified-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
}

.verified-icon .fa-certificate {
  color: #00e5ff;
  font-size: 1rem;
}

.verified-icon .checkmark {
  position: absolute;
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  line-height: 1;
  top: 5px;
  left: 4px;
}

.user-stats-group {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
}

.user-stat-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.stat-icon-primary {
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  color: #fff;
}

.stat-text {
  color: white;
}
</style>
