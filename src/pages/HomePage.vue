<template>
  <q-page class="home-page">
    <div
      v-for="(src, index) in floatingImageSources"
      :key="`floating-wrapper-${index}`"
      class="floating-image-wrapper"
      :ref="el => floatingImageRefs[index] = el"
      :style="{
        position: 'fixed',
        mixBlendMode: index === 3 ? 'plus-lighter' : 'normal',
        zIndex: -1,
        pointerEvents: 'none',
      }"
    >
      <img
        :src="src"
        :alt="`Floating decoration ${index + 1}`"
        :class="`floating-image floating-image-${index + 1}`"
        :style="{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate3d(0, 0, 0)',
        }"
      />
    </div>

    <!-- Hero Section -->
    <section ref="heroSection" class="hero-section">
      <!-- Content -->
      <div class="hero-content">
        <div ref="introText" class="intro-text">🚀 Introducing AI Automation</div>

        <h1 ref="mainTitle" class="main-title">
          from <span class="concept">CONCEPT</span><br />
          to <span class="reality">REALITY</span>
        </h1>

        <p ref="subtitle" class="subtitle">
          We Engineer your Software Success & Digital Transformation.
        </p>

        <p ref="description" class="description">
          At Chromezy, we translate your ideas into market-ready solutions quickly and precisely.
          Leveraging the power of technology and prioritizing user needs, we deliver products that
          are both cutting-edge and user-centric.
        </p>

        <!-- Stats Section -->
        <div class="stats-section">
          <div class="row g-4 justify-center">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="stat-item">
                <!-- Added counter animation to revenue stat -->
                <div class="stat-number">{{ Math.round(revenueCounter) }}%</div>
                <div class="stat-label">Revenue Growth</div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="stat-item">
                <!-- Added counter animation to speed stat -->
                <div class="stat-number">{{ speedCounter }}X</div>
                <div class="stat-label">Speed to Market</div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="stat-item">
                <!-- Added counter animation to orders stat -->
                <div class="stat-number">{{ Math.round(ordersCounter) }}%</div>
                <div class="stat-label">New Orders</div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
              <div class="stat-item">
                <!-- Added counter animation to users stat -->
                <div class="stat-number">{{ Math.round(usersCounter / 1000) }}K+</div>
                <div class="stat-label">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <q-separator class="dashed-separator" ref="target1" />
        <div class="hero-logos">
          <div class="marquee-container">
            <div class="marquee-content">
              <div class="logo-set" v-for="set in 2" :key="set">
                <div
                  class="company-logo"
                  v-for="(logo, index) in logoImages"
                  :key="`${set}-${index}`"
                >
                  <img :src="logo" :alt="'Logo ' + (index + 1)" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <q-separator class="dashed-separator" />
      </div>
    </section>

    <!-- Product Engineering Section -->
    <section class="services-section" ref="target2">
      <div class="container">
        <div class="services-layout">
          <div class="services-left">
            <div class="services-header">
              <h2 class="services-title">PRODUCT ENGINEERING</h2>
              <p class="services-description">
                Discover the impact of bespoke digital solutions tailored precisely to your
                business's distinct requirements. Our experienced team of professionals ensures you
                receive outstanding results that consistently exceed your expectations.
              </p>
            </div>
          </div>

          <!-- Right side - Service Cards -->
          <div class="services-right">
            <div class="services-grid">
              <!-- MVP Card -->
              <div class="service-card mvp-card">
                <img :src="mvpImages[0]" alt="MVP Icon" class="card-icon" />
                <div class="service-label">Our Services</div>
                <h3 class="service-title">MVP</h3>
                <p class="service-text">
                  We specialize in custom MVP development, focusing on tailored prototyping services
                  to meet diverse client needs and ensure rapid market launch.
                </p>
                <button class="service-btn">
                  Talk to a Product Expert
                  <span class="btn-arrow">→</span>
                </button>
              </div>

              <!-- SaaS Card -->
              <div class="service-card saas-card">
                <img :src="mvpImages[1]" alt="MVP Icon" class="card-icon" />
                <div class="service-label">Our Services</div>
                <h3 class="service-title">SaaS</h3>
                <p class="service-text">
                  Take your business to new heights with our all-inclusive SaaS development
                  services, delivering seamless and digital experiences that are platform- agnostic
                  and tailored to your customers' needs.
                </p>
                <button class="service-btn">
                  Talk to a Product Expert
                  <span class="btn-arrow">→</span>
                </button>
              </div>

              <!-- AI Card -->
              <div class="service-card ai-card">
                <img :src="mvpImages[2]" alt="MVP Icon" class="card-icon" />

                <div class="service-label">Our Services</div>
                <h3 class="service-title">AI</h3>
                <p class="service-text">
                  We develop tailored AI solutions, leveraging machine learning, NLP, and computer
                  vision to automate, optimize, and enhance decision-making processes
                </p>
                <button class="service-btn">
                  Talk to a Product Expert
                  <span class="btn-arrow">→</span>
                </button>
              </div>

              <!-- B2B & B2C Commerce Card -->
              <div class="service-card commerce-card">
                <img :src="mvpImages[3]" alt="MVP Icon" class="card-icon" />

                <div class="service-label">Our Services</div>
                <h3 class="service-title">B2B & B2C<br />Commerce<br />Transformation</h3>
                <p class="service-text">
                  We elevate B2B and B2C commerce, specializing in Shopify, Prestashop, Magento, and
                  Woocommerce to boost online orders and enhance customer shopping experiences,
                  keeping you competitive.
                </p>
                <button class="service-btn">
                  Talk to a Ecommerce Expert
                  <span class="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section" ref="target3">
      <div class="container">
        <!-- Header -->
        <div class="testimonials-header">
          <div class="testimonials-title-wrapper">
            <h2 class="testimonials-title">OUR HAPPY CLIENTS</h2>
            <p class="testimonials-subtitle">
              Dummy ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div class="testimonials-nav">
            <button class="nav-btn prev-btn" @click="previousSlide">
              <span>←</span>
            </button>
            <button class="nav-btn next-btn" @click="nextSlide">
              <span>→</span>
            </button>
          </div>
        </div>

        <!-- Testimonial Carousel -->
        <div class="testimonials-carousel" ref="carouselContainer">
          <div
            class="testimonials-track"
            ref="testimonialsTrack"
            :style="{ transform: `translateX(-${scrollPosition}px)` }"
          >
            <!-- Brandon Lau Testimonial -->
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0004 24.0002C24.5308 24.0002 25.0395 23.7895 25.4146 23.4144C25.7896 23.0393 26.0004 22.5306 26.0004 22.0002V17.1162C26.0004 16.5857 25.7896 16.077 25.4146 15.702C25.0395 15.3269 24.5308 15.1162 24.0004 15.1162H21.2244C21.2244 14.4135 21.2657 13.7109 21.3484 13.0082C21.4724 12.2642 21.679 11.6028 21.9684 11.0242C22.2577 10.4455 22.6304 9.99018 23.0864 9.65818C23.5397 9.28618 24.1184 9.10018 24.8224 9.10018V6.00018C23.665 6.00018 22.6517 6.24818 21.7824 6.74418C20.919 7.23393 20.1773 7.91209 19.6124 8.72818C19.0436 9.62648 18.6248 10.6114 18.3724 11.6442C18.1171 12.7837 17.9923 13.9485 18.0004 15.1162V22.0002C18.0004 22.5306 18.2111 23.0393 18.5862 23.4144C18.9612 23.7895 19.4699 24.0002 20.0004 24.0002H24.0004ZM12.0004 24.0002C12.5308 24.0002 13.0395 23.7895 13.4146 23.4144C13.7897 23.0393 14.0004 22.5306 14.0004 22.0002V17.1162C14.0004 16.5857 13.7897 16.077 13.4146 15.702C13.0395 15.3269 12.5308 15.1162 12.0004 15.1162H9.22436C9.22436 14.4135 9.2657 13.7109 9.34836 13.0082C9.4737 12.2642 9.68037 11.6028 9.96836 11.0242C10.2577 10.4455 10.6304 9.99018 11.0864 9.65818C11.5397 9.28618 12.1184 9.10018 12.8224 9.10018V6.00018C11.665 6.00018 10.6517 6.24818 9.78236 6.74418C8.91905 7.23393 8.17731 7.91209 7.61236 8.72818C7.04359 9.62648 6.62478 10.6114 6.37236 11.6442C6.11713 12.7837 5.99233 13.9485 6.00036 15.1162V22.0002C6.00036 22.5306 6.21108 23.0393 6.58615 23.4144C6.96122 23.7895 7.46993 24.0002 8.00036 24.0002H12.0004Z"
                    fill="#0AB7A8"
                  />
                </svg>
              </div>
              <p class="testimonial-text">
                Highly responsive with keen attention to detail. Assisted in building my e-commerce
                platform, mapping transformative areas, resulting in exceptional customer
                experience.
              </p>
              <div class="client-info">
                <h4 class="client-name">BRANDON LAU</h4>
                <p class="client-title">(CEO), KIRI Journey</p>
              </div>
              <div class="testimonial-footer">
                <div class="project-details">
                  <span class="rating-text">Star Rating - 5/5</span>
                  <p>Project - E-commerce Development</p>
                  <p>Country - HongKong</p>
                </div>
                <div class="test-logo">
                  <img :src="testImages[0]" alt="testImage0" />
                </div>
              </div>
            </div>

            <!-- Marc Dollon Testimonial -->
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0004 24.0002C24.5308 24.0002 25.0395 23.7895 25.4146 23.4144C25.7896 23.0393 26.0004 22.5306 26.0004 22.0002V17.1162C26.0004 16.5857 25.7896 16.077 25.4146 15.702C25.0395 15.3269 24.5308 15.1162 24.0004 15.1162H21.2244C21.2244 14.4135 21.2657 13.7109 21.3484 13.0082C21.4724 12.2642 21.679 11.6028 21.9684 11.0242C22.2577 10.4455 22.6304 9.99018 23.0864 9.65818C23.5397 9.28618 24.1184 9.10018 24.8224 9.10018V6.00018C23.665 6.00018 22.6517 6.24818 21.7824 6.74418C20.919 7.23393 20.1773 7.91209 19.6124 8.72818C19.0436 9.62648 18.6248 10.6114 18.3724 11.6442C18.1171 12.7837 17.9923 13.9485 18.0004 15.1162V22.0002C18.0004 22.5306 18.2111 23.0393 18.5862 23.4144C18.9612 23.7895 19.4699 24.0002 20.0004 24.0002H24.0004ZM12.0004 24.0002C12.5308 24.0002 13.0395 23.7895 13.4146 23.4144C13.7897 23.0393 14.0004 22.5306 14.0004 22.0002V17.1162C14.0004 16.5857 13.7897 16.077 13.4146 15.702C13.0395 15.3269 12.5308 15.1162 12.0004 15.1162H9.22436C9.22436 14.4135 9.2657 13.7109 9.34836 13.0082C9.4737 12.2642 9.68037 11.6028 9.96836 11.0242C10.2577 10.4455 10.6304 9.99018 11.0864 9.65818C11.5397 9.28618 12.1184 9.10018 12.8224 9.10018V6.00018C11.665 6.00018 10.6517 6.24818 9.78236 6.74418C8.91905 7.23393 8.17731 7.91209 7.61236 8.72818C7.04359 9.62648 6.62478 10.6114 6.37236 11.6442C6.11713 12.7837 5.99233 13.9485 6.00036 15.1162V22.0002C6.00036 22.5306 6.21108 23.0393 6.58615 23.4144C6.96122 23.7895 7.46993 24.0002 8.00036 24.0002H12.0004Z"
                    fill="#0AB7A8"
                  />
                </svg>
              </div>
              <p class="testimonial-text">
                They are swift to respond and implement faster. Thanks to Chromezy for providing
                expert developers and on-time delivery to help scale our Cloud-based ERP SaaS
                solution that helped us automate workflows, and get an analytics dashboard for swift
                decision-making.
              </p>
              <div class="client-info">
                <h4 class="client-name">MARC DOLLON</h4>
                <p class="client-title">CTO, MasterStudy</p>
              </div>
              <div class="testimonial-footer">
                <div class="project-details">
                  <span class="rating-text">Star Rating - 5/5</span>
                  <p>Project - SaaS-Based Cloud ERP</p>
                  <p>Country - United States</p>
                </div>
                <div class="test-logo">
                  <img :src="testImages[1]" alt="testImage0" />
                </div>
              </div>
            </div>

            <!-- Jeet Oberai Testimonial -->
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0004 24.0002C24.5308 24.0002 25.0395 23.7895 25.4146 23.4144C25.7896 23.0393 26.0004 22.5306 26.0004 22.0002V17.1162C26.0004 16.5857 25.7896 16.077 25.4146 15.702C25.0395 15.3269 24.5308 15.1162 24.0004 15.1162H21.2244C21.2244 14.4135 21.2657 13.7109 21.3484 13.0082C21.4724 12.2642 21.679 11.6028 21.9684 11.0242C22.2577 10.4455 22.6304 9.99018 23.0864 9.65818C23.5397 9.28618 24.1184 9.10018 24.8224 9.10018V6.00018C23.665 6.00018 22.6517 6.24818 21.7824 6.74418C20.919 7.23393 20.1773 7.91209 19.6124 8.72818C19.0436 9.62648 18.6248 10.6114 18.3724 11.6442C18.1171 12.7837 17.9923 13.9485 18.0004 15.1162V22.0002C18.0004 22.5306 18.2111 23.0393 18.5862 23.4144C18.9612 23.7895 19.4699 24.0002 20.0004 24.0002H24.0004ZM12.0004 24.0002C12.5308 24.0002 13.0395 23.7895 13.4146 23.4144C13.7897 23.0393 14.0004 22.5306 14.0004 22.0002V17.1162C14.0004 16.5857 13.7897 16.077 13.4146 15.702C13.0395 15.3269 12.5308 15.1162 12.0004 15.1162H9.22436C9.22436 14.4135 9.2657 13.7109 9.34836 13.0082C9.4737 12.2642 9.68037 11.6028 9.96836 11.0242C10.2577 10.4455 10.6304 9.99018 11.0864 9.65818C11.5397 9.28618 12.1184 9.10018 12.8224 9.10018V6.00018C11.665 6.00018 10.6517 6.24818 9.78236 6.74418C8.91905 7.23393 8.17731 7.91209 7.61236 8.72818C7.04359 9.62648 6.62478 10.6114 6.37236 11.6442C6.11713 12.7837 5.99233 13.9485 6.00036 15.1162V22.0002C6.00036 22.5306 6.21108 23.0393 6.58615 23.4144C6.96122 23.7895 7.46993 24.0002 8.00036 24.0002H12.0004Z"
                    fill="#0AB7A8"
                  />
                </svg>
              </div>
              <p class="testimonial-text">
                I'm thrilled with Chromezy's work. They developed inventory management, AI-powered
                demand forecasting, and smart route optimization on time and affordably. Onwards and
                upwards with Chromezy!
              </p>
              <div class="client-info">
                <h4 class="client-name">JEET OBERAI</h4>
                <p class="client-title">(Entrepreneur), PayLoan</p>
              </div>
              <div class="testimonial-footer">
                <div class="project-details">
                  <span class="rating-text">Star Rating - 4.8/5</span>
                  <p>Project - Product Development</p>
                  <p>Country - Singapore</p>
                </div>
                <div class="test-logo">
                  <img :src="testImages[2]" alt="testImage0" />
                </div>
              </div>
            </div>

            <!-- Sarah Chen Testimonial (4th testimonial - partially visible) -->
            <div class="testimonial-card">
              <div class="quote-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0004 24.0002C24.5308 24.0002 25.0395 23.7895 25.4146 23.4144C25.7896 23.0393 26.0004 22.5306 26.0004 22.0002V17.1162C26.0004 16.5857 25.7896 16.077 25.4146 15.702C25.0395 15.3269 24.5308 15.1162 24.0004 15.1162H21.2244C21.2244 14.4135 21.2657 13.7109 21.3484 13.0082C21.4724 12.2642 21.679 11.6028 21.9684 11.0242C22.2577 10.4455 22.6304 9.99018 23.0864 9.65818C23.5397 9.28618 24.1184 9.10018 24.8224 9.10018V6.00018C23.665 6.00018 22.6517 6.24818 21.7824 6.74418C20.919 7.23393 20.1773 7.91209 19.6124 8.72818C19.0436 9.62648 18.6248 10.6114 18.3724 11.6442C18.1171 12.7837 17.9923 13.9485 18.0004 15.1162V22.0002C18.0004 22.5306 18.2111 23.0393 18.5862 23.4144C18.9612 23.7895 19.4699 24.0002 20.0004 24.0002H24.0004ZM12.0004 24.0002C12.5308 24.0002 13.0395 23.7895 13.4146 23.4144C13.7897 23.0393 14.0004 22.5306 14.0004 22.0002V17.1162C14.0004 16.5857 13.7897 16.077 13.4146 15.702C13.0395 15.3269 12.5308 15.1162 12.0004 15.1162H9.22436C9.22436 14.4135 9.2657 13.7109 9.34836 13.0082C9.4737 12.2642 9.68037 11.6028 9.96836 11.0242C10.2577 10.4455 10.6304 9.99018 11.0864 9.65818C11.5397 9.28618 12.1184 9.10018 12.8224 9.10018V6.00018C11.665 6.00018 10.6517 6.24818 9.78236 6.74418C8.91905 7.23393 8.17731 7.91209 7.61236 8.72818C7.04359 9.62648 6.62478 10.6114 6.37236 11.6442C6.11713 12.7837 5.99233 13.9485 6.00036 15.1162V22.0002C6.00036 22.5306 6.21108 23.0393 6.58615 23.4144C6.96122 23.7895 7.46993 24.0002 8.00036 24.0002H12.0004Z"
                    fill="#0AB7A8"
                  />
                </svg>
              </div>
              <p class="testimonial-text">
                Exceptional service and innovative solutions. Chromezy transformed our digital
                presence with cutting-edge technology and user-centric design.
              </p>
              <div class="client-info">
                <h4 class="client-name">SARAH CHEN</h4>
                <p class="client-title">CTO, TechFlow</p>
              </div>
              <div class="testimonial-footer">
                <div class="project-details">
                  <span class="rating-text">Star Rating - 5/5</span>
                  <p>Project - Digital Transformation</p>
                  <p>Country - Canada</p>
                </div>
                <div class="test-logo">
                  <img :src="testImages[3]" alt="testImage3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories Section -->
    <section class="success-stories" ref="target4">
      <div class="container">
        <div class="stories-content">
          <div class="row q-col-gutter-xl">
            <div class="col-lg-4 col-md-6 col-sm-12">
              <h1 class="display-3 text-white">SUCCESS<br />STORIES</h1>
              <p class="text-white">
                Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card-container position-relative">
                <img :src="storiesImages[0]" alt="FinConnect CRM Interface" class="card-image" />
                <span class="success-badge">Success Stories</span>
                <div class="arrow-icon">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </div>
                <div class="sccess-footer position-absolute">
                  <h4 class="fw-bold card-title text-black no-margin">FinConnect</h4>
                  <p class="text-muted card-description text-black">
                    Customer Relationship Management (CRM)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card-container position-relative">
                <img :src="storiesImages[1]" alt="FinConnect CRM Interface" class="card-image" />
                <span class="success-badge">Success Stories</span>
                <div class="arrow-icon">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </div>
                <div class="sccess-footer position-absolute">
                  <h4 class="fw-bold card-title text-black no-margin">FinConnect</h4>
                  <p class="text-muted card-description text-black">
                    Customer Relationship Management (CRM)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card-container position-relative">
                <img :src="storiesImages[2]" alt="FinConnect CRM Interface" class="card-image" />
                <span class="success-badge">Success Stories</span>
                <div class="arrow-icon">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </div>
                <div class="sccess-footer position-absolute">
                  <h4 class="fw-bold card-title text-black no-margin">FinConnect</h4>
                  <p class="text-muted card-description text-black">
                    Customer Relationship Management (CRM)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card-container position-relative">
                <img :src="storiesImages[3]" alt="FinConnect CRM Interface" class="card-image" />
                <span class="success-badge">Success Stories</span>
                <div class="arrow-icon">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </div>
                <div class="sccess-footer position-absolute">
                  <h4 class="fw-bold card-title text-black no-margin">FinConnect</h4>
                  <p class="text-muted card-description text-black">
                    Customer Relationship Management (CRM)
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="card-container position-relative">
                <img :src="storiesImages[4]" alt="FinConnect CRM Interface" class="card-image" />
                <span class="success-badge">Success Stories</span>
                <div class="arrow-icon">
                  <q-icon name="north_east" size="16px" class="text-white" />
                </div>
                <div class="sccess-footer position-absolute">
                  <h4 class="fw-bold card-title text-black no-margin">FinConnect</h4>
                  <p class="text-muted card-description text-black">
                    Customer Relationship Management (CRM)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Innovative technologies -->
    <section class="innovative-tech-section" ref="target5">
      <div class="container">
        <div class="innovative-content">
          <div class="row q-col-gutter-xl">
            <div class="col-12 col-sm-12 col-md-5 col-lg-4">
              <q-card class="tech-main-card">
                <div class="card-body">
                  <h2 class="tech-main-title">INNOVATIVE TECHNOLOGIES KEEPING US AHEAD</h2>
                  <p class="tech-description">
                    Discover the impact of bespoke digital solutions tailored precisely to your
                    business's distinct requirements.
                  </p>
                </div>
                <div class="tech-shape-container">
                  <q-img
                    :src="innovativeImage"
                    alt="3D Abstract Shape"
                    class="tech-3d-shape"
                    fit="cover"
                  />
                </div>
              </q-card>
            </div>

            <!-- Right Column - Technology Categories -->
            <div class="col-12 col-sm-12 col-md-7 col-lg-8">
              <div class="tech-categories-container">
                <!-- Web App Development -->
                <div class="tech-category">
                  <div class="category-header">
                    <span class="category-number">01</span>
                    <h3 class="category-title">Web App Development</h3>
                  </div>
                  <div class="tech-chips">
                    <q-chip class="tech-chip react-chip" icon="code">React</q-chip>
                    <q-chip class="tech-chip node-chip" icon="storage">Node</q-chip>
                    <q-chip class="tech-chip angular-chip" icon="web">Angular</q-chip>
                    <q-chip class="tech-chip vue-chip" icon="code">Vue</q-chip>
                    <q-chip class="tech-chip express-chip" icon="speed">ExpressJS</q-chip>
                    <q-chip class="tech-chip adobe-chip" icon="design_services">AdobeXD</q-chip>
                    <q-chip class="tech-chip figma-chip" icon="palette">Figma</q-chip>
                    <q-chip class="tech-chip whimsical-chip" icon="account_tree">Whimsical</q-chip>
                  </div>
                </div>

                <!-- Mobile App Development -->
                <div class="tech-category">
                  <div class="category-header">
                    <span class="category-number">02</span>
                    <h3 class="category-title">Mobile App Development</h3>
                  </div>
                  <div class="tech-chips">
                    <q-chip class="tech-chip flutter-chip" icon="phone_android">Flutter</q-chip>
                    <q-chip class="tech-chip kotlin-chip" icon="android">Kotlin</q-chip>
                    <q-chip class="tech-chip swift-chip" icon="phone_iphone">Swift</q-chip>
                    <q-chip class="tech-chip react-native-chip" icon="mobile_friendly"
                    >React Native
                    </q-chip>
                    <q-chip class="tech-chip adobe-chip" icon="design_services">AdobeXD</q-chip>
                    <q-chip class="tech-chip figma-chip" icon="palette">Figma</q-chip>
                  </div>
                </div>

                <!-- E-commerce -->
                <div class="tech-category">
                  <div class="category-header">
                    <span class="category-number">03</span>
                    <h3 class="category-title">E-commerce</h3>
                  </div>
                  <div class="tech-chips">
                    <q-chip class="tech-chip shopify-chip" icon="shopping_cart">Shopify</q-chip>
                    <q-chip class="tech-chip woo-chip" icon="store">WooCommerce</q-chip>
                    <q-chip class="tech-chip presta-chip" icon="storefront">Prestashop</q-chip>
                  </div>
                </div>

                <!-- Analytics -->
                <div class="tech-category">
                  <div class="category-header">
                    <span class="category-number">04</span>
                    <h3 class="category-title">Analytics</h3>
                  </div>
                  <div class="tech-chips">
                    <q-chip class="tech-chip python-chip" icon="code">Python</q-chip>
                    <q-chip class="tech-chip powerbi-chip" icon="bar_chart">PowerBI</q-chip>
                    <q-chip class="tech-chip tableau-chip" icon="analytics">Tableau</q-chip>
                    <q-chip class="tech-chip quicksight-chip" icon="insights"
                    >Amazon QuickSight
                    </q-chip>
                    <q-chip class="tech-chip spark-chip" icon="flash_on">Apache Spark</q-chip>
                  </div>
                </div>

                <!-- Data & Cloud -->
                <div class="tech-category">
                  <div class="category-header">
                    <span class="category-number">05</span>
                    <h3 class="category-title">Data & Cloud</h3>
                  </div>
                  <div class="tech-chips">
                    <q-chip class="tech-chip" icon="fa-solid fa-cloud azure-icon">Azure</q-chip>
                    <q-chip class="tech-chip" icon="fa-brands fa-aws aws-icon">AWS</q-chip>
                    <q-chip class="tech-chip" icon="fa-brands fa-docker docker-icon">Docker</q-chip>
                    <q-chip class="tech-chip" icon="fa-brands fa-kubernetes k8s-icon"
                    >Kubernetes
                    </q-chip>
                    <q-chip class="tech-chip" icon="fa-brands fa-google gcp-icon"
                    >Google Cloud
                    </q-chip>
                    <q-chip class="tech-chip" icon="fa-solid fa-brain krutrim-icon"
                    >Ola Krutrim
                    </q-chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature insights -->
    <section class="featured-insights" ref="target6">
      <div class="container insights-content">
        <!-- Header -->
        <div class="insights-header">
          <h2 class="insights-title">FEATURED INSIGHTS</h2>
          <p class="insights-subtitle">
            Were you looking to explore a specific topic? You're in the right spot.
          </p>
        </div>

        <!-- Insights Cards -->
        <div class="row insights-grid q-col-gutter-lg">
          <!-- MVP Launches Card -->
          <div class="col-12 col-md-4">
            <div class="insight-card">
              <div class="card-image-container">
                <img
                  :src="insightImages[0]"
                  alt="3D Holographic Cube"
                  class="img-fluid mx-auto d-block insight-image"
                />
              </div>
              <div class="card-content">
                <h3 class="insight-title">
                  <span class="insight-title-text">
                    Successful MVP Launches That Changed the Game.
                  </span>
                  <span class="title-arrow">
                    <q-icon name="north_east" size="16px" class="text-white" />
                  </span>
                </h3>

                <p class="insight-description">
                  Discover the secrets behind game-changing MVP launches! From lean startups to
                  industry giants, explore how these innovative launches disrupted markets and paved
                  the way for success.
                </p>
              </div>
            </div>
          </div>

          <!-- AI Product Development Card -->
          <div class="col-12 col-md-4">
            <div class="insight-card">
              <div class="card-image-container">
                <img
                  :src="insightImages[1]"
                  alt="3D Landscape with Palm Tree"
                  class="img-fluid insight-image"
                />
              </div>
              <div class="card-content">
                <h3 class="insight-title">
                  How Our AI Product Development Company is Pioneering Innovation?
                  <span class="title-arrow">
                    <q-icon name="north_east" size="16px" class="text-white" />
                  </span>
                </h3>
                <p class="insight-description">
                  Discover how our product development company pioneers innovation. From
                  groundbreaking technologies to creative strategies, we're shaping the future.
                </p>
              </div>
            </div>
          </div>

          <!-- E-commerce Optimization Card -->
          <div class="col-12 col-md-4">
            <div class="insight-card">
              <div class="card-image-container">
                <img
                  :src="insightImages[2]"
                  alt="3D Figure in Blue"
                  class="img-fluid insight-image"
                />
              </div>
              <div class="card-content">
                <h3 class="insight-title">
                  Optimizing E-commerce Sales with AI-Driven Product Recommendations.
                  <span class="title-arrow">
                    <q-icon name="north_east" size="16px" class="text-white" />
                  </span>
                </h3>
                <p class="insight-description">
                  Boost your e-commerce sales with AI-powered product recommendations. Learn how
                  smart algorithms can enhance customer experience and drive conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Us-->
    <section class="contact-wrapper" ref="target7">
      <div class="split-section container">
        <img src="../assets/contact us/mail-icon.png" alt="decor" class="corner-img" />

        <!-- Left Side (Image) -->
        <div class="image-side d-flex align-items-center justify-content-center">
          <div class="contact-box">
            <img src="../assets/contact us/2.png" alt="Contact Illustration" class="contact-img" />

            <h2>CONTACT US</h2>
            <p>Talk with us to know how we can make you a part of a thriving digital landscape</p>

            <div class="contact-info">
              <div class="contact-item top">
                <div class="left">
                  <q-icon name="phone" size="20px" color="white" />
                  <span>Phone</span>
                </div>
                <div class="right">+1 234 567 890</div>
              </div>

              <div class="contact-item">
                <div class="left">
                  <q-icon name="email" size="20px" color="white" />
                  <span>Email</span>
                </div>
                <div class="right">hello@example.com</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side (Color + Overlap) -->
        <div class="color-side d-flex align-items-center">
          <div class="form-box">
            <h3 class="form-title">Let’s Talk!</h3>

            <div class="form-input">
              <label class="input-label">What's your name?</label>
              <q-input filled />
            </div>

            <div class="form-input">
              <label class="input-label">What's your email address?</label>
              <q-input filled type="email" />
            </div>

            <div class="form-input">
              <label class="input-label">What's your phone number?</label>
              <q-input filled type="tel" />
            </div>

            <div class="form-input">
              <label class="input-label">What are you looking for?</label>
              <q-input filled />
            </div>

            <div class="form-input">
              <label class="input-label">How can we help you?</label>
              <q-input filled type="textarea" autogrow />
            </div>

            <q-btn label="Send Request" class="submit-btn" />
          </div>
        </div>
      </div>
    </section>

    <!-- Added footer as scrolling target -->
    <div ref="footerTarget">
      <ChromezyFooter />
    </div>
  </q-page>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import Lenis from '@studio-freight/lenis'
import ChromezyFooter from '../components/ChromezyFooter.vue'

const logos = import.meta.glob('/src/assets/hero logos/*.{png,jpg,jpeg,svg}', { eager: true })
const logoImages = Object.values(logos).map((module) => module.default)
const mvpLogos = import.meta.glob('/src/assets/mvp logos/*.{png,jpg,jpeg,svg}', { eager: true })
const mvpImages = Object.values(mvpLogos).map((module) => module.default)
const testLogos = import.meta.glob('/src/assets/test logos/*.{png,jpg,jpeg,svg}', { eager: true })
const testImages = Object.values(testLogos).map((module) => module.default)
const heroSection = ref(null)
const target1 = ref(null)
const target2 = ref(null)
const target3 = ref(null)
const target4 = ref(null)
const target5 = ref(null)
const target6 = ref(null)
const target7 = ref(null)
const footerTarget = ref(null)

const floatingImageConfigs = {
  image1: {
    heroSection: { right: '20px', top: '180px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    target1: { top: '400px', right: '250px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    target2: { right: '210px', top: '365px', scale: 2.1, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    target3: { right: '55px', top: '-160px', scale: 1.2, opacity: 1, rotation: 0, visible: true, blur: '12px' },
    target4: { right: '218px', top: '182px', scale: 1.7, opacity: 1, rotation: 0, visible: true, blur: '15px' },
    target5: { right: '200px', top: '350px', scale: 1.8, opacity: 0.6, rotation: 0, visible: true, blur: '35px' },
    target6: { right: '575px', top: '560px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '20px' },
    target7: { left: '250px', top: '250px', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    footerTarget: { left: '220px', top: '320px', scale: 1.1, opacity: 0.4, rotation: 10, visible: false, blur: '1px' }
  },

  image2: {
    heroSection: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0.5px' },
    target1: { top: '600px', right: '210px', scale: 2.1, opacity: 1, rotation: 0, visible: true, blur: '6px' },
    target2: { right: '210px', top: '-300px', scale: 1, opacity: 0.6, rotation: 25, visible: true, blur: '0.5px' },
    target3: { left: '0px', top: '0px', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '2px' },
    target4: { left: '0px', top: '0px', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' },
    target5: { left: '180px', top: '400px', scale: 0, opacity: 0, rotation: 0, visible: true, blur: '3px' },
    target6: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' },
    target7: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '1px' },
    footerTarget: { left: '160px', top: '180px', scale: 1.1, opacity: 0.7, rotation: -5, visible: false, blur: '2px' }
  },
  image3: {
    heroSection: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0.5px' },
    target1: { left: '320px', top: '180px', scale: 0.9, opacity: 0.7, rotation: -15, visible: false, blur: '1px' },
    target2: { left: '180px', top: '350px', scale: 1.2, opacity: 0.8, rotation: 10, visible: false, blur: '2px' },
    target3: { left: '250px', top: '120px', scale: 1, opacity: 0.5, rotation: 0, visible: false, blur: '0px' },
    target4: { left: '0px', top: '0px', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' },
    target5: { left: '-900px', top: '-280px', scale: 0.4, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    target6: { left: '-1090px', top: '-450px', scale: 0.4, opacity: 1, rotation: -80, visible: true, blur: '0px' },
    target7: { left: '-800px', top: '-1030px', scale: 0.3, opacity: 1, rotation: 0, visible: true, blur: '0px' },
    footerTarget: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '1px' }
  },
  image4: {
    heroSection: { left: '-350px', top: '170px', right:'auto', scale: 1, opacity: 1, rotation: 0, visible: true, blur: '12px' },
    target1: { left: '-250px', top: '0px', scale: 0.6, opacity: 1, rotation: 0, visible: true, blur: '8px' },
    target2: { left: '-270px', top: '45px', scale: 0.3, opacity: 1, rotation: 0, visible: true, blur: '60px' },
    target3: { left: '-300px', top: '230px', scale: 0.8, opacity: 1, rotation: 0, visible: true, blur: '15px' },
    target4: { left: '-400px', top: '150px', scale: 1.4, opacity: 1, rotation: 0, visible: true, blur: '15px' },
    target5: { left: '-400px', top: '100px', scale: 1, opacity: 0, rotation: 0, visible: true, blur: '15px' },
    target6: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '0px' },
    target7: { left: '0', top: '0', scale: 0, opacity: 0, rotation: 0, visible: false, blur: '8px' },
    footerTarget: { left: '250px', top: '160px', scale: 1.1, opacity: 0.7, rotation: 5, visible: false, blur: '12px' }
  }
}

const floatingImageRefs = ref([])
const floatingImageSources = ref([])

const animateFloatingImagesToTarget = (targetName) => {
  Object.keys(floatingImageConfigs).forEach((imageKey, index) => {
    const config = floatingImageConfigs[imageKey][targetName]
    if (!config) return

    const imageWrapperRef = floatingImageRefs.value[index]
    if (!imageWrapperRef) return

    // --- 1. Read current computed position
    const rect = imageWrapperRef.getBoundingClientRect()
    const parentRect = imageWrapperRef.offsetParent
      ? imageWrapperRef.offsetParent.getBoundingClientRect()
      : { left: 0, top: 0 }

    const currentLeft = rect.left - parentRect.left
    const currentTop = rect.top - parentRect.top

    // --- 2. Target position from config
    let targetLeft = config.left !== undefined ? parseFloat(config.left) : currentLeft
    let targetTop = config.top !== undefined ? parseFloat(config.top) : currentTop
    let targetRight = config.right !== undefined ? parseFloat(config.right) : null
    let targetBottom = config.bottom !== undefined ? parseFloat(config.bottom) : null

    // Handle right/bottom if used
    if (targetRight !== null) {
      targetLeft = window.innerWidth - targetRight - rect.width
    }
    if (targetBottom !== null) {
      targetTop = window.innerHeight - targetBottom - rect.height
    }

    // --- 3. Compute deltas
    const deltaX = targetLeft - currentLeft
    const deltaY = targetTop - currentTop

    // --- 4. Animate with GSAP (using transforms only)
    gsap.to(imageWrapperRef, {
      x: `+=${deltaX}`,   // move relative to current
      y: `+=${deltaY}`,
      scale: config.scale,
      rotation: config.rotation,
      opacity: config.visible ? config.opacity : 0,
      duration: 1.2,
      ease: "power2.inOut",
      onComplete: () => {
        imageWrapperRef.style.display = config.visible ? 'block' : 'none'
      }
    })

    // --- 5. Animate blur on <img>
    const imgElement = imageWrapperRef.querySelector('img')
    if (imgElement && config.blur !== undefined) {
      gsap.to(imgElement, {
        filter: `blur(${config.blur})`,
        duration: 1.2,
        ease: "power2.inOut"
      })
    }
  })
}




const objLogos = import.meta.glob('/src/assets/objects/*.{png,jpg,jpeg,svg}', { eager: true })
const floatingImages = Object.values(objLogos).map((module) => module.default)
const revenueCounter = ref(0)
const speedCounter = ref(0)
const ordersCounter = ref(0)
const usersCounter = ref(0)
const hasAnimated = ref(false)

const storiesLogo = import.meta.glob('/src/assets/stories/*.{png,jpg,jpeg,svg}', { eager: true })
const storiesImages = Object.values(storiesLogo).map((module) => module.default)
const insightLogo = import.meta.glob('/src/assets/feature insights/*.{png,jpg,jpeg,svg}', {
  eager: true,
})
const insightImages = Object.values(insightLogo).map((module) => module.default)
const scrollPosition = ref(0)
const carouselContainer = ref(null)
const testimonialsTrack = ref(null)
const currentSlide = ref(0)
const totalSlides = 4
const innovativeImage = '/src/assets/1.png'

const animateCounters = () => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  // Animate revenue counter to 200
  const revenueAnimation = setInterval(() => {
    if (revenueCounter.value < 200) {
      revenueCounter.value += 4
    } else {
      revenueCounter.value = 200
      clearInterval(revenueAnimation)
    }
  }, 20)

  // Animate speed counter to 4
  const speedAnimation = setInterval(() => {
    if (speedCounter.value < 4) {
      speedCounter.value += 1
    } else {
      speedCounter.value = 4
      clearInterval(speedAnimation)
    }
  }, 100)

  // Animate orders counter to 73
  const ordersAnimation = setInterval(() => {
    if (ordersCounter.value < 73) {
      ordersCounter.value += 2
    } else {
      ordersCounter.value = 73
      clearInterval(ordersAnimation)
    }
  }, 25)

  // Animate users counter to 10000
  const usersAnimation = setInterval(() => {
    if (usersCounter.value < 10000) {
      usersCounter.value += 200
    } else {
      usersCounter.value = 10000
      clearInterval(usersAnimation)
    }
  }, 15)
}

const observeStatsSection = () => {
  const statsSection = document.querySelector('.stats-section')
  if (!statsSection) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.value) {
          animateCounters()
        }
      })
    },
    { threshold: 0.5 },
  )

  observer.observe(statsSection)
}

const nextSlide = () => {
  if (!carouselContainer.value) return

  const containerWidth = carouselContainer.value.offsetWidth

  // Check if we're in mobile view (width <= 992px)
  if (window.innerWidth <= 992) {
    if (currentSlide.value < totalSlides - 1) {
      currentSlide.value++
      // Account for the card width (25%) plus any margin/spacing
      scrollPosition.value = currentSlide.value * (containerWidth * 1)
    }
  } else {
    // Desktop: existing behavior
    const scrollAmount = containerWidth * 0.23
    const maxScroll = containerWidth * 0.23

    if (scrollPosition.value < maxScroll) {
      scrollPosition.value = Math.min(scrollPosition.value + scrollAmount, maxScroll)
    }
  }
}

const previousSlide = () => {
  if (!carouselContainer.value) return

  const containerWidth = carouselContainer.value.offsetWidth

  // Check if we're in mobile view (width <= 992px)
  if (window.innerWidth <= 992) {
    if (currentSlide.value > 0) {
      currentSlide.value--
      // Account for the card width (25%) plus any margin/spacing
      scrollPosition.value = currentSlide.value * (containerWidth * 1)
    }
  } else {
    // Desktop: existing behavior
    const scrollAmount = containerWidth * 0.23

    if (scrollPosition.value > 0) {
      scrollPosition.value = Math.max(scrollPosition.value - scrollAmount, 0)
    }
  }
}
let lenisInstance = null
let rafId = null
let jumpedOnce = false
let currentTargetIndex = 0
const targets = [
  'heroSection',
  'target1',
  'target2',
  'target3',
  'target4',
  'target5',
  'target6',
  'target7',
  'footerTarget',
]

const targetOffsets = {
  heroSection: 0,
  target1: -90,
  target2: -70,
  target3: -100,
  target4: -120,
  target5: -100,
  target6: -120,
  target7: -100,
  footerTarget: -80,
}

let isScrolling = false

onMounted(() => {
  // 1. Populate sources and refs
  floatingImageSources.value = floatingImages
  floatingImageRefs.value = Array(floatingImages.length).fill(null)

  // 2. Wait until DOM has rendered
  nextTick(() => {
    // --- Set initial positions instantly ---
    floatingImageRefs.value.forEach((el, index) => {
      const config = floatingImageConfigs[`image${index+1}`]?.heroSection
      if (!config || !el) return

      // Raw CSS positioning
      if (config.left !== undefined) {
        el.style.left = config.left
        el.style.right = 'auto'
      }
      if (config.right !== undefined) {
        el.style.right = config.right
        el.style.left = 'auto'
      }
      if (config.top !== undefined) el.style.top = config.top
      if (config.bottom !== undefined) el.style.bottom = config.bottom

      // Transform/opacity/etc
      gsap.set(el, {
        opacity: config.opacity,
        scale: config.scale,
        rotation: config.rotation,
      })

      const imgElement = el.querySelector('img')
      if (imgElement && config.blur !== undefined) {
        gsap.set(imgElement, { filter: `blur(${config.blur})` })
      }

      el.style.display = config.visible ? 'block' : 'none'
    })

    // 3. Setup Lenis
    const containerEl = document.querySelector('.home-page')
    if (!containerEl) return

    lenisInstance = new Lenis({
      duration: 0.4,
      easing: (t) => t,
      smoothWheel: true,
      wheelMultiplier: 1.15,
      smoothTouch: true,
      touchMultiplier: 1.15,
    })

    const rafLoop = (time) => {
      lenisInstance?.raf(time)
      rafId = requestAnimationFrame(rafLoop)
    }
    rafId = requestAnimationFrame(rafLoop)

    jumpedOnce = false

    setTimeout(() => {
      observeStatsSection()
    }, 100)

    const sectionEl =
      (heroSection?.value && (heroSection.value.$el || heroSection.value)) ||
      document.querySelector('.hero-section')

    const performJump = (direction = 'down') => {
      if (isScrolling) return

      if (direction === 'down' && currentTargetIndex < targets.length - 1) {
        currentTargetIndex++
      } else if (direction === 'up' && currentTargetIndex > 0) {
        currentTargetIndex--
      } else {
        return
      }

      const targetName = targets[currentTargetIndex]
      let targetEl = null

      if (targetName === 'heroSection') {
        targetEl =
          (heroSection?.value && (heroSection.value.$el || heroSection.value)) ||
          document.querySelector('.hero-section')
      } else if (targetName === 'footerTarget') {
        targetEl =
          (footerTarget?.value && (footerTarget.value.$el || footerTarget.value)) ||
          document.querySelector('.footer-dark')
      } else {
        const targetRef = eval(targetName)
        targetEl = (targetRef?.value && (targetRef.value.$el || targetRef.value)) || null
      }

      if (!targetEl) return

      isScrolling = true
      animateFloatingImagesToTarget(targetName)

      const targetOffset = targetOffsets[targetName] || -100

      if (lenisInstance) {
        lenisInstance.scrollTo(targetEl, {
          offset: targetOffset,
          duration: 1.05,
          lock: true,
          onComplete: () => {
            isScrolling = false
          },
        })
      } else {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
          isScrolling = false
        }, 1050)
      }
    }

    const onWheel = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (isScrolling) return

      if (!jumpedOnce && e.deltaY > 0) {
        jumpedOnce = true
        performJump('down')
      } else if (jumpedOnce) {
        if (e.deltaY > 0) performJump('down')
        else if (e.deltaY < 0) performJump('up')
      }
    }

    let touchStartY = 0
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      if (isScrolling) return
      const touchDelta = touchStartY - e.touches[0].clientY

      if (!jumpedOnce && touchDelta > 10) {
        e.preventDefault()
        e.stopPropagation()
        jumpedOnce = true
        performJump('down')
      } else if (jumpedOnce) {
        if (Math.abs(touchDelta) > 10) {
          e.preventDefault()
          e.stopPropagation()
          if (touchDelta > 0) performJump('down')
          else performJump('up')
        }
      }
    }

    sectionEl?.addEventListener('wheel', onWheel, { passive: false, capture: true })
    sectionEl?.addEventListener('touchstart', onTouchStart, { passive: true, capture: true })
    sectionEl?.addEventListener('touchmove', onTouchMove, { passive: false, capture: true })

    const globalWheelHandler = (e) => {
      if (jumpedOnce && !isScrolling) {
        e.preventDefault()
        if (e.deltaY > 0) performJump('down')
        else if (e.deltaY < 0) performJump('up')
      }
    }

    document.addEventListener('wheel', globalWheelHandler, { passive: false })

    onUnmounted(() => {
      sectionEl?.removeEventListener('wheel', onWheel, true)
      sectionEl?.removeEventListener('touchstart', onTouchStart, true)
      sectionEl?.removeEventListener('touchmove', onTouchMove, true)
      document.removeEventListener('wheel', globalWheelHandler)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      if (lenisInstance) {
        lenisInstance.destroy?.()
        lenisInstance = null
      }
    })

    // 4. Kick off the initial animation
    setTimeout(() => {
      animateFloatingImagesToTarget('heroSection')
    }, 300)
  })
})

onMounted(() => {
  const handleResize = () => {
    scrollPosition.value = 0
    currentSlide.value = 0
  }

  window.addEventListener('resize', handleResize)

  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

</script>

<style scoped>
.dashed-separator {
  border-top: 1px dashed rgba(255, 255, 255, 0.2) !important;
  opacity: 1 !important;
  width: 100%;
}

.home-page {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  font-family: 'sora', sans-serif;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* keep blur inside */
}

.hero-section::before {
  content: '';
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  background-image: url(/src/assets/Serction-Hero.png?t=1758745798359);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(90px); /* adjust blur strength */
  z-index: -1; /* keep behind content */
}

.hero-content {
  text-align: center;
  max-width: 900px;
  z-index: 2;
  position: relative;
  padding-top: 4rem;
}

.intro-text {
  color: #ffbe0b;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
}

.main-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
  letter-spacing: -2px;
}

.concept {
  background: #11deff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.reality {
  background: #4380ff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  color: #bdf4d0;
  margin-bottom: 2rem;
  font-weight: 300;
  line-height: 1.4;
}

.description {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
}

.stats-section {
  margin-top: 4rem;
  margin-bottom: 6rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  background: linear-gradient(#3c6bfe, #9d84f2);
  font-size: 3rem;
  font-weight: 800;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Fixed hero logos positioning and styling */
.hero-logos {
  padding: 3rem 0;
  width: 100%;
  overflow: hidden; /* Added overflow hidden for marquee effect */
}

/* Added marquee container and animation styles */
.marquee-container {
  width: 100%;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  animation: marquee 30s linear infinite;
  width: fit-content;
}

.logo-set {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;
}

.company-logo {
  padding: 1rem;
  transition: transform 0.3s ease;
  flex-shrink: 0; /* Prevent logos from shrinking in flex container */
}

.company-logo:hover {
  transform: translateY(-5px);
}

.company-logo img {
  max-height: 80px;
  width: auto;
  filter: brightness(0.8) contrast(1.2);
  transition: filter 0.3s ease;
}

.company-logo:hover img {
  filter: brightness(1) contrast(1.3);
}

/* Marquee animation */
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Added responsive adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 1rem;
  }

  .stats-section {
    margin-bottom: 4rem;
  }

  .company-logo img {
    max-height: 60px;
  }

  .services-grid {
    grid-template-columns: 1fr !important;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .service-title {
    font-size: 1.5rem;
  }
}

.card-icon {
  position: absolute;
  top: 1rem; /* distance from top */
  right: 1rem; /* distance from right */
  width: 165px;
  height: auto;
  opacity: 0.9; /* optional, softer effect */
  pointer-events: none; /* so it doesn't block clicks */
}

.services-section {
  min-height: 89vh;
  position: relative;
  padding-top: 50px;
}
.services-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;   /* control size */
  height: 300px;
  background: radial-gradient(circle, #095DFF 0%, #BF09FF 100%);
  filter: blur(300px);  /* makes the glow soft */
  z-index: 0;
  pointer-events: none;
}

/* Added new layout structure for side-by-side positioning */
.services-layout {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: flex-start;
}

.services-left {
  flex: 0 0 35%;
  max-width: 65%;
}

.services-right {
  flex: 1;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
}

.services-header {
  padding-right: 0;
}

.services-title {
  font-size: clamp(2.5rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 50px;
  color: white;
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.services-description {
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px; /* or 150% */
  color: rgba(255, 255, 255, 0.8);
}

.service-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* space between content & button */
  height: 100%; /* ensures equal height when inside grid */
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  font-weight: 500;
  padding: 8px;
  border-radius: 30px;
  background: #ffefd12e;
  width: 100px;
}

.service-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.service-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.service-btn {
  background: #000;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  margin-top: auto; /* pushes the button to the bottom */
}

.service-btn:hover {
  background: #333;
  transform: translateY(-2px);
}

.btn-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.service-btn:hover .btn-arrow {
  transform: translateX(5px);
}

.mvp-card {
  background: #2f41a3;
  position: relative;
}

.saas-card {
  background: #7e2148;
}

.ai-card {
  background: #aa7333;
}

.commerce-card {
  background: #224a38;
}

@media (max-width: 992px) {
  .services-layout {
    flex-direction: column;
    gap: 3rem;
  }

  .services-left {
    flex: none;
    max-width: 100%;
    text-align: center;
  }

  .services-title {
    font-size: 3rem;
  }

  .services-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* Testimonials Section */
.testimonials-section {
  min-height: 82vh;
  position: relative;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
}

.testimonials-title-wrapper {
  flex: 1;
}

.testimonials-title {
  font-size: clamp(2.5rem, 5vw, 2.5rem);
  color: white;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  font-weight: 600;
  line-height: 50px;
}

.testimonials-subtitle {
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0;
}

.testimonials-nav {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.testimonials-carousel {
  overflow: hidden;
  position: relative;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 133.33%; /* 4 testimonials total */
}

.testimonial-card {
  width: calc(22% - 0.25rem);
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-right: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

@media (min-width: 992px) and (max-width: 1200px) {
  .testimonial-card {
    width: calc(22% - 0.45rem);
  }
}

.quote-icon {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1rem;
  margin-bottom: 2rem;
  flex-grow: 1;
  font-weight: 600;
  line-height: 26px;
  color: #ffffff;
}

.client-info {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: right;
}

.client-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}

.client-title {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.company-logo-testimonial img {
  max-height: 30px;
  width: auto;
  filter: brightness(0.8) contrast(1.2);
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.rating-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.project-details {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
}

.project-details p {
  margin: 0.25rem 0;
}

.test-logo img {
  max-height: 40px;
  object-fit: contain;
}

/* Updated responsive behavior for mobile */
@media (max-width: 992px) {
  .testimonials-track {
    width: 400%; /* 4 cards in mobile view */
  }

  .testimonial-card {
    width: 25%; /* Each card takes 25% of track width in mobile */
    /* Remove margin-right in mobile to prevent spacing issues */
    margin-right: 0;
  }

  .testimonials-header {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .testimonials-nav {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.5rem;
    min-height: 350px;
  }

  .client-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

.testimonial-card:last-child {
  margin-right: 0;
}

.card-container {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  aspect-ratio: 4 / 3;
}

.card-image {
  position: absolute; /* make it background layer */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* keeps it covering nicely */
  z-index: 0;
}

.success-badge {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1rem;
  background: #fff; /* example badge color */
  color: #000;
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  font-size: 0.8rem;
  z-index: 1; /* make sure it stays above image */
}

.arrow-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border-radius: 100%;
  padding: 10px;
}

.sccess-footer {
  z-index: 1; /* overlays above image */
  position: absolute;
  bottom: 0; /* bottom-0 */
  left: 0; /* start-0 */
  width: 90%; /* w-100 */
  padding: 1rem;
  background: #fff;
  border-top-right-radius: 20px;
}

.sccess-footer h4 {
  color: #000;
  font-size: clamp(0.8rem, 1.8vw, 1.2rem);
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.sccess-footer p {
  color: #000;
  font-size: clamp(0.6rem, 1.6vw, 0.8rem); /* responsive description */
  margin: 0;
}

.success-stories .display-3 {
  font-size: clamp(2.5rem, 5vw, 3rem);
  font-weight: 600;
  line-height: 50px;
}

.success-stories p {
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-weight: 400;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.8);
}

.success-stories {
  min-height: 78vh;
}

.stories-content {
  padding-top: 100px;
}

.innovative-tech-section {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.innovative-tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.innovative-content {
  padding: 70px 0px;
}

.tech-main-card {
  border-radius: 80px;
  height: 100%;
  background: linear-gradient(180deg, rgba(40, 46, 108, 0.2) 0%, rgba(189, 213, 244, 0.2) 100%);
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 90px 40px;
}

.tech-main-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.tech-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.tech-shape-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.tech-3d-shape {
  max-width: 280px;
  height: 200px;
  border-radius: 16px;
  mix-blend-mode: color-dodge;
}

.tech-categories-container {
  padding: 2rem 0;
}

.tech-category {
  margin-bottom: 2rem;
}

.category-header {
  display: flex;
  align-items: center;
}

.category-number {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: rgba(148, 163, 184, 0.3);
  margin-right: 1.5rem;
  min-width: 80px;
}

.category-title {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-left: 95px;
}

.tech-chip {
  font-size: clamp(0.75rem, 1.5vw, 0.875rem);
  font-weight: 500;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 16px 20px 12px;
  color: white;
  border: 1px solid rgba(20, 21, 23, 0.1);
  border-radius: 8px;
}

:deep(.tech-chip .q-icon) {
  color: #a8b3c2;
}

/* color ONLY the icon for each tech (scoped + deep) */
:deep(.react-chip .q-icon) {
  color: #61dafb !important;
}

:deep(.node-chip .q-icon) {
  color: #68a063 !important;
}

:deep(.angular-chip .q-icon) {
  color: #dd0031 !important;
}

:deep(.vue-chip .q-icon) {
  color: #4fc08d !important;
}

:deep(.express-chip .q-icon) {
  color: #ffffff !important;
}

:deep(.adobe-chip .q-icon) {
  color: #ff00ff !important;
}

:deep(.figma-chip .q-icon) {
  color: #f24e1e !important;
}

:deep(.whimsical-chip .q-icon) {
  color: #ffffff !important;
}

:deep(.flutter-chip .q-icon) {
  color: #027dfb !important;
}

:deep(.kotlin-chip .q-icon) {
  color: #7c4dff !important;
}

:deep(.swift-chip .q-icon) {
  color: #fa5f55 !important;
}

:deep(.react-native-chip .q-icon) {
  color: #61dafb !important;
}

:deep(.shopify-chip .q-icon) {
  color: #95d03a !important;
}

:deep(.woo-chip .q-icon) {
  color: #95d03a !important;
}

:deep(.presta-chip .q-icon) {
  color: #df7980 !important;
}

:deep(.python-chip .q-icon) {
  color: #ffd43b !important;
}

:deep(.powerbi-chip .q-icon) {
  color: #f2c41b !important;
}

:deep(.tableau-chip .q-icon) {
  color: #e87d37 !important;
}

:deep(.quicksight-chip .q-icon) {
  color: #ff9900 !important;
}

:deep(.spark-chip .q-icon) {
  color: #e54d26 !important;
}

/* cloud/data icons via chip class (works with icon prop) */
:deep(.azure-chip .q-icon) {
  color: #0078d7 !important;
}

:deep(.aws-chip .q-icon) {
  color: #ff9900 !important;
}

:deep(.docker-chip .q-icon) {
  color: #00b4f0 !important;
}

:deep(.k8s-chip .q-icon) {
  color: #326ce5 !important;
}

:deep(.gcp-chip .q-icon) {
  color: #4285f4 !important;
}

:deep(.krutrim-chip .q-icon) {
  color: #ffffff !important;
}

.tech-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tech-chips {
    margin-left: 0;
  }

  .category-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .category-number {
    margin-right: 0;
    margin-bottom: 0.5rem;
    min-width: auto;
  }
}

.featured-insights {
  min-height: 66vh !important;
  /* padding: 6rem 0; */
  position: relative;
}

.insights-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.insights-header {
  margin-bottom: 4rem;
}

.insights-subtitle {
  font-size: clamp(0.95rem, 1.1vw, 1.2rem);
  color: #b0b0b0;
  line-height: 1.6;
  margin: 0 auto;
}

.insights-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;

  display: flex;
  justify-content: flex-start; /* keep text + arrow aligned left */
  align-items: center;
  gap: 0.75rem; /* spacing between text and arrow */
}

.title-arrow {
  flex: 0 0 35px; /* <— fixed, non-shrinkable */
  width: 35px;
  height: 35px;
  flex-shrink: 0; /* <— prevent shrinking */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  line-height: 1;
  z-index: 2;
  padding: 1.5rem;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.insight-card {
  border-radius: 20px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
}

.insight-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  padding: 2rem 2rem 0 2rem;
}

.card-image-container img,
.card-image-container .q-img__image {
  display: block;
  width: 100%;
  height: 240px; /* adjust as needed */
  object-fit: cover;
  object-position: center;
  margin: 0 auto; /* fallback horizontal centering */
}

.insight-image {
  transition: transform 0.3s ease;
}

.insight-card:hover .card-arrow i {
  transform: translate(2px, -2px);
}

.card-content {
  padding: 2rem;
}

.insight-description {
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  margin: 0;
  font-weight: 400;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.7);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .featured-insights {
    padding: 4rem 0;
  }

  .insights-header {
    margin-bottom: 3rem;
  }

  .card-content {
    padding: 1.5rem;
  }
}

.insight-title {
  font-size: clamp(1rem, 1.4vw, 0.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.insight-title-text {
  flex: 1 1 auto; /* text can take remaining space */
  min-width: 0; /* allow wrapping instead of pushing arrow */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* optional: clamp to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}



.contact-wrapper {
  min-height: 83vh;
}
.contact-wrapper::before {
  content: "";
  position: absolute;
  bottom: 6%;
  left: 5%;
  width: 600px;
  height: 300px;
  background: radial-gradient(circle, #095DFF 0%, #BF09FF 100%);
  filter: blur(200px);
  z-index: 0;
  pointer-events: none;
  border-radius: 100%;
}
.split-section {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap; /* allow stacking on small screens */
  position: relative;
}
.corner-img {
  position: absolute;
  top: -105px;
  right: 35px;
  width: 170px;
  height: auto;
  z-index: 10;
  pointer-events: none;
}

/* Left image section */
.image-side {
  flex: 2;
  background: url('../assets/contact us/1.png') no-repeat center center;
  background-size: cover; /* ensures it always fills */
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Right color section */
.color-side {
  flex: 1;
  background: #a5c8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}




.contact-box {
  padding: 2rem;
  text-align: center;
  max-width: 400px;
}

.contact-box h2 {
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 700;
  margin: 0;
}

.contact-box p {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
}

.contact-img {
  max-width: 300px;
  margin: -100px auto 1rem;
  display: block;
}

.contact-info {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
}

.contact-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #35a57f;
  padding: 0.8rem 1rem;
  font-weight: bold;
  color: #fff;
}

.contact-item .left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item.top {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.contact-item:last-child {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.contact-item.top::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 1rem;
  right: 1rem;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
}

.form-box {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  margin: 50px 0px 50px -100px; /* overlap on desktop */
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #000;
}

.form-input {
  margin-bottom: 1rem;
}

.input-label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0.4rem;
  color: #000;
}

.submit-btn {
  width: 100%;
  padding: 0.9rem;
  border-radius: 12px;
  background: #000;
  color: #fff;
  font-weight: bold;
  text-transform: none;
}

@media (max-width: 991px) {
  .split-section {
    flex-direction: column;
  }

  .image-side {
    border-radius: 20px 20px 0 0;
    flex: unset;
  }

  .color-side {
    border-radius: 0 0 20px 20px;
    flex: unset;
    margin-top: -10px;
  }

  .form-box {
    margin: 0;
    max-width: 100%;

  }
}

/* Updated floating images styles */
.floating-image-wrapper {
  will-change: transform, opacity;
  backface-visibility: hidden;
}

.floating-image {
  display: block;
}
.floating-image4-4{
  mix-blend-mode: plus-lighter;
  filter: blur(12px);
}
/* Individual styling for each floating image */

</style>
