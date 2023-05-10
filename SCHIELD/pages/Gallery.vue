<template>
  <!-- Section for photo gallery -->
  <section id="gallery" class="container border-t border-secondary py-38 mt-30 md:py-12 bg-green-500">
    <!-- Title of the section -->
    <h2 class="text-3xl text-center font-semibold py-2">PHOTO GALLERY</h2>
    <!-- Navigation bar for photo gallery -->
    <nav class="py-4">
      <!-- Displaying the current photo -->
      <div>
        <img
          :src="photos[currentPhoto]"
          class="rounded shadow mx-auto border-2 border-red-500"
          style="max-height: 420px"
        />
      </div>

      <!-- Thumbnail images for navigation -->
      <div class="flex flex-wrap justify-center p-2">
        <img
          v-for="(photo, i) in photos"
          :key="photo"
          :src="photo"
          class="rounded-full hover:shadow-md cursor-pointer m-1 border-2 border-red-500"
          style="max-width: 64px"
          @click="changePhoto(i)"
        />
      </div>
    </nav>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentPhoto: 0,
      photos: [],
    };
  },
 async created() {
  const images = await (require as any).context('@/static/images/gallery', true, /\.(png|jpe?g|svg)$/);
  const photos = images.keys().map((key: any) => images(key));
  this.photos = photos;
},

  methods: {
    changePhoto(index: number) {
      this.currentPhoto = index;
    },
  },
};
</script>
