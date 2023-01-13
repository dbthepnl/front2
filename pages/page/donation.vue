<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="후원안내" />
                  <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56 border-gray-100">
                <div class="w-full">
                  <CommonMobilemenu name="후원안내" /> 
                  <ColumnTopguide 
                    name="후원하기" 
                  />

                  <ColumnDonation 

                  />
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
const title = ref('에녹메리선교회')
const description = ref('후원안내')
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



</script>