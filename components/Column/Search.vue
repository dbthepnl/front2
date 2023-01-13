<template>
    <div>
        <form @submit.prevent="postSearch">
            <div class="grid">
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/4 px-2 mt-6 md:mb-0" v-if="date">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-state">
                          시작일
                        </label>
                        <div class="relative">
                          <input v-model="startdates" type="date"
                            class="block appearance-none w-full  border border-gray-200 text-gray-700 bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                            placeholder="시작날짜 선택" />
                        </div>
                    </div> 
                    <div class="w-full md:w-1/4 px-2 mt-6 md:mb-0" v-if="date">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="grid-state">
                          종료일
                        </label>
                        <div class="relative">
                           <input v-model="enddates" type="date"
                            class="block appearance-none w-full  border border-gray-200 text-gray-700 bg-white py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                            placeholder="종료날짜 선택" />
                        </div>
                    </div> 
                    <div class="w-full md:w-1/4 px-2 mt-6 md:mb-0" v-if="gender">
                        <div class="datepicker relative form-floating mb-3 ">
                          <label>성별</label>
                          <select v-model="genders" class="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                            <option :value="null">선택하기</option>
                            <option value="1">남자</option>
                            <option value="2">여자</option>
                          </select>
                        </div>   
                    </div> 
                    <div class="w-full md:w-1/4 px-2 mt-6 md:mb-0" v-if="address">
                        <div class="datepicker relative form-floating mb-3 ">
                          <label>주소</label>
                          <input v-model="addresses" type="text"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="시군구 입력" />
                        </div>   
                    </div> 
                    <div class="w-full md:w-2/4 px-2 mt-6 md:mb-0" v-else>
                       
                    </div> 

                    <div class="w-full md:w-2/4 px-2md:mb-0">
                    </div> 
                    <div class="w-full md:w-2/4 px-2 md:mb-0">
                        <div class="flex justify-items-end border-b border-gray-300 py-2  mb-4">
                            <input v-model="search" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" :placeholder="tagname" aria-label="Full name">
                            <button type="submit" class="flex-shrink-0 bg-green-600 border-green-700 text-sm border-2 text-white py-1 px-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline-block mb-1 w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
 검색하기 
                            </button>             
                        </div>     
                    </div>   
                </div>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, watchEffect, reactive, watch} from 'vue'
    const props = defineProps(['url','date','gender','address', 'tagname'])
    const emit = defineEmits(['response'])
    const router = useRouter()
    const search = ref(null);
    const startdates = ref(null);
    const enddates = ref(null);
    const genders = ref(null);
    const addresses = ref(null)
    const form = {
        search: search.value,
        startdate: startdates.value,
        enddate: enddates.value,
        gender: genders.value,
        address: addresses.value

    }

    
    const postSearch = () => {  
        const form = {
        search: search.value,
        startdate: startdates.value,
        enddate: enddates.value,
        gender: genders.value,
        address: addresses.value
        }

        if(props.url == '/admin/user') {
        console.log(form)
        emit('response', form)
        router.push({ path: props.url, query: {
        search: search.value,
        startdate: startdates.value,
        enddate: enddates.value,
        gender: genders.value,
        address: addresses.value,
        page: 1
        } });
        } else {
            router.push({ path: props.url, query: {
            startdate: startdates.value,
            enddate: enddates.value,
            search: search.value,
             page: 1
             } });
        }
        
    }
    
</script>
