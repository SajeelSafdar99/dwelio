<template>
  <section class="mission-vision-wrapper q-py-xl q-px-lg">
    <div class="mission-vision-container row q-col-gutter-xl items-start justify-center">
      <!-- OUR MISSION -->
      <div class="col-12 col-md-5 card-section">
        <h2 class="section-title">OUR MISSION</h2>
        <p class="section-subtitle">Dummy ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div class="glass-card q-pa-lg">
          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
          <p class="section-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </div>

      <!-- OUR VISION -->
      <div class="col-12 col-md-5 card-section">
        <h2 class="section-title">OUR VISION</h2>
        <p class="section-subtitle">Dummy ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div class="glass-card q-pa-lg">
          <p class="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </p>
          <p class="section-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.mission-vision-wrapper {
  color: #fff;
  display: flex;
  justify-content: center;
}

.section-title {
  font-weight: 600;
  font-size: clamp(1.6rem, 2vw + 0.5rem, 2.2rem);
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.section-subtitle {
  font-weight: 400;
  font-size: clamp(0.9rem, 0.5vw + 0.4rem, 1rem);
  color: #bfbfbf;
  margin-bottom: 1.5rem;
}

.glass-card {
  background: rgba(20, 21, 23, 0.42);
  backdrop-filter: blur(2px);
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  line-height: 1.7;
}

.section-text {
  color: #e6e6e6;
  font-size: clamp(0.9rem, 0.4vw + 0.4rem, 1rem);
  margin-bottom: 1rem;
}

.card-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}
</style>
