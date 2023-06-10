<template>
  <div class="min-h-screen items-center justify-center  bg-gradient-to-l from-secondary flex flex-col">
    <Navbar class="h-16 z-50 fixed w-full top-0" /> <!-- Set the navbar height to 16px -->
    <div class="flex flex-col items-center justify-center flex-grow">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>


<script lang="ts">

</script>

<style scoped>
</style>
