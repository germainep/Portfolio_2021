<template>
  <a :href='href' :type='type'
          class=' inline-block relative rounded-2xl bg-primary-100 m-4 h-10 p-2 grid grid-cols-2 text-right w-28'>
    <i class='h-10 w-10 flex absolute items-center justify-center rounded-full bg-accent-700 -left-1.5'>
      <font-awesome v-if='type === "github"' :icon="['fab', 'github']" class='fill-accent' color='white'
                    size='2x'/>
      <font-awesome v-else-if='type === "live"' :icon="['fas', 'globe-americas']" class='fill-accent' color='white'
                    size='2x'/>
    </i>
    <span class='col-span-2'>
      <slot/>
    </span>
  </a>
</template>

<script>
    export default {
        name: 'Iconbutton',
      props: {
        href: '',
        type: ''
      }
    };

</script>
