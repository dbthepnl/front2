import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/image-edge',
  ],
  runtimeConfig: {
    public: {
      backendUrl: "http://localhost:8000",
      frontendUrl: "http://localhost:3000",
    },
  },
  plugins: [
    { src: '@/plugins/vue3-editor.ts', mode: 'client' },
    { src: '@/plugins/quill.ts', mode: 'client' },
    { src: '@/plugins/vue-daum-postcode.ts', mode: 'client' },

  ],
  imports: {
    dirs: ["./utils"],
  },
  build: {   
    transpile: [
      '@heroicons/vue',
      '@nuxtjs/feed',
      '@nuxtjs/robots',
      '@nuxtjs/sitemap',
      '@nuxtjs/axios',
    ]
  },
});
