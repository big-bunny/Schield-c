<script>
import loadScript from 'load-script'; // Importing the 'load-script' library for dynamically loading scripts
import VueCarousel from 'vue-carousel'; // Importing the 'vue-carousel' component

export default {

  props: {
    protectionType: String, // Prop to receive the protection type value
    href: String, // Prop to receive the URL value
  },

  components: {
    VueCarousel, // Registering the 'vue-carousel' component
  },

  mounted() {
    this.loadPaypalScript(); // Calling the 'loadPaypalScript' method when the component is mounted
  },

  methods: {
    loadPaypalScript() {
      loadScript('https://www.paypalobjects.com/donate/sdk/donate-sdk.js', (err, script) => {
        // Loading the PayPal donate SDK script dynamically
        if (err) {
          console.error(err); // Logging an error if the script fails to load
          return;
        }
        PayPal.Donation.Button({
          // Initializing the PayPal Donate Button
          env: 'sandbox', // Setting the environment to sandbox for testing purposes
          hosted_button_id: 'DUYQ2AGRGFRR2', // Setting the hosted button ID
          image: {
            src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif', // Setting the image source for the button
            alt: 'Donate with PayPal button', // Setting the alt text for the button image
            title: 'PayPal - The safer, easier way to pay online!', // Setting the title for the button image
          }
        }).render('#paypal-donate-button-container'); // Rendering the PayPal Donate Button inside the specified container
      });
    }
  },

  data() {
    return {
      currentCarousel: {}, // Initializing an empty object for the current carousel item
      carousel: [
        // An array of carousel items with titles and texts
        {
          title: 'MISSION STATEMENT',
          text:
            'Our mission is to provide access to quality education to children in Kajiado, Kenya, with the aim of empowering them to break the cycle of poverty and improve their lives and those of their families. We strive to create a learning environment that is supportive, inclusive, and empowering, valuing diversity and embracing the unique cultural heritage of our community.',
        },
        {
          title: 'VISION STATEMENT',
          text:
            'Our vision is a world where every child has access to quality education and the opportunity to reach their full potential. We believe that education is a fundamental human right and that it is essential for creating a more just and equitable society. At our center, we believe in fostering a culture of curiosity, creativity, and critical thinking, while also imparting life skills and values such as hard work, honesty, and respect for diversity. Our vision is to inspire and empower the next generation of global citizens who will make a positive impact on the world.',
        },
      ],
    }
  },
  created() {
    let i = 0; // Initializing a variable to keep track of the current carousel index
    let rollingInterval; // Initializing a variable for the rolling interval

    const switchCarousel = () => {
      // Function to switch the carousel item
      clearInterval(rollingInterval); // Clearing the rolling interval

      i = (i + 1) % this.carousel.length; // Updating the index to the next carousel item
      this.currentCarousel = this.carousel[i]; // Updating the current carousel item

      this.startRollingTextInterval(); // Starting the rolling text interval
    };

    this.startRollingTextInterval = () => {
      // Function to start the rolling text interval
      const words = this.currentCarousel.text.split(' '); // Splitting the text into words
      let text = '';
      let j = 0;

      for (j; j < words.length; j++) {
        text += words[j] + ' ';
      }

      this.currentCarousel.rollingText = text.trim(); // Updating the current carousel's rolling text

      setTimeout(() => {
        switchCarousel(); // Switching to the next carousel item after a certain duration
      }, text.length * 150);
    };

    this.currentCarousel = this.carousel[i]; // Setting the initial carousel item
    this.startRollingTextInterval(); // Starting the rolling text interval for the initial carousel item
  }

}
</script>

<template>
  <section class="bg-green-400 mt-40 rounded-full">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between">
        <div class="w-3/12">
          <!-- Block for the left section of the header -->
          <div class="bg-accent rounded-full py-3 px-6">
            <div class="text-lg font-bold text-green">
              {{ currentCarousel.title }}
            </div>
          </div>
        </div>

        <div class="w-7/12">
          <!-- Block for the middle section of the header -->
          <div class="text-xl text-black mt-3 font-bold leading-relaxed overflow-hidden">
            <marquee
              class="sliding-text"
              style="animation: slide 40s linear infinite; animation-fill-mode: forwards;"
            >
              {{ currentCarousel.text || 'MISSION & VISION' }}
            </marquee>
          </div>
        </div>

        <div class="w-2/12">
          <!-- Block for the right section of the header -->
          <div class="flex bg-accent rounded-full justify-end items-center">
            <div id="paypal-donate-button-container"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

