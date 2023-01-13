<template>
  <div>
    <div class="leading-6 lg:px-44 md:px-10">
        <div class="py-2" v-if="title">
          <h1 class="text-3xl my-6">제목: {{ post.title }}</h1>
        </div>
        <div v-if="post.banner != '/'" class="content-center"><img :src="`http://localhost:8000${post.banner}`"></div>
        <div v-else class="px-2 py-7"></div>
        <div class="content py-10 px-10 border border-b-0 border-gray-200 bg-white" v-html="post.content"></div>
        <div class="pb-40"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const props = defineProps(['post', 'title', 'imglink'])

</script>
<style>
.content h2,h3,h4 { 
  font-size: 24px !important;
  margin-bottom: 10px;
  margin-top:20px;
}
</style>