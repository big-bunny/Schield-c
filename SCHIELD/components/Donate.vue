<script>
import loadScript from 'load-script';
import VueCarousel from 'vue-carousel';

export default {

  props: {
    protectionType: String,
    href: String,
  },

  components: {
    VueCarousel,
  },

  mounted() {
    this.loadPaypalScript();
  },

  methods: {
    loadPaypalScript() {
      loadScript('https://www.paypalobjects.com/donate/sdk/donate-sdk.js', (err, script) => {
        if (err) {
          console.error(err);
          return;
        }
        PayPal.Donation.Button({
          env: 'sandbox',
          hosted_button_id: 'DUYQ2AGRGFRR2',
          image: {
            src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            alt: 'Donate with PayPal button',
            title: 'PayPal - The safer, easier way to pay online!',
          }
        }).render('#paypal-donate-button-container');
      });
    }
  },

  data() {
    return {
      currentCarousel: {},
      carousel: [
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
    let i = 0;
    let rollingInterval;

    const switchCarousel = () => {

      clearInterval(rollingInterval);


      i = (i + 1) % this.carousel.length;
      this.currentCarousel = this.carousel[i];


      this.startRollingTextInterval();
    };

    this.startRollingTextInterval = () => {
      const words = this.currentCarousel.text.split(' ');
      let text = '';
      let j = 0;

      for (j; j < words.length; j++) {
        text += words[j] + ' ';
      }

      this.currentCarousel.rollingText = text.trim();


      setTimeout(() => {
        switchCarousel();
      }, text.length * 150);

    };

    this.currentCarousel = this.carousel[i];
    this.startRollingTextInterval();
  }

}
</script>
<template>
  <section class="bg-green-400 mt-25 rounded-full">
    <div class="max-w-6xl mx-auto">
      <div class="flex items">
        <div class="w-3/12 h-full justify-start flex">
          <div class="bg-red-400 rounded-full px-5 mt-0 w-3/3 h-full flex items-center">
            <div class="text-lg font-bold text-left">
              {{ currentCarousel.title }}
            </div>
          </div>
        </div>

        <div class="w-7/12 flex justify-center items-center">
          <div class="text-xl text-black mt-0 font-bold leading-relaxed sliding-text pl-16">
            <marquee style="animation: slide 407s linear infinite; animation-fill-mode: forwards;">
              {{ currentCarousel.text || 'MISSION & VISION' }}
            </marquee>
          </div>
        </div>

        <div class="w-2/12 flex justify-end items-end mr-0">
          <div id="paypal-donate-button-container"></div>
        </div>
      </div>
    </div>
  </section>
</template>

