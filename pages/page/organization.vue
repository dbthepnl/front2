<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="선교회" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16">
                  <CommonMobilemenu name="선교회" /> 
                  <ColumnTopguide 
                    name="조직도" 
                  />
  <!-- section1 -->
  <div class="mt-10 bg-white pb-5">
    <div class="relative">
      <div class="absolute inset-0 h-1/2"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <dl class="rounded-lg bg-white sm:grid sm:grid-cols-2 gap-4">
            <div class="flex flex-col p-6 text-center border-t-2 border-green-400 shadow-lg">
              <dd class="text-3xl font-bold tracking-tight text-gray-700">고문단</dd>
            </div>
             <div class="flex flex-col p-6 text-center border-t-2 border-green-700 shadow-lg">
             
              <dd class="text-3xl font-bold tracking-tight text-gray-700">대표</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <!-- section2 -->
   <div class="bg-white pb-5">
    <div class="relative">
      <div class="absolute inset-0 h-1/2"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <dl class="rounded-lg bg-white sm:grid sm:grid-cols-2 gap-4">
            <div class="flex flex-col p-6 ">
            
            </div>
             <div class="flex flex-col p-6 text-center border-t-2 border-green-500 shadow-lg">
             
              <dd class="text-3xl font-bold tracking-tight text-gray-700">이사</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  <!-- section3 -->
   <div class="bg-white pb-5">
    <div class="relative">
      <div class="absolute inset-0 h-1/2"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <dl class="rounded-lg bg-white sm:grid sm:grid-cols-2 gap-4">
            <div class="flex flex-col p-6 ">
            
            </div>
             <div class="flex flex-col p-6 text-center border-t-2 border-green-500 shadow-lg">
             
              <dd class="text-3xl font-bold tracking-tight text-gray-700">운영이사회</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
    <!-- section3 -->
    <div class="bg-white pb-5">
    <div class="relative">
      <div class="absolute inset-0 h-1/2"></div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <dl class="rounded-lg bg-white sm:grid sm:grid-cols-2 gap-4">
            <div class="flex flex-col p-6 ">
            
            </div>
             <div class="flex flex-col p-6 text-center border-t-2 border-green-500 shadow-lg">
             
              <dd class="text-3xl font-bold tracking-tight text-gray-700">학생이사회</dd>
            </div>
          </dl>
        </div>
      </div>

               <img src="@/assets/img/background2.jpg" />  
    </div>
  </div>
   
  <!-- section1 -->
   
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

</script>