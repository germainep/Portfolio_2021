<template>
  <div class='Card flex flex-col rounded-lg shadow-sm shadow-2xl max-w-min max-h- bg-accent-900 mx-auto'>
    <g-link :to='path'>
        <div  class='relative h-64 flex-shrink'>
          <g-image v-if='image !== null' :src='image.image' :alt='image.id'
                   class='w-full h-full object-cover object-top absolute mx-auto flex-shrink'></g-image>
          <h1 class='text-2xl p-3 absolute top-0 text-accent-900 bg-white bg-opacity-70 w-full'>{{ title }}</h1>
        </div>
    </g-link>

    <div class=' flex-shrink rounded-b-lg bg-primary-800 items-center py-5 px-8'>
      <p class='text-accent-100 w-full h-12'>{{ description }}</p>
      <div v-show='github || live' class='flex flex-row content-evenly justify-evenly '>
        <IconButton type="github" :href="github">Github</IconButton>
        <IconButton type="live" :href="live">Live Site</IconButton>
      </div>
    </div>
  </div>
</template>


<script>
import IconButton from '~/components/Button/IconButton'

export default {
  name: 'Card',
  props: {
    title: String,
    path: String,
    image: {},
    description: String,
    tags: Array,
    github: String,
    live: String,
  },
  components: {IconButton}
}
</script>
