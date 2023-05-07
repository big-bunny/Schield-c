<template>

  <!-- This is the template for the About section of the website -->
  <div id="about" class="bg-accent top-0 mt-15 text-gray-700 my-18">
    <div class="container py-20 px-20 ">
      <!-- Header section with dynamic background image and navigation bar -->
      <header class="min-h-screen flex flex-col bg-fixed bg-no-repeat bg-cover bg-center bg-accent"
        :style="`background-image: url('${currentCarousel.image}')`">
        <!-- Include the navigation bar using the <partials-nav-bar> component -->
        <!-- <partials-nav-bar /> -->

        <!-- Navigation section with the text on the background image -->
        <nav class="flex-1 flex flex-col justify-end items-baseline lg:w-2/3 py-4 lg:py-8 mx-auto">
          <!-- Background text section -->
          <div
            class="bg-green-600 bg-opacity-75 px-4 py-8 md:px-12 rounded shadow w-full border border-red-500 rounded-md">
            <!-- Title of the text on the background image -->
            <div class="text-xl text-black font-bold leading-relaxed">
              {{ currentCarousel.text }}
            </div>
          </div>
        </nav>
      </header>
      <!-- This is the title of the About section -->
      <h2 class="py-20 px-20 text-3xl text-center font-extrabold">ABOUT SCHIELD CENTER</h2>
      <!-- This is the content of the About section -->
      <p class="text-2xl">
        Schield Center is a non-profit organization that was founded in 2008 with
        the aim of providing education to unpreviledged children in Kajiado, Kenya. The
        organization recognizes the importance of education in empowering children
        to break the cycle of poverty and improve their lives and those of their
        families. At Schield Center, we believe that every child deserves access
        to quality education, regardless of their background or financial
        situation. However, many unpreviledged children in Kajiado face significant
        barriers to education, including poverty, lack of access to schools, and
        cultural beliefs that prioritize traditional practices over formal
        education. To address these challenges, Schield Center relies on the
        generous support of sponsors who share our vision and values. With their
        help, we are able to provide scholarships, uniforms, books, and other
        school supplies to hundreds of unpreviledged children each year. We also work
        closely with local schools and communities to identify the most vulnerable
        children and provide them with the support they need to succeed. Our
        mission is to empower unpreviledged children through education, and we believe
        that with the right resources and support, they can achieve their full
        potential and contribute to the development of their communities and
        beyond. We are committed to transparency, accountability, and impact, and
        we invite you to join us in our journey to make a difference in the lives
        of unpreviledged children in Kajiado.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
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
          image: '/images/sliders/slide-1.jpg',
          text:
            'At Schield Center, we strive to create a nurturing learning environment that values diversity and inclusivity. We believe that education is not just about acquiring knowledge and skills, but also about developing critical thinking, creativity, and a passion for lifelong learning.',
        },
        {
          title: 'Trophy',
          image: '/images/sliders/slide-2.jpg',
          text:
            'Our mission is to empower children to face the challenges and opportunities of the 21st century by providing a well-rounded education that includes academic, social, and emotional development. We aim to cultivate a culture of curiosity, inquiry, and collaboration that prepares our students to be responsible global citizens.',
        },
        {
          title: 'Students and Principal 2',
          image: '/images/sliders/slide-3.jpg',
          text:
            'Through our work, we hope to inspire a new generation of children who are confident, resilient, and empowered to pursue their dreams and make a positive impact in the world.',
        },
        {
          title: 'Students and Principal 3',
          image: '/images/sliders/slide4.jpg',
          text:
            'At Schield Center, we are committed to providing quality education to every child, regardless of their background or financial situation. However, many children in Kajiado face significant barriers to education, including poverty, limited access to schools, and cultural beliefs that prioritize traditional practices over formal education.',
        },
        {
          title: 'Students and Principal 4',
          image: '/images/sliders/slide5.jpg',
          text:
            'To overcome these challenges, Schield Center relies on the generous support of sponsors who share our vision and values. With their help, we are able to provide scholarships, uniforms, books, and other school supplies to hundreds of children each year. We also work closely with local schools and communities to identify the most vulnerable children and provide them with the resources they need to thrive.',
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
    }, 10000)
  },
};
</script>

<style scoped>
/* Styles for the header section */
.min-h-screen {
  min-height: 100vh;
}

.bg-accent {
  background-color: var(--color-accent);
}

.text-wide {
  font-weight: 800;
}

/* Styles for the content section */
.bg-secondary {
  background-color: var(--color-secondary);
}

.leading-relaxed {
  line-height: 1.8;

}
</style>