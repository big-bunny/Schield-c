

<script lang="ts">
import staff1 from '@/static/images/staff/staff1.jpg';
import staff2 from '@/static/images/staff/staff2.jpg';
import staff4 from '@/static/images/staff/staff4.jpg';
definePageMeta({ auth: false });
export default {
  props: {
   
    href: String,
  },
  
data() {
    
      // This is an array of staff members, with their id, title, name, and image source
      const staff = [
        {
          id: 2,
          title: 'HEADTEACHER',
          name: 'Mr. Felix',
          src: staff1,
        },
        {
          id: 1,
          title: 'Vice Principal (Academics)',
          name: 'Mrs Omolo',
          src: staff4,
        },
        {
          id: 3,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 4,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 5,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 6,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 7,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 8,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 9,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 10,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
          {
          id: 11,
          title: 'Vice Principal (Administration)',
          name: 'Mrs Okojie',
          src: staff2,
        },
      ];
      return{
 staff,
 selectedStaff: null,
      };
    },
    methods: {
      showModal(staff) {
        this.selectedStaff = staff;
        this.$nextTick(() => {
          this.$refs.title[0].classList.remove('truncate-ovrflow')
        })
      }
    }
  };
</script>
<template>
  <section id="child" class="container py-20 border-t border-secondary">
    <div class="mx-auto px-4 text-center sm:px-6 lg:px-8 py-16">
      <h1 class="text-3xl justify-text-center font-extrabold  text-gray-900 inline-block rounded-full px-6 py-2 bg-gradient-to-r from-accent to-secondary">OUR TEAM</h1>
      <!-- <Donate class="mt-25 w-full"/> -->
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <!-- Display each staff member -->
        <div v-for="item in staff" :key="item.id" class="bg-accent shadow-lg rounded-lg overflow-hidden">
          <!-- Display staff member image -->
          <img class="h-48 w-full object-cover" :src="item.src" :alt="staff" />
          <div class="p-6">
            <!-- Display staff member name and title -->
            <h2 class="text-xl font-semibold text-gray-900">{{ item.name }}</h2>
            <p class="mt-2 text-green-600">{{ item.title }} </p>
            <!-- Display truncated staff member bio -->
            <p class="text-lg leading-relaxed truncate-overflow" v-html="item.bio" ref="bio"></p>
            <!-- Button to show full bio and donation options -->
            <a href="#" class="text-green-500" @click.prevent="showModal(item)">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Display selected staff member's full bio and donation options -->
    <div v-if="selectedStaff" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2">{{ selectedStaff.name }}</h2>
          <p class="text-green-600 mb-4">{{ selectedStaff.image }}</p>
          <p class="text-base leading-relaxed text-lg" v-html="selectedStaff.title"></p>
          <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg mt-8" @click="selectedStaff = null">Close</button>
          <!-- Display PayPal donation button -->
          <div id="donate-button-container">
            <div id="donate-button"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
