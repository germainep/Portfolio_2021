<template>
  <Layout>
    <main>
      <template v-if='($page.posts.edges)'>
        <h1 class='mb-8'>Articles</h1>
        <section class='grid grid-col-1 md:grid-col-2 2xl:grid-col-3 md:gap-5' >
          <Card v-for='edge in $page.posts.edges' :key='edge.node.id' :title='edge.node.title'
                :description='edge.node.excerpt' :path='edge.node.path' :image='edge.node.pictures || null'>

          </Card>

        </section>
      </template>
      <h1 v-else>No articles are ready to be displayed</h1>
    </main>

  </Layout>
</template>
<page-query>
query ($page: Int) {
  posts: allBlogPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
        pictures {
          image
          id
        }
      }
    }
  }
}
</page-query>
<script>
import Card from '~/components/Card/Card'

export default {
  name: 'BlogPosts',
  metaInfo: {
    name: 'Blog',
  },
  components: {Card}
}

</script>
