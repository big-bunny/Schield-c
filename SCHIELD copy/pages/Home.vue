<template>
  <div id="about" class="bg-accent mt-20 rounded-lg text-gray-700 my-8">
    <div class="container mx-auto px-8 py-10">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3 flex">
          <header class="min-h-screen bg-fixed bg-no-repeat bg-cover bg-center bg-accent" :style="`background-image: url('${currentCarousel.image}')`">
            <div class="bg-green-600 bg-opacity-75 px-4 py-8 md:px-12 rounded shadow-md border border-red-500">
              <div class="text-xl text-black font-bold leading-relaxed">
                <p class="">
                  {{ currentCarousel.text }}
                </p>
              </div>
            </div>
          </header>
        </div>
        <div class="w-full lg:w-1/3 bg-gradient-to-r from-secondary to-accent rounded shadow-md px-8 py-10 md:py-20 lg:px-12 flex flex-col">
          <h2 class="text-3xl font-extrabold bg-gradient-to-r from-accent to-secondary text-gray-900 inline-block rounded-full px-6 py-2">
            ABOUT SCHIELD CENTER
          </h2>
          <div class="text-2xl text-center py-10">
            <p>
              Schield Center is a school located in Kajiado, officially established in 2008 by Patricia Schield, an American woman who made a courageous decision. Patricia sold everything she owned and utilized her inheritance to initiate the school. Tragically, Patricia passed away in 2008 before witnessing her dreams come to fruition. Feeling like she had failed, Patricia's dying wish to Joseph Mboya was to establish the school through trustees and fundraising efforts.

              Trina, an Australian, moved to Kenya in 2011 and decided to start fundraising by selling her Kenyan wildlife photos as calendars in Australia to support the completion of the school's construction. Originally starting with approximately 15 students in its inaugural year, Schield Center now boasts a student body of 210. The primary aim of the school is to assist African children in the semi-arid region of Kajiado. Schield Center places significant emphasis not only on academics but also on sports, chess, and coding. Furthermore, there are plans in place to introduce a Junior Secondary program in 2024, construction of which is currently ongoing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import slide1 from '@/static/images/sliders/slide-1.jpg';
import slide2 from '@/static/images/sliders/slide-2.jpg';
import slide3 from '@/static/images/sliders/slide-3.jpg';
import slide4 from '@/static/images/sliders/slide-4.jpg';
import slide5 from '@/static/images/sliders/slide-5.jpg';

definePageMeta({ auth: false });
export default {
  data() {
    return {
      currentCarousel: {}, // Object to store the current slide
      carousel: [ // Array of objects containing slide information
        {
          title: 'Students and Principal',
          image: slide1,
          text:
            'At Schield Center, we strive to create a nurturing learning environment that values diversity and inclusivity. We believe that education is not just about acquiring knowledge and skills, but also about developing critical thinking, creativity, and a passion for lifelong learning.',
        },
        {
          title: 'Trophy',
          image: slide2,
          text:
            'Our mission is to empower children to face the challenges and opportunities of the 21st century by providing a well-rounded education that includes academic, social, and emotional development. We aim to cultivate a culture of curiosity, inquiry, and collaboration that prepares our students to be responsible global citizens.',
        },
        {
          title: 'Students and Principal 2',
          image: slide3,
          text:
            'Through our work, we hope to inspire a new generation of children who are confident, resilient, and empowered to pursue their dreams and make a positive impact in the world.',
        },
        {
          title: 'Students and Principal 3',
          image: slide4,
          text:
            'At Schield Center, we are committed to providing quality education to every child, regardless of their background or financial situation. However, many children in Kajiado face significant barriers to education, including poverty, limited access to schools, and cultural beliefs that prioritize traditional practices over formal education.',
        },
        {
          title: 'Students and Principal 4',
          image: slide5,
          text:
            'To overcome these challenges, Schield Center relies on the generous support of sponsors who share our vision and values. With their help, we are able to provide scholarships, uniforms, books, and other school supplies to hundreds of children each year. We also work closely with local schools and communities to identify the most vulnerable children and provide them with the resources they need to thrive.',
        },
      ],
    };
  },

  created() {
    this.currentCarousel = this.carousel[0]; // Set the initial slide as the current slide

    let i = 0; // Initialize a counter variable 'i' to 0
    setInterval(() => {
      // Set an interval to execute a function every 45 seconds
      this.currentCarousel = this.carousel[i]; // Set the currentCarousel object to the current slide
      i++; // Increment the counter variable
      if (i >= this.carousel.length) {
        // If the counter variable exceeds the number of slides, reset it to 0
        i = 0;
      }
    }, 19000); // Interval duration of 45 seconds (45000 milliseconds)
  },
};
</script>

<style scoped>
/* Tailwind CSS classes are applied directly, no additional comments needed */
</style>
