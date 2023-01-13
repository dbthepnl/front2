<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="소개" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <CommonMobilemenu name="소개" />
                  <ColumnTopguide 
                    name="사이트맵" 
                  />
          <div class="divide-y-2 divide-gray-50 rounded-lg bg-white">
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid grid-cols-2 sm:gap-x-4">
                  <div v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex rounded-lg p-3 hover:bg-gray-50">
                    <div class="ml-4 text-base font-medium text-gray-900 mb-5">
                    <p class="text-xl text-blue-800">{{ item.name }}</p>
                    <ul>
                      <li class="mt-1 text-lg py-1" v-for="menu in item.submenu" :key="menu.name">
                                <Nuxt-link :to="menu.href">{{ menu.name }}</Nuxt-link>
                      </li>
                    </ul>

                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          
          
        </div>
                  <div>
                  </div>
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
const solutions = [
  {
    name: '지부소개',
    submenu: [
      {
      name: '임원신청서',
      href: '/register'
      },
      {
      name: '해외현황',
      href: '/fed'
      },
      {
      name: '국내현황',
      href: '/korea'
      }
    ],
    href: '#',
  },
  {
    name: '공지칼럼',
    submenu: [
      {
      name: '공지',
      href: '/notice'
      },
      {
      name: '칼럼',
      href: '/column'
      },
      {
      name: '언론보도',
      href: '/news'
      }
    ],
    href: '#',
  },
  { name: '활동자료', submenu: [
      {
      name: '행사 안내',
      href: '/doc'
      },
      {
      name: '활동 현황',
      href: '/activity'
      }
    ], href: '#',},
  {
    name: '소개',
    submenu: [
      {
      name: '인사말',
      href: '/page/about'
      },
      {
      name: '건립취지',
      href: '/page/purpose'
      },
      {
      name: '정관',
      href: '/page/article'
      }
    ],
    href: '#',

  },
    {
    name: '국민참여',
    submenu: [
      {
      name: '정책제안',
      href: '/qna'
      }
    ],
    href: '#',
  },
]
</script>