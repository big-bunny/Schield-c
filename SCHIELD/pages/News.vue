<template>
<section id="news" class=" border-t  border-secondary container py-20"> <!-- Sets up a section with the id of "news" and adds some styling classes -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <!-- Sets up a container with some styling classes -->
    <h1 class="text-3xl text-center font-extrabold text-gray-900">NEWS</h1> <!-- Adds a heading to the section -->
    <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"> <!-- Sets up a grid layout with some styling classes -->
      <div v-for="item in posts" :key="item.id" class="bg-accent shadow-lg rounded-lg overflow-hidden"> <!-- Sets up a container for each post in the "posts" array using v-for directive. Adds some styling classes, a unique key and overflow-hidden class -->
        <img class="h-48 w-full object-cover" :src="item.image" :alt="item.title" /> <!-- Adds an image with some styling classes, the image source and alternative text from each post object -->
        <div class="p-6"> <!-- Adds some padding to the container -->
          <h2 class="text-xl font-semibold text-gray-900">{{ item.title }}</h2> <!-- Adds a heading with the title of each post -->
          <p class="mt-2 text-green-600">{{  }} </p> <!-- Adds a paragraph with some styling classes but no content -->
          <p class="text-lg leading-relaxed truncate-overflow" v-html="item.description" ref="bio"></p> <!-- Adds a paragraph with some styling classes, the description of each post and a ref to "bio" -->
          <a href="#" class="text-green-500" @click.prevent="showModal(item)">Read more</a> <!-- Adds a link with some styling classes, a click event that calls the showModal function and passes the current post object -->
        </div>
      </div>
    </div>
  </div>

  <div v-if="selectedPost" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center"> <!-- Sets up a container that is only displayed when selectedPost is truthy -->
    <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden"> <!-- Adds some styling classes to the container -->
      <div class="p-6"> <!-- Adds some padding to the container -->
        <h2 class="text-2xl font-bold mb-2">{{ selectedPost.title }}</h2> <!-- Adds a heading with the title of the selected post -->
        <p class="text-green-600 mb-4">{{ selectedPost.image }}</p> <!-- Adds a paragraph with some styling classes and the image of the selected post -->
        <p class="text-base text-lg leading-relaxed" v-html="selectedPost.description"></p> <!-- Adds a paragraph with some styling classes and the description of the selected post -->
        <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg mt-8" @click="selectedPost = null">Close</button> <!-- Adds a button with some styling classes that sets selectedPost to null when clicked -->
        <div id="donate-button-container"> <!-- Sets up a container for the donation button -->
          <div id="donate-button"></div> <!-- Adds a donation button -->
        </div>
      </div>
    </div>
</div>
</section>
</template>
<script lang="ts">
// import { loadScript } from 'vue-plugin-load-script';

export default {
  data() {
    return {
      // An array of objects representing news posts
      posts: [
        {
          title: 'Schield Center Celebrates 10 Years of Excellence in Education',
          image: '/images/news/gallery/post-1.jpg',
          description: 'Schield Center has been providing quality education to students in Kajiado for the past decade. To celebrate this milestone, the school hosted a series of events...',
          link: '#'
        },
        {
          title: 'Schield Center Receives Award for Best Performing School in Kajiado',
          image: '/images/news/gallery/post-2.jpg',
          description: 'Schield Center was recently recognized as the best performing school in Kajiado County. The award was presented by the County Governor...',
          link: '#'
        },
        {
          title: 'Schield Center Launches New STEM Program for Students',
          image: '/images/news/gallery/post-3.jpg',
          description: 'Schield Center is proud to announce the launch of its new STEM program for students. The program will provide students with hands-on...',
          link: '#'
        },
        {
          title: 'Schield Center Students Win National Science Competition',
          image: '/images/news/gallery/post-4.jpg',
          description: 'A team of Schield Center students recently won the National Science Competition. The team developed a new method for...',
          link: '#'
        },
        {
          title: 'Schield Center Partners with Local NGOs to Improve Education in Rural Areas',
          image: '/images/news/gallery/post-5.jpg',
          description: 'Schield Center has partnered with local NGOs to improve access to education in rural areas. The school will be providing resources and training...',
          link: '#'
        },
        {
          title: 'Schield Center Launches New Athletics Program for Students',
          image: '/images/news/gallery/post-6.jpg',
          description: 'Schield Center is excited to announce the launch of its new athletics program for students. The program will offer a variety of sports and activities...',
          link: '#'
        }
      ],
      // A variable to store the currently selected news post
      selectedPost: null,
    };
  },
  methods: {
    // A method to show the selected news post in a modal
    showModal(post) {
      this.selectedPost = post;
      // Remove the "truncate-overflow" class from the post's description element
      this.$nextTick(() => {
        this.$refs.bio[0].classList.remove('truncate-overflow');
      });
    },
  },
  // The following code is commented out
  // mounted() {
  //   loadScript('https://www.paypalobjects.com/donate/sdk/donate-sdk.js').then(() => {
  //     if (typeof PayPal !== 'undefined') {
  //       PayPal.Donation.Button({
  //         env: 'production',
  //         hosted_button_id: 'WMBKQ9WVGWCXL',
  //         image: {
  //           src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
  //           alt: 'Donate with PayPal button',
  //           title: 'PayPal - The safer, easier way to pay online!',
  //         },
  //       }).render('#donate-button');
  //     }
  //   });
  // },
};
</script>



