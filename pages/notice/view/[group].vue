<template>
    <div>
            <div class="container relative mx-auto">
              <div class="flex ml-0  mb-4 ">
                <div class="w-full px-5 sm:px-5 md:px-5 lg:px-16 py-0">
                    <ColumnPage
                      :title="true"
                      :post="info.data"
                     />
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
import { ref, reactive } from 'vue'
import { HomeIcon } from '@heroicons/vue/outline'
import axios from 'axios'
const route = useRoute();
const group = ref('')
group.value = route.params.group
console.log(group.value);

//소식 data
const info = await axios.get('http://localhost:8000/api/notices/' + group.value);
console.log(info)


</script>