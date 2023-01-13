import { VueEditor } from 'vue3-editor';

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component('VueEditor', VueEditor)
})