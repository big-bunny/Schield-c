<template >
  <div  class="min-h-screen flex flex-col  bg-gradient-to-r from-red-500 to-secondary"
       >
    <Navbar class="h-10 z-50 fixed w-full top-0" /> <!-- Set the navbar height to 16px -->
    <div class=" z-10"> <!-- Push the content below the navbar -->
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>



<script lang="ts">
import slide1 from '@/static/images/SCHIELD-CENTER.svg';
import slide2 from '@/static/images/SCHIELD-CENTER1.svg';


useHead({
  title: 'SCHIELD-CENTER',
});
definePageMeta({ auth: false })
export default {
  // This is the script section of the About component
  data() {
    return {
      preloadImages: [], // An array to store pre-loaded images
      currentCarousel: {}, // An object to store the current slide
      carousel: [ // An array of objects containing slide information
        {
          title: 'Students and Principal',
          image: slide1,
          },
        {
          title: 'Trophy',
          image: slide2,
           },
    
      ],
    }
  },

  created() {
    // Pre-load images for all slides in the carousel
    this.carousel.forEach((slide) => {
      const image = new Image() // Create a new Image object
      image.src = slide.image // Set the 'src' attribute of the Image object to the slide image path
      this.preloadImages.push(image) // Add the Image object to the 'preloadImages' array
    })

    // Set an interval for slide change with a duration of 10 seconds
    let i = 0 // Initialize a counter variable 'i' to 0
    // eslint-disable-next-line no-unused-vars
    const interval = 100 // Declare a constant 'interval' with a value of 100
    setInterval(() => { // Set an interval to execute a function every 10 seconds
      this.currentCarousel = this.carousel[i] // Set the currentCarousel object to the current slide
      i++ // Increment the counter variable
      if (i >= this.carousel.length) { // If the counter variable exceeds the number of slides, reset it to 0
        i = 0
      }
    }, 1800)
  },
};
</script>
