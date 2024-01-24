<script lang="ts" setup>
  import { reactive } from 'vue';

  const menuLinks = reactive(['Fiber', 'Wireless', 'Flexi net', 'Mini Pro'])

  let interval: any;
  onMounted(() => {
    interval = setInterval(() => {
      const firstItem = menuLinks.shift()
      if(firstItem) menuLinks.push(firstItem)
    }, 1500)
  })

  onUnmounted(() => {
    if (interval) clearInterval(interval)
  })


</script>

<template>
  <div class="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 justify-items-center">
    <div class="w-72 md:w-full lg:w-full max-sm:w-full px-3 lg:py-11 md:py-6 py-2 bg-neutral-100 lg:text-5xl md:text-2xl text-center rounded-full" 
      v-for="link in menuLinks" 
      :key="link"
    >
      {{ link }}
    </div>
  </div>
</template>