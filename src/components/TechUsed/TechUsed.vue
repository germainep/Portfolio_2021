<template>
   <div class='relative w-full m-5 p-0'>
     <h2>Tech Used</h2>
    <div
        class="tech-used grid grid-cols-4 grid-rows-auto auto-cols-min rounded-lg w-full relative z-30 bg-primary-400 p-5 shadow-sm shadow-lg shadow-2xl">
      <slot/>
    </div>
   </div>
</template>

<script>


export default {
        name: 'TechUsed',
      props: {
          tags: {}
      },
    };
</script>
