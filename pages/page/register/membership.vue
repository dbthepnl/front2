<template>
    <div>
            <div class="container relative mx-auto">
              <Sidebar name="장학금 신청" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <Mobilemenu name="장학금 신청" />
                  <ColumnTopguide 
                    name="장학금 신청"
                    notice="아래 전체 요청자료를 등록하여주세요." />
                    <Vinfo 
                    />
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
const route = useRoute();
const router = useRouter();
  if(process.client) {
    if(!localStorage.getItem('id')) {
      router.push({ path: '/auth/login', query: { link: route.href }})
    } 
  }
</script>