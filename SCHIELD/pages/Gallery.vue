<template>
  <section id="gallery" class="container border-t border-secondary  md:py-12 bg-green-500">
    <h2 class="text-3xl text-center font-semibold">PHOTO GALLERY</h2>
    <nav class="py-4">
      <div>
        <img :src="photos[currentPhoto]" class="rounded shadow mx-auto border-2 border-red-500" style="max-height: 420px"/>
      </div>
      <div class="flex flex-wrap justify-center p-2">
        <img v-for="(photo, i) in photos" :key="photo" :src="photo" class="rounded-full hover:shadow-md cursor-pointer m-1 border-2 border-red-500" style="max-width: 64px" @click="changePhoto(i)"/>
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
    }
  },
  created() {
    this.loadImages()
  },
  methods: {
    importAll(r) {
      return r.keys().map(r)
    },
    async loadImages() {
      const images = await this.importAll(require.context('/static/images/gallery', false, /\.(png|jpe?g|svg)$/))
      this.photos = images
    },
    changePhoto(index) {
      this.currentPhoto = index
    },
  },
}
</script>
