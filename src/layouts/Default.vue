<template>
  <div class="layout">
   <Header/>
    <slot></slot>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

</style>
<script>
import Footer from '~/components/Footer/Footer'
import Header from '~/components/Header/Header'

export default {
  components: {Footer, Header}
}
</script>
