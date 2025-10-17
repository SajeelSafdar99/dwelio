<template>
  <section class="contact-wrapper" ref="target7">
    <div class="split-section container">
      <div class="image-side d-flex align-items-center justify-content-center">
        <div class="contact-box">
          <img src="../../assets/home/contact%20us/2.png" alt="Contact Illustration" class="contact-img" ref="avatarImg" />

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

      <div class="color-side d-flex align-items-center">
        <div class="form-box" ref="formBox" style="position: relative;">
          <img
            src="../../assets/home/contact%20us/mail-icon.png"
            alt="decor"
            class="corner-img"
            ref="mailIcon"
            style="position: absolute;"
          />
          <h3 class="form-title">Let's Talk!</h3>

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
</template>

<script setup>
import { shallowRef, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'

const target7 = shallowRef(null)
const mailIcon = shallowRef(null)
const avatarImg = shallowRef(null)
const formBox = shallowRef(null)

defineExpose({
  target7,
  mailIcon,
  avatarImg,
  formBox
})

onMounted(() => {
  nextTick(() => {
    if (mailIcon.value) {
      gsap.set(mailIcon.value, {
        scale: 1.5,
        opacity: 0,
        top: '-50px',
        right: '75px'
      })
    }

    if (avatarImg.value) {
      gsap.set(avatarImg.value, {
        scale: 0.2,
        opacity: 0
      })
    }

    if (formBox.value) {
      formBox.value.style.position = 'relative'
      formBox.value.style.overflow = 'hidden'
      gsap.set(formBox.value, {
        margin: '0px 55px 0px 0px',
        clipPath: 'inset(100%)'
      })
    }
  })
})
</script>

<style scoped>
.contact-wrapper {
  min-height: 91vh;
  display: flex;
  align-items: center;
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
  flex-wrap: wrap;
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

.image-side {
  flex: 2;
  background: url('../../assets/home/contact us/1.png') no-repeat center center;
  background-size: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  overflow: visible !important;
}

@media (max-width: 991px) {
  .form-box {
    margin: 0px !important;
  }
  .contact-wrapper {
    margin: 30px 0px;
  }
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
</style>
