<script lang="ts" setup>
import { reactive } from 'vue';
import { fiberHomePlans, fiberBusinessPlans } from './data'
import ServiceBtnGroup from './ServiceBtnGroup.vue';

const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])

</script>

<template>
  <div class="bg-white relative">

    <!-- banner hero text and service menu -->
    <div class="container h-[calc(100vh-10rem)] flex flex-col gap-10 justify-center fixed top-16 right-0 left-0">
      <div class="hero">
        <div class="hero-content text-center">
          <div class="relative">
            <h1 class="text-title-hero max-md:text-6xl max-sm:text-4xl">
              Let’s find <span class="font-bold italic">the best plans</span> 
              <br> and <span class="font-bold italic">services</span> now!
            </h1>
            <p class="py-6 text-base max-sm:text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br> excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <img src="~/assets/img/rocket-launch.svg" alt="rocket" class="w-16 h-16 absolute -right-20 top-20 max-sm:-right-10 max-sm:top-10 max-sm:w-11 max-sm:h-11">
          </div>
        </div>
      </div>
      

      <!-- service btn group -->
      <ServiceBtnGroup />
    </div>
    
    <!-- set height for fixed hero block -->
    <div class="h-[calc(100vh-10rem)]"></div>

    <div class="bg-white relative">
      <div class="container py-20 z-10">
        <!-- sticky service menu links -->
        <div class="flex justify-center items-center sticky top-6 z-10 ">
          <div class="bg-white shadow-[0_20px_66px_0_rgba(34,48,73,0.2)] rounded-full px-6 py-5 max-sm:px-2 max-sm:py-3">
            <a href="#" class="px-6 text-content-primary max-sm:px-2 text-base mx-3 max-sm:mx-2" v-for="link in menuLinks" :key="link"
            >
              {{ link }}
            </a>
          </div>
        </div>


        <!-- Home plan package lists -->
        <h1 class="text-[48px] max-sm:text-3xl font-semibold mt-16">ATOM’s Home Plan</h1>
        <div class="divider mt-0 mb-9"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-36 max-sm:gap-y-14">

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
        <h1 class="text-[48px] max-sm:text-3xl font-semibold mt-16">ATOM’s Business Plan</h1>
        <div class="divider mt-0 mb-9"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-36 max-sm:gap-y-14">

          <!-- Fiber plan card lists -->
          <div class="w-full bg-base-100 cursor-pointer group" v-for="plan in fiberBusinessPlans" :key="plan.label">
            <div class="h-72 bg-[#1F2051] flex items-end p-6 transition duration-300 group-hover:bg-[#78C9FF] origin-center">
              <p class="text-6xl font-black text-[#78C9FF] transition duration-300 group-hover:scale-150 group-hover:text-[#1F2051] origin-bottom-left">ATOM</p>
            </div>
            <div class="py-2">
              <p class="text-lg max-sm:text-base font-semibold">{{plan.label}}</p>
              <p class="text-base max-sm:text-sm">{{ plan.tax }}</p>
              <p class="mt-3"><span class="text-lg max-sm:text-base font-semibold">{{ plan.price }} </span> <span>/ {{ plan.day }} days</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Service available locations -->
      <div class="h-screen max-sm:h-[calc(100vh-10rem)] z-10 bg-contain max-md:bg-cover bg-no-repeat bg-center" style="background-image: url('/world-map.png');">
        <div class="flex flex-col h-full gap-36 justify-center">
          <div class="container">
            <h1 class="lg:text-title-hero md:text-6xl text-4xl font-medium max-sm:text-center">
              Let’s take a look at the <br class="max-sm:hidden"> <span class="font-bold italic">services available</span> 
              at your <br> location.
            </h1>
            <div class="flex flex-row-reverse gap-4">
              <div class="w-1/2 max-sm:w-full flex flex-col justify-between">
                <p class="py-6 text-left max-sm:text-center w-5/6 max-sm:w-full text-base max-sm:text-sm">As we are trying to provide the best experience to our customers, we need to check service availability at your address where you want to use the service.</p>
                <button class="btn px-6 py-3 text-white bg-interactive-accent hover:bg-interactive-accent-hover rounded-full w-64 font-semibold text-base max-md:self-center">Check service available</button>
              </div>
              <div class="pb-4 max-sm:hidden max-sm:text-center">
                <img src="~/assets/img/arrow-down-curve.png" alt="arrow-down">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  
</template>