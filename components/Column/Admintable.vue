<template>
<tr class="py-5">

    <td class="text-center">{{ ((currentPage - 1))*perPage+index+1 }}</td>
    <td class="text-center">{{ post.opening == 1 ? '오픈' : '비공개' }}</td>
    <td class="text-center" v-if="banner" style="width: 100px">
      <div v-if="post.banner != '/'"><img :src="`http://localhost:8000${post.banner}`"></div>
      <div v-else class="bg-gray-300 px-2 py-7"></div>
    </td>
    <td class="text-center">{{ category }}</td>
    <td style="width: 150px">
        <Nuxt-link class="text-blue-600 underline" :to="`/${url}/view/${post.id}`">
          {{ post.title }}
        </Nuxt-link>
        
    </td>
    <td v-if="admin">작성자</td>
    <td class="text-center">{{ post.view_cnt }}</td>
    <td class="text-center" v-if="file">{{ post.files ? post.files : 0 }}개</td>
    <td :class="[post.comment_cnt > 0? 'text-green-500':'text-black' ,'text-center']" v-if="comment">{{ post.comment_cnt > 0 ? '답변완료' : '대기' }}</td>
    <td class="text-center">{{ dayjs(post.updated_at).format('YYYY-MM-DD') }}</td>
    <td class="text-center">
      <Nuxt-link v-if="comment" :to="`/admin/${url}/edit?id=`+ post.id" type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">답변달기</Nuxt-link>
      <Nuxt-link v-if="!comment" :to="`/admin/${url}/edit?id=`+ post.id" type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">수정</Nuxt-link>
      <button @click="postDelete(post.id)" class="ml-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">삭제</button></td>
    </tr>
</template>
<script setup>
import dayjs from 'dayjs'
import { inject, ref } from 'vue'
import axios from 'axios'
const props = defineProps(['post', 'index', 'comment','currentPage', 'perPage', 'category', 'admin', 'member', 'banner', 'url', 'file'])
const emit = defineEmits(['response'])
const postDelete = ((id) => {
   emit('response', id)
}) /* Post Delete */




</script>
