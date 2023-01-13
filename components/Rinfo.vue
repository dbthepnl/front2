<template>
  <div class="">
  <section class="p-6 bg-gray-100 mr-1">
      <div class="px-5  py-0 md:px-10 md:py-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">회원가입</h3>
        <p class="pb-5 mt-1 max-w-2xl text-sm text-gray-500">임원신청은 회원가입 후에 진행이 가능합니다.아래 정보를 입력하여 주시고 로그인하여 임원 지원신청하여 주시길 바랍니다.</p>
           <hr />
     </div>
     <form @submit.prevent="createPost()" class=" px-5  py-0 md:px-10 md:py-5">          
      <div class="flex flex-wrap -mx-3 mb-6 mt-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-first-name">
            이름<span class="text-red">*</span>
          </label>
          <input v-model="form.name" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="이름 입력">
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-last-name">
            생년월일<span style="color: red">*6자리 생년월일은 비밀번호로 설정됨.</span>
          </label>
          <input v-model="form.birth" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" maxlength="6" placeholder="6자리 숫자 입력 (880510)">
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6 mt-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-first-name">
                  연락처<span style="color: red">*숫자만 입력.</span>
              </label>
              <input v-model="form.phone" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="textr" @input="onlyNumbers" maxlength="11" placeholder="01077775555">
          
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 font-bold" for="grid-last-name">
            성별<span class="text-red">*</span>
          </label>
          <select v-model="form.gender" class="block appearance-none w-full  border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
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
          <input v-model="form.email" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="hello@gmail.com">
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
                  <div v-if="isOpen">
                       <button @click="isClose()">닫기</button>
                       <VueDaumPostcode @search="onSearch" />
                  </div>
                  <input v-model="form.address" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="주소 검색하여 등록">
                  <div style="position: absolute; right: 10px; top: 8px;">
                     <div v-if="!isOpen" style="width: 100%">
                      <button @click="isOpen = true" class="text-white bg-blue-700 py-1 px-2 rounded">검색</button>
                     </div>
                  </div> 
                </div>   
              </div>
              <div class="w-full md:w-1/3 px-3 mt-6 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                상세주소(2)
                </label>
                <div class="relative">
                  <input v-model="form.address_detail" class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="상세주소 입력">
                </div>
              </div>
              <div class="w-full  px-3 mt-6 mb-6 md:mb-0">
                 <label class=" mt-5 block uppercase tracking-wide text-gray-700 font-bold" for="grid-password">
                <p class="text-center">개인정보 수집∙이용에 동의</p>
                <p class="text-center mt-2">아래박스 체크</p>
                <p class="text-center mt-2"><input style="; transform: scale(1.5);" id="default-checkbox" v-model="form.agreement" type="checkbox" value="1" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></p>
                </label>     
              </div>
            </div>

      
      <div class="flex flex-wrap -mx-3 mb-10 mt-10" >
        <div class="w-full px-3 ">
          <div>
            <button type="submit" class="bg-sky-700 text-white text-md shadow-sm rounded-sm px-4 py-2" >신청하기</button>      
          </div> 
        </div>
      </div>
      <p v-if="errors.length">
    <ul>
      <li v-for="error in errors" :key="error"><span class="text-red-600 text-sm">{{ error }}</span></li>
    </ul>
    </p>
    </form>
  </section>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import { VueDaumPostcode } from "vue-daum-postcode"
  export default {
    created(){
    
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
      newPassword: null,
      errors:[],
      isOpen: false,
      
    }
  }, 
  methods:{

    onlyNumbers: function() {
       this.message = this.message.replace(/[^0-9.]/g,'');
    },
    isClose() { 
      this.isOpen = false;
            console.log(this.isOpen)
    }, 
    onSearch(result) {
      this.form.address = result.q
      this.isOpen = false
    },  
    createPost() {

      console.log(this.form)
      this.errors = [];
      let valid = this.validate(this.form);
        // Use sweetalert2

        if(valid) {
        this.$swal.fire({
  title: '신청하시겠습니까?',
  text: "정보를 등록합니다.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: '등록하기',
  cancelButtonText: '취소'
}).then((result) => {

              if (result.isConfirmed) {
                const config={ headers:{ "content-type":"multipart/form-data" } }
                let formData = new FormData();
                formData.append('name',this.form.name);
                formData.append('phone',this.form.phone);
                formData.append('birth',this.form.birth);
                formData.append('gender',this.form.gender);
                formData.append('address',this.form.address);
                formData.append('address_detail',this.form.address_detail);
                formData.append('email',this.form.email);
                formData.append('role',this.form.role);

                axios.post(`http://localhost:8000/api/user/register`, formData, config )
                .then(res => {
                    this.$router.push({ path: '/register/thanks', query: {success: true, type: 1 }})
                     this.$swal.fire(
                        '회원가입 완료',
                        '회원가입되었습니다.',
                        'success' 
                     ) 
                    
                }).catch((err) => {
                  this.$swal.fire(
            '접수사항',
            '회원님은 이미 가입되어 있습니다. 감사합니다',
            'warning'
          ) 
                })
          }
})}
    
    },
    validate(e) {
            if (!e.name) {
              this.errors.push('*이름이 입력되었는지 확인하세요.');
            }
            if (!e.birth) {
              this.errors.push('*생년월일이 입력되었는지 확인하세요.');
            }
            if (!e.phone) {
              this.errors.push('*핸드폰번호가 입력되었는지 확인하세요.');
            }
            if (!e.email) {
              this.errors.push('*이메일을 입력하세요.');
            }
            if (!e.gender) {
              this.errors.push('*성별을 선택하세요.');
            }
            if (!e.address) {
              this.errors.push('*주소를 검색하세요.');
            }
            
            if (!e.agreement) {
              this.errors.push('*동의 체크해주세요.');
            }

            if(e.name && e.birth && e.phone && e.email && e.gender && e.agreement && e.address) {
              return true;
            } else {
              return false;
            }

        }
  }


  } 
</script>
