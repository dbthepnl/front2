import { VueDaumPostcode } from 'vue-daum-postcode';

export default defineNuxtPlugin((nuxtapp) => {
  nuxtapp.vueApp.component('VueDaumPostcode', VueDaumPostcode)
})