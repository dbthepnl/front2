<template>
 <div class="leading-6 lg:px-44 md:px-10">
<div class="grid grid-cols-3 gap-4 my-6">

  <div class="text-center py-4 border md-shadow border-gray-300 pt-5 rounded-sm">
    <a @click="goBack()" class="cursor-pointer inline-flex items-center text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg> 리스트</a>
  </div>

</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const props = defineProps(['prev', 'next', 'url'])
if(process.client) {
const scrollTop = () => window.scrollTo(0, 0)
scrollTop()
}

const goBack = () => {
  router.go(-1)
}
</script>