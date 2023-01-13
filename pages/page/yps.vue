<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="YPS학교" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16">
                  <CommonMobilemenu name="YPS학교" /> 
                  <ColumnTopguide 
                    name="YPS" 
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
definePageMeta({
  layout: "default",
});

import dayjs from 'dayjs'
import { reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
const info = await axios.get('http://ec2-15-164-163-211.ap-northeast-2.compute.amazonaws.com/api/pages/7');
console.log(info)


</script>