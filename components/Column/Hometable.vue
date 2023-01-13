<template>
<tr>
    <td class="text-center">{{ ((currentPage - 1))*perPage+index+1 }}</td>
    <td class="text-center" v-if="opening">
      <p>
          <svg v-if="post.opening==2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
      </p>
    </td>
    <td v-if="city" class="text-center">
        {{ post.zone }}
    </td>
    <td v-if="city" class="text-center">
        {{ post.country }}
    </td>
        <td v-if="city" class="text-center">
        {{ post.city }}
    </td>
    <td>
        <Nuxt-link :to="`/${url}/view/${post.id}`">
          {{ post.title }}
        </Nuxt-link>
    </td>
    <td class="text-center">{{ post.name.charAt(0) + "**"}}</td>
    <td class="text-center">{{ dayjs(post.updated_at).format('YYYY-MM-DD') }}</td>
    <td class="text-center" v-if="file">파일 / 없음</td>
    <td class="text-center" v-if="qnaCnt"> <!-- qnaCnt -->
      <p v-if="post.comment_cnt > 0" class="text-green-600">완료</p>
      <p v-else>대기</p></td>
    <td class="text-center" v-if="commentCnt">{{ post.comment_cnt }}</td>
    <td class="text-center" v-if="viewCnt">{{ post.view_cnt }}</td>
    <td class="text-center" v-if="!member">
      <Nuxt-link :to="`/${url}/view/${post.id}`" class="btn">보기</Nuxt-link>
    </td>
    <td class="text-center" v-if="member">
      <Nuxt-link :to="`/${url}/view/${post.id}`" class="inline-block px-6 py-2.5 text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md transition duration-150 ease-in-out">보기</Nuxt-link>
      <button @click="postDelete(post.id)" class="ml-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg transition duration-150 ease-in-out">삭제</button>
    </td>
</tr>
</template>
<script setup>
import dayjs from 'dayjs'
import { inject, ref } from 'vue'
import axios from 'axios'
const props = defineProps(['post', 'index', 'currentPage', 'perPage', 'category', 'member' ,'url', 'commentCnt', 'qnaCnt', 'opening', 'file', 'respond', 'viewCnt', 'city'])
const emit = defineEmits(['response'])
const postDelete = ((id) => {
   emit('response', id)
}) /* Post Delete */




</script>
<style scoped>
.btn {
    @apply font-bold py-2 px-4 rounded border text-cyan-600 border-cyan-600;
  }

td { 
           border-bottom: 1px solid #ddd
}

</style>
