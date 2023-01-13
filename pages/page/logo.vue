<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="선교회" />

                <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56 border-gray-100">
                <div class="w-full">
                  <CommonMobilemenu name="선교회" /> 
                  <ColumnTopguide 
                    name="로고" 
                  />
                    <ColumnPage
                      :post="info.data"
                      imglink="logo"
                     />
                  <div class="mb-40"></div>
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

import dayjs from 'dayjs'
import { reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
const info = await axios.get('http://localhost:8000/api/pages/5');
console.log(info)


</script>