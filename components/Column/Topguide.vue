<template>
    <main>
        <div class="">
            <h1 class="text-4xl mt-3 mb-12 text-center nanumgothic w-700 text-yellow-700">
            {{ props.name }}</h1>
        </div>
        <div class="w-full bg-lime-50 border-gray-300 border mt-5" v-if="notice">
            <div class="p-6">{{ notice }}
            </div>
        </div>

    </main>
</template>
<script setup>
import {
  HomeIcon,
} from '@heroicons/vue/outline'
const props = defineProps(['name', 'notice'])

useHead({
  title: '공지미',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})

</script>
<style scoped>

</style>