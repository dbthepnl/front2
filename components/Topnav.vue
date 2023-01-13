<template>
  <nav aria-label="Progress">
  <ol role="list" class="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
    <li class="relative md:flex md:flex-1" v-for="row in category" :key="row">
      <!-- Completed Step -->
        <span class="flex items-center px-6 py-4 text-sm font-medium">
          <span :class="[row.uri === url ? 'border-indigo-600' : 'border-gray-300', 'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2']" 
          >
          <span :class="[row.uri === url ? 'text-indigo-600' : 'text-gray-300']">{{row.num}}</span>
        </span>
          <span class="ml-4 text-sm font-medium text-gray-900">{{row.name}}</span>
        </span>

      <!-- Arrow separator for lg screens and up -->
      <div class="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
        <svg class="h-full w-full text-gray-300" viewBox="0 0 22 80" fill="none" preserveAspectRatio="none">
          <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke" stroke="currentcolor" stroke-linejoin="round" />
        </svg>
      </div>
    </li>
  </ol>
</nav>
</template>
<script setup>
const route = useRoute()
const router = useRouter()
const props = defineProps(['url'])
import { ref } from 'vue'

const category = [
  { 
    name: '자기소개서', 
    uri: '/register/membership',
    num: '01',
  },
  { 
    name: '장학금신청서', 
    uri: '/register/membership2',
    num: '02',
  },
  { 
    name: '구비서류', 
    uri: '/register/membership3',
    num: '03',
  }
]

</script>