<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="커뮤니티" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16">
                  <CommonMobilemenu name="커뮤니티" /> 
                     <ColumnTopguide 
                                      name="QNA"
                                      notice="질문에 대한 답변은 질문을 클릭하여 펼쳐서 보실 수 있습니다."
                                       />
                    <div>
                      <div class="mx-auto max-w-7xl py-12">
                        <div class="mx-auto  divide-gray-200">
                          <h2 class="text-2xl font-bold tracking-tight text-gray-900">자주 묻는 질문 (Frequently Asked Questions)</h2>
                          <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                            <Disclosure as="div" v-for="faq in info.data" :key="faq" class="pt-6" v-slot="{ open }">
                              <dt class="text-lg">
                                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                                  <span class="font-medium text-gray-900">{{ faq.title }}</span>
                                  <span class="ml-6 flex h-7 items-center">
                                    <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                                  </span>
                                </DisclosureButton>
                              </dt>
                              <DisclosurePanel as="dd" class="mt-2 pr-12">
                                <p class="text-base text-gray-500" v-html="faq.content"></p>
                              </DisclosurePanel>
                            </Disclosure>
                          </dl>
                        </div>
                      </div>
                    </div>
                  <div class="mb-40"></div>
                </div>
              </div>     
            </div>
                    <img src="@/assets/img/background2.jpg" />
    </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

import dayjs from 'dayjs'
import { reactive } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { HomeIcon, ChevronDownIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
  const info = await axios.get(`http://ec2-15-164-163-211.ap-northeast-2.compute.amazonaws.com/api/admin-qnas`);

console.log(info)
</script>