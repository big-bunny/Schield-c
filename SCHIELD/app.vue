<template class="min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover bg-center bg-accent"
  :style="`background-image: url('${currentCarousel.image}')`">
  <div class="min-h-screen h-full w-full relative bg-gray-100 pb-20">
    <Navbar class="h-10 z-50 fixed w-full top-0" /> <!-- Set the navbar height to 16px -->
    <div class=" z-10"> <!-- Push the content below the navbar -->
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>



<script setup lang="ts">
useHead({
  title: 'SCHIELD-CENTER',
})
</script>
