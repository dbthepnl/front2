<template>
  <div class="p-6">
  <div class="relative block md:hidden lg:hidden rounded-xl overflow-auto">
  <div class="max-w-md mx-auto bg-white min-w-0">
    <div class="overflow-x-scroll flex gap-5">
      <div class="flex-none" v-for="row in pageMenu.subs" :key="row">
        <div class="flex flex-col items-center justify-center gap-2">
          <Nuxt-link :to="row.url + `${route.query.h ? '/?h=' + route.query.h : ''}`" :class="[row.url == route.matched[0].path ? 'text-yellow-700 pb-1 border-b-4 border-gray-200' : 'text-black','text-md ']">{{ row.name }}</Nuxt-link>
        </div>
      </div>
    </div>
  </div>
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