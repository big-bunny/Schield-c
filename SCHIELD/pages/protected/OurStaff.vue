<template>
  <section id="staff" class="border-t  border-secondary">
    <div class="container py-20">
      <h2 class="text-xl text-center font-semibold py-20">MEET OUR STAFF</h2>

      <!-- This div contains the staff members -->
      <div class="md:flex justify-center items-center p-8">
        <!-- This loop creates a div for each staff member -->
        <div
          v-for="item in staff"
          :key="item.id"
          class="flex-1 font-semibold text-primary text-center p-4 md:pb-0"
          :class="'order-' + item.id"
        >
          <!-- This is the staff member's image -->
          <img
            :src="item.src"
            alt="staff"
            :width="item.id == 2 ? '320' : '250'"
            class="rounded-full border border-primary mx-auto hover:shadow-lg"
          />
          <!-- This is the staff member's name -->
          <div class="pt-4 text-lg">{{ item.name }}</div>
          <!-- This is the staff member's title -->
          <div class="pt-2 text-black">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import staff1 from '@/static/images/staff/staff1.jpg';
import staff2 from '@/static/images/staff/staff2.jpg';
import staff4 from '@/static/images/staff/staff4.jpg';

export default {
  data() {
    return {
      // This is an array of staff members, with their id, title, name, and image source
      staff: [
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
      ],
    }
  },
}
</script>
