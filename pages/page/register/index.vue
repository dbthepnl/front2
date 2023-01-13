<template>
    <div>
            <div class="container relative mx-auto">
              <Sidebar name="가입하기" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <Mobilemenu name="가입하기" />
                  <ColumnTopguide 
                    name="가입하기"
                    notice="장학금신청은 회원가입후 로그인하여 진행 가능합니다." />
                    <Rinfo />
                </div>
              </div>     
            </div>
    </div>
</template>
<script>
import  axios  from 'axios'
export default {
    
    data() {
      return {
      
      }
    },
    methods: {
      
    }
}
</script>