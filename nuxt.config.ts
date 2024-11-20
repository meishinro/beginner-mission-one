// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      title: "My Nuxt SSR App",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
});
