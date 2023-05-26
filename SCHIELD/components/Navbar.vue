<template>
  <header id="home" class="container">
    <nav id="Home"
      class="bg-gradient-to-r from-secondary to-accent flex items-center justify-between rounded border border-red-600 flex-wrap p-2 z-50 md:rounded-80">
      <!-- Logo and Site Name -->
      <div class="flex items-center flex-shrink-0 text-white">
        <img :src="$config.schoolLogo" alt="Logo" class="h-8 w-8">
        <span class="font-semibold text-lg ml-2">SCHIELD CENTER</span>
      </div>
      <div class="flex items-center flex-wrap">
        <div class="text-lg text-green flex sm:hidden">
          <!-- Hamburger Menu -->
          <button
            class="flex items-center px-2 py-1 border rounded text-gray-500 border-gray-500 hover:text-red hover:border-secondary"
            @click="toggleMenu">
            <!-- Hamburger Icon -->
            <svg class="fill-current h-4 w-4" :class="isMenuOpen ? 'hidden' : ''" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <!-- Close Icon -->
            <svg class="fill-current h-4 w-4" :class="isMenuOpen ? '' : 'hidden'" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Close</title>
              <path
                d="M3.707 3.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293a1 1 0 0 0 1.414-1.414L11.414 10l6.293-6.293a1 1 0 0 0-1.414-1.414L10 8.586 3.707 2.293z" />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div :class="{ 'hidden': !isMenuOpen }"
            class="absolute top-full right-0 mt-2 bg-accent text-gray-500 text-lg font-bold shadow-md rounded-md">
            <template v-for="(link, index) in links" :key="index">
              <!-- Check if link has dropdown items -->
              <div v-if="link.dropdownItems">
                <!-- Main Dropdown Link -->
                <a class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out"
                  @click="toggleDropdown(index)">
                  {{ link.label }}
                </a>
                <!-- Dropdown Sub-Links -->
                <div v-if="link.isOpen" class="dropdown-sublinks">
                  <template v-for="(dropdownItem, dropdownIndex) in link.dropdownItems">
                    <a :href="dropdownItem.url"
                      class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out">
                      {{ dropdownItem.label }}
                    </a>
                  </template>
                </div>
              </div>
              <!-- Regular Links -->
              <a v-else :href="link.url"
                class="block px-2 py-2 hover:text-green-500 hover:bg-accent rounded-md transition duration-300 ease-in-out">
                {{ link.label }}
              </a>
            </template>
          </div>
        </div>
        <div class="hidden text-lg text-green sm:flex flex-wrap">
          <!-- Links and Dropdowns -->
          <template v-for="(link, index) in links" :key="index">
            <div class="relative">
              <!-- Dropdown Links -->
              <a v-if="link.dropdownItems"
                class="inline-block text-gray-500 text-lg mr-4 font-bold hover:text-green-500 hover:bg-accent px-4 py-2 rounded-full"
                @click="toggleDropdown(index)">
                {{ link.label }}
              </a>
              <div v-if="link.dropdownItems && link.isOpen"
                class="dropdown absolute top-full left-0 mt-2 bg-secondary text-gray-500 text-lg font-bold shadow-md rounded-md"
                @click="closeDropdown(index)">
                <template v-for="(dropdownItem, dropdownIndex) in link.dropdownItems">
                  <a :href="dropdownItem.url"
                    class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out">
                    {{ dropdownItem.label }}
                  </a>
                </template>
              </div>
            </div>
            <!-- Regular Links -->
            <a v-if="!link.dropdownItems" :href="link.url"
              class="inline-block text-gray-500 text-lg mr-4 font-bold hover:text-green-500 hover:bg-accent px-2 py-1.5 rounded-md transition duration-300 ease-in-out">
              {{ link.label }}
            </a>
          </template>
          <!-- Authentication Status -->
          <a
            class="block lg:inline-block text-black-500 hover:text-black mr-4 md:block text-primary text-center px-4 py-2 rounded-full mr-1 hover:text-green-500 hover:bg-accent">
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
      links: [
        { label: 'HOME', url: '/' },
        { label: 'BLOG', url: '/News' },
        {
          label: 'SPONSOR',
          url: '#',
          isOpen: false,
          dropdownItems: [
            { label: 'Support a child', url: '/protected/Sponsor' },
            { label: 'Sponsor a program', url: '/protected/Sponsor-program' }
          ]
        },
        { label: 'TEAM', url: '/protected/OurStaff' },
        { label: 'GALLERY', url: '/Gallery' },
        { label: 'FRIENDS', url: '/protected/Friends' }
      ]
    };
  },
  mounted() {
    this.updateHalfScreen();
    window.addEventListener('resize', this.updateHalfScreen);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateHalfScreen);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown(index: number) {
      this.links[index].isOpen = !this.links[index].isOpen;
    },
    closeDropdown(index: number) {
      this.links[index].isOpen = false;
    },
    delayCloseDropdown(index: number) {
      setTimeout(() => {
        this.closeDropdown(index);
      }, 300); // Adjust the delay as needed (in milliseconds)
    },
    updateHalfScreen() {
      const width = window.innerWidth;
      const halfScreenWidth = width / 2;
      if (width <= 768) {
        this.isMenuOpen = false;
      } else {
        this.isMenuOpen = halfScreenWidth < 768;
      }
    }
  }
});
</script>
