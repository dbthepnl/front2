<template>
<tr>
    <td class="text-center">{{ ((currentPage - 1))*perPage+index+1 }}</td>
    <td>
       {{ post.name }}
    </td>
    <td>
       {{ post.birth }}
    </td>
     <td>
       {{ post.phone }}
    </td>
     <td>
         <div v-if="post.submit1 == 1"><span class="text-green-600">저장됨</span></div>
         <div v-else>대기</div>
     </td>
   <td>
         <div v-if="post.submit2 == 1"><span class="text-green-600">저장됨</span></div>
         <div v-else>대기</div>
   </td>
      <td>
         <div v-if="post.submit3 == 1"><span class="text-green-600">저장됨</span></div>
         <div v-else>대기</div>
     </td>
    <td>
       <div v-if="post.submit3 == 1"><span class="text-green-600">제출완료</span></div>
         <div v-else>대기</div>
    </td>
    <td>
         <div v-if="post.login_status == 3"><span class="text-green-600">심사완료</span></div>
         <div v-if="post.login_status == 2">심사중</div>
         <div v-else>대기중</div>
    </td>
    <td class="text-center">{{ dayjs(post.updated_at).format('YYYY-MM-DD') }}</td>
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
const props = defineProps(['post', 'index', 'member', 'currentPage', 'perPage', 'category', 'admin', 'url', 'commentCnt', 'qnaCnt', 'opening', 'file', 'respond', 'viewCnt', 'city'])
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
