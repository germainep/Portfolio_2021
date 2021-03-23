<template>
  <li class='nav-item'>
    <g-link :to='to'
            class='px-3 py-2 flex text-sm uppercase font-bold leading-snug hover:text-red-700 active:text-red-500'>
      <slot/>
    </g-link>
  </li>

</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: String,
      default: null,
    },
  },
}
</script>
