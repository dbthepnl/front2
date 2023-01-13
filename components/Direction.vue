<template>
    <main>
    <div class="flex flex-row mt-8">
                    <Nuxt-link :to="url1" :class="[ route.href== url1 ? 'bg-white text-black' : 'bg-green-700 text-white','basis-1/2 mr-1']">
                        <div class="p-6">
                            <p class="text-center">{{ name1}}</p>
                        </div>
                    </Nuxt-link>
                    <Nuxt-link :to="url2" :class="[route.href== url2 ? 'bg-white text-black' : 'bg-green-700 text-white','basis-1/2 mr-1']">
                        <div class="p-6">
                          <p class="text-center">{{ name2 }}</p>
                        </div>
                    </Nuxt-link>
                  </div>
    </main>           
</template>
<script setup>
const props = defineProps(['url1', 'url2', 'name1', 'name2'])
const route = useRoute();
if(process.client) {
const scrollTop = () => window.scrollTo(0, 0)
scrollTop()
}
</script>