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
import { defineComponent } from 'vue';
import backgroundImage from './static/images/home.jpg';

export default defineComponent({
  name: 'App',
  setup() {
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return {
      backgroundStyle,
    };
  },
});
</script>

<style scoped>
.min-h-screen {
  /* Your other styles here */
  /* You can customize other styles as needed */
}
</style>
