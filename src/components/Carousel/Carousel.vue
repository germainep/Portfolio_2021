<template>
    <div class="Carousel w-5/6">
        <div  v-show='imagesCopy.length >= 1'
             class='grid grid-cols-4 grid-flow-row-dense grid-row-2 items-center'>
          <div class='first:col-span-4 first:w-1/2 mx-auto object-cover overflow-hidden' v-for='(image,
          index) in
          imagesCopy'>
          <g-image
                   :key='index'
                   :src='image.image.src'
                   :alt='image.id'
                   class='thumbnail-image object-cover w-full mx-auto self-center'
                   v-on:click='changeImage(index, $event)'/>
        </div>
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
