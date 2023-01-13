<template>
<div>
  <Popover class="relative bg-gray-100 px-4">
    <div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
    <div class="relative z-40">
      <div class="mx-auto flex container mx-auto items-center justify-between py-5 sm:py-4 md:justify-start md:space-x-10">
        <div>
          <Nuxt-link to="/" class="ohsquare-kr font-bold text-xl text-zinc-800">
               세계 투어 현황
          </Nuxt-link>
        </div>
      <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div @mouseover="navOpen" @mouseleave="navClose" @click="navClose"  id="nav" class="flex space-x-10 md:hidden lg:block cursor-pointer">
                <Nuxt-link 
                v-for="menu in hmenus" 
                :key="menu.title" 
                class="text-zinc-900 hover:text-black text-lg" >
                  {{ menu.name }} <ChevronDownIcon :class="[open ? 'text-slate-200' : 'text-slate-200', 'h-5 w-5 inline-block group-']" aria-hidden="true" />
                </Nuxt-link>
          </div>
          <div class="flex items-center md:ml-12 md:hidden lg:block">

            <div v-if="isLoggedIn">
             
              <Nuxt-link to="/admin/topslide" 
              class="pl-5 text-base font-medium text-gray-500 ">관리자 정보
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg></Nuxt-link>
            </div>
            <div v-else>     
              <Nuxt-link :to="`/login?link=${route.href}`" class="text-base font-medium text-gray-500 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg> 로그인</Nuxt-link>
          
            </div>
          </div>
          <!-- sub menu -->
        <transition @mouseover="navOpen" @mouseleave="navClose" enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
          <div v-show="open" class="-mt-5 absolute inset-x-0 top-full hidden transform bg-white shadow-lg md:block z-40">
                  <div class="mx-auto grid max-w-4xl gap-y-6 px-4 py-4 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-4 lg:grid-cols-5 lg:px-4 lg:py-12 xl:py-12 pb-5">
                    <div v-for="item in hmenus" :key="item.name" :href="item.href" class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-100">
                      <div class="flex md:h-full lg:flex-col">
                        <div class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-0">
                          <div>
                            <p class="text-lg text-yellow-700">{{ item.name }}</p>
                            <ul>
                              <li class="mt-1 text-lg text-gray-700 py-2" v-for="menu in item.submenu" :key="menu.name">
                                <Nuxt-link @click="navClose" :to="menu.href">{{ menu.name }}</Nuxt-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </transition>
      </div>  
        <!-- mobile/tablet menu -->
      <div @click="navOpen" class="-my-2 -mr-2 lg:hidden md:block">
          <div class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
        </div>
        <!-- mobile/tablet menu end -->
      </div>
    </div>
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <!-- popup menu -->
      <div v-show="open"  :class="['absolute inset-x-0 top-0 z-30 origin-top-right transform transition md:block lg:hidden z-50']">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <Nuxt-link to="/" class="text-zinc-900 text-lg focus:outline-none" >
                  세계 투어 현황
                </nuxt-link>
              </div>
              <div class="-mr-2" @click="navClose">
                <div class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 ">
                  <span class="sr-only">Close menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
              </div>
            </div>
            
          </div>
          <div class="py-6 px-5">
            <div v-if="isLoggedIn">
              <div class="text-center text-base font-medium text-gray-500">
                <Nuxt-link @click="navClose" to="/admin/topslide">관리자 정보 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-1 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg></Nuxt-link>
              </div>   
            </div>
            <div v-else class="mt-3">
            
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                <Nuxt-link @click="navClose"  :to="`/login?link=${route.href}`">로그인</Nuxt-link>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </transition>
  </Popover>
  
</div> 
</template>
<script setup>
import { Popover } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { ref, reactive} from 'vue'
const { isLoggedIn, user } = useAuth();
const route = useRoute();

//Menu Open
const open = ref(false);
const mopen = ref(false)
const navOpen = () => open.value = true;
const navmOpen = () => open.value = true;
const navClose = () => open.value = false;
const menuClose = () => open.value = false;
</script>
