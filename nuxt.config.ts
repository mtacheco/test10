// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC|Open+Sans&display=swap' },
        { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
      ]
    }
  },
  css: ['~/assets/css/style.css'],
  runtimeConfig: {

    // Keys within public are also exposed client-side
    public: {
      apiBase: process.env.APIBASE
    }
  }
})
