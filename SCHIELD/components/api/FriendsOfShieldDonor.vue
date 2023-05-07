<script lang="ts">
export default {
  props: {
    donorName: String,
    profileCard: String,
    donations: Number,
    areaOfResidence: String,
  },
};
</script>

<template>
  <tr class="bg-gray-800 z-10 border-gray-700">
    <td class="py-4 px-6 font-medium whitespace-nowrap text-white">
      {{ donorName }}
    </td>
    <td class="py-4 px-6">
      <img :src="profileCard" alt="Profile Card" />
    </td>
    <td class="py-4 px-6">
      {{ donations }}
    </td>
    <td class="py-4 px-6 uppercase">
      {{ areaOfResidence }}
    </td>
  </tr>
</template>
