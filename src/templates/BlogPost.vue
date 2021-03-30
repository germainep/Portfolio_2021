<template>
  <Layout>
    <main class='BlogPost container mx-auto prose'>
      <h1>{{ $page.post.title }}</h1>
      <VueRemarkContent/>

    </main>
  </Layout>
</template>

<page-query>
query($id: ID!) {
post: blogPost(id: $id) {
  path
  title
  }
}
</page-query>

<script>
export default {
  name: 'BlogPost',
}
</script>
