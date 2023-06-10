<template>
  <footer> <!-- footer container -->
    <nav class="text-gray-800 py-12"> <!-- navigation container -->
      <div class="container flex flex-wrap justify-around item-center"> <!-- flex container -->
        <contact-card />
        <nav class="min-w-full md:min-w-0 md:max-w-1/4 text-primary order-1 md:order-2 pb-8 md:pb-0"> <!-- sub-navigation container -->
          <h4 class="text-center text-lg tracking-wide font-bold pb-4"> <!-- heading -->
            Quick Links
          </h4>
          <!-- quick links with loop using v-for -->
          <nuxt-link v-for="link in quickLinks" :key="link.slug" :to="link.slug"
            class="block px-6 py-2 my-2 font-medium bg-accent rounded-full">
            <i class="fas mr-4" :class="link.icon" />
            {{ link.title }}
          </nuxt-link>
        </nav>

        <nav class="order-2 md:order-1 pb-8 md:pb-0"> <!-- logo container -->
          <img :src="logo" alt="logo" class="mx-auto" width="240" />
        </nav>

        <nav class="order-3 md:order-2 pb-8 md:pb-0"> <!-- logo container -->
          <img :src="logo" alt="logo" class="mx-auto" width="240" />
        </nav>
      </div>
    </nav>

    <nav class="container text-center text-gray-800 py-12"> <!-- navigation container -->
      <div class="text-xl text-primary pb-4"> <!-- social links container -->
        <!-- social links with loop using v-for -->
        <a v-for="link in socialLinks" :key="link.title" :href="link.href" :title="link.title" class="p-2 mx-2 rounded">
          <i class="fab" :class="link.icon" />
        </a>
      </div>

      <div class=""> <!-- school name and powered by container -->
        &copy; {{ $config.schoolName }}, 2021. Powered by
        <a href="https://g-hub.com" class="font-bold text-primary">G-Hub</a>
      </div>
    </nav>
  </footer>
</template>

<script lang="ts">
import logoImage from '@/static/schield-images/logos/g-Logo.png';
export default {
  data() {
   return {
     logo: logoImage,
    
      // Define an array of quick links with their titles, slugs, and icons
      quickLinks: [
        { title: 'Home', slug: '/#home', icon: 'fa-home' },
        { title: 'About Us', slug: '/#about', icon: 'fa-info-circle' },
        { title: 'Our Staff', slug: '/#staff', icon: 'fa-users' },
        { title: 'Gallery', slug: '/#gallery', icon: 'fa-photo-video' },
      ],
      // Define an array of social links with their titles, icons, and hrefs
      socialLinks: [
        {
          title: 'Facebook',
          icon: 'fa-facebook',
          href: this.$config.schoolFacebook,
        },
        {
          title: 'Twitter',
          icon: 'fa-twitter',
          href: this.$config.schoolTwitter,
        },
        {
          title: 'Instagram',
          icon: 'fa-instagram',
          href: this.$config.schoolInstagram,
        },
        {
          title: 'Youtube',
          icon: 'fa-youtube',
          href: this.$config.schoolYoutube,
        },
      ],
    }
  },
}
</script>
