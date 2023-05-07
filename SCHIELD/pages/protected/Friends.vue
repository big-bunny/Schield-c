<template>
<section class="m-20" >
  <div id="friends" class=" container mt-6">
    <h2 class="text-xl font-bold mb-4">Friends of Shield Donors</h2>
    <table class="min-w-full bg-gray-900 rounded-lg overflow-hidden">
      <thead class="bg-gray-800 uppercase text-gray-500 text-sm">
        <tr>
          <th class="py-3 px-6 text-left">Name of Donor</th>
          <th class="py-3 px-6 text-left">Profile Card</th>
          <th class="py-3 px-6 text-left">Donations</th>
          <th class="py-3 px-6 text-left">Area of Residence</th>
        </tr>
      </thead>
      <tbody class="text-gray-400 text-sm font-light">
        <tr v-for="(donor, index) in donors" :key="index">
          <td class="py-4 px-6">{{ donor.name }}</td>
          <td class="py-4 px-6"><img :src="donor.profileCard" alt="Profile Card"></td>
          <td class="py-4 px-6">$ {{ donor.donations }}</td>
          <td class="py-4 px-6">{{ donor.areaOfResidence }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </section>
</template>



<script lang="ts" >


export default {
   props: {
    protectionType: String,
    href: String,
  },

  data() {
    return {
      donors: [
        {
          name: 'John Doe',
          profileCard: 'https://via.placeholder.com/150',
          donations: 500,
          areaOfResidence: 'New York, NY',
        },
        {
          name: 'Jane Smith',
          profileCard: 'https://via.placeholder.com/150',
          donations: 1000,
          areaOfResidence: 'Los Angeles, CA',
        },
        {
          name: 'Bob Johnson',
          profileCard: 'https://via.placeholder.com/150',
          donations: 250,
          areaOfResidence: 'Chicago, IL',
        },
      ],
    };
  },
};
</script>
