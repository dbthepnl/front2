<template>
    <div>
            <div class="container relative mx-auto">
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <Mobilemenu name="가입하기" />
                  <ColumnTopguide 
                    name="가입페이지"
                    notice="*접수완료되었습니다." />
                  <!-- component -->
                      <div class="h-screen">
                            <div class="bg-white p-6  md:mx-auto">
                              <svg v-if="success" viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                                  <path fill="currentColor"
                                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                  </path>
                              </svg>
                              <div class="text-center" v-show="success && mtype == 1">
                                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">회원가입 완료!</h3>
                                  <p class="text-gray-600 my-2">에녹메리선교회에 방문해 주셔서 감사합니다.</p>
                                  <p>장학금 신청은 로그인하여 진행하시길 바랍니다.</p>
                                  <div class="py-10 text-center">
                                      <Nuxt-link to="/" class="text-center px-6 bg-gray-100 font-semibold py-3">
                                          홈화면으로 가기
                                      </Nuxt-link>
                                  </div>
                              </div>
                              <div class="text-center" v-show="success && mtype == 2">
                                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">장학금 신청 완료!</h3>
                                  <p class="text-gray-600 my-2">정상적으로 접수되었습니다. 감사합니다.</p>
                                  <p>장학금심사가 진행되오니 완료시에 개별적으로 연락드리겠습니다. 진행현황을은 내 정보 > 심사현황에서 확인이 가능합니다.</p>
                                  <div class="py-10 text-center">
                                      <Nuxt-link to="/" class="text-center px-6 bg-gray-100 font-semibold py-3">
                                         심사현황 보기
                                      </Nuxt-link>
                                  </div>
                              </div>
                              <div class="text-center" v-show="!success">
                                  <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">오류</h3>
                                  <p class="text-gray-600 my-2">정상적으로 접수되지 않았습니다.</p>
                                  <p>다시 등록바랍니다. 감사합니다.</p>
                                  <div class="py-10 text-center">
                                      <Nuxt-link to="/register" class="text-center px-6 bg-gray-100 font-semibold py-3">
                                         가입하기로 이동
                                      </Nuxt-link>
                                  </div>
                              </div>
                          </div>
                        </div>
                    
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
  const route = useRoute();
  const success = ref('')
  const mtype = ref('')
const scrollTop = () => window.scrollTo(0, 0)

  success.value = route.query.success
  mtype.value = route.query.type

  scrollTop()

</script>