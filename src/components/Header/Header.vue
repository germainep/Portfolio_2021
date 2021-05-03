<template>
  <header
      class='bg-primary-500 relative grid grid-cols-2 items-center justify-between px-2 py-3 navbar-expand-lg sticky top-0 z-50'>
    <div class='logo'>
      <Logo/>
    </div>
    <Navigation/>
  </header>
</template>

<script>
import Logo from '~/components/Logo/Logo'
import Navigation from '~/components/Navigation/Navigation'

export default {
  name: 'Header',
  components: {Navigation, Logo},
}
</script>
