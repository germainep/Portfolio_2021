<template>
  <Layout>
    <main class='Project container mx-auto'>
      <h1>{{ $page.project.title }}</h1>
      <VueRemarkContent/>
    </main>
    <section>
      <h1>More Projects</h1>
    </section>
  </Layout>
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
