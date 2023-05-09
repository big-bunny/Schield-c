<template>
  <section id="video" class="container border-t border-secondary mt-28  md:py-12 bg-green-500">
    <h2 class="text-3xl text-center font-semibold">VIDEOS | GALLERY</h2>
    <div class="flex flex-col md:flex-row py-4">
      <div class="video-responsive md:w-3/5">
        <iframe :src="getPlaylistUrl()" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="md:w-2/5 md:pl-8">
        <div class="slideshow-container">
          <div v-for="(photo, index) in photos" :key="index" class="mySlides">
            <img :src="photo" class="rounded shadow mx-auto border-2 border-red-500 slideshow-image" @click="changePhoto(index)" />
          </div>
          <a class="prev" @click="plusSlides(-1)">&#10094;</a>
          <a class="next" @click="plusSlides(1)">&#10095;</a>
        </div>
        <div class="flex justify-center py-4">
          <button v-for="(photo, index) in photos" :key="index" class="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50" @click="changePhoto(index)" :class="{'bg-gray-200': currentPhoto === index}">
            <img :src="photo" class="rounded-full" style="max-width: 32px;" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// const require = __webpack_require__;

export default {
  data() {
    return {
      videoBaseUrl: 'https://www.youtube.com/embed/',
      playlistId: 'PLfeLRAbgkxUgn9k47zEg7qYUBy-VCu1vJ',
      currentPhoto: 0,
      photos: [],
      slideIndex: 1,
    };
  },
  created() {
    this.loadImages();
  },
  methods: {
    getPlaylistUrl(): string {
      return `${this.videoBaseUrl}videoseries?list=${this.playlistId}`;
    },
    importAll(r) {
      return r.keys().map(r);
    },
async loadImages() {
  console.log('Loading images...');
  const images = await this.importAll(require.context('@/static/images/gallery', false, /\.(png|jpe?g|svg)$/));
  this.photos = images;
},


    changePhoto(index) {
      this.currentPhoto = index;
      this.slideIndex = index + 1;
    },
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    showSlides(n) {
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
  },
};
</script>
<style>
  .video-responsive {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  .video-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
