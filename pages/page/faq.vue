<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="커뮤니티" />
             <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56 border-gray-100">
                <div class="w-full">
                  <CommonMobilemenu name="커뮤니티" />
                  <div class="leading-6 lg:px-28 px-6">
                     <ColumnTopguide 
                                      name="FAQ"
                                      notice="질문에 대한 답변은 질문을 클릭하여 펼쳐서 보실 수 있습니다."
                                      class="mb-10"
                                       />
            
                    
                      <div class="pt-2" v-for="row in info.data" :key="row">
                      <p class="text-xl font-bold mb-2">{{row.title}}</p>
                      <p v-html="row.content" class="mb-5"></p>
                      </div>
                    </div>
                                        <img src="@/assets/img/background2.jpg" />
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
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { HomeIcon, ChevronDownIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
  const info = await axios.get(`http://localhost:8000/api/admin-qnas`);

console.log(info)
</script>