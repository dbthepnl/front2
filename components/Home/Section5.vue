<template>
 <!-- Three columns -->
 <main>
  <div class="container px-4 mx-auto">
    <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="inline-block min-w-full py-2 align-middle">

        <div class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
          <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">ID</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">카테고리</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">제목</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">작성자</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">날짜</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(row, index) in notices" :key="row">
                <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">{{ index + 1 }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ row.category_name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <Nuxt-link :to="`/notice/view/${row.id}`" class="text-indigo-600 hover:text-indigo-900">
                    {{ row.title }}
                  </Nuxt-link>
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ row.name }}</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ dayjs(row.updated_at).format('YYYY-MM-DD') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
      <div class="flex flex-col md:flex-row lg:flex-row gap-3 mb-20">
        
        <!-- w-2 -->
        <div class="w-full py-5">
              <!-- 1 -->
             
        </div>
      </div>
  </div>
</main>
</template>
<script setup>
import dayjs from 'dayjs'
import { ShareIcon, HomeIcon, UserIcon, DocumentTextIcon, VideoCameraIcon, PhotographIcon, FilmIcon, CalendarIcon } from '@heroicons/vue/outline'
const props = defineProps(['notices'])

</script>
