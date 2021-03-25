<template>
  <li class='nav-item'>
    <g-link :to='to'
            class='px-3 py-2 flex text-sm uppercase font-bold leading-snug'>
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
