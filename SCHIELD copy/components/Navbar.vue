<template>
  <header id="home" class="container">
    <nav id="Home" class="bg-gradient-to-r from-secondary to-accent flex items-center justify-between rounded border border-red-600 flex-wrap p-2 z-50 md:rounded-80">
      <!-- Logo and Site Name -->
      <div class="flex items-center flex-shrink-0 text-red-400">
        <img :src="logo" alt="Logo" class="h-8 w-8">
        <span class="font-bold text-lg ml-2">SCHIELD CENTRE</span>
      </div>
      <div class="flex items-center flex-wrap">
        <div class="text-lg text-green flex sm:hidden">
          <!-- Hamburger Menu -->
          <button class="flex items-center px-2 py-1 border rounded text-gray-500 border-gray-500 hover:text-red hover:border-secondary" @click="toggleMenu">
            <!-- Hamburger Icon -->
            <i class="fas fa-bars" :class="{ 'hidden': isMenuOpen }"></i>
            <!-- Close Icon -->
            <i class="fas fa-times" v-if="isMenuOpen" :class="{ 'hidden': !isMenuOpen }"></i>
          </button>
          <!-- Dropdown Menu -->
          <div :class="{ 'hidden': !isMenuOpen }" class="absolute top-full right-0 mt-2 bg-accent text-gray-500 text-lg font-bold shadow-md rounded-md">
            <template v-for="(link, index) in links" :key="index">
              <!-- Check if link has dropdown items -->
              <div v-if="link.dropdownItems">
                <!-- Main Dropdown Link -->
                <a class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out" @click="toggleDropdown(index)">
                  <i class="fas fa-chevron-down mr-1"></i>
                  {{ link.label }}
                </a>
                <!-- Dropdown Sub-Links -->
                <div v-if="link.isOpen" class="dropdown-sublinks">
                  <template v-for="(dropdownItem, dropdownIndex) in link.dropdownItems">
                    <a :href="dropdownItem.url" class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out">
                      <i class="fas fa-chevron-right mr-1"></i>
                      {{ dropdownItem.label }}
                    </a>
                  </template>
                </div>
              </div>
              <!-- Regular Links -->
              <a v-if="!link.dropdownItems" :href="link.url" class="block px-2 py-2 hover:text-green-500  rounded-md transition duration-300 ease-in-out">
                <span class="fa-icon-wrapper">
                  <i :class="link.icon"></i>
                </span>
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
              <a v-if="link.dropdownItems" class="inline-block text-gray-500 text-lg mr-4 font-bold hover:text-green-500 hover:bg-accent px-4 py-2 rounded-full" @click="toggleDropdown(index)">
                <i class="fas fa-chevron-down mr-1"></i>
                {{ link.label }}
              </a>
              <div v-if="link.dropdownItems && link.isOpen" class="dropdown absolute top-full left-0 mt-2 bg-secondary text-gray-500 text-lg font-bold shadow-md rounded-md" @click="closeDropdown(index)">
                <template v-for="(dropdownItem, dropdownIndex) in link.dropdownItems">
                  <a :href="dropdownItem.url" class="block px-4 py-2 hover:text-green-500 transition duration-300 ease-in-out">
                    <i class="fas fa-chevron-right mr-1"></i>
                    {{ dropdownItem.label }}
                  </a>
                </template>
              </div>
            </div>
            <!-- Regular Links -->
            <a v-if="!link.dropdownItems" :href="link.url" class="inline-block text-gray-500 text-lg mr-4 font-bold hover:text-green-500  px-2 py-1.5 rounded-md transition duration-300 ease-in-out">
              <span class="fa-icon-wrapper">
                <i :class="link.icon"></i>
              </span>
              {{ link.label }}
            </a>
          </template>
          <!-- Authentication Status -->
          <a class="block lg:inline-block text-black-500 hover:text-black mr-4 md:block text-primary text-center px-4 py-2 rounded-full mr-1 hover:text-green-500 hover:bg-accent">
            <!-- <AuthenticationStatus /> -->
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logoImage from '@/static/g-Logo.png';

export default defineComponent({
  data() {
    return {
      logo: logoImage, // The imported logo image
      isMenuOpen: false, // Flag to track the menu open/close state
      links: [
        { label: 'HOME', url: '/Home', icon: 'fas fa-home' }, // Link to the homepage
        { label: 'BLOG', url: '/News', icon: 'fas fa-newspaper' }, // Link to the blog section
        {
          label: 'SPONSOR',
          url: '#',
          isOpen: false, // Flag to track the dropdown open/close state
          dropdownItems: [
            { label: 'Support a child', url: '/Sponsor', icon: 'fas fa-hands-helping' }, // Dropdown link to support a child
            { label: 'Sponsor a program', url: '/Sponsor-program', icon: 'fas fa-donate' } // Dropdown link to sponsor a program
          ]
        },
        { label: 'TEAM', url: '/protected/OurStaff', icon: 'fas fa-users' }, // Link to the team page
        { label: 'GALLERY', url: '/Gallery', icon: 'fas fa-images' }, // Link to the gallery
        { label: 'FRIENDS of SCHIELD', url: '/protected/Friends', icon: 'fas fa-user-friends' } // Link to the friends section
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggles the menu open/close state
    },
    toggleDropdown(index) {
      this.links[index].isOpen = !this.links[index].isOpen; // Toggles the dropdown open/close state for the specified index
    },
    closeDropdown(index) {
      this.links[index].isOpen = false; // Closes the dropdown for the specified index
    }
  }
});
</script>
