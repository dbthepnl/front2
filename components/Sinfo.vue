<template>
  <div class="">
  <section class="p-6 bg-gray-100 mr-1">
     <form @submit.prevent="createPost()" class=" px-5  py-0 md:px-10 md:py-5">          
      <div class="flex flex-wrap -mx-3 mb-6 mt-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-first-name">
            이름<span class="text-red">*</span>
          </label>
          <input v-model="form.name" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="이름 입력" :disabled="true">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-last-name">
            생년월일<span style="color: red">*6자리 생년월일은 비밀번호로 설정됨.</span>
          </label>
          <input v-model="form.birth" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" maxlength="6" placeholder="6자리 숫자 입력 (880510)"  :disabled="true">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 mt-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-first-name">
                  연락처<span style="color: red">*숫자만 입력.</span>
              </label>
              <input v-model="form.phone" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="textr" @input="onlyNumbers" maxlength="11" placeholder="01077775555"  :disabled="true">
          
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-last-name">
            성별<span class="text-red">*</span>
          </label>
          <select v-model="form.gender" class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"  :disabled="true">
               <option :value="null">성별 선택</option>
               <option value="1">남성</option>
               <option value="2">여성</option>
            </select>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 mt-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-last-name">
            이메일주소*
          </label>
          <input v-model="form.email" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="hello@gmail.com"  :disabled="true">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class=" mt-5 block uppercase tracking-wide text-gray-700 font-bold">
            내 지역 선택
          </label>   
        </div>

              <div class="w-full md:w-2/3 px-3 mt-6 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                주소 검색하세요.
                </label>
                <div class="relative">
                  <input v-model="form.address" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="주소 검색하여 등록" :disabled="true">
                </div>   
              </div>
              <div class="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                상세주소(2)
                </label>
                <div class="relative">
                  <input v-model="form.address_detail" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="상세주소 입력" :disabled="true">
                </div>
              </div>
            </div>
    </form>
  </section>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
  export default {
    created(){
        if(process.client) {
          this.user_id = localStorage.getItem('id')
          this.token = localStorage.getItem('token')
        }

        const headers = { 
          Authorization: "Bearer " + this.token, 
          Accept: 'application/json',
          "content-type":"multipart/form-data"
        }
        axios.get(`http://localhost:8000/api/user/${this.user_id}`,{headers}).then((res) => {
        this.form = res.data
        console.log('thisform', this.form)
      })
    },
    data(){
    return {
      form:{
        name: null,
        gender: null,
        phone: null,
        birth: null,
        email: null,
        address: null,
        address_detail: null,
        agreement: null,
        role: 1 //일반회원
      },
      errors:[],
      user_id: '',
      token: '',
    }
  }, 
  methods:{
    
  }


  } 
</script>
