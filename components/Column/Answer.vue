<template>
 <div class="leading-6 lg:px-44 md:px-10">
 <div class="border-t border-blue-500 mx-auto">
    <div class="flex flex-row p-4 bg-gray-100 border border-t-gray-800 border-b-gray-300">
          <div class="w-full"><p>답변 ({{ comment.length }})</p></div>
    </div>
   <div class="space-y-4" v-if="admin">
      <form @submit.prevent="postComment" class="w-full mt-4">
        <div>
          <textarea class="w-full h-20 p-2 border focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment" v-model="content" placeholder="댓글 내용을 입력하세요."></textarea>
        </div>
        <p class="text-right mb-6">
          <Nuxt-link to="/member/mycomment" class="px-3 py-2 text-md text-white bg-green-600 rounded inline-flex items-center">내 댓글 리스트 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pl-2 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
          </Nuxt-link>
          <button type="submit" class="ml-3 px-3 py-2 text-md text-blue-100 bg-blue-600 rounded inline-flex items-center">댓글달기 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="pl-2 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>
          </button>
        </p>
      </form>
  </div>
  <div class="space-y-4 mt-4">
    <div v-for="row in comment" :key="row" class="flex">
      <div class="flex-1 border rounded-lg p-4 md:p-6 lx:p-6 leading-relaxed">
        <strong>{{ row.name }}</strong> <span class="text-md text-gray-400">{{ dayjs(row.updated_at).format('YYYY-MM-DD') }}</span>
        <p class="text-sm">
          {{ row.content }}
        </p>
      </div>
    </div>
   <!-- Replay
    <div class="flex">
      <div class="flex-1 border rounded-lg p-6 md:p-10 lx:p-10 leading-relaxed">
        <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>

        <div class="space-y-4 mt-4">
          <div class="flex">
            <div class="flex-1 bg-gray-100 rounded-lg p-6 md:p-10 lx:p-10 leading-relaxed">
              <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
          <div class="flex">
            <div class="flex-1 bg-gray-100 rounded-lg p-6 md:p-10 lx:p-10 leading-relaxed">
              <strong>Sarah</strong> <span class="text-xs text-gray-400">3:34 PM</span>
              <p class="text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</div>
</div>
</template>
<script setup>
import dayjs from 'dayjs'
import { inject, ref } from 'vue'
const props = defineProps(['comment', 'admin'])
const emit = defineEmits(['response'])
const content = ref(null)

  const postComment = () => {
  const form = {
        content: content.value
        }

        //reset text
        content.value = null
        console.log(form.content)
        emit('response', form)
}

</script>