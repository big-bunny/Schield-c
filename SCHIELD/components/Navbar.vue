<template>
  <header id="home" class="container py-0.25">
    <nav id="Home"
      class="flex items-center justify-center rounded border rounded-80 border-red-600 flex-wrap bg-gray-800 p-2 z-50">
      <div class="flex items-center flex-shrink-0 text-white ">
        <img :src="$config.schoolLogo" alt="Logo">
        <span class="font-semibold text-lg tracking-tight ml-2">SCHIELD CENTER</span>
      </div>
      <div class="block lg:hidden ml-auto">
        <button
          class="flex items-center px-2 py-1 border rounded text-gray-500 border-gray-500 hover:text-white hover:border-white"
          @click="isMenuOpen = !isMenuOpen">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path :class="[isMenuOpen ? 'hidden' : '']" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            <path :class="[isMenuOpen ? '' : 'hidden']" d="M0 3h20v2H0V3zm0 8h20v2H0v-2zm0 8h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="[isMenuOpen ? 'block' : 'hidden', 'w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-0']">
        <div class="text-lg text-green lg:flex-grow">
          <a href="/"
            class="block lg:inline-block text-xl mr-4 font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
            HOME
          </a>
          <a href="/News" class="block lg:inline-block mr-4 font-bold hover:bg-green-500 px-6 py-2 rounded-full">
            BLOG
          </a>
          <!-- dropdown -->
          <div class="inline-block relative mt-4 lg:mt-0 block lg:inline-block hover:bg-accent rounded mr-4">
            <a href="#"
              class="block lg:inline-block text-xl mr-4 text-green font-bold hover:bg-accent px-6 py-2 rounded-full">
              SPONSOR
            </a>
            <div class="dropdown hidden sm: dropdown hover:block absolute bg-red-400 text-black py-2 rounded-lg z-10">
              <a href="/protected/Sponsor"
                class="block text-green font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
                Support a child
              </a>
              <a href="/protected/Sponsor-program"
                class="block text-green font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
                Sponsor a program
              </a>
            </div>
          </div>


          <a href="/protected/OurStaff"
            class="block lg:inline-block text-xl mr-4 text-green font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
            TEAM
          </a>
          <a href="/Gallery"
            class="block lg:inline-block text-xl mr-4 text-green font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
            GALLERY
          </a>
          <a href="/protected/Friends"
            class="block lg:inline-block text-xl mr-4 text-green font-bold hover:text-white hover:bg-green-500 px-6 py-2 rounded-full">
            FRIENDS
          </a>


          <a
            class="block lg:inline-block text-black-500 hover:text-black mr-4 md: block  text-primary text-center px-6 py-2 rounded-full mr-2 hover:text-white hover:bg-green-500">
            <AuthenticationStatus />
          </a>

        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      isMenuOpen: false,
      isOPen: false,
      someOtherProperty: 'someValue'
    };
  },
  computed: {
    isOpen(): boolean {
      return this.someOtherProperty === 'someValue'
    }
  },
  watch: {
    isMenuOpen(value: boolean) {
      if (!value) {
        this.$nextTick(() => {
          // Reset the computed property after the next tick
          // to avoid the warning message
          this.$forceUpdate();
        });
      }
    }
  },
}
);

</script>

<style scoped>
.inline-block:hover .dropdown {
  display: block;
}

.dropdown {
  display: none;
}

.dropdown>.dropdown>a:hover {
  background-color: #15d468;
}

@media (max-width: 767px) {
  .navbar-menu {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 50;
    width: 100%;
    background-color: #1f2937;
    padding: 1rem;
  }

  .navbar-menu a {
    display: block;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    text-align: center;
    color: #f3f4f6;
    border-bottom: 1px solid #4b5563;
  }

  .navbar-menu a:hover {
    background-color: #15d468;
  }

  .inline-block:hover .dropdown {
    display: block;
  }

  .dropdown {
    position: static;
    display: none;
    width: 100%;
  }

  .dropdown a {
    display: block;
  }

  .sm\\:hidden {
    display: block !important;
  }

  .dropdown a:hover {
    background-color: #4b5563;
  }
}</style>
