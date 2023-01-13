<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="overflow-hidden bg-white shadow-md border border-gray-200 mb-10">
  <div class="bg-white p-6">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="sm:flex sm:space-x-5">
        <img :src="`https://api.jayuvillage.com/photos/dummyprofile.jpg`" class="h-16 w-16">
        <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
          <p class="text-xl font-bold text-gray-900 sm:text-2xl">
         {{props.user.name}}    회원</p>
          <p class="text-md font-medium text-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg> 일반 회원 등급</p>
        </div>
      </div>
      <div class="mt-5 flex justify-center sm:mt-0">
        <Nuxt-link v-if="route.href == '/profile/edit'" to="/profile" class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">내 정보</Nuxt-link>
         <Nuxt-link v-if="route.href != '/profile/edit'" to="/profile/edit" class="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">내 정보 수정</Nuxt-link>
         <button  @click="logout()" class="flex ml-2 items-center justify-center rounded-md border border-red bg-white px-4 py-2 text-sm font-medium text-red shadow-sm hover:bg-gray-50" style="color: red">로그아웃</button>
      </div>
    </div>
  </div>

</div>

</template>
<script setup>
const route = useRoute();
const { logout } = useAuth();
const props = defineProps (['user'])
</script>