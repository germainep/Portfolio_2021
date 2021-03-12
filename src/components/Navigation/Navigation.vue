<template>
    <nav class="Navigation lg:flex flex-grow items-center">
      <ul class='flex flex-col lg:flex-row list-none ml-auto'>
        <NavItem to='/'>Home</NavItem>
        <NavItem to='/projects'>Work</NavItem>
        <NavItem to='/blog'>Blog</NavItem>
      </ul>
    </nav>
</template>

<script>
import NavItem from '~/components/Navigation/NavItem'

export default {
  name: 'Navigation',
  components: {NavItem},

}
</script>
