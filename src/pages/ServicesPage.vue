<script setup>
import RealEstateSection from 'components/service/RealEstateSection.vue'
import PropertySection from 'components/service/PropertySection.vue'
import { icons } from 'assets/icons/index.js'
import SmartInvestment from 'components/service/SmartInvestment.vue'
import ExploreProperties from 'components/service/ExploreProperties.vue'
</script>

<template>
  <q-page>
    <RealEstateSection />
    <PropertySection
      title="Unlock Property Value"
      description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      :topCards="[
    { icon: icons.signal, title: 'Valuation Mastery', text: 'Discover the true worth of your property with our expert valuation services.' },
    { icon: icons.chart, title: 'Strategic Marketing', text: 'Selling a property requires more than just a listing.' },
    { icon: icons.stack, title: 'Negotiation Wizardry', text: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.' }
  ]"
      :bottomCards="[
    { icon: icons.bell, title: 'Closing Success', text: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.' },
    { title: 'Unlock the Value of Your Property Today', text: 'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.' }
  ]"
    />
    <PropertySection
      title="Effortless Property Management"
      description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      :topCards="[
    { icon: icons.remainder, title: 'Tenant Harmony', text: 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.' },
    { icon: icons.server, title: 'Maintenance Ease', text: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.' },
    { icon: icons.ai, title: 'Financial Peace of Mind', text: 'Managing property finances can be complex. Our financial experts take care of rent collection' }
  ]"
      :bottomCards="[
    { icon: icons.sun, title: 'Legal Guardian', text: 'Stay compliant with property laws and regulations effortlessly.' },
    { title: 'Experience Effortless Property Management', text: 'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.' }
  ]"
    />
    <SmartInvestment />
    <ExploreProperties />
  </q-page>
</template>

<style scoped></style>
