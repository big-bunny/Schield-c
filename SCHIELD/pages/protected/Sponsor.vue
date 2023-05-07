<script lang="ts">
export default {
  props: {
    protectionType: String,
    href: String,
  },
   // Data property, returns an object
  data() {
    return {
      // Array of students objects
      students: [
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/static/images/gallery/student1.jpg',
        },
      
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        },
       
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        }, 
     
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        }, 
      
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        },
   
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        },
       
        {
          id: 2,
          name: 'John Doe',
          grade: 'Grade 6',
          bio: 'John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.',
          src: '/images/gallery/student1.jpg',
        },
      ],
      // Selected student is initially null
      selectedStudent: null,
    };
  },
  methods: {
    // Show modal method that takes a student object
    showModal(student) {
      // Set the selected student
      this.selectedStudent = student;
      // Use the nextTick method to ensure the DOM has updated before removing the class
      this.$nextTick(() => {
        this.$refs.bio[0].classList.remove('truncate-overflow');
      });
    },
  },
}
</script>

<template>
 
  <section id="child" class="container py-20 border-t  border-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 class="text-3xl text-center font-extrabold text-gray-900">SPONSOR CHILD</h1>
      <Donate class="mt-25 w-full"/>
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <!-- Display each student -->
        <div v-for="item in students" :key="item.id" class="bg-accent shadow-lg rounded-lg overflow-hidden">
          <!-- Display student image -->
          <img class="h-48 w-full object-cover" :src="item.src" :alt="student" />
          <div class="p-6">
            <!-- Display student name and grade -->
            <h2 class="text-xl font-semibold text-gray-900">{{ item.name }}</h2>
            <p class="mt-2 text-green-600">{{ item.grade }} </p>
            <!-- Display truncated student bio -->
            <p class="text-lg leading-relaxed truncate-overflow" v-html="item.bio" ref="bio"></p>
            <!-- Button to show full bio and donation options -->
            <a href="#" class="text-green-500" @click.prevent="showModal(item)">Read more</a>
          </div>
        </div>
      </div>
    </div><!-- Display selected student's full bio and donation options -->
<div v-if="selectedStudent" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
  <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden">
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-2">{{ selectedStudent.name }}</h2>
      <p class="text-green-600 mb-4">{{ selectedStudent.grade }}</p>
      <p class="text-base leading-relaxed text-lg" v-html="selectedStudent.bio"></p>
      <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg mt-8"
        @click="selectedStudent = null">Close</button>
      <!-- Display PayPal donation button -->
      <div id="donate-button-container">
        <div id="donate-button"></div>
      </div>
    </div>
  </div>
</div>

  </section>
</template>

<style scoped>
a {
  @apply text-green-600 underline hover:text-green-500;
}
</style>
