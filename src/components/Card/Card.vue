<template>
  <div class='Card grid grid-rows-2 rounded-lg max-w-2xl'>
    <div>
      <g-image></g-image>
      <h1>{{ title }}</h1>
    </div>

    <div class='rounded-lg bg-primary-800'>
      <p class='text-accent-100'>{{ description }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: {
    title: '',
    image: '',
    description: '',
    tags: []
  }
}
</script>
