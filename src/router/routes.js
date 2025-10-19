const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'about', component: () => import('pages/AboutUsPage.vue') },
      { path: 'testimonials', component: () => import('pages/TestimonialPage.vue') },
      { path: 'virtual-assistance', component: () => import('pages/VirtualAssistance.vue') },
      { path: 'services', component: () => import('pages/ServicesPage.vue') },
      { path: 'real-estate', component: () => import('pages/RealEstatePage.vue') },
      { path: 'listings', component: () => import('pages/ListingPage.vue') },


    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
