<template>
  <header class="header-bar">
    <div class="search-container">
      <i class="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        :value="searchText"
        @input="$emit('update:searchText', $event.target.value)"
        type="text"
        placeholder="Search items, collections, and accounts"
        class="search-input"
      />
    </div>

    <div class="controls-container">
      <button class="sort-button">
        <span>Sort by</span>
        <i class="fa-solid fa-arrow-up-wide-short sort-icon"></i>
      </button>

      <div class="view-toggle-container">
        <button
          @click="$emit('update:activeView', 'grid')"
          :class="{ active: activeView === 'grid' }"
          class="view-toggle-btn"
        >
          <i class="fa-solid fa-table-cells view-toggle-icon"></i>
        </button>
        <button
          @click="$emit('update:activeView', 'list')"
          :class="{ active: activeView === 'list' }"
          class="view-toggle-btn"
        >
          <i class="fa-solid fa-bars view-toggle-icon"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  searchText: String,
  activeView: String,
})
defineEmits(['update:searchText', 'update:activeView'])
</script>

<style scoped>
.header-bar {
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (min-width: 640px) {
  .header-bar {
    flex-direction: row;
  }
}

.search-container {
  flex-grow: 1;
  width: 100%;
  position: relative;
}

@media (min-width: 640px) {
  .search-container {
    width: auto;
  }
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1.25rem;
  width: 1.25rem;
  color: #9fa3ac;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1.5rem 0.75rem 3rem;
  background: #303030;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  transition: all 0.2s;
  font-size: 0.875rem;
  color: #e0e0e0;
  outline: none;
}

.search-input::placeholder {
  color: #949494;
}

.search-input:focus {
  border-color: rgba(255, 255, 255, 0.24);
}

.controls-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.sort-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #303030;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 0.75rem;
  transition: all 0.2s;
  font-size: 1rem;
  cursor: pointer;
  color: #fff;
}

.sort-button:hover {
  background-color: rgba(255, 255, 255, 0.24);
}

.sort-icon {
  height: 1rem;
  width: 1rem;
}
.view-toggle-container {
  display: inline-flex;
  border: 1px solid #424242;
  border-radius: 8px;
  overflow: hidden;
}
.view-toggle-btn {
  padding: 0.75rem;
  transition: all 0.2s;
  color: #9fa3ac;
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
}

.view-toggle-icon {
  height: 1.25rem;
  width: 1.25rem;
  display: inline-block;
}

.view-toggle-btn.active {
  background-color: #303030;
  color: white;
}
</style>
