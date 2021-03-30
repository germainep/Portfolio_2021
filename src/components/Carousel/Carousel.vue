<template>
    <div class="Carousel col-span-2 place-self-center">
        <div  v-show='imagesCopy.length > 1'
             class='grid grid-flow-col-dense grid-cols-5 grid-rows-2 items-center'>
          <g-image v-for='(image, index) in imagesCopy'  :key='index' :src='image.src' :alt='image.alt'  width='25'
                   class='thumbnail-image first:col-span-5 first:w-full'
                   v-on:click='changeImage(index, $event)'></g-image>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'Carousel',
      props:{
          images: {}
      },
      data() {
          return {
            mainImage: '',
            imagesCopy: this.images
          }
      },
      methods:{
          changeImage: function(index, el) {
            const target = {src: el.target.src, alt: el.target.alt}
            this.imagesCopy.splice(index, 1)
            this.imagesCopy.unshift(target)
          }

      }
    };
</script>
