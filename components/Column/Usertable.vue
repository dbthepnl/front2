<template>
<tr>
    <td class="text-center">{{ ((currentPage - 1))*perPage+index+1 }} </td>
    <td class="text-center ">{{ post.phone }}</td>
    <td class="text-center">{{ post.name }}</td>
    <td class="text-center">{{ post.birth }}</td>
    <td class="text-center">{{ post.address }}</td>
    <td class="text-center">{{ post.created_at }}</td>
    <td class="text-center">
      <Nuxt-link :to="`/admin/${url}/edit?id=`+ post.id" type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">수정</Nuxt-link>
      <button @click="postDelete(post.id)" class="ml-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">삭제</button></td>
     
</tr>
</template>
<script setup>
import { inject, ref } from 'vue'
import axios from 'axios'
const props = defineProps(['post', 'index', 'currentPage', 'perPage', 'url'])
const emit = defineEmits(['response'])
const postDelete = ((id) => {
   emit('response', id)
}) /* Post Delete */




</script>
