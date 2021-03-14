<template>
  <div class='Project'>

  </div>
</template>
<page-query>
query ($id: ID!) {
project(id: $id) {
path
title
short_desc
}
}
</page-query>

<script>
export default {
  name: 'Project.vue',
  metaInfo() {
    return {
      title: this.$page.project.title,
    }
  },
}
</script>
