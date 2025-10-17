<template>
  <div class="about-wrapper q-pa-md container">
    <div class="about-bg">
      <div class="about-overlay"></div>
    </div>

    <div class="about-content">
      <h2 class="about-title">OUR STORY</h2>
      <p class="about-text">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
        consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
        dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <p class="about-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur?
      </p>
      <p class="about-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur?
      </p>
    </div>
  </div>
</template>

<script setup>
// no script logic needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');

.about-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 571px;
  background-color: #7e2148;
  border-radius: 36px;
  overflow: hidden;
}

.about-bg {
  position: absolute;
  inset: 0;
  background-image: url("../../assets/about/stories/1.png");
  background-size: cover;
  background-position: center;
  mix-blend-mode: color-dodge;
  border-radius: inherit;
  z-index: 0;
}

.about-overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 21, 23, 0.78);
  border-radius: inherit;
  z-index: 1;
}

.about-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1158px;
  padding: 0 24px;
  font-family: 'Sora', sans-serif;
  color: #fff;
}

.about-title {
  font-weight: 600;
  font-size: clamp(1.8rem, 2vw + 1rem, 2.5rem);
  text-transform: uppercase;
}

.about-text {
  font-weight: 400;
  font-size: clamp(0.9rem, 0.4vw + 0.5rem, 1rem);
  line-height: 1.6;
  color: #ffffff;
  margin: 0 !important;
}
</style>
