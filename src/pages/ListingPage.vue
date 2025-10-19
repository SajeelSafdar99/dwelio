<template>
  <div class="main-page-wrapper">
    <div class="container">
      <HeaderBar
        :active-view="activeView"
        :search-text="searchText"
        @update:search-text="searchText = $event"
        @update:active-view="activeView = $event"
      />

      <div class="main-content-area">
        <FilterSidebar
          :categories="categories"
          :ratings="ratings"
          :places="places"
          :price-types="priceTypes"
          :selected-categories="selectedCategories"
          :selected-ratings="selectedRatings"
          :selected-places="selectedPlaces"
          :selected-price-types="selectedPriceTypes"
          :filters-state="filters"
          :min-range="minRange"
          :max-range="maxRange"
          :price-step="priceStep"
          :min-price="minPrice"
          :max-price="maxPrice"
          @update:categories="selectedCategories = $event"
          @update:ratings="selectedRatings = $event"
          @update:places="selectedPlaces = $event"
          @update:price-types="selectedPriceTypes = $event"
          @update:min-price="minPrice = $event"
          @update:max-price="maxPrice = $event"
          @toggle-filter="toggleFilter"
          @toggle-category="toggleCategory"
          @toggle-category-group="categoriesOpen = !categoriesOpen"
          :categories-open="categoriesOpen"
        />

        <ResultsGrid
          :filtered-items="filteredItems"
          :users="users"
          :active-tab="activeTab"
          @update:active-tab="activeTab = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import FilterSidebar from 'components/listing/FilterSidebar.vue'
import HeaderBar from 'components/listing/HeaderBar.vue'
import ResultsGrid from 'components/listing/ResultsGrid.vue'

const minRange = ref(100000);
const maxRange = ref(1500000);
const priceStep = ref(10000);

const searchText = ref('');
const activeView = ref('grid');
const activeTab = ref('Items');

const categoriesOpen = ref(true);
const filters = ref({
  rating: { open: true },
  places: { open: true },
  price: { open: true },
});
const selectedCategories = ref(['Mobile Development']);
const selectedRatings = ref(['3 Star & up']);
const selectedPlaces = ref([]);
const selectedPriceTypes = ref(['Paid']);

const minPrice = ref(minRange.value);
const maxPrice = ref(maxRange.value);
const mockData = {
  categories: [
    {
      name: 'Development',
      icon: 'code',
      count: 1245,
      open: true,
      children: [
        { name: 'Web development', count: 574 },
        { name: 'Data Science', count: 568 },
        { name: 'Mobile Development', count: 1345 },
        { name: 'Software Testing', count: 317 },
        { name: 'Software Engineering', count: 31 },
      ],
    },
    { name: 'Business', icon: 'briefcase', count: 1898, open: false, children: [] },
    { name: 'Finance & Accounting', icon: 'wallet', count: 574, open: false, children: [] },
    { name: 'IT & Software', icon: 'server', count: 1982, open: false, children: [] },
    { name: 'Office Productivity', icon: 'clipboard', count: 1021, open: false, children: [] },
    { name: 'Personal Development', icon: 'user', count: 870, open: false, children: [] },
    { name: 'Design', icon: 'pen-tool', count: 2050, open: false, children: [] },
    { name: 'Marketing', icon: 'megaphone', count: 1540, open: false, children: [] },
    { name: 'Lifestyle', icon: 'coffee', count: 480, open: false, children: [] },
    { name: 'Photography & Video', icon: 'camera', count: 310, open: false, children: [] },
    { name: 'Music', icon: 'music', count: 220, open: false, children: [] },
    { name: 'Health & Fitness', icon: 'heart', count: 910, open: false, children: [] },
  ],
  ratings: [
    { label: '5 Star', value: 5, count: 1345 },
    { label: '4 Star & up', value: 4, count: 1345 },
    { label: '3 Star & up', value: 3, count: 1345 },
    { label: '2 Star & up', value: 2, count: 1345 },
    { label: '1 Star & up', value: 1, count: 1345 },
  ],
  places: [
    { label: 'All Level', count: 1345 },
    { label: 'Beginner', count: 1345 },
    { label: 'Intermediate', count: 1345 },
    { label: 'Expert', count: 1345 },
  ],
  priceTypes: [
    { label: 'Paid', count: 1345 },
    { label: 'Free', count: 1345 },
  ],
  items: [
    { id: 1, title: '123 Oak street, Springfield...', address: '3 Beds, 3 Baths, 24,00 sqft', price: '$750,000', likes: 125, tags: ['Development', 'Web development', '5 Star', 'All Level', 'Paid', 750000], image: 'https://placehold.co/400x220/8b5cf6/ffffff?text=Property+1' },
    { id: 2, title: '456 Palm Ave, Metropolis...', address: '5 Beds, 4 Baths, 32,00 sqft', price: '$890,000', likes: 125, tags: ['Development', 'Data Science', '4 Star & up', 'Beginner', 'Paid', 890000], image: 'https://placehold.co/400x220/3b82f6/ffffff?text=Property+2' },
    { id: 3, title: '789 Pine Ln, Gotham...', address: '2 Beds, 2 Baths, 18,00 sqft', price: '$620,000', likes: 125, tags: ['Development', 'Mobile Development', '5 Star', 'Intermediate', 'Paid', 620000], image: 'https://placehold.co/400x220/06b6d4/ffffff?text=Property+3' },
    { id: 4, title: '101 River Rd, Star City...', address: '4 Beds, 3 Baths, 28,00 sqft', price: '$950,000', likes: 125, tags: ['Business', '3 Star & up', 'All Level', 'Paid', 950000], image: 'https://placehold.co/400x220/a855f7/ffffff?text=Property+4' },
    { id: 5, title: '202 Sky Blvd, Central City...', address: '3 Beds, 2 Baths, 21,00 sqft', price: '$710,000', likes: 125, tags: ['Finance & Accounting', '5 Star', 'Expert', 'Free', 710000], image: 'https://placehold.co/400x220/ec4899/ffffff?text=Property+5' },
    { id: 6, title: '303 Bridge Way, Sunnydale...', address: '1 Bed, 1 Bath, 12,00 sqft', price: '$450,000', likes: 125, tags: ['IT & Software', '4 Star & up', 'Beginner', 'Paid', 450000], image: 'https://placehold.co/400x220/f97316/ffffff?text=Property+6' },
    { id: 7, title: '404 Lake View, Smallville...', address: '6 Beds, 5 Baths, 40,00 sqft', price: '$1,200,000', likes: 125, tags: ['Personal Development', '5 Star', 'All Level', 'Paid', 1200000], image: 'https://placehold.co/400x220/10b981/ffffff?text=Property+7' },
    { id: 8, title: '505 Mountain Trail, Arcadia...', address: '3 Beds, 3 Baths, 25,00 sqft', price: '$810,000', likes: 125, tags: ['Design', '4 Star & up', 'Intermediate', 'Free', 810000], image: 'https://placehold.co/400x220/facc15/ffffff?text=Property+8' },
    { id: 9, title: '606 Valley Rd, Jericho...', address: '2 Beds, 1 Bath, 15,00 sqft', price: '$550,000', likes: 125, tags: ['Marketing', '3 Star & up', 'Expert', 'Paid', 550000], image: 'https://placehold.co/400x220/34d399/ffffff?text=Property+9' },
    { id: 10, title: '707 Ocean Dr, Neptune...', address: '4 Beds, 4 Baths, 30,00 sqft', price: '$1,100,000', likes: 99, tags: ['Design', '5 Star', 'All Level', 'Paid', 1100000], image: 'https://placehold.co/400x220/fbbf24/ffffff?text=Property+10' },
  ],
  users: [
    { id: 1, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/5c6bc0/ffffff?text=JD' },
    { id: 2, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/3b82f6/ffffff?text=JS' },
    { id: 3, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/06b6d4/ffffff?text=AR' },
    { id: 4, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/a855f7/ffffff?text=SL' },
    { id: 5, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/ec4899/ffffff?text=AR' },
    { id: 6, name: 'John Doe', items: '9K Items', sales: '20 Sales', avatar: 'https://placehold.co/40x40/f97316/ffffff?text=SL' },
  ],
};

const categories = ref(mockData.categories);
const ratings = ref(mockData.ratings);
const places = ref(mockData.places);
const priceTypes = ref(mockData.priceTypes);
const allItems = ref(mockData.items);
const users = ref(mockData.users);

const toggleFilter = (filterName) => {
  filters.value[filterName].open = !filters.value[filterName].open;
};

const toggleCategory = (categoryName) => {
  const cat = categories.value.find((c) => c.name === categoryName);
  if (cat) {
    cat.open = !cat.open;
  }
};
const filteredItems = computed(() => {
  let items = allItems.value;

  if (searchText.value) {
    const searchLower = searchText.value.toLowerCase();
    items = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.address.toLowerCase().includes(searchLower)
    );
  }
  if (selectedCategories.value.length > 0) {
    items = items.filter((item) =>
      item.tags.some((tag) => selectedCategories.value.includes(tag))
    );
  }
  if (selectedRatings.value.length > 0) {
    const selectedMinStars = selectedRatings.value
      .map((label) => {
        const rate = ratings.value.find((r) => r.label === label);
        return rate ? rate.value : 0;
      })
      .sort((a, b) => a - b)[0];

    if (selectedMinStars) {
      items = items.filter((item) => {
        const itemMaxStar =
          ratings.value
            .filter((rate) => item.tags.includes(rate.label))
            .map((rate) => rate.value)
            .sort((a, b) => b - a)[0] || 0;

        return itemMaxStar >= selectedMinStars;
      });
    }
  }
  if (selectedPlaces.value.length > 0) {
    items = items.filter((item) => item.tags.some((tag) => selectedPlaces.value.includes(tag)));
  }
  const min = minPrice.value || minRange.value;
  const max = maxPrice.value || maxRange.value;

  items = items.filter((item) => {
    const priceValue = item.tags[5];

    if (priceValue < min || priceValue > max) {
      return false;
    }

    if (selectedPriceTypes.value.length > 0) {
      const isPaid = item.tags.includes('Paid');
      const isFree = item.tags.includes('Free');

      const requiresPaid = selectedPriceTypes.value.includes('Paid');
      const requiresFree = selectedPriceTypes.value.includes('Free');

      if (requiresPaid && isPaid) return true;
      if (requiresFree && isFree) return true;

      return false;
    }
    return true;
  });

  return items;
});
</script>

<style>

.main-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 100px 0;
}


.main-content-area {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .main-content-area {
    flex-direction: row;
  }
}

</style>
