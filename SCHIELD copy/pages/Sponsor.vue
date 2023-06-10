<template>
  <section id="child" class="container py-20 border-t border-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 class="text-3xl font-extrabold bg-gradient-to-r from-accent to-secondary text-gray-900 inline-block rounded-full px-6 py-2">
        SPONSOR CHILD
      </h1>
      <Donate class="mt-25 w-full" />
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <!-- Display each student -->
        <div v-for="item in students" :key="item.id" class="bg-accent shadow-lg rounded-lg overflow-hidden">
          <!-- Display student image -->
          <img class="h-48 w-full object-cover" :src="item.src" :alt="item.name" />
          <div class="p-6">
            <!-- Display student name and grade -->
            <h2 class="text-xl font-semibold text-gray-900">{{ item.name }}</h2>
            <p class="mt-2 text-green-600">{{ item.grade }}</p>
            <!-- Display truncated student bio -->
            <p class="text-lg leading-relaxed truncate-overflow" v-html="item.bio" ref="bio"></p>
            <!-- Button to show full bio and donation options -->
            <a href="#" class="text-green-500 inline-block mt-4 underline" @click.prevent="showModal(item)">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Display selected student's full bio and donation options -->
    <div v-if="selectedStudent" class="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white max-w-md mx-auto rounded-lg overflow-hidden">
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2">{{ selectedStudent.name }}</h2>
          <p class="text-green-600 mb-4">{{ selectedStudent.grade }}</p>
          <p class="text-base leading-relaxed text-lg" v-html="selectedStudent.bio"></p>
          <div class="flex justify-end mt-8">
            <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg" @click="selectedStudent = null">
              Close
            </button>
            <!-- Display PayPal donation button -->
            <a :href="links.url" class="inline-flex items-center px-4 py-2 ml-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
              <span class="mr-2">
                <i :class="links.icon"></i>
              </span>
              {{ links.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import student1 from "@/static/images/students/student1.jpg";
import student2 from "@/static/images/students/student2.jpg";
import student3 from "@/static/images/students/student3.jpg";
import student4 from "@/static/images/students/student4.jpg";
import student5 from "@/static/images/students/student5.jpg";

definePageMeta({ auth: false });
export default {
  props: {
    href: String,
  },
  // Data property, returns an object
  data() {
    return {
      links: {
        label: "Donate",
        url: "/protected/Donate",
        icon: "fas fa-home",
      },
      students: [
        {
          id: 1,
          name: "Jane Smith",
          grade: "Grade 7",
          bio: "Jane is a talented artist who loves to express herself through her work. She hopes to one day pursue a career in art and design.",
          src: student1,
        },
        {
          id: 2,
          name: "John Doe",
          grade: "Grade 6",
          bio: "John is a bright and curious student who loves science and math. He dreams of becoming an engineer one day.",
          src: student2,
        },
        {
          id: 3,
          name: "Sarah Johnson",
          grade: "Grade 8",
          bio: "Sarah is an accomplished musician who plays several instruments. She hopes to one day become a professional musician.",
          src: student3,
        },
        {
          id: 4,
          name: "Michael Brown",
          grade: "Grade 9",
          bio: "Michael is a talented athlete who excels in multiple sports. He dreams of one day competing at the national level.",
          src: student4,
        },
        {
          id: 5,
          name: "Emily Davis",
          grade: "Grade 7",
          bio: "Emily is a passionate reader who loves to explore new worlds through books. She hopes to one day become a writer herself.",
          src: student5,
        },
      ],
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
        this.$refs.bio[0].classList.remove("truncate-overflow");
      });
    },
  },
};
</script>
