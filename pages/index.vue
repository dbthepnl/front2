<template>
  <div class="mx-auto" style="max-width: 800px">
    <!-- 슬라이더 -->
    <HomeCarousel1
      :slides="topslides.value"
    />
    <!-- 게시판 리스트 -->
  <div class="mt-6 mx-6 text-lg">공지사항</div>
  <div class="mx-4 mt-4">
  <div>
    <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
      <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
      <Nuxt-link @click="nNum(null)" class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10" aria-current="page">
        <span>전체</span>
        <span aria-hidden="true" class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"></span>
      </Nuxt-link>

      <Nuxt-link @click="nNum(1)" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>행사공지</span>
        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </Nuxt-link>

      <Nuxt-link @click="nNum(2)" class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>문자공지</span>
        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </Nuxt-link>

      <Nuxt-link @click="nNum(3)" class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
        <span>보도자료</span>
        <span aria-hidden="true" class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
      </Nuxt-link>
    </nav>
  </div>
</div>

{{  info.value  }}
<HomeSection5
  :notices="notices.value"
/>

  <!-- Section end -->
  </div> 
</template>
<script setup>
const title = ref('공지사항')
// This will be reactive even you change title/description above


import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import dayjs from 'dayjs'
import { reactive, onMounted, ref } from 'vue'
import { ShareIcon, HomeIcon, UserIcon, DocumentTextIcon, VideoCameraIcon } from '@heroicons/vue/outline'
import axios from 'axios'
const notices = ([])
const columns = ([])
const news = ([])
const books = ([])
const docs = ([])
const topslides = ([])
const text = ref('')
const infos = ([]);
const info = ([]);
const url = ref('');


//소식 data
const responses = await axios.get(`http://localhost:8000/api/notice-hlist`);
infos.value = responses.data.notices
topslides.value = responses.data.topslides

const nNum = (i) => {
  infos.value = []
  info.value = responses.data.notices.filter(item => item.category === i);
  infos.value = info.value;
  console.log('r', infos.value)
}

const menuSelected = ref('')
menuSelected.value = 'notice'
const fetchData = (i) => { 
  menuSelected.value = i
  }




// section 4

const dateChange = (value) => dayjs(value).format('MM-DD-YYYY');



</script>
<style scoped>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  padding: 8px;
}


#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
 
}


.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
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