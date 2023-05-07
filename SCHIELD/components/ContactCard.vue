<template>
  <section id="contact" class="container py-20">
  
    <!-- Navigation bar for the contact section -->
    <nav
      class="md:w-2/3 bg-gradient-to-r from-accent to-white rounded shadow-md mx-auto"
    >
      <nav
        class="flex justify-evenly bg-right bg-no-repeat bg-contain text-primary"
      >
        <div class="flex justify-between items-center w-full p-8 md:p-12">
          <div class="flex flex-column items-center h-full">
            <!-- Title for the contact section -->
            <div>
              <h2 class="text-xl font-bold font-bolder pb-8">Contact Us!</h2>

              <!-- Displaying the contact information -->
              <div
                v-for="info in contactInfo"
                :key="info.title"
                class="flex font-medium pb-4"
              >
                <i class="fas mr-4" :class="info.icon" /> {{ info.address }}
              </div>
            </div>
          </div>

          <!-- Icon for the contact section -->
          <div class="text-secondary">
            <i class="far fa-comments fa-10x hidden lg:inline" />
          </div>
        </div>
      </nav>
    </nav>

    <!-- Live chat button using Elfsight Widget -->
    <div class="elfsight-app-96263e89-f948-418d-97c0-2374ce49da17"></div>
  </section>
</template>

<script lang="ts">
export default {
  mounted() {
    // Load the script for the live chat button
    const script = document.createElement('script')
    script.src = 'https://static.elfsight.com/platform/platform.js'
    script.setAttribute('data-use-service-core', true)
    script.defer = true
    document.body.appendChild(script)
  },
  
  // Data for the contact information
  data() {
    return {
      contactInfo: [
        {
          title: 'Phone',
          icon: 'fa-phone',
          address: this.$config.schoolTelephone,
        },
        {
          title: 'E-mail',
          icon: 'fa-envelope',
          address: this.$config.schoolEmail,
        },
        {
          title: 'Address',
          icon: 'fa-map-marker',
          address: this.$config.schoolLocation,
        },
      ],
    }
  },
}
</script>
