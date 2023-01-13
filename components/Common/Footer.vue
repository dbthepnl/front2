<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="mt-0 md:mt-30 lg:mt-0 border-t-2 bg-gradient-to-r from-zinc-800 to-zinc-900">
    <div class="">
      <nav class="container text-sm md:text-md lg:text-md mx-auto py-3 px-6 md:px-12 lg:px-12 text-zinc-500">
        <nuxt-link v-for="item in fmenus" :key="item.name" :to="item.href" class="m-2 pr-4 border-r-2 border-zinc-500">{{ item.name }} </nuxt-link>
      </nav>
      <div class="border-b border-zinc-500">
      </div>
      <nav class="container mx-auto text-sm md:text-md lg:text-md flex flex-wrap py-6 px-6 md:px-12 lg:px-12 text-zinc-500">
        <div class="w-full lg:w-1/6">
              <div>
                <Nuxt-link to="/" class="text-white ohsquare-kr font-extrabold text-2xl">
                 Gongzime
                </Nuxt-link>
              </div>
        </div>
        <div class="w-full lg:w-4/6">
              
              <div class="mt-4">
              목사 활동 현황에 대한 공지 페이지입니다.
              </div>
        </div>
        <div class="w-full lg:w-1/6">
              <div>
                <Nuxt-link to="/" class="text-zinc-700 ohsquare-kr font-extrabold text-2xl">
                 
                </Nuxt-link>
              </div>
        </div>
      </nav>
      <p class="text-center bg-black text-sm md:text-md lg:text-md text-zinc-600 py-4">Copyright 2022 © Gongzime. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<script setup>
import { fmenus, hmenus } from '../../data/menu.json'
</script>
