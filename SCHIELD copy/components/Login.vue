<template>
  <div class=" bg-accent rounded-full flex flex-col justify-center p-2">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <button
        v-if="loggedIn"
        @click="handleSignOut"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign out
      </button>
      <button
        v-else
        @click="handleSignIn"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign in
      </button>
    </div>
  </div>
</template>
<script>
// import { useSession } from 'vuex'; // Import useSession from the session library

export default {
  // Component code
  setup() {
    const { status, signIn, signOut } = useAuth(); // Use the useSession function
    
    const loggedIn = computed(() => status.value === 'authenticated');
    
    async function handleSignIn() {
      await signIn();
    }
     async function handleSignOut() {
      await signOut();
     }

    return {
      status,
      signIn,
      signOut,
      loggedIn,
      handleSignIn,
      handleSignOut
    };
  },
};
</script>
  