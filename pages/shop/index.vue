<script lang="ts" setup>
import { reactive } from 'vue';
import { fiberHomePlans, fiberBusinessPlans } from './data'

const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])

</script>

<template>
  <div class="bg-white relative">

    <!-- banner hero text and service menu -->
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
    
    <!-- set height for fixed hero block -->
    <div class="h-[calc(100vh-10rem)]"></div>

    <div class="container py-20 bg-white relative z-10">
      <!-- sticky service menu links -->
      <div class="flex justify-center items-center sticky top-6 z-10 ">
        <div class="bg-white shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] rounded-full px-6 py-5">
          <span class="text-base mx-3">
            <a href="#" class="px-5 text-content-primary" v-for="link in menuLinks" :key="link"
            >
              {{ link }}
            </a>
          </span>
        </div>
      </div>


      <!-- Home plan package lists -->
      <h1 class="text-[48px] font-semibold mt-16">ATOM’s Home Plan</h1>
      <div class="divider mt-0 mb-9"></div>

      <div class="grid grid-cols-3 gap-6 gap-y-36">

        <!-- Fiber plan card lists -->
        <div class="w-full bg-base-100 cursor-pointer group" v-for="plan in fiberHomePlans" :key="plan.label">
          <div class="h-72 bg-[#1F2051] flex items-end p-6 transition duration-300 group-hover:bg-[#78C9FF] origin-center">
            <p class="text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051] origin-bottom-left">ATOM</p>
          </div>
          <div class="py-2">
            <p class="text-lg font-semibold">{{plan.label}}</p>
            <p class="text-base">{{ plan.tax }}</p>
            <p class="mt-3"><span class="text-lg font-semibold">{{ plan.price }} </span> <span>/ {{ plan.day }} days</span></p>
          </div>
        </div>
      </div>


      <!-- Business plan package lists -->
      <h1 class="text-[48px] font-semibold mt-16">ATOM’s Business Plan</h1>
      <div class="divider mt-0 mb-9"></div>

      <div class="grid grid-cols-3 gap-6 gap-y-36">

        <!-- Fiber plan card lists -->
        <div class="w-full bg-base-100 cursor-pointer group" v-for="plan in fiberBusinessPlans" :key="plan.label">
          <div class="h-72 bg-[#1F2051] flex items-end p-6 transition duration-300 group-hover:bg-[#78C9FF] origin-center">
            <p class="text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051] origin-bottom-left">ATOM</p>
          </div>
          <div class="py-2">
            <p class="text-lg font-semibold">{{plan.label}}</p>
            <p class="text-base">{{ plan.tax }}</p>
            <p class="mt-3"><span class="text-lg font-semibold">{{ plan.price }} </span> <span>/ {{ plan.day }} days</span></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Service available locations -->
    <div class="bg-white h-screen relative z-10 bg-contain bg-no-repeat bg-center " style="background-image: url('/world-map.png');">
      <div class="flex flex-col h-full gap-36 justify-center">
        <div class="container">
          <h1 class="text-title-hero font-medium">
            Let’s take a look at the <br> <span class="font-bold italic">services available</span> 
            at your <br> location.
          </h1>
          <div class="flex flex-row-reverse gap-4">
            <div class="w-1/2 flex flex-col justify-between">
              <p class="py-6 text-left w-5/6 text-base">As we are trying to provide the best experience to our customers, we need to check service availability at your address where you want to use the service.</p>
              <button class="btn px-6 py-3 text-white bg-interactive-accent hover:bg-interactive-accent-hover rounded-full w-64 font-semibold text-base">Check service available</button>
            </div>
            <div class="pb-4">
              <img src="~/assets/img/arrow-down-curve.png" alt="arrow-down">
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  
</template>