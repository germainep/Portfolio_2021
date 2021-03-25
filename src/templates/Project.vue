<template>
  <Layout>
    <main class='Project grid grid-cols-2 md:container mx-auto prose'>
      <h1 class='col-span-2'>{{ $page.project.title }}</h1>
      <VueRemarkContent class='col-span-2 grid grid-cols-2 justify-between'/>
      <section>
        <h1>More Projects</h1>
      </section>
    </main>

  </Layout>
</template>
<page-query>
query ($id: ID!) {
project(id: $id) {
path
title
short: short_desc
}
}
</page-query>

<script>
export default {
  name: 'Project.vue',
  metaInfo() {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: "description",
          content: this.$page.project.short
        },
        {
          rel: 'conical'
        }
      ]
    }
  },
}
</script>

<style>
#project-brief > p {
  border : 1px solid red;
}
</style>
