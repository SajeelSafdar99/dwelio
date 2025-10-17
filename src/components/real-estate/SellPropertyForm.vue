<template>
  <div class="sell-property-container">
    <div class="container">
      <!-- Header Section -->
      <div class="header-section mb-5">
        <h1 class="form-title">{{ formData.title }}</h1>
        <p class="form-description">{{ formData.description }}</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="property-form">
        <!-- Row 1: Personal Info -->
        <div class="row q-col-gutter-md q-mb-lg ">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label class="form-label">{{ formFields.firstName.label }}</label>
            <input
              v-model="formData.firstName"
              type="text"
              class="form-control custom-input"
              :placeholder="formFields.firstName.placeholder"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 ">
            <label class="form-label">{{ formFields.lastName.label }}</label>
            <input
              v-model="formData.lastName"
              type="text"
              class="form-control custom-input"
              :placeholder="formFields.lastName.placeholder"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 ">
            <label class="form-label">{{ formFields.email.label }}</label>
            <input
              v-model="formData.email"
              type="email"
              class="form-control custom-input"
              :placeholder="formFields.email.placeholder"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label class="form-label">{{ formFields.phone.label }}</label>
            <input
              v-model="formData.phone"
              type="tel"
              class="form-control custom-input"
              :placeholder="formFields.phone.placeholder"
            />
          </div>
        </div>

        <!-- Row 2: Property Details -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label class="form-label">{{ formFields.location.label }}</label>
            <select v-model="formData.location" class="form-select custom-select">
              <option value="">{{ formFields.location.placeholder }}</option>
              <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
            </select>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 ">
            <label class="form-label">{{ formFields.propertyType.label }}</label>
            <select v-model="formData.propertyType" class="form-select custom-select">
              <option value="">{{ formFields.propertyType.placeholder }}</option>
              <option v-for="type in propertyTypes" :key="type" :value="type">{{ type }}</option>
            </select>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 ">
            <label class="form-label">{{ formFields.bathrooms.label }}</label>
            <select v-model="formData.bathrooms" class="form-select custom-select">
              <option value="">{{ formFields.bathrooms.placeholder }}</option>
              <option v-for="num in [1, 2, 3, 4, 5]" :key="num" :value="num">{{ num }}</option>
            </select>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12">
            <label class="form-label">{{ formFields.bedrooms.label }}</label>
            <select v-model="formData.bedrooms" class="form-select custom-select">
              <option value="">{{ formFields.bedrooms.placeholder }}</option>
              <option v-for="num in [1, 2, 3, 4, 5]" :key="num" :value="num">{{ num }}</option>
            </select>
          </div>
        </div>

        <!-- Row 3: Budget + Contact Method -->
        <div class="row q-col-gutter-md q-mb-lg content-center">
          <!-- Budget -->
          <div class="col-lg-6 col-md-12">
            <label class="form-label">{{ formFields.budget.label }}</label>
            <select v-model="formData.budget" class="form-select custom-select">
              <option value="">{{ formFields.budget.placeholder }}</option>
              <option v-for="budget in budgetOptions" :key="budget" :value="budget">{{ budget }}</option>
            </select>
          </div>

          <!-- Contact Method -->
          <div class="col-lg-6 col-md-12">
            <label class="form-label">{{ formFields.contactMethod.label }}</label>
            <div class="row q-col-gutter-x-md">
              <div class="col-md-6 col-sm-6">
                <label class="contact-option justify-between" :class="{ active: formData.contactMethod === 'phone' }">
                  <div class="option-left">
                    <i class="fa-solid fa-phone icon"></i>
                    {{ formFields.contactMethod.phone }}
                  </div>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    v-model="formData.contactMethod"
                    class="radio-input"
                  />
                </label>
              </div>
              <div class="col-md-6 col-sm-6">
                <label class="contact-option justify-between" :class="{ active: formData.contactMethod === 'email' }">
                  <div class="option-left">
                    <i class="fa-solid fa-envelope icon"></i>
                    {{ formFields.contactMethod.email }}
                  </div>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    v-model="formData.contactMethod"
                    class="radio-input"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 4: Message -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-12">
            <label class="form-label">{{ formFields.message.label }}</label>
            <textarea
              v-model="formData.message"
              class="form-control custom-textarea"
              :placeholder="formFields.message.placeholder"
              rows="5"
            ></textarea>
          </div>
        </div>

        <!-- Row 5: Terms & Submit -->
        <div class="flex justify-between">
          <div class="terms-checkbox q-mb-lg ">
            <input
              v-model="formData.agreeTerms"
              type="checkbox"
              id="termsCheckbox"
              class="form-check-input"
            />
            <label for="termsCheckbox" class="form-check-label">
              I agree with
              <a href="#" class="terms-link">Terms of Use</a> and
              <a href="#" class="terms-link">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" class="btn-submit">
            {{ formData.submitButtonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const formData = ref({
  title: 'Sell Your property',
  description: 'Ready to take the first step toward Selling your property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don\'t wait, let\'s embark on this exciting journey together.',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  propertyType: '',
  bathrooms: '',
  bedrooms: '',
  budget: '',
  contactMethod: 'phone',
  message: '',
  agreeTerms: false,
  submitButtonText: 'Send Your Message'
})

const formFields = ref({
  firstName: { label: 'First Name', placeholder: 'Enter First Name' },
  lastName: { label: 'Last Name', placeholder: 'Enter Last Name' },
  email: { label: 'Email', placeholder: 'Enter your Email' },
  phone: { label: 'Phone', placeholder: 'Enter Phone Number' },
  location: { label: 'Preferred Location', placeholder: 'Select Location' },
  propertyType: { label: 'Property Type', placeholder: 'Select Property Type' },
  bathrooms: { label: 'No. of Bathrooms', placeholder: 'Select no. of Bathrooms' },
  bedrooms: { label: 'No. of Bedrooms', placeholder: 'Select no. of Bedrooms' },
  budget: { label: 'Budget', placeholder: 'Select Budget' },
  contactMethod: { label: 'Preferred Contact Method', phone: 'Enter Your Number', email: 'Enter Your Email' },
  message: { label: 'Message', placeholder: 'Enter your Message here..' }
})

const locations = ref(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Miami'])
const propertyTypes = ref(['House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Commercial'])
const budgetOptions = ref(['$50K - $100K', '$100K - $250K', '$250K - $500K', '$500K - $1M', '$1M+'])

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('Form submitted! Check console for details.')
}
</script>

<style scoped>
.sell-property-container {
  position: relative;
  overflow: hidden;
}

.header-section {
  text-align: left;
}

.form-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
}

.form-description {
  font-size: 0.95rem;
  color: #a0a8c0;
  line-height: 1.6;
  max-width: 600px;
}

.property-form {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 40px;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.custom-input,
.custom-select,
.custom-textarea {
  background-color: rgba(60, 70, 100, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-radius: 6px;
  padding: 12px 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  font-family: inherit;
  width: 100%;
}
@media (max-width: 767px) {
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: 1024px) {
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.custom-input::placeholder,
.custom-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.custom-input:focus,
.custom-select:focus,
.custom-textarea:focus {
  background-color: rgba(70, 80, 120, 0.7);
  border-color: rgba(100, 150, 255, 0.5);
  outline: none;
  box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.1);
}

.custom-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 35px;
}

.custom-textarea {
  resize: vertical;
  min-height: 100px;
}

.contact-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(60, 70, 100, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 12px 15px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
}

.option-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-option:hover {
  background-color: rgba(70, 80, 120, 0.7);
}

.contact-option.active {
  border-color: rgba(100, 150, 255, 0.6);
  background-color: rgba(100, 150, 255, 0.2);
  box-shadow: 0 0 10px rgba(100, 150, 255, 0.15);
}

.radio-input {
  appearance: none;
  width: 10px;
  height: 10px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  background: transparent;
  position: relative;
  transition: all 0.2s ease;
}

/* Only show the filled circle when selected */
.radio-input:checked {
  border-color: #703BF7;
  background-color: #703BF7;
  box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.2);
}

/* Hide the radio by default (until selected) */
.radio-input:not(:checked) {
  opacity: 0;
  pointer-events: none;
}
.icon {
  font-size: 1.1rem;
}

.terms-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-check-input {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #6495ff;
  appearance: none;
  border-radius: 20%;
}
.form-check-input:not(:checked) {
  background-color: transparent;
  border: 2px solid #a0a8c0;
}
.form-check-input:checked {
  border-color: #6495ff;
  background-color: #6495ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  transition: all 0.3s ease;
}

.form-check-label {
  color: #a0a8c0;
  font-size: 0.9rem;
  cursor: pointer;
  margin: 0;
}

.terms-link {
  color: #6495ff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.terms-link:hover {
  color: #c084fc;
  text-decoration: underline;
}

.btn-submit {
  background: linear-gradient(135deg, #4a7fff 0%, #6495ff 100%);
  color: #ffffff;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 127, 255, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(74, 127, 255, 0.4);
}

.btn-submit:active {
  transform: translateY(0);
}
@media (max-width: 768px) {
  .form-title {
    font-size: 1.8rem;
  }

  .property-form {
    padding: 25px;
  }


}
</style>
