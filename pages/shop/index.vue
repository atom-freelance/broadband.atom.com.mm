<script lang="ts" setup>
import { reactive } from 'vue';

const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])

</script>

<template>
  <div class="bg-white relative">
    <div class="container h-[calc(100vh-10rem)] flex flex-col gap-10 justify-center fixed top-16 right-0 left-0">
      <div class="hero">
        <div class="hero-content text-center">
          <div class="">
            <h1 class="text-title-hero">
              Let’s find <span class="font-bold italic">the best plans</span> 
              <br> and <span class="font-bold italic">services</span> now!
            </h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div class="w-72 px-3 py-11 bg-neutral-100 text-5xl text-center rounded-full" 
          v-for="link in menuLinks" 
          :key="link"
        >
          {{ link }}
        </div>
      </div>
    </div>
    
    <div class="h-[calc(100vh-10rem)]"></div>
    <div class="container pt-20 bg-white relative z-10">
      <div class="flex justify-center items-center sticky top-6 z-10 ">
        <div class="bg-white shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] rounded-full px-8 py-4">
          <span class="text-base px-4">
            <a href="#" class="px-3 text-content-primary" v-for="link in menuLinks" :key="link"
            >
              {{ link }}
            </a>
          </span>
        </div>
      </div>

      <h1 class="text-[48px] font-semibold mt-16">ATOM’s Home Plan</h1>
      <div class="divider mt-0"></div>

      <div class="grid grid-cols-3 gap-6 gap-y-36">
        <div class="w-full bg-base-100 cursor-pointer group" v-for="item in [...Array(6).keys()]">
          <div class="h-72 bg-[#1F2051] flex items-end p-6 transition duration-300 group-hover:bg-[#78C9FF] origin-center">
            <p class="text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051] origin-bottom-left">ATOM</p>
          </div>
          <div class="py-2">
            <p class="text-lg font-semibold">Power 15 Up to 15Mbps</p>
            <p class="text-base">Inclusice of tax</p>
            <p class="mt-3"><span class="text-lg font-semibold">28,000 </span> <span>/ 30 days</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>