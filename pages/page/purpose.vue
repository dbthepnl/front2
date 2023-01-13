<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="소개" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <CommonMobilemenu name="소개" />
                  <ColumnTopguide 
                    name="걸립취지" 
                  />
                    <ColumnPage
                      :post="info.data"
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

//걸립취지 data
const info = await axios.get('http://ec2-15-164-163-211.ap-northeast-2.compute.amazonaws.com/api/pages/4');
console.log(info)


</script>