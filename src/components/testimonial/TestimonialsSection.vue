<template>
  <section class="testimonials-section" ref="target0">
    <div class="q-py-xl q-px-lg container">

    <div class="testimonials-wrapper">
      <!-- LEFT SIDE -->
      <div class="testimonials-left">
        <h2 class="title">
          Testimonials <br />
          <span class="highlight">& Reviews</span>
        </h2>

        <p class="subtitle">
          An award-winning SEO agency with disciplines in digital marketing, design, and website
          development. Focused on understanding you.
        </p>

        <button class="cta-btn">
          Schedule Call
          <span class="arrow">→</span>
        </button>
      </div>

      <!-- RIGHT SIDE -->
      <div class="testimonials-right">
        <div class="visuals">
          <div class="top-row">
            <div class="image-card">
              <div class="arrow-icon">
                <span
                  class="material-symbols-outlined"
                  style="
                    padding: 10px;
                    font-size: 30px;
                    background: linear-gradient(180deg, #3c6bfe 0%, #9d84f2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  "
                >
                  moving
                </span>
              </div>
              <img src="../../assets/testimonial/reviews/1.png" alt="Analytics" class="main-img" />
            </div>

            <div class="stat-box">
              <h3>230+</h3>
              <p>some big companies that we work with, and trust us very much</p>
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
            </div>
          </div>

          <div class="chart-box">
            <div class="chart-header">
              <span class="line"></span>
              <span class="small-text">Drive More Traffic and Sales</span>
            </div>

            <div class="chart-content">
              <div class="text">
                <h4>Drive more traffic and<br />product sales</h4>
              </div>

              <div class="bars">
                <div class="bar" style="height: 80%"></div>
                <div class="bar" style="height: 130%"></div>
                <div class="bar" style="height: 170%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </section>
</template>

<script setup>
import { shallowRef } from 'vue'
const target0 = shallowRef(null)
defineExpose({
  target0,
})
</script>
<style scoped>
/* Section Container */
.testimonials-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.testimonials-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('../../assets/Serction-Hero.png?t=1758745798359');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(90px);
  z-index: -1;
}


/* Card background */
.testimonials-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 50px;
  width: 100%;

  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

/* Left Text */
.testimonials-left {
  flex: 1;
}

.title {
  font-size: 2.8rem;
  font-weight: 700;
  color: white;
}

.highlight {
  background: linear-gradient(90deg, #42a5f5, #5b6bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  margin: 20px 0;
  max-width: 400px;
  color: #ccc;
  line-height: 1.6;
}

.cta-btn {
  background: white;
  color: black;
  border: none;
  padding: 13px 28px;
  border-radius: 30px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 35px;
  cursor: pointer;
  transition: 0.3s ease;
}

.cta-btn:hover {
  background: #ddd;
}

/* Right Side Layout */
.testimonials-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.visuals {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-row {
  display: flex;
  align-items: flex-start;
}

/* Image Card */
.image-card {
  position: relative;
  border-radius: 20px;
  width: 240px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-icon {
  position: absolute;
  top: -15px;
  left: 120px;
  background: white;
  border-radius: 50%;
  padding: 10px;
  font-size: 28px;
}

.main-img {
  width: 80%;
  border-radius: 12px;
}

/* Stat Box */
.stat-box {
  background: rgba(0, 0, 0, 0.66);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  color: white;
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stat-box h3 {
  font-size: 4.5rem;
  margin: 0px;
}

.stat-box p {
  font-size: 0.85rem;
  color: #aaa;
}

.progress-bar {
  width: 100%;
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  width: 80%;
  height: 100%;
  background: linear-gradient(90deg, #3c6bfe 0%, #9d84f2 100%);
}

/* Chart Box */
.chart-box {
  position: relative; /* important for absolute positioning */
  background: linear-gradient(145deg, rgba(15, 15, 25, 0.95), rgba(20, 20, 30, 0.8));
  border-radius: 16px;
  padding: 24px;
  width: 460px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
}

.chart-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;
}

.chart-header .line {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
}

.chart-header .small-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.chart-content {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 140px;
}

.chart-content .text h4 {
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 220px;
  z-index: 2;
}

/* Bars anchored to bottom right */
.bars {
  position: absolute;
  bottom: -22px;
  right: -30px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 80px;
}

.bar {
  width: 100px;
  background: linear-gradient(180deg, #3c6bfe 0%, #9d84f2 100%);
  border-radius: 6px 6px 0 0;
  transition: height 0.3s ease;
  box-shadow: 0 0 12px rgba(91, 107, 255, 0.3);
}

/* ========================= */
/* 📱 Responsive Styles */
/* ========================= */

/* Tablet (≤1024px) */
@media (max-width: 1024px) {
  .testimonials-wrapper {
    flex-direction: column;
    align-items: center;
    padding: 40px 30px;
    text-align: center;
  }

  .testimonials-left {
    margin-bottom: 40px;
  }

  .testimonials-right {
    justify-content: center;
    width: 100%;
  }

  .visuals {
    align-items: center;
  }

  .top-row {
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }

  .image-card,
  .stat-box {
    width: 200px;
    height: 180px;
  }

  .stat-box h3 {
    font-size: 3rem;
  }

  .chart-box {
    width: 320px;
    padding: 20px;
  }

  .bars {
    bottom: -18px;
    right: -20px;
  }

  .bar {
    width: 60px;
  }

  .arrow-icon {
    left: 100px;
  }
}

/* Mobile (≤768px) */
/* Fix overlapping and responsiveness on tablet & mobile */
@media (max-width: 768px) {
  /* Stack everything cleanly */
  .top-row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px; /* adds more spacing between image & 230+ box */
  }

  /* Make cards fluid */
  .image-card,
  .stat-box {
    width: 100%;
    max-width: 320px;
    height: auto;
    padding: 16px;
  }

  /* Make image scale properly */
  .main-img {
    width: 100%;
    max-width: 260px;
    height: auto;
  }

  /* Scale arrow icon dynamically */
  .arrow-icon {
    top: -10px;
    left: auto;
    right: 55px;
    padding: 0.4rem;
    font-size: 1.8rem;
    transform: scale(0.9);
  }

  /* Adjust text and font sizes */
  .stat-box h3 {
    font-size: 3rem;
  }

  .stat-box p {
    font-size: 0.8rem;
  }
}

/* Even smaller screens (≤480px) */
@media (max-width: 480px) {
  .stat-box h3 {
    font-size: 2.4rem;
  }
}
</style>
