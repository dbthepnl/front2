<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="장학회" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <CommonMobilemenu name="장학회" />
           
                  <ColumnTopguide 
                    name="장학금신청"
                    notice="*장학금 서류접수 안내 - 장학금 지원 두 가지 유형(본인에게 해당하는 유형 탭을 클릭하세요.)"                   />
                  <Direction 
                    url1="/page/register"
                    name1="목회자/선교사 자녀 장학금"
                    name2="일반 학생 장학금"
                    url2="/page/register2"
                  />
                    <Info />
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
import dayjs from 'dayjs'
import { reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'


</script>