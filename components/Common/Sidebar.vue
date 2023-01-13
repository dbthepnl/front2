<template>
    <div class="relative hidden sm:hidden md:block lg:block ">
        <div class="pb-20 bg-white pl-4 absolute">
          <ul class="relative divide-y">
            <li class="bg-[url('@/assets/img/sidebarbanner.jpg')] bg-auto bg-no-repeat bg-center w-52 ">
                <div class="py-20">
                  <p class="text-center text-3xl text-yellow-700">{{ props.name }}</p>
                </div>
            </li>
            <li class="border-1 py-5">
              <div v-for="row in pageMenu.subs" :key="row" class="px-5">
                  <div class="text-xl mb-4">
                    <span class="text-slate-300"> </span><nuxt-link :class="[row.url == route.matched[0].path ? 'text-yellow-700' : 'text-black','']" :to="row.url + `${route.query.h ? '/?h=' + route.query.h : ''}`">{{ row.name }}</nuxt-link> 
                        <div v-for="row2 in row.subs" class="ml-4" :key="row2">
                          <nuxt-link :class="[row2.url == route.matched[0].path ? 'text-yellow-700' : 'text-slate-500','text-md']" :to="row2.url"><span class="text-slate-400">&#12539; </span> {{ row2.name }}</nuxt-link> 
                        </div>
                  </div>
              </div>
              <div  class="px-5" v-show="props.name == '내 정보' && roles==2 ">
                  <div class="text-xl">
                    <span class="text-slate-300"> </span><nuxt-link :class="['/profile/activity' == route.href ? 'text-yellow-700' : 'text-black','']" to="/profile/activity">내 활동현황</nuxt-link> 
                  </div>
              </div>
              <div  class="px-5" v-show="props.name == '내 정보' && roles==2 ">
                  <div class="text-xl">
                    <span class="text-slate-300"> </span><nuxt-link :class="['/profile/doc' == route.href ? 'text-yellow-700' : 'text-black','']" to="/profile/doc">내 주요행사</nuxt-link> 
                  </div>
              </div>
            </li>
          
          </ul>
        </div>
    </div>
</template>
<script setup>
import { mmenus } from '../../data/menu.json'
import { ref } from 'vue'
const route = useRoute();
const props = defineProps(['name', 'catMenu'])
const menus = ref([])
menus.value = mmenus //Init menu array property

const pageMenu = menus.value.find((x) => {
  if(x.name === props.name ) {
    return x;
  }
})
</script>