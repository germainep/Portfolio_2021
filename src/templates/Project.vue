<template>
  <Layout>
    <main class='Project grid grid-cols-2 md:container mx-auto prose'>
      <h1 class='col-span-2'>{{ $page.project.title }}</h1>
      <VueRemarkContent class='col-span-2 grid grid-cols-2 justify-between'>
        <template v-slot:tech>
          <TechUsed>
            <Tag v-for='tag in $page.project.tags' :key='tag.id'>{{tag.id}}</Tag>
          </TechUsed>
        </template>

      </VueRemarkContent>
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
    tags {
      id
    }
  }
}
</page-query>

<script>
import Tag from '~/components/Tag/Tag'
import TechUsed from '~/components/TechUsed/TechUsed'

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
  components : {TechUsed, Tag}
}
</script>

<style>
#project-brief > p {
  border : 1px solid red;
}
</style>
