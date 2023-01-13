<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden">
                      <Nuxt-link v-if="mNext > 1 && route.query.page > 1" @click="mprevFunc(mNext)" :to="{ path: url , query: { search: search, page: mNext-1 }}" 
                      class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>  이전 </Nuxt-link>
                      <Nuxt-link v-if="totalDivider > mNext" @click="mnextFunc(mNext)" :to="{ path: url , query: { search: search, page: mNext+1 }}"  class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">다음 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg> </Nuxt-link>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"> 
                      <div>

                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                          <Nuxt-link v-if="prevBtn && next > 1" @click="prevFunc(next - 6)" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                            <span class="sr-only"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg> 이전</span>
                            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                          </Nuxt-link>
                          <Nuxt-link v-for="number in (Math.min(Math.ceil(totalDivider), rowNumber))" :key="number" :to="{ path: url , query: { search: search, page: number + next }}" :class="[route.query.page == number + next ? `border-indigo-500 bg-indigo-50 text-indigo-600 ` : `border-gray-300 text-gray-500 bg-white`, `relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium focus:z-20`]">
                          {{ number + next }}</Nuxt-link>
                          <Nuxt-link v-if="nextBtn && totalDivider > 6" @click="nextFunc(next + 6)" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                            <span class="sr-only">다음 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg></span>

                            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                          </Nuxt-link>
                        </nav>
                      </div>
                    </div>
                </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { ref } from 'vue'
const route = useRoute()
const router = useRouter()
const props = defineProps(['totalDivider', 'url', 'search', 'lastPage'])
const next = ref(0)
const mNext = ref(0);
const rowNumber = ref(6)
const nextBtn = ref(true)
const prevBtn = ref(true)
const number = ref(1) 

const mprevFunc = (i) => {
  mNext.value = i - 1
}

const mnextFunc = (i) => {
  mNext.value = i + 1
  console.log('next', mNext.value)
}

const prevFunc = (i) => {
  rowNumber.value = 6;
  next.value = next.value - 6;
  console.log('prev nextvalue', next.value)
  if(next.value < props.totalDivider) {
    nextBtn.value = true;
  }

  /*
next.value 6
next.value 12
next.value 18
totalDivider 19
next 18
rowNumber 1


  */
}
const nextFunc = (i) => {

  next.value = i 
    console.log('next.value', next.value)
  if((next.value+6) > props.totalDivider) {
    nextBtn.value = false;
    console.log('totalDivider', props.totalDivider)
    console.log('next', next.value)
    rowNumber.value = props.totalDivider - next.value
    console.log('rowNumber', rowNumber.value)
  }
}
</script>   