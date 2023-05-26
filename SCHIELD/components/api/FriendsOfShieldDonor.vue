<script lang="ts">
export default {
  props: {
    donorName: String, // Define a prop 'donorName' of type String to receive the name of the donor
    profileCard: String, // Define a prop 'profileCard' of type String to receive the profile card image URL
    donations: Number, // Define a prop 'donations' of type Number to receive the number of donations
    areaOfResidence: String, // Define a prop 'areaOfResidence' of type String to receive the area of residence of the donor
  },
};
</script>

<template>
  <tr class="bg-gray-800 z-10 border-gray-700">
    <td class="py-4 px-6 font-medium whitespace-nowrap text-white">
      {{ donorName }} <!-- Display the donor's name using the 'donorName' prop -->
    </td>
    <td class="py-4 px-6">
      <img :src="profileCard" alt="Profile Card" /> <!-- Display the profile card image using the 'profileCard' prop -->
    </td>
    <td class="py-4 px-6">
      {{ donations }} <!-- Display the number of donations using the 'donations' prop -->
    </td>
    <td class="py-4 px-6 uppercase">
      {{ areaOfResidence }} <!-- Display the area of residence using the 'areaOfResidence' prop -->
    </td>
  </tr>
</template>
