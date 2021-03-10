<template>
    <header class="bg-primary relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div class="logo">
      </div>
      <Navigation/>
    </header>
</template>

<script>
    import Navigation from '~/components/Navigation/Navigation'
    export default {
        name: 'Header',
      components: {Navigation}
    };
</script>
