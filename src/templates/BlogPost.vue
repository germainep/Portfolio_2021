<template>
  <div class='BlogPost'>

  </div>
</template>

<page-query>
query($id: ID!) {
blogPost(id: $id) {
path
}
}
</page-query>

<script>
export default {
  name: 'BlogPost',
}
</script>
