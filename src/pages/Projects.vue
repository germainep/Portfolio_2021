<template>
  <Layout>
    <main class='container mx-auto'>
      <h1 class='mb-8'>Recent Work</h1>
      <section v-if='$page.projects.edges' class='grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
        <Card v-for='edge in $page.projects.edges' :key='edge.node.id' :title='edge.node.title'
              :description='edge.node.short' :path='edge.node.path' :github='edge.node.github'
              :live='edge.node.url' :image='edge.node.pictures[0]'>

        </Card>

      </section>
    </main>

  </Layout>
</template>
<page-query>
  query ($page: Int) {
    projects: allProject(perPage: 10, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          title
          path
          url
          github
          id
          short: short_desc
          pictures {
            id
            image
          }
        }
      }
    }
  }

</page-query>
<script>
import Card from '~/components/Card/Card'

export default {
  name: 'Projects',
  metaInfo: {
    name: 'Recent Work',
  },
  components: {Card}
}

</script>
