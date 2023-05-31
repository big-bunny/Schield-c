<template>
  <section id="news" class="border-t border-secondary container py-20">
    <div class="max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-3xl justify-text-center font-extrabold bg-gradient-to-r from-accent to-secondary text-gray-900 inline-block rounded-full px-6 py-2">NEWS</h1>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="item in posts" :key="item.id" class="bg-accent shadow-lg rounded-lg overflow-hidden">
          <!-- Display news item image -->
          <div class="relative">
            <img class="h-48 w-full object-cover rounded-t-lg" :src="item.image" :alt="item.title" />
            <div class="absolute top-0 right-0 rounded-tl-lg bg-red-500 px-2 py-1">
              <span class="text-green text-sm">New</span>
            </div>
          </div>
          <div class="p-6">
            <!-- Display news item title -->
            <h2 class="text-xl font-semibold text-gray-900">{{ item.title }}</h2>
            <!-- Display news item link -->
            <p class="mt-2 text-green-600">{{ item.link }}</p>
            <!-- Display news item description -->
            <p class="text-lg leading-relaxed truncate-overflow" v-html="truncateDescription(item.description, 6)"></p>
            <!-- Open a modal to show the full news item -->
            <a href="#" class="text-green-500" @click.prevent="showModal(item)">Read more</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal to display the selected news item -->
    <div v-if="selectedPost" class="fixed inset-0 bg-green-700 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden">
        <div class="p-6">
          <!-- Display selected news item title -->
          <h2 class="text-2xl font-bold mb-2">{{ selectedPost.title }}</h2>
          <!-- Display selected news item image -->
          <img class="h-48 w-full object-cover mb-4" :src="selectedPost.image" :alt="selectedPost.title" />
          <!-- Display selected news item description -->
          <p class="text-base text-lg leading-relaxed" v-html="selectedPost.description"></p>
          <!-- Close the modal -->
          <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg mt-8" @click="selectedPost = null">Close</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref, nextTick } from 'vue';
import post1 from '@/static/images/news/post-5.jpg';
import post2 from '@/static/images/news/post-6.jpg';
import post3 from '@/static/images/news/post-6.jpg';
import post4 from '@/static/images/news/post-5.jpg';
import post6 from '@/static/images/news/post-5.jpg';
import post5 from '@/static/images/news/post-6.jpg';

definePageMeta({ auth: false });
export default {
  props: {
   
    href: String,
  },
   setup() {
    const posts =[
      {
        title: 'Schield Center Celebrates 10 Years of Excellence in Education',
        image: post1,
        description: 'Schield Center has been providing quality education to students in Kajiado for the past decade. To celebrate this milestone, the school hosted a series of events...',
        link: '#'
      },
      {
        title: 'Schield Center Receives Award for Best Performing School in Kajiado',
        image: post2,
        description: 'Schield Center was recently recognized as the best performing school in Kajiado County. The award was presented by the County Governor...',
        link: '#'
      },
      {
        title: 'Schield Center Launches New STEM Program for Students',
        image: post3,
        description: 'Schield Center is proud to announce the launch of its new STEM program for students. The program will provide students with hands-on...',
        link: '#'
      },
      {
        title: 'Schield Center Students Win National Science Competition',
        image: post4,
        description: 'A team of Schield Center students recently won the National Science Competition. The team developed a new method for...',
        link: '#'
      },
      {
        title: 'Schield Center Partners with Local NGOs to Improve Education in Rural Areas',
        image: post5,
        description: 'Schield Center has partnered with local NGOs to improve access to education in rural areas. The school will be providing resources and training...',
        link: '#'
      },
      {
        title: 'Schield Center Launches New Athletics Program for Students',
        image: post6,
        description: 'Schield Center is excited to announce the launch of its new athletics program for students. The program will offer a variety of sports and activities...',
        link: '#'
      }
    ];
    const selectedPost = ref(null);

    const showModal = (post) => {
      selectedPost.value = post;
      // Remove the "truncate-overflow" class from the post's description element
      nextTick(() => {
        descriptionRef.value.classList.remove('truncate-overflow');
      });
    };

    const truncateDescription = (description, wordLimit) => {
      const words = description.split(' ');
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
      }
      return description;
    };

    return {
      posts,
      selectedPost,
      showModal,
      truncateDescription,
    };
  },
};
</script>
