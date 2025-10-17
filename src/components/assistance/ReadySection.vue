<template>
  <section class="ready-section">
    <div class="container">
      <h2>Ready for Your Virtual Assistant Workforce?</h2>
      <p>From phone calls to content creation, let Aidee handle everything for you.</p>

      <div class="buttons">
        <button class="primary">
          <img :src="icons['gift-black-outlined']" class="icon" alt="Gift Icon" />
          Start Free – No Credit Card
        </button>

        <button class="secondary">
          ▶ Watch Demo
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ready-section {
  position: relative;
 background-image: url("../../assets/assistance/ready/1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
  text-align: center;
  padding: 5rem 1rem;
  overflow: hidden;
}


.container {
  max-width: 800px;
  margin: 0 auto;
}

.container h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.container p {
  color: #a1a1b2;
  margin-bottom: 2.5rem;
  font-size: 1rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

button {
  padding: 0.9rem 1.8rem;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

button.primary {
  background: #fff;
  color: #000;
  border: none;
}

button.primary:hover {
  background: #f3f3f3;
}

button.secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #555;
}

button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>
<script setup lang="ts">
import { icons } from 'assets/icons/index.js'
</script>
