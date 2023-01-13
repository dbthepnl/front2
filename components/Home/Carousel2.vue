<template>
    <div class="">
      <div class="relative shadow-md sm:overflow-hidden sm:px-0 sm:py-0 md:px-0 lg:px-30 ">
<div class="p-0 md:p-4 lg:p-4">
  <Carousel :autoplay="3000" :wrap-around="true" :touchDrag="true">
    <Slide v-for="row in slides" :key="row">
      <div class="carousel__item">
      <Nuxt-link :to="`${row.files2}`" target="_blank">
        <img :src="`http://localhost:8000${row.banner}`" />
      </Nuxt-link>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</div>
</div></div>
</template>
<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
const props = defineProps(['slides'])

</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;

  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>