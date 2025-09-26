<template>
  <q-footer class="footer-dark">
    <div class="container">
      <!-- Top row -->
      <div class="row align-items-start q-py-md">
        <!-- Left column -->
        <div class="col-md-4 col-sm-12 mb-4 col-lg-6">
          <div class="brand d-flex align-items-center mb-3">
            <img src="..//assets/logo.png" alt="Chromezy" class="brand-logo" />
            <p class="brand-sub">
              Not just about software & Product development;<br />
              we're your tech partners, crafting modern digital<br />
              solutions for next-gen excellence!
            </p>
          </div>

          <div class="small-links row items-center q-gutter-md">
            <a class="muted-link" href="#">Terms</a>
            <span>|</span>
            <a class="muted-link" href="#">Privacy</a>
          </div>

          <div class="contact mt-3">
            <div class="d-flex align-items-center contact-row q-mb-sm">
              <i class="fa fa-phone contact-icon"></i>
              <a class="contact-link" href="tel:+13153080901">+1 315 308 0901</a>
            </div>
            <div class="d-flex align-items-center contact-row">
              <i class="fa fa-envelope contact-icon"></i>
              <a class="contact-link" href="mailto:sales@chromezy.com">sales@chromezy.com</a>
            </div>
          </div>
        </div>

        <!-- Middle column -->
        <div class="col-md-4 col-sm-6 col-12 mb-4 col-lg-3">
          <ul class="footer-nav list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Case Study</a></li>
            <li><a href="#" class="cta">Join the Team</a></li>
          </ul>
        </div>

        <!-- Right column -->
        <div class="col-md-4 col-sm-6 col-12 mb-4 col-lg-3">
          <ul class="footer-nav list-unstyled">
            <li><a href="#">AI</a></li>
            <li><a href="#">MVP</a></li>
            <li><a href="#">SaaS</a></li>
            <li><a href="#">E-commerce</a></li>
            <li><a href="#" class="cta primary-cta">Work with us</a></li>
          </ul>
        </div>
      </div>

      <q-separator dark class="q-my-sm" />

      <!-- Bottom row -->
      <div class="row py-3 items-center">
        <div class="col-md-8 col-12 copyright">
          Copyright © 2025 &nbsp; | &nbsp; Dbnk Designs, All Rights Reserved &nbsp; | &nbsp;
          <a class="designer-link" href="#">Designed by Debasish Naik</a>
        </div>

        <div class="col-md-4 col-12 text-md-right mt-2 mt-md-0">
          <span class="connect-label">Connect with us:</span>
          <a class="social-btn" href="#">
            <q-icon name="fa-brands fa-facebook-f" />
          </a>
          <a class="social-btn" href="#">
            <q-icon name="fa-brands fa-instagram" />
          </a>
          <a class="social-btn" href="#">
            <q-icon name="fa-brands fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </q-footer>
</template>

<script setup>
/* No special logic needed unless you want to pass props */
</script>

<style scoped>
.footer-dark {
  background: linear-gradient(180deg, #0b0d0f, #0f1113) !important;
  color: #9aa0a6;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
  padding-top: 100px;
  position: relative;
  z-index: 10;
  width: 100%;
  min-height: 400px;
}

/* Brand */
.brand-logo {
  width: 150px;
  margin-right: 12px;
  object-fit: contain;
}

.brand-sub {
  margin: 6px 33px 0;
  color: #9aa0a6;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
}

/* Links */
.small-links {
  margin: 2px 19px 15px;
  color: rgba(255, 255, 255, 0.6);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
}

.small-links .muted-link {
  color: #9aa0a6;
  font-size: 0.875rem;
  text-decoration: none;
}

.small-links .muted-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Contact */
.contact-row {
  gap: 10px;
}

.contact-icon {
  color: #2d79ff;
  font-size: 16px;
  width: 22px;
  text-align: center;
}

.contact-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.95rem;
  margin-left: 15px;
}

.contact-link:hover {
  text-decoration: underline;
}

/* Nav */
.footer-nav {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.footer-nav li {
  position: relative;
  padding: 10px 0;
  margin-left: 33px; /* aligns with brand-sub */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-nav li:last-child {
  border-bottom: none;
}

.footer-nav a {
  display: block;
  color: #9aa0a6;
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  padding-right: 18px; /* space for arrow */
}

.footer-nav a::after {
  content: "›";
  position: absolute;
  right: 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

.footer-nav a:hover {
  color: #ffffff;
}

.footer-nav .cta {
  font-weight: 700;
  color: #ffffff;
}

.footer-nav .primary-cta {
  color: #2d79ff;
}

/* Bottom */
.copyright {
  color: #9aa0a6;
  font-size: 0.85rem;
}

.designer-link {
  color: #2d79ff;
  text-decoration: none;
}

.designer-link:hover {
  text-decoration: underline;
}

.connect-label {
  color: #9aa0a6;
  font-size: 0.9rem;
  margin-right: 8px;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-left: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
}

.social-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 767.98px) {
  .brand-sub {
    font-size: 0.82rem;
  }

  .text-md-right {
    text-align: left !important;
  }
}
</style>
