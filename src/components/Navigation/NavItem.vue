<template>
  <li class='nav-item'>
    <g-link v-if='to === "/"'  :to='to'
            class='px-3 py-2 flex text-sm uppercase font-bold leading-snug' exact>
      <slot/>
    </g-link>
    <g-link v-else  :to='to'
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

<style>
.active {
  @apply text-white;
  font-weight: 700;
}
</style>
