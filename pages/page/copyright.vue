<template>
    <div>
            <div class="container relative mx-auto">
              <CommonSidebar name="소개" />
              <div class="flex ml-0 sm:ml-0 md:ml-56 lg:ml-56  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                  <CommonMobilemenu name="소개" />
                  <ColumnTopguide 
                    name="저작권정책" 
                  />
                  <div><br /><br />
                  1. 「저작권법」 제24조의2에 따라 법제처에서 저작재산권의 전부를 보유한 저작물의 경우에는 별도의 이용허락 없이 무료로 자유이용이 가능합니다.
<br /><br />2. 법제처 홈페이지에는 법제처가 저작권 전부를 갖고 있지 아니한 자료도 제공되고 있습니다. 또한 개인이나 지부, 단체 등에서 무상으로 제공한 자료들도 많이 있으므로 이러한 자료를 자유롭게 이용하기 위해서는 반드시 해당 저작권자의 허락을 받으셔야 합니다.
<br /><br /> 즉, 공공누리가 부착되지 않은 자료들을 사용하고자 할 경우에는 담당자와 사전에 협의한 이후에 이용하여 주시기 바랍니다.
<br /><br />다른 인터넷 사이트 상의 화면에서 법제처 홈페이지의 저작물을 직접 링크시킬 경우에는 링크 이용자가 본 인터넷 저작권 정책을 간과할 수 있으므로 본 인터넷 저작권 정책도 함께 링크해 주시기 바랍니다.
4홈페이지에서 개방 중인 자료 중 법제처가 저작권 전부를 갖고 있지 아니한 자료(다른 저작자와 저작권을 공유한 자료 등)의 경우에는 저작권 침해의 소지가 있으므로 단순 열람 외에 무단 변경, 복제·배포, 개작 등의 이용은 금지되며 이를 위반할 경우 관련법에 의거 법적 처벌을 받을 수 있음을 알려드립니다.
                  </div>
                  <div class="mb-40"></div>
                </div>
              </div>     
            </div>
    </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});

import dayjs from 'dayjs'
import { reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'

//소식 data
const info = await axios.get('localhost:8000/api/pages/3');
console.log(info)


</script>