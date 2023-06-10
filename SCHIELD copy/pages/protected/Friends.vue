<template>
  <div class="max-w-md mt-40 mx-auto">
<Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        registerWith: '',
      },
    };
  },
  methods: {
    registerUser() {
      // Send the user data to the database
      console.log('Registering user:', this.user);
      // Perform your API call or database operation here
    },
  },
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>
