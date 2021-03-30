<template>
  <div class='Card flex flex-col rounded-lg shadow-sm shadow-2xl mx-auto gap-0'>
    <g-link :to='path'>
        <div class='relative pt-10'>
          <g-image :src='image.src':alt='image.id'  class='mx-auto flex-shrink'></g-image>
          <h1 class='text-2xl p-3 absolute top-0 text-accent-700'>{{ title }}</h1>
        </div>
    </g-link>

    <div class='rounded-b-lg bg-primary-800 object-bottom items-center'>
      <p class='text-accent-100 p-4 line-clamp-2 mx-auto'>{{ description }}</p>
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
