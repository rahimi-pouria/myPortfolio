export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@bootstrap-vue-next/nuxt'],
  css: [
      '~/assets/main.css',
      'bootstrap/dist/css/bootstrap.min.css',
      '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  vite: {
    plugins: [
    ],
  },
    bootstrapVueNext: {
        composables: true,
        directives: { all: true },
        css: true,
    }
});
