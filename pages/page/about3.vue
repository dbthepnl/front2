<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="엔젤리더스" />
                <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56 border-gray-100">
                <div class="w-full">
                  <CommonMobilemenu name="엔젤리더스" /> 
                  <ColumnTopguide 
                    name="엔젤리더스" 
                  />
                    <ColumnPage
                      :post="info.data"
                     />
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
const title = ref('에녹메리선교회')
const description = ref('소개')
// This will be reactive even you change title/description above
useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
definePageMeta({
  layout: "default",
});

import dayjs from 'dayjs'
import { reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
const info = await axios.get('http://localhost:8000/api/pages/7');
console.log(info)


</script>