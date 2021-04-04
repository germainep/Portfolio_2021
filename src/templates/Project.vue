<template>
  <Layout>
    <main class='Project grid grid-cols-2 grid-flow-row sm:container mx-auto prose-lg mt-5'>
      <h1 class='col-span-2 my-5'>{{ $page.project.title }}</h1>

      <Carousel :images='$page.project.pictures' class='col-span-2 mx-auto'/>

      <VueRemarkContent class='col-span-2 grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between mt-5'>

        <template v-slot:tech>
          <TechUsed>
            <Tag v-for='tag in $page.project.tags' :key='tag.id'>{{tag.id}}</Tag>
          </TechUsed>
        </template>

      </VueRemarkContent>
      <section class='mt-5'>
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
    pictures {
      image(width:800)
      id
    }
  }
}
</page-query>

<script>
import Carousel from '~/components/Carousel/Carousel'
import ProjectBrief from '~/components/ProjectBrief/ProjectBrief'
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
  components : {TechUsed, Tag, Carousel, ProjectBrief}
}
</script>

<style>
#project-brief > p {
  border : 1px solid red;
}
</style>
