<template>
  <div class='Card grid grid-rows-2 rounded-lg max-w-lg shadow-sm shadow-2xl mx-auto'>
    <g-link :to='path'>
        <div class='relative'>
          <g-image src='/'></g-image>
          <h1 class='text-2xl p-4 absolute top-1'>{{ title }}</h1>
        </div>
    </g-link>

    <div class='rounded-b-lg bg-primary-800'>
      <p class='text-accent-100 p-4 line-clamp-1 mx-auto'>{{ description }}</p>
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
    image: String,
    description: String,
    tags: Array,
    github: String,
    live: String
  },
  components: {IconButton}
}
</script>
