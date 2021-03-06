<template>
  <div class="layout">
   <Header>

   </Header>
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
import Header from '~/components/Header/Header'
export default {
  components: {Header}
}
</script>
